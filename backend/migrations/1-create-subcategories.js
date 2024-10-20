// 1-create-subcategories.js
"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("subcategories", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "categories", // Assumes categories table exists
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      updated: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      created: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("subcategories");
  },
};
