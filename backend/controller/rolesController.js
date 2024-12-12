// controllers/RoleController.js
const Role = require("../models/roles");
const { ROLES } = require("../constants/index"); // Ensure this file exports your ROLES object

exports.assignRole = async (req, res) => {
  try {
    const { userId, roleId, username, roleName, isAdmin } = req.body;

    // Validate the roleName against predefined roles
    if (!Object.values(ROLES).includes(roleName)) {
      return res
        .status(400)
        .json({ message: "Invalid role name. Please use a predefined role." });
    }

    // Check if the requester has admin privileges
    const requesterRole = await Role.findOne({
      where: { userId: req.user.id },
    });

    if (!requesterRole || !requesterRole.isAdmin) {
      return res
        .status(403)
        .json({ message: "Unauthorized: Admin privileges required." });
    }

    // Create or update the role
    const newRole = await Role.create({
      userId,
      roleId,
      username,
      roleName,
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

exports.getRoles = async (req, res) => {
  try {
    const roles = await Role.findAll();
    return res.status(200).json(roles);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Internal Server Error.", error: error.message });
  }
};

exports.deleteRole = async (req, res) => {
  try {
    const { roleId } = req.params;

    // Check if the requester has admin privileges
    const requesterRole = await Role.findOne({
      where: { userId: req.user.id },
    });

    if (!requesterRole || !requesterRole.isAdmin) {
      return res
        .status(403)
        .json({ message: "Unauthorized: Admin privileges required." });
    }

    await Role.destroy({ where: { id: roleId } });
    return res.status(200).json({ message: "Role deleted successfully." });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Internal Server Error.", error: error.message });
  }
};
