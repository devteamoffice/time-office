const { DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // Assuming you have a database configuration file

// Contact Model
const Contact = sequelize.define(
  "Contact",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4, // Automatically generate a UUIDv4 for each contact
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false, // Make name a required field
      trim: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false, // Make email a required field
      validate: {
        isEmail: true, // Validate that the email is in the correct format
      },
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false, // Make message a required field
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
