const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Coupon = sequelize.define(
  "Coupon",
  {
    created: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    // Qualifiers:
    code: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: true,
      validate: {
        isEmail: true,
      },
    },
    // Constraints:
    duration: {
      type: DataTypes.STRING,
      defaultValue: "once",
    },
    duration_in_months: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    redeem_by: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    max_redemptions: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    times_redeemed: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    // Reward:
    percent_off: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    amount_off: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    currency: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    metadata: {
      type: DataTypes.JSON,
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Coupon;
