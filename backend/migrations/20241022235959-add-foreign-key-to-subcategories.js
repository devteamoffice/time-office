"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Alter the 'subcategories' table to modify 'categoryId' to allow NULL values
    await queryInterface.changeColumn("subcategories", "categoryId", {
      type: Sequelize.INTEGER,
      allowNull: true, // Allow NULL values
    });

    // Add foreign key constraint after modifying the column
    await queryInterface.addConstraint("subcategories", {
      fields: ["categoryId"],
      type: "foreign key",
      name: "subcategories_ibfk_1", // Give a name to the constraint
      references: {
        table: "categories",
        field: "id",
      },
      onDelete: "SET NULL", // Set to NULL if the category is deleted
      onUpdate: "CASCADE", // Update the subcategory when the category is updated
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Remove the foreign key constraint
    await queryInterface.removeConstraint(
      "subcategories",
      "subcategories_ibfk_1"
    );

    // Revert the 'categoryId' to NOT NULL (if necessary)
    await queryInterface.changeColumn("subcategories", "categoryId", {
      type: Sequelize.INTEGER,
      allowNull: false, // Revert to NOT NULL if needed
    });
  },
};
