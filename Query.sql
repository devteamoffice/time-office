-- Change `slug` field length to VARCHAR(120)
ALTER TABLE `products`
MODIFY `slug` VARCHAR(200) NULL DEFAULT NULL COLLATE 'utf8mb4_unicode_ci';



