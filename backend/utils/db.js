require("dotenv").config();
const sequelize = require("../config/database"); // Assuming you've created the Sequelize instance in config/database.js
const User = require("../models/user");
const Address = require("../models/address");
const Merchant = require("../models/merchant");
const Product = require("../models/product");
const Cart = require("../models/cart");
const CartItem = require("../models/cartitem");
const Order = require("../models/order");
const Review = require("../models/review");
const Wishlist = require("../models/wishlist");
const OrderItem = require("../models/orderitem");
const setupDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("\x1b[32m%s\x1b[0m", "✓ MySQL Connected!");

    // Set up associations
    User.hasMany(Address, { foreignKey: "userId", as: "addresses" });
    Address.belongsTo(User, { foreignKey: "userId", as: "user" });

    Merchant.hasMany(Product, { foreignKey: "merchantId", as: "products" });
    Product.belongsTo(Merchant, { foreignKey: "merchantId", as: "merchant" });

    User.hasMany(Cart, { foreignKey: "userId", as: "carts" });
    Cart.belongsTo(User, { foreignKey: "userId", as: "user" });

    Cart.hasMany(CartItem, { foreignKey: "cartId", as: "items" });
    CartItem.belongsTo(Cart, { foreignKey: "cartId", as: "cart" });

    CartItem.belongsTo(Product, { foreignKey: "productId", as: "product" });
    Product.hasMany(CartItem, { foreignKey: "productId", as: "cartItems" });

    User.hasMany(Order, { foreignKey: "userId", as: "orders" });
    Order.belongsTo(User, { foreignKey: "userId", as: "user" });
    Order.belongsTo(Cart, { foreignKey: "cartId", as: "cart" });

    Order.hasMany(OrderItem, { foreignKey: "orderId", as: "items" }); // Match alias "items"
    OrderItem.belongsTo(Order, { foreignKey: "orderId", as: "order" }); // Match alias "order" (if needed)

    Product.hasMany(OrderItem, { foreignKey: "productId", as: "orderItems" }); // Alias for reverse relation
    OrderItem.belongsTo(Product, { foreignKey: "productId", as: "product" }); // Match alias "product"

    Product.hasMany(Review, { foreignKey: "productId", as: "reviews" });
    Review.belongsTo(Product, { foreignKey: "productId", as: "product" });
    User.hasMany(Review, { foreignKey: "userId", as: "reviews" });
    Review.belongsTo(User, { foreignKey: "userId", as: "user" });

    User.hasMany(Wishlist, { foreignKey: "userId", as: "wishlists" });
    Wishlist.belongsTo(User, { foreignKey: "userId", as: "user" });
    Wishlist.belongsTo(Product, { foreignKey: "productId", as: "product" });

    await sequelize.sync({ alter: true });
    console.log("\x1b[32m%s\x1b[0m", "✓ Database tables synced!");
  } catch (error) {
    console.log(
      "\x1b[31m%s\x1b[0m",
      "✗ Unable to connect to the database:",
      error
    );
  }
};

module.exports = setupDB;
