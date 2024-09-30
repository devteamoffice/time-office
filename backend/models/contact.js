const { DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // Assuming you have a database configuration file
const Address = require("./address");
// Contact Model
const Contact = sequelize.define(
  "Contact",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      trim: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isEmail: true, // Validate that the email is in the correct format
      },
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: true,
      trim: true,
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
    tableName: "contacts",
    timestamps: false, // Disable automatic timestamp fields (createdAt, updatedAt)
  }
);

module.exports = Contact;
