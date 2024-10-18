const { DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // Assuming you have a database configuration file
const slugify = require("slugify");

// Product Model
const Product = sequelize.define(
  "Product",
  {
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
        }).substring(0, 120); // Truncate to 120 characters if needed
        this.setDataValue("slug", slugValue);
      },
    },
    // imageUrl: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    // },
    // imageKey: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    // },
    images: {
      type: DataTypes.JSON, // Array of image URLs
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT, // Changed to TEXT to allow longer paragraphs
      allowNull: true,
      trim: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    taxable: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    brand: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "Brands", // Name of the Brand table
        key: "id",
      },
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
    tableName: "products",
    timestamps: false, // Disable automatic timestamp fields (createdAt, updatedAt)
  }
);

module.exports = Product;
