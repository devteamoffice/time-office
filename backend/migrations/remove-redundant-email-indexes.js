"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Drop redundant email indexes
    for (let i = 2; i <= 62; i++) {
      await queryInterface.removeIndex("users", `email_${i}`);
    }
  },

  down: async (queryInterface, Sequelize) => {
    // Re-add the redundant email indexes if needed (rollback)
    for (let i = 2; i <= 62; i++) {
      await queryInterface.addIndex("users", ["email"], {
        name: `email_${i}`,
      });
    }
  },
};
