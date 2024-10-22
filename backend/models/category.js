const { DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // Assuming you have a database configuration file
const slugify = require("slugify");
const { Subcategory } = require("./subCategory");
const Product = require("./product"); // Assuming you have the Product model too

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

// Category and Subcategory association
Category.hasMany(Subcategory, {
  foreignKey: "categoryId",
  as: "subcategories",
});
Subcategory.belongsTo(Category, {
  foreignKey: "categoryId",
});

// Subcategory and Product association
Subcategory.hasMany(Product, {
  foreignKey: "subcategoryId",
  as: "products",
});
Product.belongsTo(Subcategory, {
  foreignKey: "subcategoryId",
});

module.exports = { Category };
