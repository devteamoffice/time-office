// utils/queries.js
const sequelize = require("../config/database");
const { QueryTypes } = require("sequelize");

// Function to get products with filters using Sequelize
exports.getStoreProductsQuery = async (min, max, rating) => {
  const query = `
    SELECT 
        p.*,
        b.name AS brand_name,
        AVG(r.rating) AS average_rating,
        COUNT(r.id) AS total_reviews,
        SUM(r.rating) AS total_ratings
    FROM 
        products p
    JOIN 
        brands b ON p.brand_id = b.id
    LEFT JOIN 
        reviews r ON p.id = r.product_id
    WHERE 
        p.is_active = TRUE
        AND b.is_active = TRUE
        AND (p.price BETWEEN COALESCE(:min, p.price) AND COALESCE(:max, p.price))
        AND (COALESCE(AVG(r.rating), 0) >= :rating)
    GROUP BY 
        p.id
    HAVING 
        (p.price BETWEEN COALESCE(:min, p.price) AND COALESCE(:max, p.price))
        AND (COALESCE(AVG(r.rating), 0) >= :rating);
  `;

  // Execute the query using Sequelize
  const rows = await sequelize.query(query, {
    replacements: { min, max, rating },
    type: QueryTypes.SELECT,
  });

  return rows;
};

// Function to get wishlist products for a user using Sequelize
exports.getStoreProductsWishListQuery = async (userId) => {
  const query = `
    SELECT 
        p.*,
        IF(w.id IS NULL, FALSE, TRUE) AS is_liked
    FROM 
        products p
    LEFT JOIN 
        wishlists w ON p.id = w.product_id AND w.user_id = :userId
    WHERE 
        p.is_active = TRUE
    GROUP BY 
        p.id;
  `;

  // Execute the query using Sequelize
  const rows = await sequelize.query(query, {
    replacements: { userId },
    type: QueryTypes.SELECT,
  });

  return rows;
};
