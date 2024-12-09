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

const handleMissingFields = (productData) => {
  const {
    sku,
    name,
    price = 0,
    description = null,
    isActive = true,
    subcategoryId = null,
    categoryId = null,
    brand = null,
    images = null,
  } = productData;

  // Dynamically add default values for missing fields
  const product = {
    sku,
    name,
    price: parseFloat(price.toString().replace(/,/g, "")),
    description: description || null,
    isActive: isActive ? 1 : 0, // Ensure active is a valid boolean (1 or 0)
    subcategoryId: subcategoryId || null,
    categoryId: categoryId || null,
    brand: brand || null,
    images: images || null,
  };

  return product;
};

const saveToMySQL = async (sku, imageUrls, subcategoryId, productData) => {
  try {
    // Handle missing fields dynamically
    const product = handleMissingFields(productData);

    let existingProduct = null;

    if (productData.id) {
      // Update existing product if it has an ID
      existingProduct = await Product.findOne({
        where: { id: productData.id },
      });
      if (existingProduct) {
        existingProduct.name = product.name || existingProduct.name;
        existingProduct.price = product.price || existingProduct.price;
        existingProduct.description =
          product.description || existingProduct.description;
        existingProduct.images = imageUrls.length
          ? imageUrls
          : existingProduct.images;
        existingProduct.isActive = product.isActive;
        existingProduct.subcategoryId =
          product.subcategoryId || existingProduct.subcategoryId;
        existingProduct.categoryId =
          product.categoryId || existingProduct.categoryId;
        existingProduct.brand = product.brand || existingProduct.brand;
        await existingProduct.save();
        console.log(`Product with ID "${productData.id}" updated.`);
      } else {
        console.warn(`Product with ID "${productData.id}" not found.`);
      }
    } else {
      // Create a new product if no ID exists
      await Product.create({
        ...product,
        images: imageUrls,
      });
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

      if (!sku || !subcategoryId) {
        console.warn(`Skipping product with missing SKU or subcategoryId.`);
        continue;
      }

      // Fetch images from Firebase storage
      const imageUrls = productData.images
        ? JSON.parse(productData.images)
        : [];
      if (imageUrls.length === 0) {
        // Fetch images if they aren't provided
        const fetchedImageUrls = await fetchImageUrls(sku);
        if (fetchedImageUrls.length === 0) {
          console.warn(`No images found for product "${sku}".`);
        } else {
          imageUrls.push(...fetchedImageUrls);
        }
      }

      await saveToMySQL(sku, imageUrls, subcategoryId, productData);
    }
    console.log("Product seeding completed.");
  } catch (error) {
    console.error("Error in product seeding:", error);
  }
};

seedProducts();
