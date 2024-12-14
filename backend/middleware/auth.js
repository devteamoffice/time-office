const jwt = require("jsonwebtoken");
require("dotenv").config();
const { secret, tokenLife } = require("../config/keys").jwt;
const auth = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(403)
      .json({ error: "No token provided or invalid format." });
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(403).json({ error: "Token is missing." });
  }

  try {
    const decoded = jwt.verify(token, secret);
    req.user = decoded; // Attach user info (id, role, etc.)
    next();
  } catch (error) {
    console.error("Token verification failed:", error.message);
    return res.status(403).json({ error: "Invalid or expired token." });
  }
};

const generateToken = (user) => {
  const payload = { id: user.id, role: user.role, email: user.email };
  return jwt.sign(payload, secret, { expiresIn: tokenLife });
};

module.exports = { auth, generateToken };
