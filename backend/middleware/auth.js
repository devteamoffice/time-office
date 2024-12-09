const jwt = require("jsonwebtoken");
require("dotenv").config();
const { secret, tokenLife } = require("../config/keys").jwt;

const generateToken = (user) => {
  const payload = { id: user.id, role: user.role, email: user.email }; // Include 'role' here
  return jwt.sign(payload, secret, { expiresIn: tokenLife });
};

// Middleware to verify the token
const auth = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  // Check if the authorization header exists and starts with 'Bearer '
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(403)
      .json({ error: "No token provided or invalid format." });
  }

  // Extract the token from the Authorization header
  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(403).json({ error: "Token is missing." });
  }

  // Verify the token using the secret key
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      console.error("Token verification failed:", err.message);
      return res.status(403).json({ error: "Invalid or expired token." });
    }

    // Attach the user information to the request object
    req.user = user;
    next(); // Call the next middleware or route handler
  });
};

module.exports = { generateToken, auth };
