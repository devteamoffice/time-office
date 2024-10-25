-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.0.37 - MySQL Community Server - GPL
-- Server OS:                    Win64
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


-- Dumping database structure for timeoffice
CREATE DATABASE IF NOT EXISTS `timeoffice` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `timeoffice`;

-- Dumping structure for table timeoffice.subcategories
CREATE TABLE IF NOT EXISTS `subcategories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `categoryId` int DEFAULT NULL,
  `isActive` tinyint(1) DEFAULT '1',
  `updated` datetime DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `categoryId` (`categoryId`),
  CONSTRAINT `subcategories_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table timeoffice.subcategories: ~18 rows (approximately)
INSERT INTO `subcategories` (`id`, `name`, `categoryId`, `isActive`, `updated`, `created`) VALUES
	(1, 'Dynamic Face Recognition Attendance Cum Access Control System', 1, 1, NULL, '2024-10-20 06:27:00'),
	(2, 'Face with Fingerprint Time Attendance & Professional Access Control', 1, 1, NULL, '2024-10-20 06:43:57'),
	(3, 'Face with Fingerprint Time Attendance & Basic Access Control', 1, 1, NULL, '2024-10-20 06:43:57'),
	(4, 'Fingerprint Time Attendance & Access Control', 1, 1, NULL, '2024-10-20 06:43:57'),
	(5, 'Fingerprint and Card Based Attendance System', 1, 1, NULL, '2024-10-20 06:43:57'),
	(6, 'Standalone Access Control Device ', 1, 1, NULL, '2024-10-20 06:43:57'),
	(7, 'Clutch Hook Glass Door Lock', 2, 1, NULL, '2024-10-20 06:43:57'),
	(8, 'Multi-Door Controller', 2, 1, NULL, '2024-10-20 06:43:57'),
	(9, 'Exit Reader', 2, 1, NULL, '2024-10-20 06:43:57'),
	(10, 'Wireless Handheld Barcode Scanner ', 3, 1, NULL, '2024-10-20 06:43:57'),
	(11, 'Handheld Barcode Scanner ', 3, 1, NULL, '2024-10-20 06:43:57'),
	(12, 'Locks', 4, 1, NULL, '2024-10-20 06:43:57'),
	(13, 'Brackets', 4, 1, NULL, '2024-10-20 06:43:57'),
	(14, 'POWER SUPPLY and Adapters', 4, 1, NULL, '2024-10-20 06:43:57'),
	(15, 'Cards and Tags', 4, 1, NULL, '2024-10-20 06:43:57'),
	(16, 'Switches for Access Control', 5, 1, NULL, '2024-10-20 06:43:57'),
	(17, 'Readers', 6, 1, NULL, '2024-10-20 06:43:57'),
	(18, 'Elevator Control System', 7, 1, NULL, '2024-10-20 06:43:58');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
