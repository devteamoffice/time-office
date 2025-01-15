const { Sequelize } = require("sequelize");
const User = require("../models/user");

const revertToUUID = async () => {
  try {
    const users = await User.findAll();
    for (const user of users) {
      const newUuid = Sequelize.UUIDV4();
      await user.update({ id: newUuid });
      console.log(`Updated user ID: ${user.id} to new UUID: ${newUuid}`);
    }
    console.log("All user IDs reverted to UUIDs successfully.");
  } catch (error) {
    console.error("Error reverting user IDs:", error);
  }
};

revertToUUID();
