-- Dumping database structure for u690099781_teamoffice
CREATE DATABASE IF NOT EXISTS `u690099781_teamoffice` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `u690099781_teamoffice`;

-- Dumping structure for table u690099781_teamoffice.subcategories
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
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table u690099781_teamoffice.subcategories: ~18 rows (approximately)
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

