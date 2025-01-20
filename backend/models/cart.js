const { DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // Assuming you have a database configuration file
const CartItem = require("./cartitem"); // Correct import

const Cart = sequelize.define(
  "Cart",
  {
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Users",
        key: "id",
      },
      allowNull: false,
    },
  },
  {
    tableName: "carts",
    timestamps: true,
  }
);

// Associate Cart with CartItems
Cart.hasMany(CartItem, {
  foreignKey: "cartId", // Foreign key in CartItem that refers to Cart
  as: "items", // Alias for accessing CartItems from Cart
});

CartItem.belongsTo(Cart, { foreignKey: "cartId" });

module.exports = Cart;
