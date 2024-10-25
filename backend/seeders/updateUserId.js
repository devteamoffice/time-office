// seeders/updateUsersWithHexId.js

const User = require("../models/user"); // Adjust the path as necessary

// Function to generate a random hex code
const generateHexCode = () => {
  return "0x" + Math.floor(Math.random() * 0xffffff).toString(16);
};

const updateUserIdsWithHexCode = async () => {
  try {
    // Fetch all users
    const users = await User.findAll();

    // Update each user with a new hex ID
    for (const user of users) {
      const newHexId = generateHexCode();
      await user.update({ id: newHexId });
      console.log(`Updated user ID: ${user.id} to new hex ID: ${newHexId}`);
    }

    console.log("All user IDs updated successfully.");
  } catch (error) {
    console.error("Error updating user IDs:", error);
  }
};

// Execute the update function
updateUserIdsWithHexCode();
