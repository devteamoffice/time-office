// models/AttributeValue.js
const { DataTypes } = require("sequelize");
const sequelize = require("../database/connectDb");
const Attribute = require("./Attribute");

const AttributeValue = sequelize.define("AttributeValue", {
  value: {
    type: DataTypes.STRING,
    allowNull: false, // The specific value of the attribute
  },
  entityId: {
    type: DataTypes.INTEGER,
    allowNull: false, // ID of the associated entity (e.g., product, category)
  },
  entityType: {
    type: DataTypes.STRING,
    allowNull: false, // Entity type (e.g., "product", "category")
  },
});

// Define relationship
Attribute.hasMany(AttributeValue, { foreignKey: "attributeId" });
AttributeValue.belongsTo(Attribute, { foreignKey: "attributeId" });

module.exports = AttributeValue;
