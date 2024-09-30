const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Product = require("./product");
const User = require("./user");

// Wishlist Model
const Wishlist = sequelize.define(
  "Wishlist",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    productId: {
      type: DataTypes.INTEGER,
      references: {
        model: Product,
        key: "id",
      },
      allowNull: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "id",
      },
      allowNull: true,
    },
    isLiked: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    updated: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    created: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "wishlists",
    timestamps: false,
  }
);

// Define associations
Wishlist.belongsTo(Product, {
  foreignKey: "productId",
  as: "product",
});

Wishlist.belongsTo(User, {
  foreignKey: "userId",
  as: "user",
});

module.exports = Wishlist;
