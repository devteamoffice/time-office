const Address = require("../models/address"); // Assuming Address is a Sequelize model

exports.addAddress = async (req, res) => {
  try {
    const user = req.user; // Ensure req.user is populated (via middleware)
    const address = await Address.create({ ...req.body, userId: user.id }); // Assuming `userId` is the foreign key
    res.status(201).json({
      success: true,
      message: "Address has been added successfully.",
      address,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
};

exports.fetchAllAddress = async (req, res) => {
  try {
    const addresses = await Address.findAll(); // Fetch all addresses
    res.status(200).json({ addresses });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
};

exports.fetchAddresses = async (req, res) => {
  try {
    const userId = req.user.id; // Assuming `user` is populated from the authentication middleware

    // Find all addresses for the user
    const addresses = await Address.findAll({
      where: { userId: userId },
    });

    if (!addresses.length) {
      return res.status(404).json({
        message: `No addresses found for user with id: ${userId}.`,
      });
    }

    res.status(200).json({ addresses });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
};

exports.updateAddress = async (req, res) => {
  try {
    const addressId = req.params.id;
    const updateData = req.body;
    const [updated] = await Address.update(updateData, {
      where: { id: addressId },
    });

    if (!updated) {
      return res.status(404).json({
        message: `Cannot find Address with the id: ${addressId}.`,
      });
    }

    res.status(200).json({
      success: true,
      message: "Address has been updated successfully!",
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
};

exports.deleteAddress = async (req, res) => {
  try {
    const deleted = await Address.destroy({ where: { id: req.params.id } });
    if (!deleted) {
      return res.status(404).json({
        message: `Cannot find Address with the id: ${req.params.id}.`,
      });
    }

    res.status(200).json({
      success: true,
      message: "Address has been deleted successfully!",
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
};
