// models/orderItem.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database"); //

const Order = require("./order");
const Product = require("./product");
const OrderItem = sequelize.define(
  "OrderItem",
  {
    id: {
      type: DataTypes.CHAR(36),
      primaryKey: true,
      allowNull: false,
    },
    orderId: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      references: {
        model: Order, // References the 'orders' table
        key: "id", // The referenced column in the 'orders' table
      },
      onDelete: "CASCADE", // On delete of an order, the order items will be deleted
    },
    productId: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      references: {
        model: Product, // References the 'products' table
        key: "id", // The referenced column in the 'products' table
      },
      onDelete: "RESTRICT", // Prevents deletion of a product if it's linked to an order item
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1, // Default quantity to 1 if not provided
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    tableName: "order_items",
    timestamps: false, // Adjust this based on your schema (if you have `createdAt` and `updatedAt`)
  }
);

// Define associations (if needed)
OrderItem.associate = (models) => {
  OrderItem.belongsTo(models.Order, {
    foreignKey: "orderId",
    as: "order",
  });
  OrderItem.belongsTo(models.Product, {
    foreignKey: "productId",
    as: "product",
  });
};

module.exports = OrderItem;
