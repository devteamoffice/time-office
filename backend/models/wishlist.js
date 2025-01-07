// Wishlist Model
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Product = require("./product");
const User = require("./user");

const Wishlist = sequelize.define(
  "Wishlist",
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
      allowNull: false,
    },
    productIds: {
      type: DataTypes.JSONB,
      allowNull: false,
      defaultValue: [],
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
    timestamps: true,
    createdAt: "created",
    updatedAt: "updated",
  }
);

Wishlist.belongsTo(User, { foreignKey: "userId", as: "user" });

module.exports = Wishlist;
