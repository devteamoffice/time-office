const express = require("express");
const router = express.Router();
const couponRouter = require("../controller/couponController");
const auth = require("../middleware/auth");

router.post("/add", auth, couponRouter.create);
router.get("/", auth, couponRouter.list);
router.get("/:id", couponRouter.read);
router.put("/:id", couponRouter.update);
router.delete("/delete/:id", couponRouter.delete);

module.exports = router;
