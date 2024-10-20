// migration file: add-subcategoryId-to-products.js

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("products", "subcategoryId", {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: "subcategories", // Name of the target table
        key: "id", // Key in the target table
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("products", "subcategoryId");
  },
};
