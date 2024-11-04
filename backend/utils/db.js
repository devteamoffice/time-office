const Permission = require("../models/permission");
require("dotenv").config();
const sequelize = require("../config/database");
const Role = require("../models/role");
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
    console.log("\x1b[32m%s\x1b[0m", "✓ MySQL Connected!"); // Green color for success message

    // Define associations between Role and Permission
    // Role.hasMany(Permission, { foreignKey: "roleId", onDelete: "CASCADE" });
    // Permission.belongsTo(Role, { foreignKey: "roleId" });
    // User.belongsTo(Role, { foreignKey: "roleId" });
    // console.log(
    //   "\x1b[32m%s\x1b[0m",
    //   "✓ Role and Permission associations defined!"
    // );

    // Define associations between models within the setupDB function
    User.hasMany(Address, { foreignKey: "userId", as: "addresses" });
    Address.belongsTo(User, { foreignKey: "userId", as: "users" });
    console.log(
      "\x1b[32m%s\x1b[0m",
      "✓ User and Address associations defined!"
    );

    // Merchant.hasMany(Product, { foreignKey: "merchantId", as: "products" });
    // Product.belongsTo(Merchant, { foreignKey: "merchantId", as: "merchants" });
    // console.log(
    //   "\x1b[32m%s\x1b[0m",
    //   "✓ Merchant and Product associations defined!"
    // );

    User.hasMany(Cart, { foreignKey: "userId", as: "carts" });
    Cart.belongsTo(User, { foreignKey: "userId", as: "users" });
    console.log("\x1b[32m%s\x1b[0m", "✓ User and Cart associations defined!");

    Cart.hasMany(CartItem, { foreignKey: "cartId", as: "items" });
    CartItem.belongsTo(Cart, { foreignKey: "cartId", as: "carts" });
    CartItem.belongsTo(Product, { foreignKey: "productId", as: "products" });
    console.log(
      "\x1b[32m%s\x1b[0m",
      "✓ Cart and CartItem associations defined!"
    );

    User.hasMany(Order, { foreignKey: "userId", as: "orders" });
    Order.belongsTo(User, { foreignKey: "userId", as: "users" });
    Order.belongsTo(Cart, { foreignKey: "cartId", as: "carts" });
    console.log("\x1b[32m%s\x1b[0m", "✓ User and Order associations defined!");

    Product.hasMany(Review, { foreignKey: "productId", as: "reviews" });
    Review.belongsTo(Product, { foreignKey: "productId", as: "products" });
    User.hasMany(Review, { foreignKey: "userId", as: "reviews" });
    Review.belongsTo(User, { foreignKey: "userId", as: "users" });
    console.log(
      "\x1b[32m%s\x1b[0m",
      "✓ Product, User, and Review associations defined!"
    );

    User.hasMany(Wishlist, { foreignKey: "userId", as: "wishlists" });
    Wishlist.belongsTo(User, { foreignKey: "userId", as: "users" });
    Wishlist.belongsTo(Product, { foreignKey: "productId", as: "products" });
    console.log(
      "\x1b[32m%s\x1b[0m",
      "✓ User and Wishlist associations defined!"
    );

    // Keep the Category to Subcategory association
    Category.hasMany(Subcategory, {
      foreignKey: "categoryId",
      as: "subcategories", // Alias for Category -> Subcategory association
    });
    Subcategory.belongsTo(Category, { foreignKey: "categoryId" });
    console.log(
      "\x1b[32m%s\x1b[0m",
      "✓ Category and Subcategory associations defined!"
    );

    // Update the alias for Category to Product association to avoid conflict
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
      "✓ Category and Product associations defined with unique alias!"
    );

    Category.hasMany(Product, { foreignKey: "categoryId", as: "products" });
    Product.belongsTo(Category, { foreignKey: "categoryId" });
    console.log(
      "\x1b[32m%s\x1b[0m",
      "✓ Category and Product associations defined!"
    );

    // Sync the models with the database (do not alter foreign keys every time)
    await sequelize.sync({ force: false }); // Change to { force: true } if you want to drop existing tables
    console.log("\x1b[32m%s\x1b[0m", "✓ Database tables synced!"); // Success message for syncing
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
