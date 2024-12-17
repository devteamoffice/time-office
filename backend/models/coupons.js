const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Coupon = sequelize.define(
  "Coupon", // Model Name
  {
    created: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    // Coupon Code
    code: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isEmail: true,
      },
    },
    // Constraints:
    max_redemptions: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM("active", "inactive", "future_plan"),
      defaultValue: "active",
    },
    discount_type: {
      type: DataTypes.ENUM("percentage", "fixed_amount", "free_shipping"),
      allowNull: false,
    },
    discount_value: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    applicable_products: {
      type: DataTypes.JSON, // Array of Product IDs
      allowNull: true,
    },
  },
  {
    tableName: "coupons", // Explicit table name
    timestamps: false,
  }
);

module.exports = Coupon;
