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

-- Dumping structure for table u690099781_teamoffice.wishlists
CREATE TABLE IF NOT EXISTS `wishlists` (
  `id` char(36) NOT NULL,
  `userId` char(36) NOT NULL,
  `productIds` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`productIds`)),
  `isLiked` tinyint(1) DEFAULT 0,
  `updated` datetime DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `wishlists_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table u690099781_teamoffice.wishlists: ~2 rows (approximately)
INSERT INTO `wishlists` (`id`, `userId`, `productIds`, `isLiked`, `updated`, `created`) VALUES
	('5e7e4e5a-cc0d-11ef-bf55-f4393e8d0a8a', 'bb1d36af-95ea-11ef-814d-8c067b553b28', '["e2dfeeeb-910b-11ef-a964-d99045a67454"]', 1, '2025-01-06 09:05:26', '2025-01-06 09:05:26'),
	('f77f896d-0cbe-437c-af16-00b9acb685f1', 'bb1d45f4-95ea-11ef-814d-8c067b553b28', '["e2dfeeeb-910b-11ef-a964-d99045a67454","e2dff34a-910b-11ef-a964-d99045a67454"]', 1, '2025-01-06 09:58:58', '2025-01-06 09:38:26');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
