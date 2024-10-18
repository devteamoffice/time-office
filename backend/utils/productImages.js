const fs = require("fs");
const path = require("path");
const { bucket } = require("./firebaseConfig");
const Product = require("../models/product"); // Import the Product model

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

// Upload Product Images to Firebase and save URLs to MySQL via Sequelize
const uploadProductImages = async (productFolderPath) => {
  const directories = fs.readdirSync(productFolderPath);

  for (const dir of directories) {
    const dirPath = path.join(productFolderPath, dir);

    if (fs.statSync(dirPath).isDirectory()) {
      const productName = path.basename(dirPath).trim().toLowerCase();
      console.log(`Processing folder: ${productName}`);

      const images = fs.readdirSync(dirPath);
      const imageUrls = [];

      for (const image of images) {
        const fileUploadPath = `${productName}/${image}`;

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
      await saveToMySQL(productName, imageUrls);
    }
  }
  console.log("All folders processed.");
};

// Save product and image URLs to MySQL
const saveToMySQL = async (productName, imageUrls) => {
  try {
    const product = await Product.findOne({ where: { name: productName } });

    if (product) {
      product.images = imageUrls;
      await product.save();
      console.log(`Product ${productName} updated successfully.`);
    } else {
      await Product.create({ name: productName, images: imageUrls });
      console.log(`Product ${productName} saved successfully.`);
    }
  } catch (error) {
    console.error(`Error saving product ${productName} to MySQL:`, error);
  }
};

// Path to product folders (each folder contains images)
const productFolderPath = path.resolve(__dirname, "../images");

// Ensure the directory exists and start processing images
if (fs.existsSync(productFolderPath)) {
  console.log(`Directory ${productFolderPath} exists. Proceeding with upload.`);
  processImagesOnStartup();
} else {
  console.error(`Directory ${productFolderPath} does not exist.`);
}

// Start the image upload process
const processImagesOnStartup = async () => {
  try {
    await uploadProductImages(productFolderPath);
  } catch (error) {
    console.error("Error during image upload process:", error);
  }
};

module.exports = { processImagesOnStartup };
