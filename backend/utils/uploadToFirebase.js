const { storage } = require("./firebaseConfig"); // Import Firebase configuration
const { ref, uploadBytes, getDownloadURL } = require("firebase/storage");
const path = require("path");

exports.uploadToFirebase = async (file) => {
  const filePath = `product_images/${file.originalname}`;
  const storageRef = ref(storage, filePath);

  const metadata = {
    contentType: file.mimetype,
  };

  const snapshot = await uploadBytes(storageRef, file.buffer, metadata);
  return getDownloadURL(snapshot.ref);
};
