const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/auth");
const authController = require("../controller/authController");

router.post("/login", authController.login);
router.post("/register", authController.register);
router.post("/forgot", authController.forgotPassword);
router.post("/reset/:token", authController.resetToken);
router.post("/reset", auth, authController.reset);

module.exports = router;
