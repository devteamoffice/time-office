const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Product = require("./product"); // Import Product mode

const CartItem = sequelize.define(
  "CartItem",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    cartId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Carts", // Refers to the Cart model
        key: "id",
      },
    },
    productId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Product", // Refers to the Product model
        key: "id",
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    purchasePrice: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
    },
    totalPrice: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
    },
    priceWithTax: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
    },
    totalTax: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
    },
    status: {
      type: DataTypes.ENUM(
        "NOT_PROCESSED",
        "PROCESSING",
        "SHIPPED",
        "DELIVERED",
        "CANCELLED"
      ),
      allowNull: true,
      defaultValue: "NOT_PROCESSED",
    },
  },
  {
    tableName: "cart_items", // Matches the table name
    timestamps: false, // Automatically manages `createdAt` and `updatedAt`
  }
);

// Define associations

module.exports = CartItem;
