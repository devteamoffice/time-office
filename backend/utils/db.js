require("dotenv").config();
const chalk = require("chalk");
const sequelize = require("../config/database"); // Assuming you've created the Sequelize instance in config/database.js

const setupDB = async () => {
  try {
    // Test the MySQL connection using Sequelize
    await sequelize.authenticate();
    console.log(`${chalk.green("✓")} ${chalk.blue("MySQL Connected!")}`);
  } catch (error) {
    console.log(
      `${chalk.red("✗")} ${chalk.red("Unable to connect to the database:")}`,
      error
    );
    return null;
  }
};

module.exports = setupDB;
