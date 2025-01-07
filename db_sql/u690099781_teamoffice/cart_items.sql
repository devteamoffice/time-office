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
  `productId` char(36) NOT NULL,
  `quantity` int(11) NOT NULL,
  `purchasePrice` float DEFAULT 0,
  `totalPrice` float DEFAULT 0,
  `priceWithTax` float DEFAULT 0,
  `totalTax` float DEFAULT 0,
  `status` enum('Not processed','Processing','Shipped','Delivered','Cancelled') DEFAULT 'Not processed',
  `cartId` char(36) NOT NULL,
  PRIMARY KEY (`cartId`),
  KEY `productId` (`productId`),
  KEY `cartId` (`cartId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table u690099781_teamoffice.cart_items: ~2 rows (approximately)
INSERT INTO `cart_items` (`productId`, `quantity`, `purchasePrice`, `totalPrice`, `priceWithTax`, `totalTax`, `status`, `cartId`) VALUES
	('dbf2d40b-c67c-11ef-bf55-f4393e8d0a8a', 2, 1500, 3000, 0, 0, 'Not processed', '39fec038-c67e-11ef-bf55-f4393e8d0a8a'),
	('dbf2d59c-c67c-11ef-bf55-f4393e8d0a8a', 4, 1500, 6000, 0, 0, 'Not processed', '39fec1b8-c67e-11ef-bf55-f4393e8d0a8a');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
