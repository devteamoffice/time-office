// Bring in Models & Helpers
const Wishlist = require("../models/wishlist");
const Product = require("../models/product");
exports.addUpdateItems = async (req, res) => {
  try {
    const { productId, isLiked } = req.body;
    const user = req.user; // This should have the user data from the decoded token

    if (!user) {
      return res.status(401).json({ error: "User not authenticated." });
    }

    const update = {
      productId,
      isLiked,
      updated: Date.now(),
    };

    // First, check if the product is already in the wishlist
    const existingWishlist = await Wishlist.findOne({
      where: { productId, userId: user.id },
    });

    if (existingWishlist) {
      // If it exists, update the wishlist item
      await existingWishlist.update(update);
      return res.status(200).json({
        success: true,
        message: "Your Wishlist has been updated successfully!",
        wishlist: existingWishlist,
      });
    }

    // If no existing wishlist item, create a new one
    const wishlist = await Wishlist.create({
      productId,
      isLiked,
      userId: user.id, // Use user.id
    });

    return res.status(200).json({
      success: true,
      message: "Added to your Wishlist successfully!",
      wishlist,
    });
  } catch (e) {
    console.error("Error updating wishlist:", e);
    return res.status(400).json({
      error:
        e.message || "Your request could not be processed. Please try again.",
    });
  }
};

exports.getWishlist = async (req, res) => {
  try {
    const userId = req.user?.id; // Use user.id with Sequelize

    if (!userId) {
      return res.status(401).json({ error: "User not authenticated." });
    }

    const wishlist = await Wishlist.findAll({
      where: { userId, isLiked: true },
      include: {
        model: Product,
        as: "product", // Assuming this association is defined in your model
        attributes: ["id", "name", "slug", "price", "images"],
      },
      order: [["updated", "DESC"]],
    });

    if (!wishlist || wishlist.length === 0) {
      return res.status(200).json({
        message: "Your wishlist is empty.",
        wishlist: [],
      });
    }

    return res.status(200).json({ wishlist });
  } catch (error) {
    console.error("Error fetching wishlist:", error); // Log error for debugging
    return res.status(400).json({
      error:
        error.message ||
        "Your request could not be processed. Please try again.",
    });
  }
};

exports.removeProductFromWishlist = async (req, res) => {
  try {
    const { productId } = req.params; // Assuming product ID is passed in the route parameters
    const userId = req.user?.id; // Ensure user is authenticated

    if (!userId) {
      return res.status(401).json({ error: "User not authenticated." });
    }

    // Remove the product from the wishlist for the authenticated user
    const result = await Wishlist.destroy({
      where: {
        productId,
        userId,
      },
    });

    if (result === 0) {
      return res.status(404).json({
        success: false,
        message: "Product not found in your wishlist.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Product removed from your wishlist successfully.",
    });
  } catch (error) {
    console.error("Error removing product from wishlist:", error); // Log error for debugging
    return res.status(400).json({
      error:
        error.message ||
        "Your request could not be processed. Please try again.",
    });
  }
};
