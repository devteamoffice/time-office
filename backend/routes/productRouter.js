const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const role = require("../middleware/role");
const multer = require("multer");
const { ROLES } = require("../constants");
const storage = multer.memoryStorage();
const upload = multer({ storage });
const productController = require("../controller/productController");

router.get("/item/:slug", productController.fetchProductSlug);
router.get("/list/search/:name", productController.fetchProductName);
router.get("/list", productController.fetchStoreProducts);
router.get("/list/select", auth, productController.listSelect);
router.get("/search/:name", productController.searchProducts);
router.post(
  "/add",
  auth,
  role.check(ROLES.Admin, ROLES.Merchant),
  upload.single("image"),
  productController.addProduct
);
router.get("/", productController.fetchAllProducts);
router.get("/:id", productController.fetchProductById);
router.put(
  "/:id",
  auth,
  role.check(ROLES.Admin, ROLES.Merchant),
  productController.updateProduct
);
router.put(
  "/:id/active",
  auth,
  role.check(ROLES.Admin, ROLES.Merchant),
  productController.updateProductActive
);
router.delete(
  "/delete/:id",
  auth,
  role.check(ROLES.Admin, ROLES.Merchant),
  productController.deleteProduct
);

module.exports = router;
