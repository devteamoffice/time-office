ALTER TABLE `users`
ADD COLUMN `subcategoryId` INT(11) NULL DEFAULT NULL,
ADD INDEX `fk_subcategory` (`subcategoryId`),
ADD CONSTRAINT `fk_subcategory`
FOREIGN KEY (`subcategoryId`) REFERENCES `subcategories` (`id`)
ON UPDATE RESTRICT
ON DELETE RESTRICT;
