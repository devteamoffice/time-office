const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/auth");
const role = require("../middleware/role");
const userController = require("../controller/userController");
const { ROLES } = require("../constants");

// General user routes
router.get("/me", auth, userController.getProfile); // Get current user's profile
router.put("/", auth, userController.updateProfile); // Update current user's profile
router.get("/", auth, userController.fetchUsers);

// Admin-specific routes
router.get("/search", auth, role.check(ROLES.Admin), userController.searchUser);
router.get(
  "/:userId",
  auth,
  role.check(ROLES.Admin),
  userController.getUserById
);
router.put(
  "/:userId",
  auth,
  role.check(ROLES.Admin),
  userController.updateUser
);
router.delete(
  "/:userId",
  auth,
  role.check(ROLES.Admin),
  userController.deleteUser
);

module.exports = router;
