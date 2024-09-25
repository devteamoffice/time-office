const { DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // Assuming you have a database configuration file
const slugify = require("slugify");
const Merchant = require("./merchant"); // Import Merchant after its definition

// Brand Model
const Brand = sequelize.define(
  "Brand",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      trim: true,
    },
    slug: {
      type: DataTypes.STRING,
      unique: true,
      set(value) {
        const slugValue = slugify(this.name, {
          lower: true,
          strict: true,
          locale: "en",
          trim: true,
        }).substring(0, 120); // Truncate to 120 characters if needed
        this.setDataValue("slug", slugValue);
      },
    },
    image: {
      type: DataTypes.BLOB("long"),
      allowNull: true,
    },
    imageContentType: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
      trim: true,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    merchantId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Merchants", // Name of the Merchant table
        key: "id",
      },
      allowNull: true,
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
    tableName: "brands",
    timestamps: false, // Disable automatic timestamp fields (createdAt, updatedAt)
  }
);

// Define the association between Brand and Merchant
Brand.belongsTo(Merchant, {
  foreignKey: "merchantId",
  as: "merchants",
});

module.exports = Brand;
