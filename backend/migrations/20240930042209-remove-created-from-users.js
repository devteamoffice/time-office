"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Remove the 'created' column from the 'users' table
    await queryInterface.removeColumn("users", "created");
  },

  down: async (queryInterface, Sequelize) => {
    // Add the 'created' column back in case of rollback
    await queryInterface.addColumn("users", "created", {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW, // Or any default you prefer
    });
  },
};
