const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Coupon = require("./coupons");

const Discount = sequelize.define(
  "Discount",
  {
    user: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    start: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    end: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    indexes: [
      {
        unique: true,
        fields: ["user", "code"], // Unique index on `user` and `code`
      },
    ],
    timestamps: false,
  }
);

Discount.belongsTo(Coupon, { foreignKey: "coupon", as: "coupons" });

module.exports = Discount;
