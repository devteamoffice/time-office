const { body, param, validationResult } = require("express-validator");

const validateCart = [
  // Validate `cartId` in the request parameters (for endpoints requiring cartId)
  param("cartId")
    .optional()
    .isInt({ min: 1 })
    .withMessage("Cart ID must be a positive integer"),

  // Validate product array in request body for adding to the cart
  body("products")
    .isArray({ min: 1 })
    .withMessage("Products must be an array with at least one item")
    .custom((products) => {
      for (const product of products) {
        if (
          typeof product.productId !== "number" ||
          product.productId <= 0 ||
          typeof product.quantity !== "number" ||
          product.quantity <= 0
        ) {
          throw new Error(
            "Each product must have a valid positive 'productId' and 'quantity'"
          );
        }
      }
      return true;
    }),

  // Catch validation errors
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }
    next();
  },
];

const validateCartItem = [
  // Validate `cartId` in the request parameters
  param("cartId")
    .isInt({ min: 1 })
    .withMessage("Cart ID must be a positive integer"),

  // Validate `productId` and `quantity` in the request body
  body("productId")
    .isInt({ min: 1 })
    .withMessage("Product ID must be a positive integer"),
  body("quantity")
    .isInt({ min: 1 })
    .withMessage("Quantity must be a positive integer"),

  // Catch validation errors
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }
    next();
  },
];

module.exports = { validateCart, validateCartItem };
