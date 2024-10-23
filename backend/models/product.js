const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const slugify = require("slugify");
const { v4: uuidv4 } = require("uuid");
const crypto = require("crypto");

// Product Model
const Product = sequelize.define(
  "Product",
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      unique: true,
      allowNull: false, // Ensure this is not null
      defaultValue: () => {
        // Generating a UUID and then encoding it with a hashed format
        return crypto.createHash("sha256").update(uuidv4()).digest("hex");
      },
    },
    sku: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      trim: true,
    },
    slug: {
      type: DataTypes.STRING,
      unique: true,
      set(value) {
        const slugValue = slugify(this.name, {
          lower: true,
          strict: true,
          locale: "en",
          trim: true,
        }).substring(0, 120);
        this.setDataValue("slug", slugValue);
      },
    },
    images: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      trim: true,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    brand: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "Brands", // Name of the Brand table
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

module.exports = Product;
