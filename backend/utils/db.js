const Permission = require("../models/permission");
require("dotenv").config();
const sequelize = require("../config/database");
const Role = require("../models/roles");
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
const Subcategory = require("../models/subCategory");

const setupDB = async () => {
  try {
    // Test the MySQL connection using Sequelize
    await sequelize.authenticate();
    console.log("\x1b[32m%s\x1b[0m", "✓ MySQL Connected!");

    // Define associations between models

    // User and Address associations
    User.hasMany(Address, { foreignKey: "userId", as: "addresses" });
    Address.belongsTo(User, { foreignKey: "userId", as: "user" });
    console.log(
      "\x1b[32m%s\x1b[0m",
      "✓ User and Address associations defined!"
    );

    // Role-User association
    Role.hasMany(User, { foreignKey: "roleId", as: "users" });
    User.belongsTo(Role, { foreignKey: "roleId", as: "role" });
    console.log("\x1b[32m%s\x1b[0m", "✓ Role and User associations defined!");

    // User and Cart associations
    User.hasMany(Cart, { foreignKey: "userId", as: "carts" });
    Cart.belongsTo(User, { foreignKey: "userId", as: "user" });
    console.log("\x1b[32m%s\x1b[0m", "✓ User and Cart associations defined!");

    // Cart and CartItem associations
    Cart.hasMany(CartItem, { foreignKey: "cartId", as: "items" });
    CartItem.belongsTo(Cart, { foreignKey: "cartId", as: "cart" });
    CartItem.belongsTo(Product, { foreignKey: "productId", as: "product" });
    console.log(
      "\x1b[32m%s\x1b[0m",
      "✓ Cart and CartItem associations defined!"
    );

    // User and Order associations
    User.hasMany(Order, { foreignKey: "userId", as: "orders" });
    Order.belongsTo(User, { foreignKey: "userId", as: "user" });
    Order.belongsTo(Cart, { foreignKey: "cartId", as: "cart" });
    console.log("\x1b[32m%s\x1b[0m", "✓ User and Order associations defined!");

    // Product and Review associations
    Product.hasMany(Review, { foreignKey: "productId", as: "reviews" });
    Review.belongsTo(Product, { foreignKey: "productId", as: "product" });
    User.hasMany(Review, { foreignKey: "userId", as: "userReviews" });
    Review.belongsTo(User, { foreignKey: "userId", as: "user" });
    console.log(
      "\x1b[32m%s\x1b[0m",
      "✓ Product, User, and Review associations defined!"
    );

    // User and Wishlist associations
    User.hasMany(Wishlist, { foreignKey: "userId", as: "wishlists" });
    Wishlist.belongsTo(User, { foreignKey: "userId", as: "user" });
    Wishlist.belongsTo(Product, { foreignKey: "productId", as: "product" });
    console.log(
      "\x1b[32m%s\x1b[0m",
      "✓ User and Wishlist associations defined!"
    );

    // Category and Subcategory association
    Category.hasMany(Subcategory, {
      foreignKey: "categoryId",
      as: "subcategories",
    });
    Subcategory.belongsTo(Category, {
      foreignKey: "categoryId",
      as: "category",
    });
    console.log(
      "\x1b[32m%s\x1b[0m",
      "✓ Category and Subcategory associations defined!"
    );

    // Category and Product association
    Category.hasMany(Product, {
      foreignKey: "categoryId",
      as: "categoryProducts",
    });
    Product.belongsTo(Category, {
      foreignKey: "categoryId",
      as: "productCategory",
    });
    console.log(
      "\x1b[32m%s\x1b[0m",
      "✓ Category and Product associations defined!"
    );

    // Subcategory and Product association
    Subcategory.hasMany(Product, { foreignKey: "subcategoryId" });
    Product.belongsTo(Subcategory, { foreignKey: "subcategoryId" });
    console.log(
      "\x1b[32m%s\x1b[0m",
      "✓ Subcategory and Product associations defined!"
    );

    // Sync models with the database
    await sequelize.sync({ force: false }); // Use force: true for development
    console.log("\x1b[32m%s\x1b[0m", "✓ Database tables synced!");
  } catch (error) {
    console.log(
      "\x1b[31m%s\x1b[0m",
      "✗ Unable to connect to the database:",
      error
    );
    return null;
  }
};

module.exports = setupDB;
