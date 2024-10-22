module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("categories", "sku", {
      type: Sequelize.JSON,
      allowNull: true, // Set to false if you want the field to be required
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("categories", "sku");
  },
};
