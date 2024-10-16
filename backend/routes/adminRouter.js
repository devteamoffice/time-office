const express = require("express");
const router = express.Router();
const AdminController = require("../controllers/adminController");
const auth = require("../middleware/auth");
// Admin routes
router.post("/create", auth, AdminController.createAdmin);
router.get("/users", auth, AdminController.viewUsers);
router.put("/users/:id", auth, AdminController.editUser);
router.delete("/users/:id", auth, AdminController.deleteUser);
router.post("/create-user", auth, AdminController.createUserWithPermissions);

module.exports = router;
