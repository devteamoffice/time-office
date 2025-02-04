const { bucket } = require("./firebaseConfig"); // Firebase bucket configuration

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

  // Create the folder if it doesn't exist
  await createFolderInFirebase(firebaseFolderPath);

  // Upload files to Firebase and get URLs
  for (const file of files) {
    if (file.originalname.toLowerCase() === "thumbs.db") {
      console.log("Skipping Thumbs.db file.");
      continue; // Skip thumbs.db
    }

    const fileUploadPath = `${firebaseFolderPath}/${Date.now()}_${
      file.originalname
    }`;
    const firebaseFile = bucket.file(fileUploadPath);

    try {
      await firebaseFile.save(file.buffer, {
        metadata: { contentType: file.mimetype },
        predefinedAcl: "publicRead", // Make the file publicly accessible
      });

      const downloadUrl = `https://firebasestorage.googleapis.com/v0/b/${
        bucket.name
      }/o/${encodeURIComponent(fileUploadPath)}?alt=media`;
      imageUrls.push(downloadUrl);
    } catch (error) {
      console.error(`Error uploading file ${file.originalname}:`, error);
    }
  }

  return imageUrls;
};

module.exports = { uploadImagesToFirebase };
