const { Op } = require("sequelize");
const Order = require("../models/order");
const Cart = require("../models/cart");
const Product = require("../models/product");
const User = require("../models/user"); // Assuming you have a User model
const mailgun = require("../services/mailgun");
const store = require("../utils/store");
const shiprocket = require("../services/shipRocket"); // Assuming a service for Shiprocket API
const { ROLES, CART_ITEM_STATUS } = require("../constants");

// Helper function to generate the custom order number
const generateOrderNumber = () => {
  const randomStr = Math.random().toString(36).substring(2, 6).toUpperCase();
  const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  return `Order#${randomStr}-${dateStr}`;
};

exports.addOrder = async (req, res) => {
  try {
    const cart = req.body.cartId;
    const total = req.body.total;
    const userId = req.user._id;
    const paymentMode = await shiprocket.getPaymentMode(); // Fetch payment mode from Shiprocket API

    // Fetch user details for the customer name
    const userDoc = await User.findById(userId);
    if (!userDoc) {
      return res.status(404).json({
        error: "User not found.",
      });
    }

    const customerName = userDoc.name;
    const orderNumber = generateOrderNumber();

    const order = new Order({
      cart,
      user: userId,
      total,
      orderNumber,
      paymentMode,
      customerName,
    });

    const orderDoc = await order.save();

    const cartDoc = await Cart.findById(orderDoc.cart._id).populate({
      path: "products.product",
      populate: {
        path: "brand",
      },
    });

    const newOrder = {
      _id: orderDoc._id,
      orderNumber: orderDoc.orderNumber,
      created: orderDoc.created,
      user: orderDoc.user,
      total: orderDoc.total,
      paymentMode: orderDoc.paymentMode,
      customerName: orderDoc.customerName,
      products: cartDoc.products,
    };

    await mailgun.sendEmail(userDoc.email, "order-confirmation", newOrder);

    res.status(200).json({
      success: true,
      message: `Your order has been placed successfully!`,
      order: { _id: orderDoc._id, orderNumber: orderDoc.orderNumber },
    });
  } catch (error) {
    console.error("Add order error:", error);
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
};

// The rest of the functions remain unchanged unless modifications are specifically required.

exports.searchOrders = async (req, res) => {
  try {
    const { search } = req.query;

    // Assuming 'search' is the Order ID
    if (!search || isNaN(parseInt(search))) {
      return res.status(200).json({
        orders: [],
      });
    }

    let orders = [];

    if (req.user.role === ROLES.Admin) {
      orders = await Order.findAll({
        where: {
          id: search,
        },
        include: [
          {
            model: Cart,
            include: [
              {
                model: Product,
                include: [
                  {
                    model: Brand,
                  },
                ],
              },
            ],
          },
        ],
      });
    } else {
      orders = await Order.findAll({
        where: {
          id: search,
          userId: req.user.id, // Assuming there's a userId foreign key in Order
        },
        include: [
          {
            model: Cart,
            include: [
              {
                model: Product,
                include: [
                  {
                    model: Brand,
                  },
                ],
              },
            ],
          },
        ],
      });
    }

    orders = orders.filter((order) => order.Cart);

    if (orders.length > 0) {
      const newOrders = orders.map((o) => ({
        id: o.id,
        total: parseFloat(Number(o.total.toFixed(2))),
        created: o.createdAt, // Assuming Sequelize's default timestamps
        products: o.Cart?.Products,
      }));

      let sortedOrders = newOrders.map((o) => store.caculateTaxAmount(o));
      sortedOrders.sort((a, b) => b.created - a.created);

      res.status(200).json({
        orders: sortedOrders,
      });
    } else {
      res.status(200).json({
        orders: [],
      });
    }
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
};

exports.fetchOrders = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const ordersDoc = await Order.find()
      .sort("-created")
      .populate({
        path: "cart",
        populate: {
          path: "products.product",
          populate: {
            path: "brand",
          },
        },
      })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const count = await Order.countDocuments();
    const orders = store.formatOrders(ordersDoc);

    res.status(200).json({
      orders,
      totalPages: Math.ceil(count / limit),
      currentPage: Number(page),
      count,
    });
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
};

exports.addOrder = async (req, res) => {
  const t = await db.transaction(); // Start a transaction
  try {
    const cartId = req.body.cartId; // Only cartId is used now
    const userId = req.user.id;
    console.log("Cart ID:", cartId);
    console.log("User ID:", userId);

    if (!userId) {
      return res.status(400).json({ error: "User is not authenticated." });
    }

    // Get the cart associated with the logged-in user
    const cart = await Cart.findOne({
      where: { id: cartId, userId },
      include: [
        {
          model: CartItem,
          as: "items", // Alias for CartItems defined in Cart model
          include: [
            {
              model: Product,
              as: "products", // Use the alias 'products' here
            },
          ],
        },
      ],
      transaction: t, // Transaction included
    });

    if (!cart) {
      console.log("No cart found with the given ID and user ID.");
      return res.status(404).json({ error: "Cart not found." });
    }

    // Correct total calculation with cartItem.quantity
    const total = cart.items.reduce((acc, cartItem) => {
      const product = cartItem.products; // Access product from the alias 'products'
      return acc + product.price * cartItem.quantity; // Use cartItem.quantity
    }, 0);

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

    // Clone cart items into order_items
    const orderItems = cart.items.map((cartItem) => ({
      orderId: order.id,
      productId: cartItem.products.id,
      quantity: cartItem.quantity,
      price: cartItem.products.price,
    }));

    await OrderItem.bulkCreate(orderItems, { transaction: t });

    let user = userId ? await User.findByPk(userId, { transaction: t }) : null;

    if (user) {
      await mailgun.sendEmail(user.email, "Order Confirmation", {
        orderNumber,
        total,
        products: cart.items.map((cartItem) => ({
          name: cartItem.products.name, // Access product details from cartItem
          quantity: cartItem.quantity, // Use quantity from CartItem
          price: cartItem.products.price,
        })),
      });
    }

    // Now, destroy the cart only after cloning the cart items into order_items
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

exports.fetchOrderById = async (req, res) => {
  try {
    const orderId = req.params.orderId;

    let orderDoc = null;

    if (req.user.role === ROLES.Admin) {
      orderDoc = await Order.findOne({ _id: orderId }).populate({
        path: "cart",
        populate: {
          path: "products.product",
          populate: {
            path: "brand",
          },
        },
      });
    } else {
      const user = req.user._id;
      orderDoc = await Order.findOne({ _id: orderId, user }).populate({
        path: "cart",
        populate: {
          path: "products.product",
          populate: {
            path: "brand",
          },
        },
      });
    }

    if (!orderDoc || !orderDoc.cart) {
      return res.status(404).json({
        message: `Cannot find order with the id: ${orderId}.`,
      });
    }

    let order = {
      _id: orderDoc._id,
      total: orderDoc.total,
      created: orderDoc.created,
      totalTax: 0,
      products: orderDoc?.cart?.products,
      cartId: orderDoc.cart._id,
    };

    order = store.caculateTaxAmount(order);

    res.status(200).json({
      order,
    });
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    const orderId = req.params.orderId;

    const order = await Order.findOne({ _id: orderId });
    const foundCart = await Cart.findOne({ _id: order.cart });

    increaseQuantity(foundCart.products);

    await Order.deleteOne({ _id: orderId });
    await Cart.deleteOne({ _id: order.cart });

    res.status(200).json({
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
};

exports.updateOrderStatus = async (req, res) => {
  try {
    const itemId = req.params.itemId;
    const orderId = req.body.orderId;
    const cartId = req.body.cartId;
    const status = req.body.status || CART_ITEM_STATUS.Cancelled;

    const foundCart = await Cart.findOne({ "products._id": itemId });
    const foundCartProduct = foundCart.products.find((p) => p._id == itemId);

    await Cart.updateOne(
      { "products._id": itemId },
      {
        "products.$.status": status,
      }
    );

    if (status === CART_ITEM_STATUS.Cancelled) {
      await Product.updateOne(
        { _id: foundCartProduct.product },
        { $inc: { quantity: foundCartProduct.quantity } }
      );

      const cart = await Cart.findOne({ _id: cartId });
      const items = cart.products.filter(
        (item) => item.status === CART_ITEM_STATUS.Cancelled
      );

      // All items are cancelled => Cancel order
      if (cart.products.length === items.length) {
        await Order.deleteOne({ _id: orderId });
        await Cart.deleteOne({ _id: cartId });

        return res.status(200).json({
          success: true,
          orderCancelled: true,
          message: `${
            req.user.role === ROLES.Admin ? "Order" : "Your order"
          } has been cancelled successfully`,
        });
      }

      return res.status(200).json({
        success: true,
        message: "Item has been cancelled successfully!",
      });
    }

    res.status(200).json({
      success: true,
      message: "Item status has been updated successfully!",
    });
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
};

const increaseQuantity = (products) => {
  let bulkOptions = products.map((item) => {
    return {
      updateOne: {
        filter: { _id: item.product },
        update: { $inc: { quantity: item.quantity } },
      },
    };
  });

  Product.bulkWrite(bulkOptions);
};
