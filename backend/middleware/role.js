const { ROLES } = require("../constants"); // Define roles like ROLES.Admin, ROLES.User

const role = {
  check: (requiredRole) => (req, res, next) => {
    try {
      // Ensure the `req.user` exists from the `auth` middleware
      if (!req.user || !req.user.role) {
        return res.status(403).json({ error: "User role is not defined." });
      }

      // Check if the user has the required role
      if (req.user.role !== requiredRole) {
        return res
          .status(403)
          .json({ error: "Access forbidden: insufficient permissions." });
      }

      next(); // User has the required role, proceed to the next middleware/controller
    } catch (error) {
      console.error("Error in role middleware:", error);
      res
        .status(500)
        .json({ error: "An internal error occurred in role verification." });
    }
  },
};

module.exports = role;
