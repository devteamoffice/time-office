const User = require("../models/user"); // Sequelize model
const Sequelize = require("sequelize");
const auth = require("../middleware/auth"); // Import auth middleware
// Update searchUser function with Sequelize-compatible syntax
exports.searchUser = async (req, res) => {
  try {
    const { search } = req.query;
    const regex = `%${search}%`; // Adjust for SQL wildcard matching

    const users = await User.findAll({
      where: {
        [Sequelize.Op.or]: [
          { firstName: { [Sequelize.Op.like]: regex } },
          { lastName: { [Sequelize.Op.like]: regex } },
          { email: { [Sequelize.Op.like]: regex } },
        ],
      },
      attributes: { exclude: ["password", "id"] },
      include: [{ model: Merchant, attributes: ["name"] }],
    });

    res.status(200).json({ users });
  } catch (error) {
    console.error("Error searching user:", error);
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
};

// Update fetchUsers function
exports.fetchUsers = async (req, res) => {
  try {
    // Ensure `page` and `limit` are integers with default values if not provided
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;
    const offset = (page - 1) * limit;

    // Use Promise.all to execute queries concurrently
    const [users, count] = await Promise.all([
      User.findAll({
        attributes: { exclude: ["password", "googleId"] },
        order: [["createdAt", "DESC"]],
        limit,
        offset,
      }),
      User.count(),
    ]);

    // Calculate total pages
    const totalPages = Math.ceil(count / limit);

    // Send response with user data and pagination details
    res.status(200).json({
      users,
      totalPages,
      currentPage: page,
      count,
    });
  } catch (error) {
    console.error("Error fetching users:", error); // Log the error for debugging
    res.status(500).json({
      error:
        "An error occurred while processing your request. Please try again later.",
    });
  }
};

// Use auth middleware and update getProfile function
exports.getProfile = async (req, res) => {
  try {
    const userId = req.user.id; // Get user ID from the token

    // Use findByPk to retrieve user by primary key (ID)
    const userDoc = await User.findByPk(userId, {
      attributes: { exclude: ["password"] }, // Exclude the password from the response
    });

    if (!userDoc) {
      return res.status(404).json({
        error: "User not found.",
      });
    }

    // Respond with the user details
    res.status(200).json({
      message: "User profile retrieved successfully.",
      user: userDoc,
    });
  } catch (error) {
    console.error("Error in getProfile:", error);
    res.status(500).json({
      error: "An internal server error occurred. Please try again later.",
    });
  }
};

// Update updateProfile function to use Sequelize method
exports.updateProfile = async (req, res) => {
  try {
    const userId = req.user.id; // Get user ID from token
    const update = req.body.profile;

    const [updatedRowCount, [userDoc]] = await User.update(update, {
      where: { id: userId },
      returning: true, // returns updated document
    });

    if (updatedRowCount === 0) {
      return res.status(404).json({
        error: "User not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Your profile is updated.",
      user: userDoc,
    });
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
};

// Get a user by ID
exports.getUserById = async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await User.findByPk(userId, {
      attributes: { exclude: ["password"] },
    });

    if (!user) {
      return res.status(404).json({
        error: "User not found.",
      });
    }

    res.status(200).json({
      message: "User retrieved successfully.",
      user,
    });
  } catch (error) {
    console.error("Error in getUserById:", error);
    res.status(500).json({
      error: "An internal server error occurred. Please try again later.",
    });
  }
};

// Update user by ID (admin-only)
exports.updateUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const updateData = req.body;

    const [updatedRowCount, [updatedUser]] = await User.update(updateData, {
      where: { id: userId },
      returning: true,
    });

    if (updatedRowCount === 0) {
      return res.status(404).json({
        error: "User not found.",
      });
    }

    res.status(200).json({
      message: "User updated successfully.",
      user: updatedUser,
    });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
};

// Delete user by ID (admin-only)
exports.deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;

    const deletedRowCount = await User.destroy({
      where: { id: userId },
    });

    if (deletedRowCount === 0) {
      return res.status(404).json({
        error: "User not found.",
      });
    }

    res.status(200).json({
      message: "User deleted successfully.",
    });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({
      error: "An internal server error occurred. Please try again later.",
    });
  }
};

// Report user (for users to report other users to admin)
