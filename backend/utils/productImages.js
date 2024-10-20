const fs = require("fs");
const path = require("path");
const { bucket } = require("./firebaseConfig");
const Product = require("../models/product"); // Import the Product model

// Convert a string to a slug (lowercase and hyphen-separated)
const toSlug = (str) => {
  return str
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/[^\w\-]+/g, ""); // Remove all non-word characters
};

// Check if a file exists in Firebase Storage
const doesFileExistInFirebase = async (filePath) => {
  try {
    const file = bucket.file(filePath);
    const [exists] = await file.exists();
    return exists;
  } catch (error) {
    console.error(`Error checking file ${filePath} in Firebase:`, error);
    return false;
  }
};

// Create a folder in Firebase by uploading a placeholder file if it doesn't exist
const createFolderInFirebase = async (folderPath) => {
  const placeholderFilePath = `${folderPath}/.keep`;
  const fileExists = await doesFileExistInFirebase(placeholderFilePath);

  if (!fileExists) {
    try {
      const emptyBuffer = Buffer.from("");
      await bucket.file(placeholderFilePath).save(emptyBuffer);
      console.log(`Folder '${folderPath}' created with a placeholder file.`);
    } catch (error) {
      console.error(`Error creating folder ${folderPath} in Firebase:`, error);
    }
  }
};

// Upload Product Images to Firebase and save URLs to MySQL via Sequelize
const uploadProductImages = async (productFolderPath) => {
  const directories = fs.readdirSync(productFolderPath);

  for (const dir of directories) {
    const dirPath = path.join(productFolderPath, dir);

    if (fs.statSync(dirPath).isDirectory()) {
      // Assuming the folder name is the SKU
      const sku = toSlug(path.basename(dirPath));
      const firebaseFolderPath = `product_images/${sku}`;

      // Ensure the folder exists in Firebase
      await createFolderInFirebase(firebaseFolderPath);

      console.log(`Processing folder: ${sku}`);

      const images = fs.readdirSync(dirPath);
      const imageUrls = [];

      for (const image of images) {
        const fileUploadPath = `${firebaseFolderPath}/${image}`;

        // Check if the image already exists in Firebase
        const fileExists = await doesFileExistInFirebase(fileUploadPath);

        if (fileExists) {
          console.log(
            `File ${fileUploadPath} already exists. Skipping upload.`
          );
        } else {
          const fileStream = fs.createReadStream(path.join(dirPath, image));
          await new Promise((resolve, reject) => {
            fileStream
              .pipe(
                bucket.file(fileUploadPath).createWriteStream({
                  metadata: { contentType: "image/jpeg" },
                })
              )
              .on("finish", resolve)
              .on("error", reject);
          });
          console.log(`File ${fileUploadPath} uploaded successfully.`);
        }

        const downloadUrl = `https://firebasestorage.googleapis.com/v0/b/${
          bucket.name
        }/o/${encodeURIComponent(fileUploadPath)}?alt=media`;
        imageUrls.push(downloadUrl);
      }

      // Save or update the product in MySQL
      await saveToMySQL(sku, imageUrls);
    }
  }
  console.log("All product folders processed.");
};

// Save product and image URLs to MySQL
const saveToMySQL = async (sku, imageUrls) => {
  try {
    const product = await Product.findOne({ where: { sku: sku } });

    if (product) {
      product.images = imageUrls;
      await product.save();
      console.log(`Product ${sku} updated successfully.`);
    } else {
      await Product.create({ sku: sku, images: imageUrls });
      console.log(`Product ${sku} saved successfully.`);
    }
  } catch (error) {
    console.error(`Error saving product ${sku} to MySQL:`, error);
  }
};

// Path to product images folder
const productFolderPath = path.resolve(__dirname, "../images");

// Process product images on startup
const processImagesOnProducts = async () => {
  try {
    await uploadProductImages(productFolderPath);
  } catch (error) {
    console.error("Error during product image upload process:", error);
  }
};

// Ensure the product images directory exists and start processing
if (fs.existsSync(productFolderPath)) {
  console.log(`Directory ${productFolderPath} exists. Proceeding with upload.`);
  processImagesOnProducts();
} else {
  console.error(`Directory ${productFolderPath} does not exist.`);
}

module.exports = { processImagesOnProducts };
