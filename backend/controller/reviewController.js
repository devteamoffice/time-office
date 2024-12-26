// Bring in Models & Helpers
const Review = require("../models/review");
const Product = require("../models/product");

const { REVIEW_STATUS } = require("../constants");

exports.addReview = async (req, res) => {
  try {
    const user = req.user; // Assuming user is authenticated and available in `req.user`

    const { productId, title, rating, review, isRecommended } = req.body;

    // Validate input
    if (!productId || !title || rating === undefined || !review) {
      return res.status(400).json({
        error: "Product ID, title, rating, and review are required.",
      });
    }

    // Create a new review instance
    const reviewDoc = await Review.create({
      productId,
      userId: user.id, // User ID from authenticated user
      title,
      rating,
      review,
      isRecommended: isRecommended !== undefined ? isRecommended : true, // Default to true if not provided
    });

    res.status(200).json({
      success: true,
      message: `Your review has been added successfully and will appear when approved!`,
      review: reviewDoc,
    });
  } catch (error) {
    console.error("Error adding review:", error.message);
    return res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
};

exports.fetchAllReviews = async (req, res) => {
  try {
    // Extract status filter from query
    const { status } = req.query;

    // Build query filters
    const where = {};
    if (status) {
      where.status = status; // Filter reviews by status if provided
    }

    // Fetch all reviews with sorting and associations
    const reviews = await Review.findAll();

    res.status(200).json({ reviews });
  } catch (error) {
    console.error("Error fetching all reviews:", error.message);
    res.status(500).json({
      error: "Your request could not be processed. Please try again later.",
    });
  }
};

exports.fetchReview = async (req, res) => {
  try {
    // Validate the slug parameter
    const { slug } = req.params;
    if (!slug) {
      return res.status(400).json({
        error: "Product slug is required.",
      });
    }

    // Fetch the product using the slug
    const productDoc = await Product.findOne({ slug });
    if (!productDoc) {
      return res.status(404).json({
        error: "No product found with the provided slug.",
      });
    }

    // Check if the product has an active brand
    if (!productDoc.brand || productDoc.brand.isActive === false) {
      return res.status(404).json({
        error: "The product or its brand is inactive.",
      });
    }

    // Fetch approved reviews for the product
    const { page = 1, limit = 10 } = req.query;

    const reviews = await Review.find({
      product: productDoc._id,
      status: REVIEW_STATUS.Approved,
    })
      .populate({
        path: "user",
        select: "firstName",
      })
      .sort("-created")
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const count = await Review.countDocuments({
      product: productDoc._id,
      status: REVIEW_STATUS.Approved,
    });

    res.status(200).json({
      reviews,
      totalPages: Math.ceil(count / limit),
      currentPage: Number(page),
      count,
    });
  } catch (error) {
    console.error("Error fetching reviews:", error.message);
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
};

exports.updateReview = async (req, res) => {
  try {
    const reviewId = req.params.id;
    const update = req.body;
    const query = { _id: reviewId };

    await Review.findOneAndUpdate(query, update, {
      new: true,
    });

    res.status(200).json({
      success: true,
      message: "review has been updated successfully!",
    });
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
};

exports.approveReview = async (req, res) => {
  try {
    const reviewId = req.params.reviewId;

    const query = { _id: reviewId };
    const update = {
      status: REVIEW_STATUS.Approved,
      isActive: true,
    };

    await Review.findOneAndUpdate(query, update, {
      new: true,
    });

    res.status(200).json({
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
};

exports.rejectReview = async (req, res) => {
  try {
    const reviewId = req.params.reviewId;

    const query = { _id: reviewId };
    const update = {
      status: REVIEW_STATUS.Rejected,
    };

    await Review.findOneAndUpdate(query, update, {
      new: true,
    });

    res.status(200).json({
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
};

exports.deleteReview = async (req, res) => {
  try {
    const review = await Review.deleteOne({ _id: req.params.id });

    res.status(200).json({
      success: true,
      message: `review has been deleted successfully!`,
      review,
    });
  } catch (error) {
    return res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
};
