const express = require("express");
const router = express.Router();
const discountRouter = require("../controller/discountController");
const { auth } = require("../middleware/auth");

router.post("/add", auth, discountRouter.create);
router.get("/", auth, discountRouter.list);
router.get("/:id", discountRouter.read);
router.put("/:id", discountRouter.update);
router.delete("/delete/:id", discountRouter.delete);

module.exports = router;
