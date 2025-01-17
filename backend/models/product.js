const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const slugify = require("slugify");
const { v4: uuidv4 } = require("uuid");
const crypto = require("crypto");
const CartItem = require("./cartitem");
const Product = sequelize.define(
  "Product",
  {
    id: {
      type: DataTypes.STRING(64),
      primaryKey: true,
      unique: true,
      allowNull: false,
      defaultValue: () => {
        return crypto.createHash("sha256").update(uuidv4()).digest("hex");
      },
    },
    sku: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    slug: {
      type: DataTypes.STRING(200), // Set to 120 based on the schema change
      allowNull: true,
      unique: true,
    },
    images: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    brand: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "Brands",
        key: "id",
      },
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: "categories",
        key: "id",
      },
      allowNull: false,
    },
    subcategoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: "subcategories",
        key: "id",
      },
      allowNull: false,
    },
    created: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "products",
    timestamps: false,
  }
);
// In Product model
Product.hasMany(CartItem, {
  foreignKey: "productId", // foreign key in CartItem pointing to Product
  as: "cart_items", // Alias for accessing CartItems from Product
});

module.exports = Product;
