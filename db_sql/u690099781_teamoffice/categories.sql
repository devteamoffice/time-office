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

-- Dumping structure for table u690099781_teamoffice.categories
CREATE TABLE IF NOT EXISTS `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `slug` varchar(4) NOT NULL,
  `isActive` tinyint(1) DEFAULT 1,
  `updated` datetime DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `slug` (`slug`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table u690099781_teamoffice.categories: ~7 rows (approximately)
INSERT INTO `categories` (`id`, `name`, `slug`, `isActive`, `updated`, `created`) VALUES
	(1, 'Attendance and Access Control Systems', 'Atte', 1, NULL, '2024-10-20 06:27:00'),
	(2, 'Door Locks and Controllers', 'Door', 1, NULL, '2024-10-20 06:43:57'),
	(3, 'Barcode Scanners ', 'Barc', 1, NULL, '2024-10-20 06:43:57'),
	(4, 'Accessories', 'Acce', 1, NULL, '2024-10-20 06:43:57'),
	(5, 'Switches for Access Control', 'Swit', 1, NULL, '2024-10-20 06:43:57'),
	(6, 'Readers', 'Read', 1, NULL, '2024-10-20 06:43:57'),
	(7, 'Elevator Control System', 'Elev', 1, NULL, '2024-10-20 06:43:57');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
