const db = require("../config/database");
const sequelize = require("sequelize");
const { Op } = sequelize;
const mailgun = require("../services/mailgun");
const Cart = require("../models/cart");
const Product = require("../models/product");
const Order = require("../models/order");
const User = require("../models/user");
const CartItem = require("../models/cartitem");

const razorpay = require("../services/razorpay"); // Import Razorpay configuration

exports.addOrder = async (req, res) => {
  const t = await db.transaction(); // Start a transaction
  try {
    const { cartId } = req.body; // Only cartId is used now
    const userId = req.user ? req.user.id : null;

    if (!userId) {
      return res.status(400).json({ error: "User is not authenticated." });
    }

    // Get the cart associated with the logged-in user
    const cart = await Cart.findOne({
      where: { id: cartId, userId },
      include: [
        {
          model: CartItem,
          as: "cart_items", // Alias for CartItems defined in Cart model
          include: [
            {
              model: Product,
              as: "product", // Alias for Product defined in CartItem model
              through: { attributes: ["quantity"] },
            },
          ],
        },
      ],
      transaction: t,
    });

    if (!cart) {
      return res.status(404).json({ error: "Cart not found." });
    }

    const total = cart.Products.reduce(
      (acc, product) => acc + product.price * product.CartProduct.quantity,
      0
    );

    // Create a Razorpay order
    const razorpayOrder = await razorpay.orders.create({
      amount: total * 100, // Razorpay expects amount in paise
      currency: "INR",
      receipt: `order_${Date.now()}`,
      payment_capture: 1, // Automatically capture the payment
    });

    const orderNumber = `ORD-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    const order = await Order.create(
      {
        userId,
        cartId: cart.id,
        total,
        orderNumber,
        razorpayOrderId: razorpayOrder.id,
      },
      { transaction: t } // Use the transaction here as well
    );

    let user = userId ? await User.findByPk(userId, { transaction: t }) : null;

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

    await cart.destroy({ transaction: t }); // Use the transaction here as well
    await t.commit(); // Commit the transaction

    return res.status(200).json({
      success: true,
      message: "Order placed successfully.",
      order: {
        id: order.id,
        orderNumber,
        total,
        razorpayOrderId: razorpayOrder.id, // Include Razorpay Order ID
        razorpayPaymentUrl: razorpayOrder.short_url, // Razorpay payment link
      },
    });
  } catch (error) {
    await t.rollback(); // Rollback the transaction in case of an error
    console.error("Error placing order:", error);
    return res.status(500).json({ error: "Could not place the order." });
  }
};

exports.addToCart = async (req, res) => {
  try {
    const userId = req.user.id; // Now the userId is accessible from the token
    const items = req.body.products || []; // Array of { productId, quantity }
    const productId = req.body.productId; // For single item addition
    const quantity = req.body.quantity; // For single item addition

    let totalCartPrice = 0;
    let cart = await Cart.findOne({
      where: { userId },
      include: [
        {
          model: CartItem,
          as: "cart_items",
          attributes: [
            "productId",
            "quantity",
            "purchasePrice",
            "totalPrice",
            "priceWithTax",
            "totalTax",
            "status",
            "cartId",
          ],
        },
      ],
    });

    // If cart doesn't exist, create a new one
    if (!cart) {
      cart = await Cart.create({ userId });
    }

    // Handle adding multiple items to the cart
    if (items.length > 0) {
      for (let item of items) {
        const product = await Product.findByPk(item.productId);
        if (!product) {
          return res
            .status(404)
            .json({ error: `Product ${item.productId} not found.` });
        }

        const purchasePrice = product.price;
        const totalPrice = purchasePrice * item.quantity;
        const priceWithTax = totalPrice * (1 + product.taxRate);
        const totalTax = priceWithTax - totalPrice;

        // Create CartItem for each product, setting cartId as cart.id
        await CartItem.create({
          productId: item.productId,
          quantity: item.quantity,
          purchasePrice,
          totalPrice,
          priceWithTax,
          totalTax,
          cartId: cart.id, // Use cart.id instead of userId
        });

        totalCartPrice += totalPrice; // Sum the total price for the cart
      }
    }

    // Handle adding a single item to the cart
    if (productId && quantity) {
      const product = await Product.findByPk(productId);
      if (!product) {
        return res.status(404).json({ error: "Product not found." });
      }

      const purchasePrice = product.price;
      const totalPrice = purchasePrice * quantity;
      const priceWithTax = totalPrice * (1 + product.taxRate);
      const totalTax = priceWithTax - totalPrice;

      // Create CartItem for the product, setting cartId as cart.id
      await CartItem.create({
        productId,
        quantity,
        purchasePrice,
        totalPrice,
        priceWithTax,
        totalTax,
        cartId: cart.id, // Use cart.id instead of userId
      });

      totalCartPrice += totalPrice; // Add to the total price for the cart
    }

    // Update total in the cart, if needed
    await cart.update({ total: totalCartPrice });

    res.status(200).json({
      success: true,
      cartId: cart.id, // Return cart.id instead of userId
      total: totalCartPrice,
    });
  } catch (error) {
    console.error("Error adding to cart:", error);
    res.status(500).json({ error: "Failed to add items to cart." });
  }
};

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
exports.decreaseQuantity = async (products) => {
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

exports.getCartItems = async (req, res) => {
  try {
    const userId = req.user.id; // Assuming user is available after authentication

    // Find the user's cart and include the associated cart items and products
    const cart = await Cart.findOne({
      where: { userId: userId },
      include: [
        {
          model: CartItem,
          as: "cart_items", // Alias for the association in the Cart model
          include: [
            {
              model: Product,
              as: "product", // Correct alias for the Product model in the CartItem
            },
          ],
        },
      ],
    });

    console.log(cart); // Add logging here

    if (!cart) {
      return res.status(404).json({ error: "Cart not found" });
    }

    res.status(200).json({ cart });
  } catch (error) {
    console.error("Error fetching cart items:", error);
    res.status(500).json({ error: "Error fetching cart items" });
  }
};
