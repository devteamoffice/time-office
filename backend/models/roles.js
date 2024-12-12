// models/Role.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // Adjust the path if needed

const Role = sequelize.define("Role", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  isAdmin: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  roleId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  roleName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Role;
