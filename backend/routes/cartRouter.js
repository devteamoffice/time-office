const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/auth");
const cartController = require("../controller/cartController");

// Cart routes
router.post("/add", auth, cartController.addToCart);
router.delete("/:cartId", auth, cartController.deleteCart);
router.delete("/:cartId/:productId", auth, cartController.deleteItemFromCart);
router.get("/", auth, cartController.getCartItems);
// Order route
router.post("/order", auth, cartController.addOrder); // Add order route

module.exports = router;
