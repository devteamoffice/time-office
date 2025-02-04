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
const admin = require("firebase-admin");
require("dotenv").config();

// Firebase Admin SDK Initialization (if not already done)
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(require("../teamoffice.json")),
  });
}
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

// Product Controller
exports.addProduct = async (req, res) => {
  try {
    const {
      sku,
      name,
      description,
      price,
      taxable,
      isActive,
      brand,
      categoryId,
      subcategoryId,
    } = req.body;

    // Check for missing required fields
    if (!sku || !name || !description || !price) {
      return res
        .status(400)
        .json({ error: "SKU, name, description, and price are required." });
    }

    // Check for duplicate SKU
    const existingProduct = await Product.findOne({ where: { sku } });
    if (existingProduct) {
      return res
        .status(400)
        .json({ error: "Product with this SKU already exists." });
    }

    // Handle product images only if provided
    let images = [];
    if (req.files && req.files.length > 0) {
      // Step 1: Check Firebase ID token (only for image upload)
      const firebaseToken = req.headers["authorization"]?.split(" ")[1]; // Expecting "Bearer <token>"

      if (firebaseToken) {
        try {
          const decodedToken = await admin.auth().verifyIdToken(firebaseToken);
          // If Firebase token is valid, proceed with uploading images to Firebase
          console.log("Firebase token verified:", decodedToken);

          // Step 2: Upload images to Firebase and get URLs
          images = await uploadImagesToFirebase(sku, req.files); // Get image URLs from Firebase
        } catch (error) {
          console.error("Error verifying Firebase token:", error);
          return res
            .status(401)
            .json({ error: "Unauthorized. Invalid Firebase token." });
        }
      } else {
        return res.status(401).json({ error: "Firebase token is missing." });
      }
    }

    // Step 3: Save product details (No need to verify Firebase token here)
    const product = new Product({
      sku,
      name,
      description,
      price,
      taxable: taxable || false,
      isActive: isActive || true,
      brand: brand || null,
      categoryId: categoryId || null,
      subcategoryId: subcategoryId || null,
      images: JSON.stringify(images), // Save the image URLs as JSON string in MySQL
    });

    const savedProduct = await product.save();

    res.status(200).json({
      success: true,
      message: `Product "${name}" has been added successfully!`,
      product: savedProduct,
    });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ error: "Error while adding the product." });
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

    if (!productId) {
      return res.status(400).json({ error: "Product ID is required." });
    }

    const files = req.files;

    // Ensure the brand exists in the brands table (if provided)
    if (req.body.brand) {
      const brandExists = await Brand.findByPk(req.body.brand);
      if (!brandExists) {
        return res
          .status(400)
          .json({ error: "The specified brand does not exist." });
      }
    }

    // Ensure the category exists in the categories table (if provided)
    if (req.body.categoryId) {
      const categoryExists = await Category.findByPk(req.body.categoryId);
      if (!categoryExists) {
        return res
          .status(400)
          .json({ error: "The specified category does not exist." });
      }
    }

    const product = await Product.findByPk(productId);
    if (!product) {
      return res.status(404).json({ error: "Product not found." });
    }

    let updateData = {};

    // Add all fields from req.body dynamically into updateData
    const allowedFields = [
      "sku",
      "name",
      "slug",
      "images",
      "description",
      "price",
      "brand",
      "isActive",
      "categoryId",
      "subcategoryId",
      "created",
    ];

    allowedFields.forEach((field) => {
      if (req.body[field] !== undefined) {
        updateData[field] = req.body[field];
      }
    });

    // Handle image uploads if any images are provided
    let uploadedImageUrls = [];
    if (req.files && req.files.length > 0) {
      const sku = req.body.sku || product.sku; // Retrieve SKU if not present in body
      uploadedImageUrls = await uploadImagesToFirebase(sku, req.files);
    }

    if (uploadedImageUrls.length > 0) {
      const existingImages = product.images ? JSON.parse(product.images) : [];
      updateData.images = JSON.stringify([
        ...existingImages,
        ...uploadedImageUrls,
      ]);
    }

    // Clean out undefined fields from updateData
    Object.keys(updateData).forEach((key) => {
      if (updateData[key] === undefined) delete updateData[key];
    });

    const [updatedRows] = await Product.update(updateData, {
      where: { id: productId },
    });

    if (updatedRows === 0) {
      return res.status(400).json({ error: "No fields were updated." });
    }

    const updatedProduct = await Product.findByPk(productId);
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
      details: error.message || error.toString(),
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
    const productId = req.params.id;
    if (!productId) {
      return res.status(400).json({ error: "Product ID is required" });
    }

    const product = await Product.findByPk(productId); // Sequelize method to find by primary key

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    await product.destroy(); // Sequelize method to delete the record

    res.status(200).json({
      success: true,
      message: "Product has been deleted successfully!",
      product,
    });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({
      error: "Internal server error. Please try again later.",
      details: error.message,
    });
  }
};
