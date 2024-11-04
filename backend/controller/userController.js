const User = require("../models/user");

exports.searchUser = async (req, res) => {
  try {
    const { search } = req.query;
    const regex = new RegExp(search, "i");

    const users = await User.find(
      {
        $or: [
          { firstName: { $regex: regex } },
          { lastName: { $regex: regex } },
          { email: { $regex: regex } },
        ],
      },
      { password: 0, _id: 0 }
    ).populate("merchant", "name");

    res.status(200).json({ users });
  } catch (error) {
    console.error("Error searching user:", error);
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
};

exports.fetchUsers = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;

    const users = await User.find({}, { password: 0, _id: 0, googleId: 0 })
      .sort("-created")
      .populate("merchant", "name")
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const count = await User.countDocuments();

    res.status(200).json({
      users,
      totalPages: Math.ceil(count / limit),
      currentPage: Number(page),
      count,
    });
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
};

exports.getProfile = async (req, res) => {
  try {
    // Check if the user is authenticated and has an ID and email
    if (!req.user || !req.user.id || !req.user.email) {
      return res.status(401).json({
        error: "Unauthorized access.",
      });
    }

    // Fetch user details from the database using both ID and email
    const userId = req.user.id; // Get user ID from the request
    const userEmail = req.user.email; // Get user email from the request

    const userDoc = await User.findOne({
      where: {
        id: userId, // Check user ID
        email: userEmail, // Check user email
      },
      attributes: { exclude: ["password"] }, // Exclude the password from the response
    });

    // Check if the user exists
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
    console.error(error); // Log the error for debugging
    res.status(500).json({
      error: "An internal server error occurred. Please try again later.",
    });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const user = req.user._id;
    const update = req.body.profile;
    const query = { _id: user };

    const userDoc = await User.findOneAndUpdate(query, update, { new: true });

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
