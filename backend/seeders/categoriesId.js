const categories = require("./categories.json"); // Adjust path to categories.json

module.exports = {
  up: async (queryInterface, Sequelize) => {
    if (!Array.isArray(categories)) {
      throw new Error("categories.json must be an array of categories.");
    }

    // Insert categories into the database
    const insertedCategories = await queryInterface.bulkInsert(
      "categories",
      categories.map((category) => {
        const { products, ...categoryData } = category; // Exclude 'products' field
        return {
          ...categoryData,
          createdAt: new Date(),
          updatedAt: new Date(),
        };
      }),
      { returning: true } // This allows us to get back the inserted category IDs
    );

    // Create a map of category names to their IDs
    const categoryMap = {};
    for (const insertedCategory of insertedCategories) {
      categoryMap[insertedCategory.name] = insertedCategory.id;
    }

    // Insert products with the correct categoryId
    const productsToInsert = [];
    for (const category of categories) {
      const categoryId = categoryMap[category.name];
      for (const product of category.products) {
        productsToInsert.push({
          name: product.name,
          categoryId, // Associate product with its category ID
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      }
    }

    await queryInterface.bulkInsert("products", productsToInsert);
  },

  down: async (queryInterface, Sequelize) => {
    // Rollback products and categories data
    await queryInterface.bulkDelete("products", null, {});
    await queryInterface.bulkDelete("categories", null, {});
  },
};
