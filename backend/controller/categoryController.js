// Bring in Models & Utils
const { Category } = require("../models/category"); // Assuming Sequelize models are defined
const store = require("../utils/store");

exports.addCategory = async (req, res) => {
  const { name, description, products, isActive } = req.body;

  if (!description || !name) {
    return res
      .status(400)
      .json({ error: "You must enter description & name." });
  }

  try {
    // Generate slug if not provided
    const slug = req.body.slug || slugify(name, { lower: true, strict: true });

    const category = await Category.create({
      name,
      description,
      products,
      isActive,
      slug,
    });

    res.status(200).json({
      success: true,
      message: `Category has been added successfully!`,
      category,
    });
  } catch (error) {
    console.error("Error adding category:", error);
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
};

exports.fetchStoreCategories = async (req, res) => {
  try {
    const categories = await Category.findAll({ where: { isActive: true } });
    res.status(200).json({ categories });
  } catch (error) {
    console.error("Error fetching store categories:", error);
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
};

exports.fetchCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.status(200).json({ categories });
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
};

exports.fetchCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findByPk(id, {
      include: {
        association: Category.associations.products, // Assuming association is defined
        attributes: ["name", "slug"], // Select only the name field
      },
    });

    if (!category) {
      return res.status(404).json({ message: "No Category found." });
    }

    res.status(200).json({ category });
  } catch (error) {
    console.error("Error fetching category by ID:", error);
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body.category;

    // Generate slug if not provided
    if (!updateData.slug) {
      updateData.slug = slugify(updateData.name, { lower: true, strict: true });
    }

    // Check if the slug already exists
    const foundCategory = await Category.findOne({
      where: { slug: updateData.slug },
    });

    if (foundCategory && foundCategory.id !== parseInt(id, 10)) {
      return res.status(400).json({ error: "Slug is already in use." });
    }

    const [updated] = await Category.update(updateData, { where: { id } });

    if (!updated) {
      return res.status(404).json({ message: "Category not found." });
    }

    res.status(200).json({
      success: true,
      message: "Category has been updated successfully!",
    });
  } catch (error) {
    console.error("Error updating category:", error);
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
};

exports.updateCategoryActive = async (req, res) => {
  try {
    const { id } = req.params;
    const { isActive } = req.body.category;

    if (isActive === false) {
      const category = await Category.findByPk(id, {
        include: {
          association: Category.associations.products, // Assuming association is defined
        },
      });

      if (category) {
        await store.disableProducts(category.products);
      }
    }

    const [updated] = await Category.update({ isActive }, { where: { id } });

    if (!updated) {
      return res.status(404).json({ message: "Category not found." });
    }

    res.status(200).json({
      success: true,
      message: "Category has been updated successfully!",
    });
  } catch (error) {
    console.error("Error updating category active status:", error);
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Category.destroy({ where: { id } });

    if (!deleted) {
      return res.status(404).json({ message: "Category not found." });
    }

    res.status(200).json({
      success: true,
      message: "Category has been deleted successfully!",
    });
  } catch (error) {
    console.error("Error deleting category:", error);
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
};
