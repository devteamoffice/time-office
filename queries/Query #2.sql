ALTER TABLE `orders` 
ADD COLUMN `orderNumber` VARCHAR(20) NOT NULL UNIQUE AFTER `total`;
