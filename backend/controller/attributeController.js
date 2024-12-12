// controllers/attributesController.js
const Attribute = require("../models/attributes");
const AttributeValue = require("../models/attributevalue");

// Create a new attribute
exports.createAttribute = async (req, res) => {
  try {
    const { name, tag, inputType } = req.body;
    const attribute = await Attribute.create({ name, tag, inputType });
    res.status(201).json(attribute);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all attributes
exports.getAttributes = async (req, res) => {
  try {
    const attributes = await Attribute.findAll();
    res.status(200).json(attributes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create attribute value
exports.createAttributeValue = async (req, res) => {
  try {
    const { attributeId, value, entityId, entityType } = req.body;
    const attributeValue = await AttributeValue.create({
      attributeId,
      value,
      entityId,
      entityType,
    });
    res.status(201).json(attributeValue);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get attribute values for an entity
exports.getAttributeValuesByEntity = async (req, res) => {
  try {
    const { entityId, entityType } = req.params;
    const attributeValues = await AttributeValue.findAll({
      where: { entityId, entityType },
      include: [Attribute],
    });
    res.status(200).json(attributeValues);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// Update an attribute
exports.updateAttribute = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, tag, inputType } = req.body;

    const attribute = await Attribute.findByPk(id);
    if (!attribute) {
      return res.status(404).json({ error: "Attribute not found" });
    }

    await attribute.update({ name, tag, inputType });
    res
      .status(200)
      .json({ message: "Attribute updated successfully", attribute });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete an attribute
exports.deleteAttribute = async (req, res) => {
  try {
    const { id } = req.params;

    const attribute = await Attribute.findByPk(id);
    if (!attribute) {
      return res.status(404).json({ error: "Attribute not found" });
    }

    await attribute.destroy();
    res.status(200).json({ message: "Attribute deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an attribute value
exports.updateAttributeValue = async (req, res) => {
  try {
    const { id } = req.params;
    const { value } = req.body;

    const attributeValue = await AttributeValue.findByPk(id);
    if (!attributeValue) {
      return res.status(404).json({ error: "Attribute value not found" });
    }

    await attributeValue.update({ value });
    res.status(200).json({
      message: "Attribute value updated successfully",
      attributeValue,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete an attribute value
exports.deleteAttributeValue = async (req, res) => {
  try {
    const { id } = req.params;

    const attributeValue = await AttributeValue.findByPk(id);
    if (!attributeValue) {
      return res.status(404).json({ error: "Attribute value not found" });
    }

    await attributeValue.destroy();
    res.status(200).json({ message: "Attribute value deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
