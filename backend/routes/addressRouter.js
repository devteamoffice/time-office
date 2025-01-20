const express = require("express");
const router = express.Router();
const addressRouter = require("../controller/addressController");
const { auth } = require("../middleware/auth");

router.post("/add", auth, addressRouter.addAddress);
router.get("/", auth, addressRouter.fetchAllAddress);
router.get("/:id", addressRouter.fetchAddresses);
router.put("/:id", addressRouter.updateAddress);
router.delete("/delete/:id", addressRouter.deleteAddress);

module.exports = router;
