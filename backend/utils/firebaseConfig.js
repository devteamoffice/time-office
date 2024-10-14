const admin = require("firebase-admin");
const { initializeApp } = require("firebase-admin/app");
const { getStorage } = require("firebase-admin/storage");

// Initialize Firebase Admin SDK
const serviceAccount = require("../teamoffice.json");

initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "teamoffice-28b46.appspot.com", // Ensure the bucket name is correct
});

const bucket = getStorage().bucket();
module.exports = { bucket };
