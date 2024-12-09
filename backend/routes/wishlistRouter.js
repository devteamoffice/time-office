const express = require("express");
const router = express.Router();

const { auth } = require("../middleware/auth");
const wishlistController = require("../controller/wishlistController");

router.post("/", auth, wishlistController.addUpdateItems);
router.get("/", auth, wishlistController.getWishlist);
router.delete(
  "/:productId",
  auth,
  wishlistController.removeProductFromWishlist
);
module.exports = router;
