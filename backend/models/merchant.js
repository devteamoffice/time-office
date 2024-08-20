const { DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // Assuming you have a database configuration file
const Brand = require("./brand"); // Assuming the Brand model is defined in the same directory
const { MERCHANT_STATUS } = require("../constants");

// Merchant Model
const Merchant = sequelize.define(
  "Merchant",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      trim: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true, // Validates that the input is a valid email
      },
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    brandName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    business: {
      type: DataTypes.STRING,
      allowNull: true,
      trim: true,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    brandId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Brands", // Name of the Brand table
        key: "id",
      },
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: MERCHANT_STATUS.Waiting_Approval,
      validate: {
        isIn: [
          [
            MERCHANT_STATUS.Waiting_Approval,
            MERCHANT_STATUS.Rejected,
            MERCHANT_STATUS.Approved,
          ],
        ],
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
    tableName: "merchants",
    timestamps: false, // Disable automatic timestamp fields (createdAt, updatedAt)
  }
);

// Define the association between Merchant and Brand
Merchant.belongsTo(Brand, {
  foreignKey: "brandId",
  as: "brand",
});

module.exports = Merchant;
