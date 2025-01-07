// Wishlist Controller
const Wishlist = require("../models/wishlist");
const Product = require("../models/product");
const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");
exports.addUpdateItems = async (req, res) => {
  try {
    const { productIds, isLiked } = req.body;
    const user = req.user;

    if (!user) {
      return res.status(401).json({ error: "User not authenticated." });
    }

    let wishlist = await Wishlist.findOne({ where: { userId: user.id } });

    // Ensure productIds is always an array
    let parsedProductIds = [];
    if (Array.isArray(productIds)) {
      parsedProductIds = productIds;
    } else if (typeof productIds === "string") {
      try {
        parsedProductIds = JSON.parse(productIds.replace(/'/g, '"'));
        if (!Array.isArray(parsedProductIds)) {
          throw new Error("productIds must be an array.");
        }
      } catch (e) {
        return res.status(400).json({ error: "Invalid productIds format." });
      }
    } else if (productIds) {
      parsedProductIds = [productIds];
    }

    if (wishlist) {
      // Ensure wishlist.productIds is an array
      let updatedProductIds = [];
      if (Array.isArray(wishlist.productIds)) {
        updatedProductIds = wishlist.productIds;
      } else if (typeof wishlist.productIds === "string") {
        try {
          updatedProductIds = JSON.parse(
            wishlist.productIds.replace(/'/g, '"')
          );
          if (!Array.isArray(updatedProductIds)) {
            throw new Error("Wishlist productIds must be an array.");
          }
        } catch (e) {
          updatedProductIds = [];
        }
      }

      // Add new productIds to the wishlist
      parsedProductIds.forEach((id) => {
        if (!updatedProductIds.includes(id)) {
          updatedProductIds.push(id);
        }
      });

      await wishlist.update({
        productIds: updatedProductIds,
        isLiked,
        updated: new Date(),
      });

      return res.status(200).json({
        success: true,
        message: "Wishlist updated successfully.",
        wishlist,
      });
    }

    // Create a new wishlist if none exists
    wishlist = await Wishlist.create({
      userId: user.id,
      productIds: parsedProductIds,
      isLiked,
    });

    return res.status(200).json({
      success: true,
      message: "Wishlist created successfully.",
      wishlist,
    });
  } catch (e) {
    console.error("Error updating wishlist:", e);
    return res.status(400).json({ error: e.message || "An error occurred." });
  }
};

exports.removeProductFromWishlist = async (req, res) => {
  try {
    const { productId } = req.params;
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ error: "User not authenticated." });
    }

    const wishlist = await Wishlist.findOne({ where: { userId } });

    if (!wishlist) {
      return res.status(404).json({ error: "Wishlist not found." });
    }

    const updatedProductIds = wishlist.productIds.filter(
      (id) => id !== productId
    );

    await wishlist.update({
      productIds: updatedProductIds,
      updated: new Date(),
    });

    return res.status(200).json({
      success: true,
      message: "Product removed from wishlist.",
    });
  } catch (error) {
    console.error("Error removing product:", error);
    return res.status(400).json({ error: error.message });
  }
};

exports.getWishlist = async (req, res) => {
  try {
    // Extract and verify the token
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ error: "Token not provided." });
    }

    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      return res.status(401).json({ error: "Invalid or expired token." });
    }

    const userId = decoded.id;
    if (!userId) {
      return res.status(401).json({ error: "User ID not found in token." });
    }

    // Fetch the user's wishlist
    const wishlist = await Wishlist.findOne({
      where: { userId, isLiked: true },
    });

    if (!wishlist) {
      return res
        .status(200)
        .json({ message: "Wishlist is empty.", products: [] });
    }

    // Parse the productIds JSON field
    const productIds = JSON.parse(wishlist.productIds);

    if (!productIds || productIds.length === 0) {
      return res
        .status(200)
        .json({ message: "Wishlist is empty.", products: [] });
    }

    // Fetch product details for the given product IDs
    const products = await Product.findAll({
      where: { id: { [Op.in]: productIds } },
      attributes: ["id", "name", "slug", "price", "images"], // Fetch only required fields
    });

    return res.status(200).json({ products });
  } catch (error) {
    console.error("Error fetching wishlist:", error);
    return res.status(500).json({ error: "Internal server error." });
  }
};
