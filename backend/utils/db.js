require("dotenv").config();
const sequelize = require("../config/database"); // Assuming you've created the Sequelize instance in config/database.js

const setupDB = async () => {
  try {
    // Test the MySQL connection using Sequelize
    await sequelize.authenticate();
    console.log("\x1b[32m%s\x1b[0m", "✓ MySQL Connected!"); // Green color for success message
  } catch (error) {
    console.log(
      "\x1b[31m%s\x1b[0m",
      "✗ Unable to connect to the database:",
      error
    ); // Red color for error message
    return null;
  }
};

module.exports = setupDB;
