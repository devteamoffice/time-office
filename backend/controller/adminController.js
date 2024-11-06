const User = require("../models/user");
const Permission = require("../models/permission"); // Assuming the Permission model is defined
const bcrypt = require("bcryptjs");
require("dotenv");
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email address is required." });
    }

    if (!password) {
      return res.status(400).json({ error: "Password is required." });
    }

    const user = await User.findOne({
      where: { email },
    });

    if (!user) {
      return res.status(400).json({ error: "No user found with this email." });
    }

    if (user.role !== "admin") {
      // Check if the user has special admin-granted permissions
      const hasPermission = await checkPermission(user.role, "admin_access");
      if (!hasPermission) {
        return res.status(403).json({ error: "Access denied." });
      }
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Incorrect password." });
    }

    const payload = {
      id: user.id,
      role: user.role,
    };

    const token = jwt.sign(payload, secret, { expiresIn: tokenLife });
    res.status(200).json({
      success: true,
      token: `Bearer ${token}`,
      user: {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Login failed. Please try again." });
  }
};
// Utility function to check permissions
const checkPermission = async (roleId, action) => {
  const permission = await Permission.findOne({
    where: {
      roleId,
      action,
    },
  });

  // Return true if permission is allowed, or if no explicit permission exists
  return permission ? permission.isAllowed : true;
};

// Function to create admin user
const createAdmin = async () => {
  const user = new User({
    username: "admin",
    password: process.env.ADMIN_PASSWORD,
    email: process.env.ADMIN_EMAIL,
    role: "admin",
  });

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  await user.save();
  console.log("Admin created");
};

// View all users (with permission check)
const viewUsers = async (req, res) => {
  try {
    const { roleId } = req.user; // Get user's roleId from authenticated request

    // Check permission to view users
    const hasPermission = await checkPermission(roleId, "view_users");

    if (!hasPermission) {
      return res
        .status(403)
        .json({ message: "Access denied. No permission to view users." });
    }

    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
  }
};

// Edit user (with permission check)
const editUser = async (req, res) => {
  try {
    const { roleId } = req.user;
    const { id } = req.params; // User ID to edit
    const updatedData = req.body;

    // Check permission to edit users
    const hasPermission = await checkPermission(roleId, "edit_users");

    if (!hasPermission) {
      return res
        .status(403)
        .json({ message: "Access denied. No permission to edit users." });
    }

    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    await user.update(updatedData);
    res.json({ message: "User updated successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Error updating user", error });
  }
};

// Delete user (with permission check)
const deleteUser = async (req, res) => {
  try {
    const { roleId } = req.user;
    const { id } = req.params; // User ID to delete

    // Check permission to delete users
    const hasPermission = await checkPermission(roleId, "delete_users");

    if (!hasPermission) {
      return res
        .status(403)
        .json({ message: "Access denied. No permission to delete users." });
    }

    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    await user.destroy();
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting user", error });
  }
};

// Create user with specific permissions (with admin check)
const createUserWithPermissions = async (req, res) => {
  try {
    const { roleId } = req.user; // Current logged-in user's role

    // Check if current user has permission to create other users
    const hasPermission = await checkPermission(roleId, "create_users");

    if (!hasPermission) {
      return res
        .status(403)
        .json({ message: "Access denied. No permission to create users." });
    }

    const { username, email, password, role } = req.body; // Extracting new user info
    const user = new User({
      username,
      email,
      password,
      role,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();
    res.json({ message: "User created successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Error creating user", error });
  }
};

// Exporting all functions
module.exports = {
  createAdmin,
  viewUsers,
  editUser,
  deleteUser,
  createUserWithPermissions,
  adminLogin,
};
