// Bring in Models & Helpers
const Contact = require("../models/contact");
const mailgun = require("../services/mailgun");

exports.addQueries = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate required fields
    if (!email) {
      return res
        .status(400)
        .json({ error: "You must enter an email address." });
    }

    if (!name) {
      return res.status(400).json({ error: "You must enter a name." });
    }

    if (!message) {
      return res.status(400).json({ error: "You must enter a message." });
    }

    // Check if the contact already exists
    const existingContact = await Contact.findOne({
      where: { email },
    });

    if (existingContact) {
      return res.status(400).json({
        error: "A request already exists for the same email address.",
      });
    }

    // Create a new contact record
    const contact = await Contact.create({
      name,
      email,
      message,
    });

    // Send a confirmation email
    await mailgun.sendEmail(email, "contact");

    res.status(200).json({
      success: true,
      message: `We received your message. We will reach you at ${email}!`,
      contact,
    });
  } catch (error) {
    console.error("Error adding query:", error); // For better debugging

    return res.status(500).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
};

exports.queryById = async (req, res) => {
  try {
    const { id } = req.params; // Extract the ID from request parameters
    const contact = await Contact.findByPk(id); // Use findByPk for UUID primary key

    if (!contact) {
      return res.status(404).json({ error: "Contact not found." });
    }

    res.status(200).json({ success: true, contact });
  } catch (error) {
    return res.status(400).json({
      error: "Error retrieving contact. Please try again.",
    });
  }
};

exports.allQueries = async (req, res) => {
  try {
    // Get page and limit from query parameters (defaults to 1 and 10 respectively)
    const { page = 1, limit = 10 } = req.query;

    // Calculate the offset for pagination
    const offset = (page - 1) * limit;

    // Fetch paginated contacts from the database
    const { count, rows } = await Contact.findAndCountAll({
      limit: parseInt(limit),
      offset: offset,
    });

    // Send the response with paginated data
    res.status(200).json({
      success: true,
      contacts: rows, // Data for current page
      totalItems: count, // Total number of contacts in the database
      totalPages: Math.ceil(count / limit), // Total pages based on count and limit
      currentPage: parseInt(page), // Current page
    });
  } catch (error) {
    return res.status(400).json({
      error: "Error retrieving contacts. Please try again.",
    });
  }
};

exports.deleteQuery = async (req, res) => {
  try {
    const { id } = req.params; // Extract the ID from request parameters
    const contact = await Contact.findByIdAndDelete(id); // Delete the contact by ID

    if (!contact) {
      return res.status(404).json({ error: "Contact not found." });
    }

    res.status(200).json({
      success: true,
      message: "Contact query deleted successfully.",
    });
  } catch (error) {
    return res.status(400).json({
      error: "Error deleting contact. Please try again.",
    });
  }
};
