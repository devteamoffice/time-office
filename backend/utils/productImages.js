const fs = require("fs");
const path = require("path");
const { bucket } = require("./firebaseConfig");
const Product = require("../models/product"); // Import the Product model

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

// Upload images to Firebase and return their URLs
const uploadImagesToFirebase = async (sku, files) => {
  const imageUrls = [];
  const firebaseFolderPath = `product_images/${toSlug(sku)}`;

  // Ensure the folder exists in Firebase
  await createFolderInFirebase(firebaseFolderPath);

  for (const file of files) {
    const fileUploadPath = `${firebaseFolderPath}/${file.originalname}`;

    // Check if the image already exists in Firebase
    const fileExists = await doesFileExistInFirebase(fileUploadPath);

    if (!fileExists) {
      await new Promise((resolve, reject) => {
        file.buffer
          .pipe(
            bucket.file(fileUploadPath).createWriteStream({
              metadata: { contentType: file.mimetype },
            })
          )
          .on("finish", resolve)
          .on("error", reject);
      });
      console.log(`File ${fileUploadPath} uploaded successfully.`);
    } else {
      console.log(`File ${fileUploadPath} already exists. Skipping upload.`);
    }

    const downloadUrl = `https://firebasestorage.googleapis.com/v0/b/${
      bucket.name
    }/o/${encodeURIComponent(fileUploadPath)}?alt=media`;
    imageUrls.push(downloadUrl);
  }

  return imageUrls;
};

module.exports = { uploadImagesToFirebase };
