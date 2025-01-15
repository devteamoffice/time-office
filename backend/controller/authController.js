const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const User = require("../models/user");
const mailchimp = require("../services/mailchimp");
const mailgun = require("../services/mailgun");
const keys = require("../config/keys");
const { EMAIL_PROVIDER, JWT_COOKIE } = require("../constants");

const { secret, tokenLife } = keys.jwt;

const { generateToken } = require("../middleware/auth");

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ error: "Email and password are required." });
    }

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    if (user.provider !== EMAIL_PROVIDER.Email) {
      return res.status(400).json({
        error: `This email is already in use with the ${user.provider} provider.`,
      });
    }

    const passwordMatches = await bcrypt.compare(password, user.password);
    if (!passwordMatches) {
      return res.status(401).json({ error: "Incorrect password." });
    }

    // Generate JWT token using the utility function
    const token = generateToken(user);

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
    console.error("Login error:", error);
    res.status(500).json({ error: "An unexpected error occurred." });
  }
};

exports.register = async (req, res) => {
  const { email, name, username, password } = req.body;
  try {
    // Log the request body
    console.log("Request Body:", req.body);

    // Validate request body
    if (!req.body || typeof req.body !== "object") {
      return res.status(400).json({
        error: "Invalid request body. Please provide all required fields.",
      });
    }

    if (!email || !name || !username || !password) {
      return res.status(400).json({
        error: "All fields (email, name, username, password) are required.",
      });
    }

    const existingUser = await User.findOne({ where: { email } });

    if (existingUser) {
      return res.status(400).json({
        error: "That email address is already in use.",
      });
    }

    const user = new User({ email, password, name, username });

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;

    console.log("Saving user:", user);

    const registeredUser = await User.create({
      email,
      password: hash, // Use the hashed password directly here
      name,
      username,
    });

    console.log("User saved successfully:", registeredUser);

    const token = generateToken(registeredUser);

    res.status(200).json({
      success: true,
      token: `Bearer ${token}`,
      user: {
        id: registeredUser.id,
        name: registeredUser.name,
        username: registeredUser.username,
        email: registeredUser.email,
        role: registeredUser.role,
      },
    });
  } catch (error) {
    console.error("Error during user registration:", error);
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
};

exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res
        .status(400)
        .json({ error: "You must enter an email address." });
    }

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res
        .status(400)
        .send({ error: "No user found for this email address." });
    }

    const buffer = crypto.randomBytes(48);
    const resetToken = buffer.toString("hex");

    existingUser.resetPasswordToken = resetToken;
    existingUser.resetPasswordExpires = Date.now() + 3600000; // 1 hour expiration time

    await existingUser.save();

    await mailgun.sendEmail(
      existingUser.email,
      "reset",
      req.headers.host,
      resetToken
    );

    res.status(200).json({
      success: true,
      message: "Please check your email for the link to reset your password.",
    });
  } catch (error) {
    console.error("Forgot password error:", error);
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
};

exports.resetToken = async (req, res) => {
  try {
    const { password } = req.body;

    if (!password) {
      return res.status(400).json({ error: "You must enter a password." });
    }

    const resetUser = await User.findOne({
      resetPasswordToken: req.params.token,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!resetUser) {
      return res.status(400).json({
        error:
          "Your token has expired. Please attempt to reset your password again.",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    resetUser.password = hash;
    resetUser.resetPasswordToken = undefined;
    resetUser.resetPasswordExpires = undefined;

    await resetUser.save();

    await mailgun.sendEmail(resetUser.email, "reset-confirmation");

    res.status(200).json({
      success: true,
      message:
        "Password changed successfully. Please login with your new password.",
    });
  } catch (error) {
    console.error("Reset token error:", error);
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
};

exports.reset = async (req, res) => {
  try {
    const { password, confirmPassword } = req.body;
    const email = req.user.email;

    if (!email) {
      return res.status(401).send("Unauthenticated");
    }

    if (!password || !confirmPassword) {
      return res
        .status(400)
        .json({ error: "Both password fields are required." });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match." });
    }

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(400).json({ error: "No user found with that email." });
    }

    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ error: "Please enter your correct old password." });
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(confirmPassword, salt);

    existingUser.password = hash;
    await existingUser.save();

    await mailgun.sendEmail(existingUser.email, "reset-confirmation");

    res.status(200).json({
      success: true,
      message:
        "Password changed successfully. Please login with your new password.",
    });
  } catch (error) {
    console.error("Reset password error:", error);
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
};
