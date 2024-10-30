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
    const userId = req.user.id; // Fetch `id` directly from the user object
    const userDoc = await User.findOne({ _id: userId }, { password: 0 }); // Use `_id` for querying by user ID

    if (!userDoc) {
      return res.status(404).json({
        error: "User not found.",
      });
    }

    res.status(200).json({
      message: "User profile retrieved successfully.",
      user: userDoc,
    });
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({
      // Use 500 for server-side errors
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
