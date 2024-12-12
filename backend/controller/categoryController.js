// Bring in Models & Utils
const { Category } = require("../models/category"); // Assuming Sequelize models are defined
const store = require("../utils/store");
const slugify = require("slugify"); // Ensure this is installed

exports.addCategory = async (req, res) => {
  const { name, slug, isActive } = req.body;

  // Validate required fields
  if (!name) {
    return res.status(400).json({ error: "You must enter a name." });
  }

  if (!slug) {
    return res.status(400).json({ error: "You must enter an slug." });
  }

  if (typeof isActive !== "boolean") {
    return res.status(400).json({
      error:
        "You must specify the active status (isActive should be a boolean).",
    });
  }

  try {
    // Create the category using the provided slug (not generating a slug)
    const category = await Category.create({
      name,
      slug, // slug as the unique identifier
      isActive,
    });

    res.status(201).json({
      success: true,
      message: "Category has been added successfully!",
      category,
    });
  } catch (error) {
    console.error("Error adding category:", error);
    res.status(500).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
};

/**
 * Fetch all active categories
 */
exports.fetchStoreCategories = async (req, res) => {
  try {
    const categories = await Category.findAll({
      where: { isActive: true },
    });

    res.status(200).json({ categories });
  } catch (error) {
    console.error("Error fetching store categories:", error);
    res.status(500).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
};

/**
 * Fetch all categories
 */
exports.fetchCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();

    // Add dynamic counts for each category
    const categoriesWithCounts = await Promise.all(
      categories.map(async (category) => {
        const productCount = await category.productCount();
        const subcategoryCount = await category.subcategoryCount();
        return { ...category.toJSON(), productCount, subcategoryCount };
      })
    );

    res.status(200).json({ categories: categoriesWithCounts });
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
};

/**
 * Fetch a category by ID
 */
exports.fetchCategoryById = async (req, res) => {
  try {
    const { id } = req.params;

    const category = await Category.findByPk(id, {
      include: {
        association: Category.associations.products, // Assumes a product relation exists
        attributes: ["name", "slug"], // Fetches specific fields for associated products
      },
    });

    if (!category) {
      return res.status(404).json({ error: "Category not found." });
    }

    // Fetch counts for the category
    const productCount = await category.productCount();
    const subcategoryCount = await category.subcategoryCount();

    res.status(200).json({
      category: {
        ...category.toJSON(),
        productCount,
        subcategoryCount,
      },
    });
  } catch (error) {
    console.error("Error fetching category by ID:", error);
    res.status(500).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
};

/**
 * Update category details
 */
exports.updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, isActive } = req.body;

    const updateData = {
      name,
      description,
      isActive,
      slug: req.body.slug || slugify(name, { lower: true, strict: true }),
    };

    // Check if the slug already exists
    const existingCategory = await Category.findOne({
      where: { slug: updateData.slug, id: { [Op.ne]: id } },
    });

    if (existingCategory) {
      return res.status(400).json({ error: "Slug is already in use." });
    }

    const [updated] = await Category.update(updateData, { where: { id } });

    if (!updated) {
      return res.status(404).json({ error: "Category not found." });
    }

    res.status(200).json({
      success: true,
      message: "Category has been updated successfully!",
    });
  } catch (error) {
    console.error("Error updating category:", error);
    res.status(500).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
};

/**
 * Update category active status
 */
exports.updateCategoryActive = async (req, res) => {
  try {
    const { id } = req.params;
    const { isActive } = req.body;

    const category = await Category.findByPk(id, {
      include: {
        association: Category.associations.products, // Assumes a product relation exists
      },
    });

    if (!category) {
      return res.status(404).json({ error: "Category not found." });
    }

    // Disable products if category is deactivated
    if (isActive === false && category.products && category.products.length) {
      await store.disableProducts(category.products);
    }

    category.isActive = isActive;
    await category.save();

    res.status(200).json({
      success: true,
      message: "Category status has been updated successfully!",
    });
  } catch (error) {
    console.error("Error updating category active status:", error);
    res.status(500).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
};

/**
 * Delete a category
 */
exports.deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Category.destroy({ where: { id } });

    if (!deleted) {
      return res.status(404).json({ error: "Category not found." });
    }

    res.status(200).json({
      success: true,
      message: "Category has been deleted successfully!",
    });
  } catch (error) {
    console.error("Error deleting category:", error);
    res.status(500).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
};
