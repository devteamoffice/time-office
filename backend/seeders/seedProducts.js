const { Category } = require("../models/category");
const { Subcategory } = require("../models/subCategory");
const Product = require("../models/product");
const productsJson = require("../db.json");
const fs = require("fs");
const path = require("path");
const { bucket } = require("../utils/firebaseConfig");

const doesFileExistInFirebase = async (filePath) => {
  try {
    const file = bucket.file(filePath);
    const [exists] = await file.exists();
    return exists;
  } catch (error) {
    console.error(`Error checking if file exists at ${filePath}:`, error);
    return false;
  }
};

const fetchImageUrls = async (sku, maxImages = 4) => {
  const imageUrls = [];

  for (let i = 1; i <= maxImages; i++) {
    const imagePath = `product_images/${sku}/${i}.jpg`;
    const downloadUrl = `https://firebasestorage.googleapis.com/v0/b/${
      bucket.name
    }/o/${encodeURIComponent(imagePath)}?alt=media`;

    if (await doesFileExistInFirebase(imagePath)) {
      imageUrls.push(downloadUrl);
    }

    if (imageUrls.length >= maxImages) {
      break;
    }
  }

  return imageUrls;
};

const addOrUpdateCategory = async (categoryName) => {
  let category = await Category.findOne({
    where: { name: categoryName },
    attributes: ["id", "name", "isActive", "updated", "created"],
  });

  if (!category) {
    category = await Category.create({ name: categoryName });
    console.log(`Category "${categoryName}" created successfully.`);
  }
  return category;
};

const addOrUpdateSubcategory = async (subcategoryName, categoryId) => {
  let subcategory = await Subcategory.findOne({
    where: { name: subcategoryName, categoryId },
  });
  if (!subcategory) {
    subcategory = await Subcategory.create({
      name: subcategoryName,
      categoryId,
    });
    console.log(`Subcategory "${subcategoryName}" created successfully.`);
  }
  return subcategory;
};

const uploadProductImages = async () => {
  const { categories } = productsJson;

  for (const categoryData of categories) {
    const category = await addOrUpdateCategory(categoryData.name);

    for (const subcategoryData of categoryData.subcategories) {
      const subcategory = await addOrUpdateSubcategory(
        subcategoryData.name,
        category.id
      );

      for (const productData of subcategoryData.products) {
        const sku = productData.sku;

        if (!sku) {
          console.warn(`Skipping product with missing SKU.`);
          continue;
        }

        const imageUrls = await fetchImageUrls(sku);
        await saveToMySQL(sku, imageUrls, subcategory.id, productData);
      }
    }
  }
  console.log("All product images and data processed.");
};

const saveToMySQL = async (sku, imageUrls, subcategoryId, productData) => {
  try {
    const { name, price, description } = productData; // Extract fields from productData
    let product = await Product.findOne({ where: { sku } });

    if (product) {
      // Update existing product
      product.name = name;
      product.price = parseFloat(price.replace(/,/g, "")); // Parse price to float
      product.description = description;
      product.images = imageUrls;
      product.subcategoryId = subcategoryId;
      await product.save();
      console.log(`Product ${sku} updated successfully.`);
    } else {
      // Create a new product
      await Product.create({
        sku,
        name,
        price: parseFloat(price.replace(/,/g, "")), // Parse price to float
        description,
        images: imageUrls,
        subcategoryId,
      });
      console.log(`Product ${sku} created successfully.`);
    }
  } catch (error) {
    console.error(`Error saving product ${sku} to MySQL:`, error);
  }
};

uploadProductImages().catch(console.error);
