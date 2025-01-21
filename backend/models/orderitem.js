const { DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // Update with your Sequelize instance

const OrderItem = sequelize.define(
  "OrderItem",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    orderId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Order", // Name of the Orders table
        key: "id",
      },
      onDelete: "CASCADE", // Deletes order items when the order is deleted
    },
    productId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Products", // Name of the Products table
        key: "id",
      },
      onDelete: "RESTRICT", // Prevents deletion if there are order items referencing the product
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
      },
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        isDecimal: true,
        min: 0,
      },
    },
  },
  {
    tableName: "order_items",
    timestamps: false,
    underscored: true,
  }
);

module.exports = OrderItem;
