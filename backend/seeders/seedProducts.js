const fs = require("fs");
const path = require("path");
const { bucket } = require("../utils/firebaseConfig");
const Product = require("../models/product"); // Import the Product model
const productsData = require("../db.json"); // Path to the JSON file

// Function to check if a file or folder exists in Firebase Storage
const doesFileExistInFirebase = async (filePath) => {
  try {
    const file = bucket.file(filePath); // Ensure bucket is correctly initialized
    const [exists] = await file.exists(); // This checks if the file exists
    return exists;
  } catch (error) {
    console.error(`Error checking file ${filePath} in Firebase:`, error);
    return false;
  }
};

// Function to get all image URLs from Firebase Storage folder
const getFirebaseImageUrls = async (folderPath) => {
  try {
    const [files] = await bucket.getFiles({ prefix: folderPath });
    return files.map(
      (file) =>
        `https://firebasestorage.googleapis.com/v0/b/${
          bucket.name
        }/o/${encodeURIComponent(file.name)}?alt=media`
    );
  } catch (error) {
    console.error(`Error fetching images from ${folderPath}:`, error);
    return [];
  }
};

// Flatten the nested categories/subcategories to get only products
const getFlattenedProducts = () => {
  let products = [];
  productsData.categories.forEach((category) => {
    category.subcategories.forEach((subcategory) => {
      products = products.concat(subcategory.products); // Flatten products
    });
  });
  return products;
};

(async () => {
  try {
    const products = getFlattenedProducts(); // Get flattened product data

    // Prepare products data to match your updated model
    const formattedProducts = [];

    for (const product of products) {
      const productName = product.name.trim();
      const productId = product.sku || product.id; // Use SKU or product ID for folder
      const folderPath = `${productId} ${productName}`; // Format folder path as "{id} {name}"

      // Check if the folder exists in Firebase
      const folderExists = await doesFileExistInFirebase(folderPath);

      let imageUrls = [];
      if (folderExists) {
        // Fetch image URLs if folder exists in Firebase
        imageUrls = await getFirebaseImageUrls(folderPath);
      } else {
        console.log(
          `Folder for product "${productName}" not found in Firebase. Skipping images.`
        );
      }

      // Prepare the product data for seeding
      formattedProducts.push({
        sku: product.sku || null,
        name: product.name.trim(),
        slug: product.slug,
        images: JSON.stringify(imageUrls), // Store image URLs in JSON format
        description: product.description ? product.description.trim() : null,
        quantity: product.quantity || 0,
        price: parseFloat(product.price.replace(/,/g, ".")) || 0.0, // Convert price to float
        taxable: product.taxable || false,
        isActive: product.isActive || true,
        brand: product.brand || null,
        updated: new Date(), // Set the current date for `updated` field
      });
    }

    // Insert products into the database with images from Firebase
    await Product.bulkCreate(formattedProducts, {
      updateOnDuplicate: [
        "sku",
        "name",
        "slug",
        "images",
        "description",
        "quantity",
        "price",
        "taxable",
        "isActive",
        "brand",
        "updated",
      ],
    });
    console.log("Products have been seeded successfully.");
  } catch (error) {
    console.error("Error seeding products:", error);
  }
})();
