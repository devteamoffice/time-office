const categories = require("./categories.json"); // Adjust path to categories.json

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Ensure the categories are an array
    if (!Array.isArray(categories)) {
      throw new Error("categories.json must be an array of categories.");
    }

    // Insert categories data
    await queryInterface.bulkInsert(
      "categories",
      categories.map((category) => {
        // Map through categories and remove 'products' field as we will insert them separately
        const { products, ...categoryData } = category;
        return categoryData; // return the category without 'products'
      })
    );

    // Now that categories are inserted, we'll insert products associated with each category
    for (const category of categories) {
      const categoryId = category.id; // The category ID is already available from the JSON data

      const productsData = category.products.map((product) => ({
        ...product,
        categoryId, // Assign the category ID to each product
        created: new Date(),
        updated: new Date(),
      }));

      // Insert products for the current category
      await queryInterface.bulkInsert("products", productsData);
    }
  },

  down: async (queryInterface, Sequelize) => {
    // Rollback the inserted data
    await queryInterface.bulkDelete("products", null, {});
    await queryInterface.bulkDelete("categories", null, {});
  },
};
