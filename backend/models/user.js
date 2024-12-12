const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/database");
const { ROLES, EMAIL_PROVIDER } = require("../constants");
const Role = require("./roles");
// Function to generate a unique hexadecimal ID
const generateHexId = () => {
  return [...Array(16)]
    .map(() => Math.floor(Math.random() * 16).toString(16))
    .join("");
};

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.STRING, // Change to STRING for hex code
      primaryKey: true,
      allowNull: false,
      defaultValue: generateHexId, // Generate a hex ID by default
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: { isEmail: true },
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    provider: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: EMAIL_PROVIDER.Email,
    },
    googleId: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    facebookId: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    role: {
      type: DataTypes.ENUM(
        ROLES.Admin,
        ROLES.Member,
        ROLES.Merchant,
        ROLES.Developer
      ),
      allowNull: false,
      defaultValue: ROLES.Member,
    },

    resetPasswordToken: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    resetPasswordExpires: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
  },
  {
    tableName: "users",
    timestamps: true,
  }
);

module.exports = User;
