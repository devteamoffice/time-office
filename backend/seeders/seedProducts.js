const Product = require("../models/product");
const productsJson = require("../db.json");
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
    if (imageUrls.length >= maxImages) break;
  }
  return imageUrls;
};

const saveToMySQL = async (sku, imageUrls, subcategoryId, productData) => {
  try {
    const {
      id,
      name,
      price = 0,
      description = null,
      isActive = true,
      categoryId = null,
      brand = null,
    } = productData;

    // Ensure that price is a valid number
    const parsedPrice = isNaN(price)
      ? 0
      : parseFloat(price.toString().replace(/,/g, ""));

    // Set isActive to 1 for true or 0 for false
    const isActiveValue = isActive ? 1 : 0;

    // Prepare the data object
    const product = {
      sku,
      name,
      price: parsedPrice,
      description,
      isActive: isActiveValue, // Store as 1 or 0
      subcategoryId,
      categoryId,
      brand,
      images: imageUrls,
    };

    let existingProduct = null;

    if (id) {
      // Update existing product if it has an ID
      existingProduct = await Product.findOne({
        where: { id },
      });
      if (existingProduct) {
        // Update fields that are provided
        existingProduct.name = name || existingProduct.name;
        existingProduct.price = parsedPrice || existingProduct.price;
        existingProduct.description =
          description || existingProduct.description;
        existingProduct.images = imageUrls.length
          ? imageUrls
          : existingProduct.images;
        existingProduct.isActive = isActiveValue; // Update isActive as 1 or 0
        existingProduct.subcategoryId =
          subcategoryId || existingProduct.subcategoryId;
        existingProduct.categoryId = categoryId || existingProduct.categoryId;
        existingProduct.brand = brand || existingProduct.brand;

        await existingProduct.save();
        console.log(`Product with ID "${id}" updated.`);
      } else {
        console.warn(`Product with ID "${id}" not found.`);
      }
    } else {
      // Create a new product if no ID exists
      await Product.create(product);
      console.log(`Product with SKU "${sku}" created.`);
    }
  } catch (error) {
    console.error(`Error saving product "${sku}":`, error);
  }
};

const seedProducts = async () => {
  try {
    for (const productData of productsJson.products) {
      const { sku, subcategoryId } = productData;

      // If SKU or subcategoryId is missing, log it and still try to insert the product
      if (!sku) {
        console.warn(`Product with missing SKU found.`);
      }
      if (!subcategoryId) {
        console.warn(`Product with missing subcategoryId found.`);
      }

      // Fetch images from Firebase storage if not provided
      const imageUrls = productData.images
        ? JSON.parse(productData.images)
        : [];
      if (imageUrls.length === 0) {
        const fetchedImageUrls = await fetchImageUrls(sku || "default"); // Default to "default" for missing SKU
        if (fetchedImageUrls.length === 0) {
          console.warn(`No images found for product "${sku || "default"}".`);
        } else {
          imageUrls.push(...fetchedImageUrls);
        }
      }

      // Call saveToMySQL for each product
      await saveToMySQL(sku, imageUrls, subcategoryId, productData);
    }
    console.log("Product seeding completed.");
  } catch (error) {
    console.error("Error in product seeding:", error);
  }
};

seedProducts();
