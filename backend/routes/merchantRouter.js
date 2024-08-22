const express = require("express");
const router = express.Router();
const { ROLES } = require("../constants");
const auth = require("../middleware/auth");
const role = require("../middleware/role");
const merchantController = require("../controller/merchant");

router.post("/add", merchantController.addMerchant);
router.get(
  "/search",
  auth,
  role.check(ROLES.Admin),
  merchantController.searchMerchants
);
router.get(
  "/",
  auth,
  role.check(ROLES.Admin),
  merchantController.fetchAllMerchants
);
router.put("/:id/active", auth, merchantController.disableMerchant);
router.put("/approve/:id", auth, merchantController.approveMerchant);
router.put("/reject/:id", auth, merchantController.rejectMerchant);
router.post("/signup/:token", merchantController.signupMerchantToken);
router.delete(
  "/delete/:id",
  auth,
  role.check(ROLES.Admin),
  merchantController.deleteMerchant
);

module.exports = router;
