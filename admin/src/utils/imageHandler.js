const fs = require("fs");
const path = require("path");

// Base directory where images are stored
const baseDir = path.join(__dirname, "public", "catalogue");

// Function to get images for a specific product
const getImagesForProduct = (categoryName, productName) => {
  const productDir = path.join(baseDir, categoryName, productName);

  try {
    // Read all files from the product folder
    const files = fs.readdirSync(productDir);

    // Filter out non-image files if necessary (you can extend the regex for more image types)
    const imageFiles = files.filter((file) =>
      /\.(jpg|jpeg|png|gif)$/i.test(file)
    );

    // Return an array of paths relative to the public folder
    return imageFiles.map(
      (file) => `/catalogue/${categoryName}/${productName}/${file}`
    );
  } catch (error) {
    console.error(`Error reading images for product ${productName}:`, error);
    return []; // Return an empty array if no images found
  }
};

// Example usage
const category = "Attendance-and-Access-Control-Systems";
const product = "Z901-Mini";

const images = getImagesForProduct(category, product);
console.log(images); // Logs image paths
