// Bring in Models & Utils
const Cart = require("../models/cart");
const Product = require("../models/product");

const store = require("../utils/store");

exports.addToCart = async (req, res) => {
  try {
    const user = req.user._id;
    const items = req.body.products;

    if (!items || !Array.isArray(items)) {
      return res.status(400).json({ error: "Invalid product list." });
    }

    const products = store.caculateItemsSalesTax(items);

    const cart = new Cart({ user, products });
    const cartDoc = await cart.save();

    try {
      decreaseQuantity(products);
    } catch (err) {
      console.error("Error updating inventory:", err);
      return res.status(500).json({ error: "Failed to update inventory." });
    }

    res.status(200).json({
      success: true,
      cartId: cartDoc.id,
      cart: cartDoc, // Optional: Include cart details
    });
  } catch (error) {
    console.error("Error adding to cart:", error);
    res.status(500).json({ error: "Your request could not be processed." });
  }
};

exports.deleteCart = async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.cartId);

    if (!cart) {
      return res.status(404).json({ error: "Cart not found." });
    }

    await cart.deleteOne();

    res.status(200).json({
      success: true,
      message: "Cart deleted successfully.",
    });
  } catch (error) {
    console.error("Error deleting cart:", error);
    res.status(500).json({ error: "Your request could not be processed." });
  }
};

exports.addItemToCart = async (req, res) => {
  try {
    const product = req.body.product;

    if (!product || !product.product || !product.quantity) {
      return res.status(400).json({ error: "Invalid product details." });
    }

    const query = { _id: req.params.cartId };

    const cart = await Cart.findOneAndUpdate(
      query,
      { $push: { products: product } },
      { new: true }
    );

    if (!cart) {
      return res.status(404).json({ error: "Cart not found." });
    }

    res.status(200).json({
      success: true,
      cart,
    });
  } catch (error) {
    console.error("Error adding item to cart:", error);
    res.status(500).json({ error: "Your request could not be processed." });
  }
};

exports.deleteItemToCart = async (req, res) => {
  try {
    const query = { _id: req.params.cartId };
    const product = { product: req.params.productId };

    const cart = await Cart.findOneAndUpdate(
      query,
      { $pull: { products: product } },
      { new: true }
    );

    if (!cart) {
      return res.status(404).json({ error: "Cart not found." });
    }

    res.status(200).json({
      success: true,
      cart,
    });
  } catch (error) {
    console.error("Error removing item from cart:", error);
    res.status(500).json({ error: "Your request could not be processed." });
  }
};

const decreaseQuantity = async (products) => {
  try {
    const bulkOptions = products.map((item) => ({
      updateOne: {
        filter: { _id: item.product },
        update: { $inc: { quantity: -item.quantity } },
      },
    }));

    await Product.bulkWrite(bulkOptions);
  } catch (error) {
    console.error("Error decreasing inventory:", error);
    throw new Error("Failed to update inventory.");
  }
};
