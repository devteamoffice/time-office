const jwt = require("jsonwebtoken");
require("dotenv").config();

/**
 * Generates a JWT token for a user.
 * @param {Object} user - The user object containing id and role.
 * @returns {string} The generated token.
 */
const generateToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      role: user.role, // Include role in the token
    },
    process.env.JWT_SECRET,
    { expiresIn: "7d" } // Token validity: 7 days
  );
};

module.exports = { generateToken };
