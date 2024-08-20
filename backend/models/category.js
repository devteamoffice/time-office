const { DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // Assuming you have a database configuration file
const slugify = require("slugify");
// Association with Products
const Product = require("./product"); // Assuming the Product model is defined in the same directory

// Category Model
const Category = sequelize.define(
  "Category",
  {
    id: {
      type: DataTypes.INTEGER, // Assuming you want to use an integer as the primary key
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
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
    image: {
      type: DataTypes.BLOB("long"), // Use BLOB for storing binary data like images
      allowNull: true,
    },
    imageContentType: {
      type: DataTypes.STRING, // Store content type (e.g., 'image/jpeg', 'image/png')
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
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

Category.hasMany(Product, {
  foreignKey: "categoryId",
  as: "products", // Alias for the association
});

module.exports = Category;
