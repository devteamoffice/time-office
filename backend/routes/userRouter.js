// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const role = require("../middleware/role");
const userController = require("../controller/userController");
const { ROLES } = require("../constants");

// Admin-specific routes
router.get("/search", auth, role.check(ROLES.Admin), userController.searchUser);

// General user routes
router.get("/", auth, userController.fetchUsers);
router.get("/:id", auth, userController.getProfile); // Use `id` to fetch profile
router.put("/", auth, userController.updateProfile);

module.exports = router;
