// models/Attribute.js
const { DataTypes } = require("sequelize");
const sequelize = require("../database/connectDb");

const Attribute = sequelize.define("Attribute", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tag: {
    type: DataTypes.STRING,
    allowNull: true, // E.g., "product", "category", "address"
  },
  inputType: {
    type: DataTypes.ENUM("dropdown", "radio", "text"),
    allowNull: false,
  },
});

module.exports = Attribute;
