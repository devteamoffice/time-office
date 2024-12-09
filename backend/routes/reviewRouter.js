const express = require("express");
const router = express.Router();
const reviewController = require("../controller/reviewController");

const { auth } = require("../middleware/auth");

router.post("/add", auth, reviewController.addReview);
router.get("/", reviewController.fetchAllReviews);
router.get("/:slug", reviewController.fetchReview);
router.put("/approve/:reviewId", auth, reviewController.approveReview);
router.put("/reject/:reviewId", auth, reviewController.rejectReview);
router.delete("/delete/:id", reviewController.deleteReview);

module.exports = router;
