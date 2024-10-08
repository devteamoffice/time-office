const { DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // Sequelize instance
const User = require("./user"); // Importing User model
const Contact = require("./contact"); // Importing Contact model

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
      type: DataTypes.INTEGER,
      references: {
        model: User, // Referencing User model, not the table name
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
    timestamps: false, // Disable automatic timestamps (createdAt, updatedAt)
  }
);

// Define the association between Address and User
Address.belongsTo(User, {
  foreignKey: "userId",
  as: "user", // Adjusted alias to "user" (singular for belongsTo association)
});

// Define the association between Address and Contact
Address.hasMany(Contact, {
  foreignKey: "id",
  as: "contact", // Keep as plural for hasMany association
});

module.exports = Address;
