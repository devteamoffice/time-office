const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/database");
const { ROLES, EMAIL_PROVIDER } = require("../constants");

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4, // Auto-generate UUID
      primaryKey: true,
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
