const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./user");
const Role = sequelize.define(
  "Role",
  {
    role_id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "roles", // Match the actual table name in the database
  }
);

Role.beforeCreate((role, options) => {
  const randomChars = Math.random().toString(36).substring(2, 6).toUpperCase();
  const priority = role.isAdmin ? 1 : 2; // Admin gets priority 1, user roles start at 2
  role.role_id = `ROLE_${randomChars}#${priority}`;
});
User.hasMany(Role, { foreignKey: "user_id", as: "roles" });
Role.belongsTo(User, { foreignKey: "user_id", as: "user" });

module.exports = Role;
