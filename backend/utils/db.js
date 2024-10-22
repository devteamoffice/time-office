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
const { Category } = require("../models/category");
const { Subcategory } = require("../models/subCategory");
const setupDB = async () => {
  try {
    // Test the MySQL connection using Sequelize
    await sequelize.authenticate();
    console.log("\x1b[32m%s\x1b[0m", "✓ MySQL Connected!"); // Green color for success message

    // Sync the models with the database
    await sequelize.sync({ alter: true }); // Change to { force: true } if you want to drop existing tables
    console.log("\x1b[32m%s\x1b[0m", "✓ Database tables synced!"); // Success message for syncing

    // Set up associations
    User.hasMany(Address, { foreignKey: "userId", as: "addresses" });
    Address.belongsTo(User, { foreignKey: "userId", as: "users" });

    Merchant.hasMany(Product, { foreignKey: "merchantId", as: "products" });
    Product.belongsTo(Merchant, { foreignKey: "merchantId", as: "merchants" });

    User.hasMany(Cart, { foreignKey: "userId", as: "carts" });
    Cart.belongsTo(User, { foreignKey: "userId", as: "users" });

    Cart.hasMany(CartItem, { foreignKey: "cartId", as: "items" });
    CartItem.belongsTo(Cart, { foreignKey: "cartId", as: "carts" });
    CartItem.belongsTo(Product, { foreignKey: "productId", as: "products" });

    User.hasMany(Order, { foreignKey: "userId", as: "orders" });
    Order.belongsTo(User, { foreignKey: "userId", as: "users" });
    Order.belongsTo(Cart, { foreignKey: "cartId", as: "carts" });

    Product.hasMany(Review, { foreignKey: "productId", as: "reviews" });
    Review.belongsTo(Product, { foreignKey: "productId", as: "products" });
    User.hasMany(Review, { foreignKey: "userId", as: "reviews" });
    Review.belongsTo(User, { foreignKey: "userId", as: "users" });

    User.hasMany(Wishlist, { foreignKey: "userId", as: "wishlists" });
    Wishlist.belongsTo(User, { foreignKey: "userId", as: "users" });
    Wishlist.belongsTo(Product, { foreignKey: "productId", as: "products" });

    Category.hasMany(Subcategory, {
      foreignKey: "categoryId",
      as: "subcategories",
    });
    Subcategory.belongsTo(Category, { foreignKey: "categoryId" });

    Subcategory.hasMany(Product, {
      foreignKey: "subcategoryId",
      as: "products",
    });
    Product.belongsTo(Subcategory, { foreignKey: "subcategoryId" });

    Category.hasMany(Product, { foreignKey: "categoryId", as: "products" });
    Product.belongsTo(Category, { foreignKey: "categoryId" });
  } catch (error) {
    console.log(
      "\x1b[31m%s\x1b[0m",
      "✗ Unable to connect to the database:",
      error
    ); // Red color for error message
    return null;
  }
};

module.exports = setupDB;
