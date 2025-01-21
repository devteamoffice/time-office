CREATE TABLE `order_items` (
  `id` CHAR(36) NOT NULL COLLATE 'utf8mb4_unicode_ci', -- Same collation as orders and products
  `orderId` CHAR(36) NOT NULL COLLATE 'utf8mb4_unicode_ci', -- Match collation with orders.id
  `productId` CHAR(36) NOT NULL COLLATE 'utf8mb4_unicode_ci', -- Match collation with products.id
  `quantity` INT NOT NULL,
  `price` DECIMAL(10, 2) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  CONSTRAINT `fk_order_id` FOREIGN KEY (`orderId`) REFERENCES `orders` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_product_id` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE RESTRICT
)
COLLATE='utf8mb4_unicode_ci' -- Same collation as the referenced tables
ENGINE=INNODB;
