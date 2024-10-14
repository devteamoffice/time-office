const firebase = require("firebase/app");
require("firebase/storage");
const mysql = require("mysql");
const fs = require("fs");
const path = require("path");

// Firebase configuration (replace with your own config)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage().ref();

// MySQL connection (replace with your own credentials)
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "your_password",
  database: "your_database",
});

// Function to upload images from folder
async function uploadImagesFromFolder(folderPath, productId) {
  const files = fs.readdirSync(folderPath);
  const imageUrls = [];

  for (let i = 0; i < files.length; i++) {
    const filePath = path.join(folderPath, files[i]);
    const fileName = `${productId}_${i + 1}`; // Naming the file uniquely with product ID
    const fileRef = storage.child(`products/${productId}/${fileName}`);

    const uploadSnapshot = await fileRef.put(fs.readFileSync(filePath));
    const downloadURL = await uploadSnapshot.ref.getDownloadURL();

    imageUrls.push(downloadURL);
    console.log(`Uploaded ${files[i]} for Product ID: ${productId}`);
  }

  return imageUrls;
}

// Function to insert product into MySQL with image URLs
function insertProductWithImages(productData, imageUrls) {
  const query =
    "INSERT INTO products (product_id, category, images) VALUES (?, ?, ?)";
  connection.query(
    query,
    [productData.id, productData.category, JSON.stringify(imageUrls)],
    (err, result) => {
      if (err) throw err;
      console.log(`Product inserted with ID: ${productData.id}`);
    }
  );
}

// Main function to upload folders
async function processProductFolders(baseFolder) {
  const folders = fs.readdirSync(baseFolder);

  for (const folder of folders) {
    const productFolderPath = path.join(baseFolder, folder);
    const [productId, productName] = folder.split(" ");

    console.log(`Processing folder: ${folder}`);

    // Simulating product data (normally you would retrieve this from JSON or other sources)
    const productData = {
      id: productId,
      name: productName,
      category: "SomeCategory", // Adjust according to your data
    };

    // Upload images from folder and get the URLs
    const imageUrls = await uploadImagesFromFolder(
      productFolderPath,
      productId
    );

    // Insert product data with image URLs into MySQL
    insertProductWithImages(productData, imageUrls);
  }
}

// Start processing
processProductFolders("./product_images_folder").catch(console.error);
