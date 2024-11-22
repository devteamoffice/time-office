ALTER TABLE `products`
-- Change the `slug` field to have a maximum of 50 characters
MODIFY `slug` VARCHAR(50) NULL DEFAULT NULL COLLATE 'utf8mb4_general_ci',
-- Drop the unique constraint on `slug`
DROP INDEX `slug`;
