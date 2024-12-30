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

-- Dumping structure for table u690099781_teamoffice.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` char(36) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phoneNumber` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `provider` varchar(255) NOT NULL DEFAULT 'Email',
  `googleId` varchar(255) DEFAULT NULL,
  `facebookId` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `role` enum('ADMIN','MEMBER','MERCHANT','DEVELOPER') NOT NULL DEFAULT 'MEMBER',
  `resetPasswordToken` varchar(255) DEFAULT NULL,
  `resetPasswordExpires` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `merchantId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `email_2` (`email`),
  UNIQUE KEY `email_3` (`email`),
  KEY `merchantId` (`merchantId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table u690099781_teamoffice.users: ~5 rows (approximately)
INSERT INTO `users` (`id`, `email`, `phoneNumber`, `name`, `username`, `password`, `provider`, `googleId`, `facebookId`, `avatar`, `role`, `resetPasswordToken`, `resetPasswordExpires`, `updatedAt`, `createdAt`, `merchantId`) VALUES
	('5fb3bc34aee6486f', 'gaitondebhau@gamail.com', NULL, 'social application', 'dashingvijay', '$2a$10$YsHyTM0P/51dWwv3F87OlunS5O3VzjkvSub37DwaP05O8atmLn4WW', 'Email', NULL, NULL, NULL, 'MEMBER', NULL, NULL, '2024-10-29 11:47:59', '2024-10-29 11:47:59', NULL),
	('bb1d36af-95ea-11ef-814d-8c067b553b28', 'vermadhruv09112002@gmail.com', NULL, 'dhruv', 'verma', '$2a$10$sFDIzV7w/VeL8JOp4hVhSeGYLFLOg.RJ7yOtjWzjzkTIqwR75TGAu', 'Email', NULL, NULL, NULL, 'MEMBER', NULL, NULL, NULL, '2024-09-30 04:20:12', NULL),
	('bb1d4139-95ea-11ef-814d-8c067b553b28', 'admin@teamoffice.in', NULL, NULL, 'admin', '$2a$10$MJadh/2ev9z4eGHXyCWsy.UmvPSADwsqgew036Qo8T04WzpwRkFu2', 'Email', NULL, NULL, NULL, 'ADMIN', NULL, NULL, '2024-10-21 06:09:08', '2024-10-21 06:09:08', NULL),
	('bb1d45f4-95ea-11ef-814d-8c067b553b28', 'fetch@gmail.com', NULL, 'nerdy guy', 'fleekfr', '$2a$10$6HwwrHq0TB3oRQOyxYy5AODBXCxBS0waf9OOe8VHvQiP5H8vG0ld.', 'Email', NULL, NULL, NULL, 'MEMBER', NULL, NULL, '2024-10-28 09:11:09', '2024-10-28 09:11:08', NULL),
	('bb1d4a9a-95ea-11ef-814d-8c067b553b28', 'vikasfrontenddeveloper007@gmail.com', NULL, 'Vikas', 'vkpickyvibe', '$2a$10$NN6ecWG7ZXQdcaIvfN4vR.rRu9/tflK3pwemccjfSdEL1zWYKvptm', 'Email', NULL, NULL, NULL, 'MEMBER', NULL, NULL, '2024-10-28 09:34:12', '2024-10-28 09:34:12', NULL);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
