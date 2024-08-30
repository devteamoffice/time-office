const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const role = require("../middleware/role");
const userController = require("../controller/userController");
const { ROLES } = require("../constants");

router.get("/search", auth, role.check(ROLES.Admin), userController.searchUser);
router.get("/", auth, userController.fetchUsers);
router.get("/me", auth, userController.getProfile);
router.put("/", auth, userController.updateProfile);

module.exports = router;
