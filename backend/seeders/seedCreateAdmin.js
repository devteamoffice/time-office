const bcrypt = require("bcryptjs");
const User = require("../models/user"); // Adjust the path to the User model
const { ROLES } = require("../constants/index"); // Adjust the path to the ROLES file
require("dotenv").config(); // To load environment variables from .env file

const createAdminUser = async () => {
  try {
    // Check if admin user already exists
    const existingAdmin = await User.findOne({
      where: { email: process.env.ADMIN_EMAIL },
    });

    if (existingAdmin) {
      console.log("Admin user already exists.");
      return;
    }

    // Hash the admin password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, salt);

    // Create a new admin user
    const adminUser = await User.create({
      username: "admin",
      email: process.env.ADMIN_EMAIL,
      password: hashedPassword,
      role: ROLES.Admin, // Use the constant for the admin role
    });

    console.log("Admin user created successfully:", adminUser.email);
  } catch (error) {
    console.error("Error creating admin user:", error.message);
  }
};

// Run the seeder
createAdminUser()
  .then(() => {
    console.log("Seeder completed");
    process.exit(0);
  })
  .catch((error) => {
    console.error("Seeder failed:", error);
    process.exit(1);
  });
