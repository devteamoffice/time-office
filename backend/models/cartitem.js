const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/database"); // Assuming you have a database configuration file
const { CART_ITEM_STATUS } = require("../constants");

const CartItem = sequelize.define(
  "CartItem",
  {
    productId: {
      type: Sequelize.UUID, // or whatever type you use for productId
      references: {
        model: "Products", // Name of the Product table
        key: "id",
      },
      allowNull: false,
    },
    quantity: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    purchasePrice: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    totalPrice: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    priceWithTax: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    totalTax: {
      type: Sequelize.FLOAT,
      allowNull: false,
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
