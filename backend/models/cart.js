const { DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // Assuming you have a database configuration file
const CartItem = require("./cartitem"); // Correct import

const Cart = sequelize.define(
  "Cart",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4, // Auto-generate UUID
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    total: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 0.0,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "carts",
  }
);

// Associate Cart with CartItems
Cart.hasMany(CartItem, {
  foreignKey: "cartId", // Foreign key in CartItem that refers to Cart
  as: "items", // Alias for accessing CartItems from Cart
});

CartItem.belongsTo(Cart, { foreignKey: "cartId" });

module.exports = Cart;
