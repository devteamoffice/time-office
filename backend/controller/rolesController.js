const Role = require("../models/roles");
const { ROLES } = require("../constants/index"); // Ensure ROLES contains valid role names
const User = require("../models/user"); // Assuming User model is imported
/**
 * Assign a new role to a user.
 */

exports.assignRole = async (req, res) => {
  try {
    const { userId, role_name, username, isAdmin } = req.body;

    // Validate role_name
    if (!Object.values(ROLES).includes(role_name)) {
      return res
        .status(400)
        .json({ message: "Invalid role name. Please use a predefined role." });
    }

    // Check if the user exists
    const user = await User.findOne({ where: { id: userId } });
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Check admin privileges of the requester
    const requesterRole = await Role.findOne({
      where: { userId: req.user.id },
    });
    if (!requesterRole || !requesterRole.isAdmin) {
      return res
        .status(403)
        .json({ message: "Unauthorized: Admin privileges required." });
    }

    // Assign role to the user
    const newRole = await Role.create({
      userId,
      role_name,
      username,
      isAdmin,
    });

    return res
      .status(201)
      .json({ message: "Role assigned successfully.", data: newRole });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Internal Server Error.", error: error.message });
  }
};

/**
 * Get all roles in the system.
 */

exports.getRoles = async (req, res) => {
  try {
    const roles = await Role.findAll({
      // include: {
      //   model: User,
      //   as: "user", // Add this line to specify the alias
      //   attributes: ["id", "username"], // Include user info as needed
      //   required: false, // Ensure this is a LEFT JOIN to include all roles, even if there's no user associated
      // },
      // logging: console.log,
    });

    return res.status(200).json(roles);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Internal Server Error.", error: error.message });
  }
};

/**
 * Delete a role by roleId.
 */
exports.deleteRole = async (req, res) => {
  try {
    const { roleId } = req.params;

    // Check admin privileges of the requester
    const requesterRole = await Role.findOne({
      where: { userId: req.user.id },
    });
    if (!requesterRole || !requesterRole.isAdmin) {
      return res
        .status(403)
        .json({ message: "Unauthorized: Admin privileges required." });
    }

    // Check if the role exists
    const role = await Role.findOne({ where: { id: roleId } });
    if (!role) {
      return res.status(404).json({ message: "Role not found." });
    }

    // Delete the role
    await Role.destroy({ where: { id: roleId } });

    return res.status(200).json({ message: "Role deleted successfully." });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Internal Server Error.", error: error.message });
  }
};

/**
 * Update role details by roleId.
 */
exports.updateRole = async (req, res) => {
  try {
    const { roleId } = req.params;
    const { role_name, isAdmin } = req.body;

    // Validate role_name if provided
    if (role_name && !Object.values(ROLES).includes(role_name)) {
      return res
        .status(400)
        .json({ message: "Invalid role name. Please use a predefined role." });
    }

    // Check admin privileges of the requester
    const requesterRole = await Role.findOne({
      where: { userId: req.user.id },
    });
    if (!requesterRole || !requesterRole.isAdmin) {
      return res
        .status(403)
        .json({ message: "Unauthorized: Admin privileges required." });
    }

    // Update the role
    const [updatedRowCount, updatedRoles] = await Role.update(
      { role_name, isAdmin },
      { where: { id: roleId }, returning: true }
    );

    if (updatedRowCount === 0) {
      return res.status(404).json({ message: "Role not found." });
    }

    // Include associated user details in the response
    const updatedRole = updatedRoles[0];
    const user = await User.findOne({ where: { id: updatedRole.userId } });

    return res.status(200).json({
      message: "Role updated successfully.",
      data: { ...updatedRole.toJSON(), user },
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Internal Server Error.", error: error.message });
  }
};

/**
 * Get all users with a specific role.
 */
exports.getUsersByRole = async (req, res) => {
  try {
    const { role_name } = req.params;

    // Validate role_name
    if (!Object.values(ROLES).includes(role_name)) {
      return res
        .status(400)
        .json({ message: "Invalid role name. Please use a predefined role." });
    }

    // Fetch users with the specified role
    const usersWithRole = await Role.findAll({
      where: { role_name },
      include: {
        model: User,
        attributes: ["id", "username", "email"], // Include user info as needed
      },
    });

    if (!usersWithRole.length) {
      return res.status(404).json({ message: "No users found for this role." });
    }

    return res.status(200).json({
      message: "Users retrieved successfully.",
      data: usersWithRole,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Internal Server Error.", error: error.message });
  }
};
