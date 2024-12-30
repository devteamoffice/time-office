const sequelize = require("sequelize");
const { Op } = sequelize;
const mailgun = require("../services/mailgun");
const Cart = require("../models/cart");
const Product = require("../models/product");
const Order = require("../models/order");
const User = require("../models/user");
const CartItem = require("../models/cartitem");
exports.addOrder = async (req, res) => {
  const t = await sequelize.Transaction();
  try {
    const { cartId } = req.body;
    const userId = req.user.id;

    const cart = await Cart.findByPk(cartId, {
      include: [{ model: Product, through: { attributes: ["quantity"] } }],
      transaction: t,
    });

    if (!cart) {
      return res.status(404).json({ error: "Cart not found." });
    }

    if (cart.userId !== userId) {
      return res.status(403).json({ error: "Unauthorized access to cart." });
    }

    const total = cart.Products.reduce(
      (acc, product) => acc + product.price * product.CartProduct.quantity,
      0
    );

    const orderNumber = `ORD-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    const order = await Order.create(
      { userId, cartId: cart.id, total, orderNumber },
      { transaction: t }
    );

    const user = await User.findByPk(userId, { transaction: t });
    if (user) {
      await mailgun.sendEmail(user.email, "Order Confirmation", {
        orderNumber,
        total,
        products: cart.Products.map((product) => ({
          name: product.name,
          quantity: product.CartProduct.quantity,
          price: product.price,
        })),
      });
    }

    await cart.destroy({ transaction: t });
    await t.commit();

    return res.status(200).json({
      success: true,
      message: "Order placed successfully.",
      order: { id: order.id, orderNumber, total },
    });
  } catch (error) {
    await t.rollback();
    console.error("Error placing order:", error);
    return res.status(500).json({ error: "Could not place the order." });
  }
};

exports.addToCart = async (req, res) => {
  try {
    const userId = req.user.id; // Assuming user is attached to the request object
    const items = req.body.products; // Products should be an array of { productId, quantity }

    if (!items || !Array.isArray(items)) {
      return res.status(400).json({ error: "Invalid product list." });
    }

    // Log the request for debugging
    console.log("User ID:", userId);
    console.log("Products:", items);

    const products = await Promise.all(
      items.map(async (item) => {
        const product = await Product.findByPk(item.productId);
        if (!product) {
          throw new Error(`Product with ID ${item.productId} not found`);
        }

        // Calculate price details
        const purchasePrice = product.price; // Assuming price is available in product
        const totalPrice = purchasePrice * item.quantity;
        const priceWithTax = totalPrice * (1 + product.taxRate); // Assuming taxRate is available in product
        const totalTax = priceWithTax - totalPrice;

        // Create cart item
        const cartItem = await CartItem.create({
          productId: item.productId,
          quantity: item.quantity,
          purchasePrice,
          totalPrice,
          priceWithTax,
          totalTax,
          status: "Not processed",
        });

        return cartItem; // Return the created CartItem
      })
    );

    // Create the cart
    const cart = await Cart.create({ userId });

    // Add products to the cart (assuming through relationship)
    await Promise.all(
      products.map(async (cartItem) => {
        await cart.addProduct(cartItem, {
          through: { quantity: cartItem.quantity },
        });
      })
    );

    // Decrease inventory quantities
    await decreaseQuantity(items);

    res.status(200).json({
      success: true,
      cartId: cart.id,
      cart,
    });
  } catch (error) {
    console.error("Error adding to cart:", error.message);
    res.status(500).json({
      error: error.message || "Your request could not be processed.",
    });
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
