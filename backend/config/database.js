const { Sequelize } = require("sequelize");

// Create a Sequelize instance
const sequelize = new Sequelize("database_name", "username", "password", {
  host: "localhost", // Replace with your MySQL host, e.g., '127.0.0.1'
  dialect: "mysql", // Choose the database dialect (MySQL in this case)
  port: 3306, // Default MySQL port is 3306

  // Pool configuration used to manage connections
  pool: {
    max: 5, // Maximum number of connection in pool
    min: 0, // Minimum number of connection in pool
    acquire: 30000, // Maximum time (ms) that pool will try to get connection before throwing error
    idle: 10000, // Maximum time (ms) that a connection can be idle before being released
  },

  // Optional logging configuration (can be a function or boolean)
  logging: false, // Set to 'console.log' to see SQL queries
});

// Test the connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = sequelize;
