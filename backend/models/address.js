const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./user");

// Address Model
const Address = sequelize.define(
  "Address",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER, // Assuming User ID is an integer
      references: {
        model: "Users", // Name of the User table
        key: "id",
      },
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    zipCode: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    isDefault: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
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
    tableName: "addresses",
    timestamps: false, // Disable automatic timestamp fields (createdAt, updatedAt)
  }
);

// Define the association between Address and User
Address.belongsTo(User, {
  foreignKey: "userId",
  as: "users",
});

module.exports = Address;
