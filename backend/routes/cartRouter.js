const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const cartController = require("../controller/cartController");

router.post("/add", auth, cartController.addToCart);
router.delete("/delete/:cartId", auth, cartController.deleteCart);
router.post("/add/:cartId", auth, cartController.addItemToCart);
router.delete(
  "/delete/:cartId/:productId",
  auth,
  cartController.deleteItemToCart
);

module.exports = router;
