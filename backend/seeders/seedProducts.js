const Product = require("../models/product"); // Adjust the path if needed
const productsData = require("../db.json"); // Path to the JSON file

// Flatten the nested categories/subcategories to get only products
const getFlattenedProducts = () => {
  let products = [];
  productsData.categories.forEach((category) => {
    category.subcategories.forEach((subcategory) => {
      products = products.concat(subcategory.products); // Flatten products
    });
  });
  return products;
};

(async () => {
  try {
    const products = getFlattenedProducts(); // Get flattened product data

    // Insert products from the JSON file into the database
    await Product.bulkCreate(products, {
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
