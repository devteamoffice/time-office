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
CREATE DATABASE IF NOT EXISTS `u690099781_teamoffice` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `u690099781_teamoffice`;

-- Dumping structure for table timeoffice.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `phoneNumber` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `provider` varchar(255) NOT NULL DEFAULT 'Email',
  `googleId` varchar(255) DEFAULT NULL,
  `facebookId` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `role` enum('ROLE ADMIN','ROLE MEMBER','ROLE MERCHANT','ROLE_DEVELOPER') NOT NULL DEFAULT 'ROLE MEMBER',
  `resetPasswordToken` varchar(255) DEFAULT NULL,
  `resetPasswordExpires` datetime DEFAULT NULL,
  `merchantId` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `unique_email` (`email`),
  UNIQUE KEY `email_2` (`email`),
  UNIQUE KEY `email_3` (`email`),
  KEY `merchantId` (`merchantId`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`merchantId`) REFERENCES `merchants` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table timeoffice.users: ~2 rows (approximately)
INSERT INTO `users` (`id`, `email`, `phoneNumber`, `name`, `username`, `password`, `provider`, `googleId`, `facebookId`, `avatar`, `role`, `resetPasswordToken`, `resetPasswordExpires`, `merchantId`, `createdAt`, `updatedAt`) VALUES
	(1, 'vermadhruv09112002@gmail.com', NULL, 'dhruv', 'verma', '$2a$10$sFDIzV7w/VeL8JOp4hVhSeGYLFLOg.RJ7yOtjWzjzkTIqwR75TGAu', 'Email', NULL, NULL, NULL, 'ROLE MEMBER', NULL, NULL, NULL, '2024-09-30 04:20:12', NULL),
	(2, 'admin@teamoffice.in', NULL, NULL, 'admin', '$2a$10$MJadh/2ev9z4eGHXyCWsy.UmvPSADwsqgew036Qo8T04WzpwRkFu2', 'Email', NULL, NULL, NULL, 'ROLE ADMIN', NULL, NULL, NULL, '2024-10-21 06:09:08', '2024-10-21 06:09:08');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
