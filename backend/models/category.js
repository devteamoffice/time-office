const { DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // Assuming you have a database configuration file
const slugify = require("slugify");
const { Subcategory } = require("./subCategory");
// Association with Products
const Product = require("./product"); // Assuming the Product model is defined in the same directory

// Category Model
const Category = sequelize.define(
  "Category",
  {
    id: {
      type: DataTypes.INTEGER, // Using integer as the primary key
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      trim: true,
    },
    sku: {
      type: DataTypes.ARRAY(DataTypes.STRING), // Array of SKUs
      allowNull: true,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
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
    tableName: "categories",
    timestamps: false, // Disable automatic timestamp fields (createdAt, updatedAt)
  }
);

// Subcategory Model

// Set up relationships
Category.hasMany(Subcategory, {
  foreignKey: "categoryId",
  as: "subcategories", // Alias for the association
});
Subcategory.belongsTo(Category, {
  foreignKey: "categoryId",
});

// Product associations
Subcategory.hasMany(Product, {
  foreignKey: "subcategoryId",
  as: "products", // Alias for the association
});
Product.belongsTo(Subcategory, {
  foreignKey: "subcategoryId",
});

module.exports = { Category };
