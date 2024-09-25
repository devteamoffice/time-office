const { DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // Assuming you have a database configuration file
const Product = require("./product"); // Assuming the Product model is defined in the same directory
const User = require("./user"); // Assuming the User model is defined in the same directory

// Review Model
const Review = sequelize.define(
  "Review",
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
    title: {
      type: DataTypes.STRING,
      trim: true,
      allowNull: true,
    },
    rating: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    review: {
      type: DataTypes.TEXT,
      trim: true,
      allowNull: true,
    },
    isRecommended: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    status: {
      type: DataTypes.ENUM("Waiting_Approval", "Rejected", "Approved"),
      defaultValue: "Waiting_Approval",
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
    tableName: "reviews",
    timestamps: false,
  }
);

// Define associations
Review.belongsTo(Product, {
  foreignKey: "productId",
  as: "products",
});

Review.belongsTo(User, {
  foreignKey: "userId",
  as: "users",
});

module.exports = Review;
