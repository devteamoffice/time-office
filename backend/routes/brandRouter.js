const express = require("express");
const router = express.Router();
const { ROLES } = require("../constants");
const { auth } = require("../middleware/auth");
const role = require("../middleware/role");
const brandController = require("../controller/brandController");

router.post("/add", auth, role.check(ROLES.Admin), brandController.addBrand);
router.get("/list", brandController.fetchStoreBrands);
router.get(
  "/",
  auth,
  role.check(ROLES.Admin, ROLES.Merchant),
  brandController.fetchBrands
);
router.get("/:id", brandController.fetchBrand);
router.get("/list/select", brandController.listBrands);
router.put(
  "/:id",
  auth,
  role.check(ROLES.Admin, ROLES.Merchant),
  brandController.updateBrand
);
router.put(
  "/:id/active",
  auth,
  role.check(ROLES.Admin, ROLES.Merchant),
  brandController.updateBrandAdmin
);
router.delete(
  "/delete/:id",
  auth,
  role.check(ROLES.Admin),
  brandController.deleteBrand
);
router.post(
  "/deactivate-merchant/:brandId",
  brandController.deactivateMerchant
);

module.exports = router;
