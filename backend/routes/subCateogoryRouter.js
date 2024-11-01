const express = require("express");
const router = express.Router();
const subcategoryController = require("../controller/subcategoryController");

// Create a subcategory
router.post("/", subcategoryController.createSubcategory);

// Get all subcategories
router.get("/", subcategoryController.getSubcategories);

// Get a subcategory by ID
router.get("/:id", subcategoryController.getSubcategoryById);

// Update a subcategory
router.put("/:id", subcategoryController.updateSubcategory);

// Delete a subcategory
router.delete("/:id", subcategoryController.deleteSubcategory);

module.exports = router;
