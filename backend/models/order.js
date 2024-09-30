const { DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // Assuming you have a database configuration file
const Cart = require("./cart"); // Assuming the Cart model is defined in the same directory
const User = require("./user"); // Assuming the User model is defined in the same directory

// Order Model
const Order = sequelize.define(
  "Order",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    cartId: {
      type: DataTypes.INTEGER,
      references: {
        model: Cart, // Refers to the Cart model
        key: "id",
      },
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: User, // Refers to the User model
        key: "id",
      },
      allowNull: false,
    },
    total: {
      type: DataTypes.FLOAT, // Float is used here to represent the total price
      defaultValue: 0,
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    created: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "orders",
    timestamps: false, // Disable automatic timestamp fields (createdAt, updatedAt)
  }
);

// Define associations
Order.belongsTo(Cart, {
  foreignKey: "cartId",
  as: "cart",
});

Order.belongsTo(User, {
  foreignKey: "userId",
  as: "user",
});

module.exports = Order;
