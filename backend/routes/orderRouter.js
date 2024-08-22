const express = require("express");
const router = express.Router();

const auth = require("../../middleware/auth");
const mailgun = require("../../services/mailgun");
const store = require("../../utils/store");
const orderController = require("../controller/orderController");

router.post("/add", auth, orderController.addOrder);
router.get("/search", auth, orderController.searchOrders);
router.get("/", auth, orderController.fetchOrders);
router.get("/me", auth, orderController.fetchMyOrders);
router.get("/:orderId", auth, orderController.fetchOrderById);
router.delete("/cancel/:orderId", auth, orderController.deleteOrder);
router.put("/status/item/:itemId", auth, orderController.updateOrderStatus);

module.exports = router;
