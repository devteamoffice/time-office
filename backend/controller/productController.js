const multer = require("multer");
const { Sequelize, Op } = require("sequelize");

// Bring in Models & Utils
const Product = require("../models/product");
const Brand = require("../models/brand");
const { Category } = require("../models/category");
const { uploadImagesToFirebase } = require("../utils/productImages"); // Assuming a utility function for Firebase upload
// const { s3Upload } = require("../utils/storage");
const {
  getStoreProductsQuery,
  getStoreProductsWishListQuery,
} = require("../utils/queries");

const checkAuth = require("../utils/auth");
const slugify = require("slugify"); // Import slugify for generating slugs
const storage = multer.memoryStorage();
const upload = multer({ storage });

/**
 * Filter products by category
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */
// In your controller (filterProductsByCategory)
exports.filterProductsByCategory = async (req, res) => {
  const { slug } = req.params; // Use slug from URL params

  if (!slug) {
    return res.status(400).json({ message: "Category slug is required" });
  }

  try {
    // Check if the category exists using the slug
    const categoryExists = await Category.findOne({
      where: { slug }, // Assuming 'slug' is a column in your Category table
    });

    if (!categoryExists) {
      return res.status(404).json({ message: "Category not found" });
    }

    console.log(`Category exists: ${categoryExists.name}`);

    // Fetch products associated with the given category
    const products = await Product.findAll({
      where: { categoryId: categoryExists.id, isActive: true }, // Ensuring active products
    });

    console.log(`Products found: ${products.length}`);

    if (!products.length) {
      return res
        .status(404)
        .json({ message: "No products found in this category" });
    }

    return res.status(200).json({ products });
  } catch (error) {
    console.error("Error filtering products by category:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
exports.filterByActive = async (req, res) => {
  try {
    // Fetch all active products
    const activeProducts = await Product.findAll({
      where: { isActive: true }, // Filtering only active products
    });

    console.log(`Active products found: ${activeProducts.length}`);

    if (!activeProducts.length) {
      return res.status(404).json({ message: "No active products found" });
    }

    return res.status(200).json({ products: activeProducts });
  } catch (error) {
    console.error("Error fetching active products:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.fetchAllProducts = async (req, res) => {
  try {
    // Fetch all products along with their associated brand information
    const products = await Product.findAll({});

    // Return the fetched products
    res.status(200).json({
      products,
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({
      error: "Internal server error. Please try again later.",
    });
  }
};

exports.fetchProductSlug = async (req, res) => {
  try {
    const slug = req.params.slug;

    const productDoc = await Product.findOne({ slug, isActive: true }).populate(
      {
        path: "brand",
        select: "name isActive slug",
      }
    );

    const hasNoBrand =
      productDoc?.brand === null || productDoc?.brand?.isActive === false;

    if (!productDoc || hasNoBrand) {
      return res.status(404).json({
        message: "No product found.",
      });
    }

    res.status(200).json({
      product: productDoc,
    });
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
};

exports.fetchProductName = async (req, res) => {
  try {
    const name = req.params.name;

    // Query the database to fetch products by name
    const products = await Product.findAll({
      where: {
        name: {
          [Sequelize.Op.like]: `%${name}%`, // Use LIKE for MySQL
        },
        isActive: true,
      },
      // Select all relevant fields from the Product model
      attributes: [
        "id",
        "sku",
        "name",
        "slug",
        "images",
        "description",
        "price",
        "brand",
        "categoryId",
        "subcategoryId",
        "created",
      ],
    });

    // Check if no products were found
    if (products.length === 0) {
      return res.status(404).json({
        message: "No product found.",
      });
    }

    // Return the products if found
    res.status(200).json({
      products,
    });
  } catch (error) {
    // Log the error for debugging purposes
    console.error(error);

    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
};

exports.searchProducts = async (req, res) => {
  try {
    const { name, minPrice, maxPrice } = req.query; // Using query parameters for search filters

    // Construct the where condition
    let whereCondition = { isActive: true }; // Start with active products filter

    // Add name filter if provided
    if (name) {
      whereCondition.name = {
        [Op.like]: `%${name}%`, // Case-insensitive match using LIKE
      };
    }

    // Add price filter if minPrice or maxPrice are provided
    if (minPrice) {
      whereCondition.price = {
        ...whereCondition.price,
        [Op.gte]: parseFloat(minPrice), // Greater than or equal to minPrice
      };
    }
    if (maxPrice) {
      whereCondition.price = {
        ...whereCondition.price,
        [Op.lte]: parseFloat(maxPrice), // Less than or equal to maxPrice
      };
    }

    // Query the database to fetch products based on the filters
    const products = await Product.findAll({
      where: whereCondition,
      attributes: ["name", "price"], // Selecting specific columns
    });

    // Check if no products were found
    if (products.length === 0) {
      return res.status(404).json({
        message: "No products found matching your criteria.",
      });
    }

    // Return the products if found
    res.status(200).json({
      products,
    });
  } catch (error) {
    // Log the error for debugging purposes
    console.error(error);

    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
};
// Function to fetch store products with filters
// controllers/productController.js

exports.fetchStoreProducts = async (req, res) => {
  try {
    let {
      sortOrder,
      rating,
      max,
      min,
      category,
      brand,
      page = 1,
      limit = 10,
    } = req.query;
    sortOrder = sortOrder ? JSON.parse(sortOrder) : { createdAt: -1 };
    const categoryFilter = category ? { category } : {};

    const basicQuery = await getStoreProductsQuery(min, max, rating);
    const userDoc = await checkAuth(req);

    const categoryDoc = await Category.findOne({
      where: { slug: categoryFilter.category, isActive: true },
    });
    if (categoryDoc) {
      basicQuery.push({
        $match: { isActive: true, category_id: categoryDoc.id },
      });
    }

    const brandDoc = await Brand.findOne({
      where: { slug: brand, isActive: true },
    });
    if (brandDoc) {
      basicQuery.push({ $match: { brand_id: brandDoc.id } });
    }

    let products = null;
    const productsCount = basicQuery.length;
    const totalPages = Math.ceil(productsCount / limit);
    const currentPage = productsCount > limit ? Number(page) : 1;
    const offset = (currentPage - 1) * limit;

    const paginateQuery = [
      { $sort: sortOrder },
      { $skip: offset },
      { $limit: parseInt(limit) },
    ];
    if (userDoc) {
      const wishListQuery = await getStoreProductsWishListQuery(userDoc.id);
      products = wishListQuery.concat(basicQuery.concat(paginateQuery));
    } else {
      products = basicQuery.concat(paginateQuery);
    }

    res
      .status(200)
      .json({ products, totalPages, currentPage, count: productsCount });
  } catch (error) {
    console.error("error", error);
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
};

exports.listSelect = async (req, res) => {
  try {
    const products = await Product.find({}, "name");

    res.status(200).json({
      products,
    });
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
};

// Add Product Function
exports.addProduct = async (req, res) => {
  try {
    const {
      sku,
      name,
      description,
      quantity,
      price,
      taxable,
      isActive,
      brand,
      categoryId,
      subcategoryId,
    } = req.body;

    // Validate required fields
    if (!sku || !name || !description || !quantity || !price) {
      return res.status(400).json({
        error: "SKU, name, description, quantity, and price are required.",
      });
    }

    // Check for duplicate SKU
    const foundProduct = await Product.findOne({ where: { sku } });
    if (foundProduct) {
      return res.status(400).json({ error: "This SKU is already in use." });
    }

    // Handle image upload and format the image URLs
    let images = [];
    if (req.files && req.files.length > 0) {
      images = await uploadImagesToFirebase(sku, req.files);
    }

    // Create product object
    const product = new Product({
      sku,
      name,
      description,
      quantity,
      price,
      taxable: taxable || false,
      isActive: isActive || true,
      brand: brand || null,
      images: JSON.stringify(images), // Store images as a JSON string
      categoryId: categoryId || null,
      subcategoryId: subcategoryId || null,
    });

    // Save the product to the database
    const savedProduct = await product.save();

    res.status(200).json({
      success: true,
      message: `Product "${name}" has been added successfully!`,
      product: savedProduct,
    });
  } catch (error) {
    console.error("Error adding product:", error);
    return res.status(500).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
};

exports.fetchProducts = async (req, res) => {
  try {
    let products = [];

    if (req.user.merchant) {
      const brands = await Brand.find({
        merchant: req.user.merchant,
      }).populate("merchant", "_id");

      const brandId = brands[0]?.["_id"];

      products = await Product.find({})
        .populate({
          path: "brand",
          populate: {
            path: "merchant",
            model: "Merchant",
          },
        })
        .where("brand", brandId);
    } else {
      products = await Product.find({}).populate({
        path: "brand",
        populate: {
          path: "merchant",
          model: "Merchant",
        },
      });
    }

    res.status(200).json({
      products,
    });
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
};

// Controller function to fetch a product by ID
exports.fetchProductById = async (req, res) => {
  try {
    const productId = req.params.id;

    // Fetch the product by primary key (ID)
    const product = await Product.findByPk(productId);

    if (!product) {
      return res.status(404).json({
        message: "No product found.",
      });
    }

    res.status(200).json({
      product,
    });
  } catch (error) {
    console.error("Error fetching product by ID:", error); // Log the error
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;

    // Validate that the product ID is provided
    if (!productId) {
      return res.status(400).json({ error: "Product ID is required." });
    }

    const { categoryId, subcategoryId, slug, images, ...otherFields } =
      req.body;

    // If slug is provided, overwrite it
    if (slug) {
      otherFields.slug = slug;
    }

    // Check for duplicate SKU or slug in other products
    if (otherFields.sku || otherFields.slug) {
      const duplicateProduct = await Product.findOne({
        where: {
          [Op.or]: [{ sku: otherFields.sku }, { slug: otherFields.slug }],
          id: { [Op.ne]: productId }, // Exclude current product
        },
      });

      if (duplicateProduct) {
        return res.status(400).json({
          error: "SKU or slug is already in use by another product.",
        });
      }
    }

    // Prepare the updated fields
    const updateData = {
      ...otherFields,
      categoryId,
      subcategoryId,
      // Ensure images are stored as a valid JSON array (not as string)
      images: images ? JSON.stringify(images) : null, // Ensure valid JSON string, allow NULL for images
    };

    // Remove undefined fields to avoid overwriting with null
    Object.keys(updateData).forEach((key) => {
      if (updateData[key] === undefined) delete updateData[key];
    });

    // Fetch the product to ensure it exists
    const product = await Product.findByPk(productId);

    if (!product) {
      return res.status(404).json({ error: "Product not found." });
    }

    // Update the product
    const [updatedRows] = await Product.update(updateData, {
      where: { id: productId },
    });

    if (updatedRows === 0) {
      return res.status(400).json({
        error: "No fields were updated. Ensure changes were made.",
      });
    }

    // Fetch the updated product
    const updatedProduct = await Product.findByPk(productId);

    // Parse the images field back to JSON for consistent response
    if (updatedProduct.images) {
      updatedProduct.images = JSON.parse(updatedProduct.images);
    }

    return res.status(200).json({
      success: true,
      message: "Product updated successfully!",
      product: updatedProduct,
    });
  } catch (error) {
    console.error("Error updating product:", error);
    return res.status(500).json({
      error: "An error occurred while updating the product.",
    });
  }
};

exports.getProductCount = async (req, res) => {
  try {
    const productCount = await Product.count(); // Count all products
    res.status(200).json({
      message: "Product count retrieved successfully.",
      count: productCount,
    });
  } catch (error) {
    console.error("Error fetching product count:", error);
    res.status(500).json({
      error:
        "An internal server error occurred while retrieving product count.",
    });
  }
};

exports.updateProductActive = async (req, res) => {
  try {
    const productId = req.params.id;
    const update = req.body.product;
    const query = { _id: productId };

    await Product.findOneAndUpdate(query, update, {
      new: true,
    });

    res.status(200).json({
      success: true,
      message: "Product has been updated successfully!",
    });
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.deleteOne({ _id: req.params.id });

    res.status(200).json({
      success: true,
      message: `Product has been deleted successfully!`,
      product,
    });
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
};
