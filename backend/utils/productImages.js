const fs = require("fs");
const path = require("path");
const { bucket } = require("./firebaseConfig");
const Product = require("../models/product"); // Import the Product model
const sequelize = require("../config/database"); // Sequelize instance for syncing

// Function to check if a file exists in Firebase Storage
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

// Upload Product Images to Firebase and save to MySQL via Sequelize
const uploadProductImages = async (productFolderPath) => {
  const files = fs.readdirSync(productFolderPath); // Get all folders/files in the directory

  for (const file of files) {
    const filePath = path.join(productFolderPath, file);

    if (fs.statSync(filePath).isDirectory()) {
      const productName = path.basename(filePath); // Extract product name from folder name
      console.log(`Processing folder: ${productName}`);

      const images = fs.readdirSync(filePath);
      const imageUrls = [];

      for (const image of images) {
        const fileName = path.basename(image);
        const fileUploadPath = `${productName}/${fileName}`;

        // Check if the file already exists in Firebase Storage
        const fileExists = await doesFileExistInFirebase(fileUploadPath);

        if (fileExists) {
          console.log(
            `File ${fileUploadPath} already exists. Skipping upload.`
          );
          const downloadUrl = `https://firebasestorage.googleapis.com/v0/b/${
            bucket.name
          }/o/${encodeURIComponent(fileUploadPath)}?alt=media`;
          imageUrls.push(downloadUrl); // Use existing URL if already uploaded
        } else {
          const fileStream = fs.createReadStream(path.join(filePath, image));
          await fileStream
            .pipe(
              bucket.file(fileUploadPath).createWriteStream({
                metadata: {
                  contentType: "image/jpeg", // Adjust content type if necessary
                },
              })
            )
            .on("finish", () => {
              console.log(`File ${fileUploadPath} uploaded successfully.`);
              imageUrls.push(downloadUrl);
            });

          const downloadUrl = `https://firebasestorage.googleapis.com/v0/b/${
            bucket.name
          }/o/${encodeURIComponent(fileUploadPath)}?alt=media`;
          imageUrls.push(downloadUrl);
          console.log(`File ${fileUploadPath} uploaded successfully.`);
        }
      }

      // Save the image URLs to MySQL and associate them with a product
      await saveToMySQL(productName, imageUrls);
    }
  }
  console.log("All folders processed.");
};

// Save product and image URLs to MySQL using Sequelize
const saveToMySQL = async (productName, imageUrls) => {
  try {
    const [product, created] = await Product.upsert({
      name: productName,
      images: imageUrls,
    });
    if (created) {
      console.log(`Product ${productName} saved successfully.`);
    } else {
      console.log(`Product ${productName} updated successfully.`);
    }
  } catch (error) {
    console.error(`Error saving product ${productName} to MySQL:`, error);
  }
};

// Path to your product folders (each folder contains images)
const productFolderPath = path.resolve(__dirname, "../images");

// Check if the folder exists, if not, handle the error or create it
if (!fs.existsSync(productFolderPath)) {
  console.error(`Directory ${productFolderPath} does not exist.`);
  // Optionally, you can create the directory if needed:
  // fs.mkdirSync(productFolderPath, { recursive: true });
} else {
  // Continue with the image processing logic
  console.log(`Directory ${productFolderPath} exists. Proceeding with upload.`);
  // Your existing logic to process images goes here
}
// Export the function for server start
const processImagesOnStartup = async () => {
  try {
    await uploadProductImages(productFolderPath);
  } catch (error) {
    console.error("Error during image upload process:", error);
  }
};

module.exports = {
  processImagesOnStartup,
};
