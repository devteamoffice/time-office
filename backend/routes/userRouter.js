const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/auth");
const role = require("../middleware/role");
const userController = require("../controller/userController");
const { ROLES } = require("../constants");

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

// General user routes
router.get("/", auth, userController.fetchUsers);
router.get("/me", auth, userController.getProfile); // Get current user's profile
router.put("/", auth, userController.updateProfile); // Update current user's profile

module.exports = router;
