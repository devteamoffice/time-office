const User = require("../models/user"); // Ensure this matches your User model path
const Role = require("../models/roles"); // Ensure this matches your Role model path
const { ROLES } = require("../constants"); // Predefined roles

async function seedRoles() {
  try {
    console.log("Seeding roles...");

    // Clear existing roles
    await Role.destroy({ where: {}, truncate: true });

    const users = await User.findAll();

    if (!users.length) {
      console.log("No users found in the database.");
      return;
    }

    // Map over users and create the role data
    const roleData = users.map((user) => {
      // Default role is 'ROLE MEMBER' if not provided
      const roleName = user.role || ROLES.Member;

      // Explicitly check if the user role is 'Admin' and set isAdmin accordingly
      const isAdmin = roleName === ROLES.Admin;

      return {
        role_id: `ROLE_${Math.random()
          .toString(36)
          .substr(2, 6)
          .toUpperCase()}#${isAdmin ? 1 : 2}`,
        user_id: user.id,
        username: user.username,
        role_name: roleName,
        is_admin: isAdmin, // Set isAdmin true if role is 'Admin', otherwise false
      };
    });

    // Seed the roles into the 'roles' table
    await Role.bulkCreate(roleData, { ignoreDuplicates: true });

    console.log("Roles successfully seeded.");
  } catch (error) {
    console.error("Error seeding roles:", error.message);
  }
}

seedRoles();
