const { DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // Adjust path if needed
const Role = require("./role"); // Ensure the Role model is defined to associate with

const Permission = sequelize.define("Permission", {
  roleId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Role,
      key: "id",
    },
    onDelete: "CASCADE",
  },
  action: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isAllowed: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
});

module.exports = Permission;
