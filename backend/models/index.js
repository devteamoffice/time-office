const sequelize = require("../config/database");
const Product = require("./product");
const CartItem = require("./cartitem");
const Cart = require("./cart"); // Ensure Cart is imported
const Order = require("./order"); // Ensure Order is imported
const User = require("./user"); // Ensure User is imported
// Add other models as needed

// Register models
const models = {
  Product,
  CartItem,
  Cart,
  Order,
  User,
  // Include other models as needed
};

// Initialize associations
Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(sequelize.models);
  }
});

module.exports = models;
