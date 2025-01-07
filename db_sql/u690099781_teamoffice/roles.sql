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

-- Dumping structure for table u690099781_teamoffice.roles
CREATE TABLE IF NOT EXISTS `roles` (
  `user_id` char(36) NOT NULL,
  `role_id` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `role_name` varchar(255) NOT NULL,
  `isAdmin` tinyint(1) DEFAULT 0,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`role_id`),
  UNIQUE KEY `role_id` (`role_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `roles_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `chk_role_name` CHECK (`role_name` in ('ADMIN','DEVELOPER','MERCHANT','MEMBER'))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table u690099781_teamoffice.roles: ~5 rows (approximately)
INSERT INTO `roles` (`user_id`, `role_id`, `username`, `role_name`, `isAdmin`, `createdAt`, `updatedAt`) VALUES
	('bb1d4a9a-95ea-11ef-814d-8c067b553b28', 'ROLE_1BNT24#2', 'vkpickyvibe', 'MEMBER', 0, '2024-12-14 12:17:35', '2024-12-26 16:44:24'),
	('5fb3bc34aee6486f', 'ROLE_672KCQ#2', 'dashingvijay', 'MEMBER', 0, '2024-12-14 12:17:35', '2024-12-26 16:44:24'),
	('bb1d4139-95ea-11ef-814d-8c067b553b28', 'ROLE_86W9NJ#1', 'admin', 'ADMIN', 1, '2024-12-14 12:17:35', '2025-01-03 13:41:29'),
	('bb1d45f4-95ea-11ef-814d-8c067b553b28', 'ROLE_S1BXZD#2', 'fleekfr', 'MEMBER', 0, '2024-12-14 12:17:35', '2024-12-26 16:44:24'),
	('bb1d36af-95ea-11ef-814d-8c067b553b28', 'ROLE_X88WZM#2', 'verma', 'MEMBER', 0, '2024-12-14 12:17:35', '2024-12-26 16:44:24');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
