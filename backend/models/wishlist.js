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
      allowNull: false, // Enforcing that the wishlist item must have a product
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "id",
      },
      allowNull: false, // Enforcing that the wishlist item must have a user
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
    timestamps: true, // Sequelize will manage createdAt and updatedAt
    createdAt: "created",
    updatedAt: "updated",
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

// In Product model
Product.hasMany(Wishlist, {
  foreignKey: "productId",
  as: "wishlists",
});

// In User model
User.hasMany(Wishlist, {
  foreignKey: "userId",
  as: "wishlists",
});

module.exports = Wishlist;
