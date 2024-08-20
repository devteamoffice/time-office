const mysql = require("mysql2/promise"); // Assuming you're using mysql2 with promises

// Function to get products with filters
exports.getStoreProductsQuery = async (min, max, rating, connection) => {
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
        AND (p.price BETWEEN COALESCE(?, p.price) AND COALESCE(?, p.price))
        AND (COALESCE(AVG(r.rating), 0) >= ?)
    GROUP BY 
        p.id
    HAVING 
        (p.price BETWEEN COALESCE(?, p.price) AND COALESCE(?, p.price))
        AND (COALESCE(AVG(r.rating), 0) >= ?);
  `;

  const [rows] = await connection.execute(query, [
    min,
    max,
    rating,
    min,
    max,
    rating,
  ]);
  return rows;
};

// Function to get wishlist products for a user
exports.getStoreProductsWishListQuery = async (userId, connection) => {
  const query = `
    SELECT 
        p.*,
        IF(w.id IS NULL, FALSE, TRUE) AS is_liked
    FROM 
        products p
    LEFT JOIN 
        wishlists w ON p.id = w.product_id AND w.user_id = ?
    WHERE 
        p.is_active = TRUE
    GROUP BY 
        p.id;
  `;

  const [rows] = await connection.execute(query, [userId]);
  return rows;
};
