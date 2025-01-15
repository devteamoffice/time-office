const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const CartItem = require("./cartitem");
const User = require("./user");

const Cart = sequelize.define(
  "Cart",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.UUID,
      references: {
        model: User,
        key: "id",
      },
      allowNull: true,
    },
    total: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 0.0,
    },
  },
  {
    tableName: "carts",
    timestamps: true, // Enable timestamps so Sequelize can automatically manage `createdAt` and `updatedAt` columns.
  }
);

// Define associations
Cart.hasMany(CartItem, {
  foreignKey: "cartId",
  as: "cart_items", // Use consistent aliasing
});

CartItem.belongsTo(Cart, {
  foreignKey: "cartId",
  as: "cart", // Use consistent aliasing
});

User.hasMany(Cart, {
  foreignKey: "userId",
  as: "carts",
});

Cart.belongsTo(User, {
  foreignKey: "userId",
  as: "user",
});

module.exports = Cart;
