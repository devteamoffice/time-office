// controllers/subcategoryController.js
const { Subcategory } = require("../models/subCategory");

exports.createSubcategory = async (req, res) => {
  try {
    const { name, categoryId, isActive } = req.body;
    const subcategory = await Subcategory.create({
      name,
      categoryId,
      isActive,
    });
    res.status(201).json(subcategory);
  } catch (error) {
    res.status(500).json({ error: "Failed to create subcategory." });
  }
};

exports.getSubcategories = async (req, res) => {
  try {
    const subcategories = await Subcategory.findAll();
    res.status(200).json(subcategories);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch subcategories." });
  }
};

exports.getSubcategoryById = async (req, res) => {
  try {
    const subcategory = await Subcategory.findByPk(req.params.id);
    if (!subcategory) {
      return res.status(404).json({ error: "Subcategory not found." });
    }
    res.status(200).json(subcategory);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch subcategory." });
  }
};

exports.updateSubcategory = async (req, res) => {
  try {
    const { name, categoryId, isActive } = req.body;
    const [updated] = await Subcategory.update(
      { name, categoryId, isActive },
      { where: { id: req.params.id } }
    );

    if (updated) {
      const updatedSubcategory = await Subcategory.findByPk(req.params.id);
      res.status(200).json(updatedSubcategory);
    } else {
      res.status(404).json({ error: "Subcategory not found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update subcategory." });
  }
};

exports.deleteSubcategory = async (req, res) => {
  try {
    const deleted = await Subcategory.destroy({ where: { id: req.params.id } });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Subcategory not found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete subcategory." });
  }
};
