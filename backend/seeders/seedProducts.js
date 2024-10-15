const Product = require("../models/product"); // Adjust the path if needed
const productsData = require("../db.json"); // Path to the JSON file

(async () => {
  try {
    // Insert products from the JSON file into the database
    await Product.bulkCreate(productsData, {
      updateOnDuplicate: [
        "sku",
        "name",
        "imageUrl",
        "imageKey",
        "description",
        "quantity",
        "price",
        "taxable",
        "brand",
      ],
    });
    console.log("Products have been seeded successfully.");
  } catch (error) {
    console.error("Error seeding products:", error);
  }
})();
