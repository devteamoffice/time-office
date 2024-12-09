const { DataTypes, Op } = require("sequelize"); // Make sure Op is included
const sequelize = require("../config/database"); // Assuming you have a database configuration file
const slugify = require("slugify");
const Subcategory = require("./subCategory");
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
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      set(value) {
        // Generate the slug using the name field
        const slug = slugify(value, { lower: true, strict: true });
        this.setDataValue("slug", slug);
      },
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

// Add dynamic fields for product and subcategory counts
Category.prototype.productCount = async function () {
  const products = await Product.count({
    where: {
      subcategoryId: {
        [Op.in]: sequelize.literal(
          `(SELECT id FROM subcategories WHERE categoryId = ${this.id})`
        ),
      },
    },
  });
  return products;
};

Category.prototype.subcategoryCount = async function () {
  const subcategories = await Subcategory.count({
    where: {
      categoryId: this.id,
    },
  });
  return subcategories;
};

module.exports = { Category };
