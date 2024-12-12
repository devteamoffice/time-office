const Cart = require("../models/cart"); // Assuming models are exported here
const sequelize = require("sequelize"); // To use SQL functions
const Product = require("../models/product");
// Add a new cart
exports.addToCart = async (req, res) => {
  try {
    const userId = req.user.id; // Assuming user is attached to the request object
    const items = req.body.products; // Products should be an array of { productId, quantity }

    if (!items || !Array.isArray(items)) {
      return res.status(400).json({ error: "Invalid product list." });
    }

    // Calculate items and their tax (custom logic, if needed)
    const products = items.map((item) => ({
      productId: item.productId,
      quantity: item.quantity,
    }));

    // Create the cart
    const cart = await Cart.create({ userId });

    // Add products to the cart (assumes many-to-many or through relationship)
    await Promise.all(
      products.map(async (item) => {
        const product = await Product.findByPk(item.productId);
        if (!product)
          throw new Error(`Product with ID ${item.productId} not found`);
        await cart.addProduct(product, {
          through: { quantity: item.quantity },
        });
      })
    );

    // Decrease inventory quantities
    await decreaseQuantity(products);

    res.status(200).json({
      success: true,
      cartId: cart.id,
      cart,
    });
  } catch (error) {
    console.error("Error adding to cart:", error);
    res.status(500).json({ error: "Your request could not be processed." });
  }
};

// Delete a cart
exports.deleteCart = async (req, res) => {
  try {
    const cartId = req.params.cartId;

    const cart = await Cart.findByPk(cartId);
    if (!cart) {
      return res.status(404).json({ error: "Cart not found." });
    }

    await cart.destroy();

    res.status(200).json({
      success: true,
      message: "Cart deleted successfully.",
    });
  } catch (error) {
    console.error("Error deleting cart:", error);
    res.status(500).json({ error: "Your request could not be processed." });
  }
};

// Add an item to the cart
exports.addItemToCart = async (req, res) => {
  try {
    const cartId = req.params.cartId;
    const { productId, quantity } = req.body;

    if (!productId || !quantity) {
      return res.status(400).json({ error: "Invalid product details." });
    }

    const cart = await Cart.findByPk(cartId);
    if (!cart) {
      return res.status(404).json({ error: "Cart not found." });
    }

    const product = await Product.findByPk(productId);
    if (!product) {
      return res.status(404).json({ error: "Product not found." });
    }

    // Add product to cart with quantity
    await cart.addProduct(product, { through: { quantity } });

    // Decrease inventory quantity
    await decreaseQuantity([{ productId, quantity }]);

    res.status(200).json({
      success: true,
      cart,
    });
  } catch (error) {
    console.error("Error adding item to cart:", error);
    res.status(500).json({ error: "Your request could not be processed." });
  }
};

// Remove an item from the cart
exports.deleteItemFromCart = async (req, res) => {
  try {
    const cartId = req.params.cartId;
    const productId = req.params.productId;

    const cart = await Cart.findByPk(cartId);
    if (!cart) {
      return res.status(404).json({ error: "Cart not found." });
    }

    // Remove product from cart (through association)
    const product = await Product.findByPk(productId);
    if (!product) {
      return res.status(404).json({ error: "Product not found." });
    }

    await cart.removeProduct(product);

    res.status(200).json({
      success: true,
      cart,
    });
  } catch (error) {
    console.error("Error removing item from cart:", error);
    res.status(500).json({ error: "Your request could not be processed." });
  }
};

// Helper function to decrease inventory
const decreaseQuantity = async (products) => {
  try {
    await Promise.all(
      products.map(async (item) => {
        const product = await Product.findByPk(item.productId);
        if (!product)
          throw new Error(`Product with ID ${item.productId} not found`);
        if (product.quantity < item.quantity) {
          throw new Error(
            `Insufficient stock for product ID ${item.productId}`
          );
        }

        await Product.update(
          { quantity: sequelize.literal(`quantity - ${item.quantity}`) },
          { where: { id: item.productId } }
        );
      })
    );
  } catch (error) {
    console.error("Error decreasing inventory:", error);
    throw new Error("Failed to update inventory.");
  }
};
