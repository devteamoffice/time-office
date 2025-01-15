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

-- Dumping structure for table u690099781_teamoffice.coupons
CREATE TABLE IF NOT EXISTS `coupons` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created` datetime DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `max_redemptions` int(11) DEFAULT NULL,
  `status` enum('active','inactive','future_plan') NOT NULL DEFAULT 'active',
  `start_date` datetime DEFAULT NULL,
  `end_date` datetime DEFAULT NULL,
  `discount_type` enum('percentage','fixed_amount','free_shipping') NOT NULL,
  `discount_value` float NOT NULL,
  `applicable_products` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`applicable_products`)),
  PRIMARY KEY (`id`),
  UNIQUE KEY `code` (`code`),
  UNIQUE KEY `email` (`email`),
  CONSTRAINT `max_redemptions_check` CHECK (`max_redemptions` >= 10 and `max_redemptions` <= 1000)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table u690099781_teamoffice.coupons: ~2 rows (approximately)
INSERT INTO `coupons` (`id`, `created`, `code`, `email`, `max_redemptions`, `status`, `start_date`, `end_date`, `discount_type`, `discount_value`, `applicable_products`) VALUES
	(1, NULL, 'SAVE10', NULL, 100, 'active', '2024-06-01 00:00:00', '2024-06-30 00:00:00', 'percentage', 10, NULL),
	(2, '2024-12-17 04:51:25', 'SAVE12', NULL, 100, 'future_plan', '2025-01-01 00:00:00', '2025-01-30 00:00:00', 'percentage', 10, NULL),
	(3, '2024-12-17 04:51:39', 'MISSION2025', NULL, 97, 'future_plan', '2024-12-25 00:00:00', '2025-01-01 00:00:00', 'percentage', 5, '"[\\"e2dff17e-910b-11ef-a964-d99045a67454\\"]"');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
