const Product = require("../models/product");
const { v4: uuidv4 } = require("uuid");

const seedCustomProductIds = async () => {
  try {
    // Fetch all products from the database
    const products = await Product.findAll();

    // Loop through each product and assign a custom unique ID to the id field
    for (let product of products) {
      const customId = uuidv4(); // Generate a unique ID

      // Update the product with the new custom ID
      await Product.update(
        { id: customId },
        { where: { id: product.id } } // Updating the 'id' field itself
      );

      console.log(`Assigned custom ID ${customId} to product ${product.name}`);
    }

    console.log("Custom IDs assigned to all products successfully!");
  } catch (error) {
    console.error("Error while assigning custom IDs:", error);
  }
};

// Run the seeder function
seedCustomProductIds();
