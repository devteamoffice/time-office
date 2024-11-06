const jwt = require("jsonwebtoken");

const checkAuth = async (req) => {
  try {
    const authHeader = req.headers.authorization;

    // Check if authorization header is present and properly formatted
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return null;
    }

    // Extract the token part from the "Bearer <token>" format
    const token = authHeader.split(" ")[1];

    // Verify the token and decode it with the secret key
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);

    return decoded; // Return decoded user info (e.g., id, email, etc.)
  } catch (err) {
    console.error("Authentication error:", err);
    return null; // Return null if token verification fails
  }
};

module.exports = checkAuth;
