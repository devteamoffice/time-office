const { DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // Assuming you have a database configuration file
const CartItem = require("./cartitem"); // Assuming the CartItem model is in the same directory

const Cart = sequelize.define(
  "Cart",
  {
    userId: {
      type: DataTypes.INTEGER, // Assuming User ID is an integer
      references: {
        model: "Users", // Name of the User table
        key: "id",
      },
      allowNull: false,
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
    tableName: "carts",
    timestamps: false, // Disable automatic timestamp fields (createdAt, updatedAt)
  }
);

// Define the association between Cart and CartItem
Cart.hasMany(CartItem, {
  foreignKey: "cartId",
  as: "products", // Alias for the association
});

CartItem.belongsTo(Cart, {
  foreignKey: "cartId",
  as: "cart_items",
});

module.exports = Cart;
