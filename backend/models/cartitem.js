const { DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // Assuming you have a database configuration file
const { CART_ITEM_STATUS } = require("../constants");

const CartItem = sequelize.define(
  "CartItem",
  {
    productId: {
      type: DataTypes.INTEGER, // Assuming Product ID is an integer
      references: {
        model: "Products", // Name of the Product table
        key: "id",
      },
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    purchasePrice: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    totalPrice: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    priceWithTax: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    totalTax: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    status: {
      type: DataTypes.ENUM(
        CART_ITEM_STATUS.Not_processed,
        CART_ITEM_STATUS.Processing,
        CART_ITEM_STATUS.Shipped,
        CART_ITEM_STATUS.Delivered,
        CART_ITEM_STATUS.Cancelled
      ),
      defaultValue: CART_ITEM_STATUS.Not_processed,
    },
  },
  {
    tableName: "cart_items",
    timestamps: false, // Disable automatic timestamp fields (createdAt, updatedAt)
  }
);

module.exports = CartItem;
