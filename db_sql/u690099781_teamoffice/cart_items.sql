-- --------------------------------------------------------
-- Host:                         193.203.184.164
-- Server version:               10.11.10-MariaDB - MariaDB Server
-- Server OS:                    Linux
-- HeidiSQL Version:             12.8.0.6908
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Dumping structure for table u690099781_teamoffice.cart_items
CREATE TABLE IF NOT EXISTS `cart_items` (
  `productId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `quantity` int(11) NOT NULL,
  `purchasePrice` float DEFAULT 0,
  `totalPrice` float DEFAULT 0,
  `priceWithTax` float DEFAULT 0,
  `totalTax` float DEFAULT 0,
  `status` enum('NOT_PROCESSED','PROCESSING','SHIPPED','DELIVERED','CANCELLED') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cartId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `id` char(36) NOT NULL DEFAULT uuid(),
  PRIMARY KEY (`id`),
  KEY `productId` (`productId`),
  KEY `fk_cart_id` (`cartId`),
  CONSTRAINT `fk_cart_id` FOREIGN KEY (`cartId`) REFERENCES `carts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table u690099781_teamoffice.cart_items: ~2 rows (approximately)
INSERT INTO `cart_items` (`productId`, `quantity`, `purchasePrice`, `totalPrice`, `priceWithTax`, `totalTax`, `status`, `cartId`, `id`) VALUES
	('e2dfeba5-910b-11ef-a964-d99045a67454', 5, 1500, 7500, 0, 0, 'NOT_PROCESSED', '4f71e559-7db8-42d2-92b5-cc54dd901757', '3660e8a0-387d-4a9d-bc75-87496d30573b'),
	('e2dff0df-910b-11ef-a964-d99045a67454', 1, 16000, 16000, 0, 0, 'NOT_PROCESSED', '4f71e559-7db8-42d2-92b5-cc54dd901757', '549dfc01-2ab4-4dfb-afaf-da0988a4448e'),
	('e2dfeeeb-910b-11ef-a964-d99045a67454', 10, 1500, 15000, 0, 0, 'NOT_PROCESSED', '4f71e559-7db8-42d2-92b5-cc54dd901757', '6f0000c2-8dc0-40a9-917e-998fa6e03a7a'),
	('e2dff09f-910b-11ef-a964-d99045a67454', 1, 20000, 20000, 0, 0, 'NOT_PROCESSED', '4f71e559-7db8-42d2-92b5-cc54dd901757', '7b0741eb-e3d9-4b01-9566-ccdba87c17c5');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
