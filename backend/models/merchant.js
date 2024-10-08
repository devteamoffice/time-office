const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/database"); // Adjust the path to your actual database configuration
const { MERCHANT_STATUS } = require("../constants");

const Merchant = sequelize.define(
  "Merchant",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users", // Assuming users table
        key: "id",
      },
      onDelete: "CASCADE", // Delete merchant if associated user is deleted
    },
    brandName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    business: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
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
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
  },
  {
    tableName: "merchants",
    timestamps: true, // Automatic createdAt, updatedAt fields
  }
);

module.exports = Merchant;
