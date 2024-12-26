const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/auth");
const cartController = require("../controller/cartController");

// Cart routes
router.post("/add", auth, cartController.addToCart);
router.delete("/:cartId", auth, cartController.deleteCart);
router.post("/add/:cartId", auth, cartController.addItemToCart);
router.delete("/:cartId/:productId", auth, cartController.deleteItemFromCart);

// Order route
router.post("/order", auth, cartController.addOrder); // Add order route

module.exports = router;
