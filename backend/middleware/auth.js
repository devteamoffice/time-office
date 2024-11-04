const jwt = require("jsonwebtoken");
require("dotenv").config(); // Load environment variables

const secretKey = process.env.JWT_SECRET; // Access the JWT secret from environment variables
console.log("JWT Secret Key:", secretKey); // This should log the secret key, or undefined if not set

// JWT authentication middleware
const auth = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Extract token from the Authorization header

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, secretKey); // Verify token with the secret key
    req.user = decoded; // Store decoded token (user information) in the request object
    next(); // Call next middleware
  } catch (err) {
    return res.status(403).json({ message: "Invalid or expired token" });
  }
};

module.exports = auth;
