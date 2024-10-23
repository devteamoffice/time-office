"use strict";
const { v4: uuidv4 } = require("uuid");
const crypto = require("crypto");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Disable foreign key checks
    await queryInterface.sequelize.query("SET FOREIGN_KEY_CHECKS = 0;");

    // Fetch all products from the database
    const products = await queryInterface.sequelize.query(
      `SELECT id FROM products;`,
      { type: Sequelize.QueryTypes.SELECT }
    );

    // Loop through each product and update its id
    for (const product of products) {
      const newHashedId = crypto
        .createHash("sha256")
        .update(uuidv4())
        .digest("hex");

      // Update the id with the new hashed id
      await queryInterface.bulkUpdate(
        "products", // Table name
        { id: newHashedId }, // New values to update
        { id: product.id } // Condition (update where id is current product id)
      );
    }

    // Re-enable foreign key checks
    await queryInterface.sequelize.query("SET FOREIGN_KEY_CHECKS = 1;");
  },

  down: async (queryInterface, Sequelize) => {
    // No safe way to undo the hashed ids, so this will be a no-op
    console.log("Undo operation not supported for hashed IDs");
  },
};
