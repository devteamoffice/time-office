// Bring in Models & Helpers
const Contact = require("../models/contact");
const mailgun = require("../services/mailgun");

exports.addQueries = async (req, res) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    if (!email) {
      return res
        .status(400)
        .json({ error: "You must enter an email address." });
    }

    if (!name) {
      return res
        .status(400)
        .json({ error: "You must enter description & name." });
    }

    if (!message) {
      return res.status(400).json({ error: "You must enter a message." });
    }

    const existingContact = await Contact.findOne({ email });

    if (existingContact) {
      return res
        .status(400)
        .json({ error: "A request already existed for same email address" });
    }

    const contact = new Contact({
      name,
      email,
      message,
    });

    const contactDoc = await contact.save();

    await mailgun.sendEmail(email, "contact");

    res.status(200).json({
      success: true,
      message: `We receved your message, we will reach you on your email address ${email}!`,
      contact: contactDoc,
    });
  } catch (error) {
    return res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
};
exports.queryById = async (req, res) => {
  try {
    const { id } = req.params; // Extract the ID from request parameters
    const contact = await Contact.findById(id); // Find the contact by ID

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
    const contacts = await Contact.find(); // Retrieve all contacts
    res.status(200).json({ success: true, contacts });
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
