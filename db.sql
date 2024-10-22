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

-- Dumping structure for table timeoffice.addresses
CREATE TABLE IF NOT EXISTS `addresses` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `zipCode` varchar(255) DEFAULT NULL,
  `isDefault` tinyint(1) DEFAULT '0',
  `updated` datetime DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `addresses_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table timeoffice.addresses: ~0 rows (approximately)
DELETE FROM `addresses`;

-- Dumping structure for table timeoffice.brands
CREATE TABLE IF NOT EXISTS `brands` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `image` longblob,
  `imageContentType` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `isActive` tinyint(1) DEFAULT '1',
  `merchantId` int DEFAULT NULL,
  `updated` datetime DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `slug` (`slug`),
  UNIQUE KEY `slug_2` (`slug`),
  UNIQUE KEY `slug_3` (`slug`),
  UNIQUE KEY `slug_4` (`slug`),
  UNIQUE KEY `slug_5` (`slug`),
  UNIQUE KEY `slug_6` (`slug`),
  UNIQUE KEY `slug_7` (`slug`),
  UNIQUE KEY `slug_8` (`slug`),
  UNIQUE KEY `slug_9` (`slug`),
  UNIQUE KEY `slug_10` (`slug`),
  UNIQUE KEY `slug_11` (`slug`),
  UNIQUE KEY `slug_12` (`slug`),
  UNIQUE KEY `slug_13` (`slug`),
  UNIQUE KEY `slug_14` (`slug`),
  UNIQUE KEY `slug_15` (`slug`),
  UNIQUE KEY `slug_16` (`slug`),
  UNIQUE KEY `slug_17` (`slug`),
  UNIQUE KEY `slug_18` (`slug`),
  UNIQUE KEY `slug_19` (`slug`),
  UNIQUE KEY `slug_20` (`slug`),
  UNIQUE KEY `slug_21` (`slug`),
  UNIQUE KEY `slug_22` (`slug`),
  UNIQUE KEY `slug_23` (`slug`),
  UNIQUE KEY `slug_24` (`slug`),
  UNIQUE KEY `slug_25` (`slug`),
  UNIQUE KEY `slug_26` (`slug`),
  UNIQUE KEY `slug_27` (`slug`),
  UNIQUE KEY `slug_28` (`slug`),
  UNIQUE KEY `slug_29` (`slug`),
  UNIQUE KEY `slug_30` (`slug`),
  UNIQUE KEY `slug_31` (`slug`),
  UNIQUE KEY `slug_32` (`slug`),
  UNIQUE KEY `slug_33` (`slug`),
  UNIQUE KEY `slug_34` (`slug`),
  UNIQUE KEY `slug_35` (`slug`),
  UNIQUE KEY `slug_36` (`slug`),
  UNIQUE KEY `slug_37` (`slug`),
  UNIQUE KEY `slug_38` (`slug`),
  UNIQUE KEY `slug_39` (`slug`),
  UNIQUE KEY `slug_40` (`slug`),
  UNIQUE KEY `slug_41` (`slug`),
  UNIQUE KEY `slug_42` (`slug`),
  UNIQUE KEY `slug_43` (`slug`),
  UNIQUE KEY `slug_44` (`slug`),
  UNIQUE KEY `slug_45` (`slug`),
  UNIQUE KEY `slug_46` (`slug`),
  UNIQUE KEY `slug_47` (`slug`),
  UNIQUE KEY `slug_48` (`slug`),
  UNIQUE KEY `slug_49` (`slug`),
  UNIQUE KEY `slug_50` (`slug`),
  UNIQUE KEY `slug_51` (`slug`),
  UNIQUE KEY `slug_52` (`slug`),
  UNIQUE KEY `slug_53` (`slug`),
  UNIQUE KEY `slug_54` (`slug`),
  UNIQUE KEY `slug_55` (`slug`),
  UNIQUE KEY `slug_56` (`slug`),
  UNIQUE KEY `slug_57` (`slug`),
  KEY `merchantId` (`merchantId`),
  CONSTRAINT `brands_ibfk_1` FOREIGN KEY (`merchantId`) REFERENCES `merchants` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table timeoffice.brands: ~0 rows (approximately)
DELETE FROM `brands`;

-- Dumping structure for table timeoffice.carts
CREATE TABLE IF NOT EXISTS `carts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `updated` datetime DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `carts_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `carts_ibfk_10` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `carts_ibfk_11` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `carts_ibfk_12` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `carts_ibfk_13` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `carts_ibfk_14` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `carts_ibfk_15` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `carts_ibfk_16` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `carts_ibfk_17` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `carts_ibfk_18` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `carts_ibfk_19` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `carts_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `carts_ibfk_20` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `carts_ibfk_21` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `carts_ibfk_22` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `carts_ibfk_23` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `carts_ibfk_24` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `carts_ibfk_25` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `carts_ibfk_26` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `carts_ibfk_27` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `carts_ibfk_28` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `carts_ibfk_29` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `carts_ibfk_3` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `carts_ibfk_30` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `carts_ibfk_31` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `carts_ibfk_32` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `carts_ibfk_33` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `carts_ibfk_34` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `carts_ibfk_35` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `carts_ibfk_36` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `carts_ibfk_37` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `carts_ibfk_38` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `carts_ibfk_39` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `carts_ibfk_4` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `carts_ibfk_40` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `carts_ibfk_41` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `carts_ibfk_42` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `carts_ibfk_43` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `carts_ibfk_44` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `carts_ibfk_45` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `carts_ibfk_46` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `carts_ibfk_47` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `carts_ibfk_48` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `carts_ibfk_49` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `carts_ibfk_5` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `carts_ibfk_50` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `carts_ibfk_51` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `carts_ibfk_52` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `carts_ibfk_53` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `carts_ibfk_54` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `carts_ibfk_55` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `carts_ibfk_56` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `carts_ibfk_57` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `carts_ibfk_58` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `carts_ibfk_59` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `carts_ibfk_6` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `carts_ibfk_60` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `carts_ibfk_7` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `carts_ibfk_8` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `carts_ibfk_9` FOREIGN KEY (`userId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table timeoffice.carts: ~0 rows (approximately)
DELETE FROM `carts`;

-- Dumping structure for table timeoffice.cart_items
CREATE TABLE IF NOT EXISTS `cart_items` (
  `id` int NOT NULL AUTO_INCREMENT,
  `productId` int NOT NULL,
  `quantity` int NOT NULL,
  `purchasePrice` float DEFAULT '0',
  `totalPrice` float DEFAULT '0',
  `priceWithTax` float DEFAULT '0',
  `totalTax` float DEFAULT '0',
  `status` enum('Not processed','Processing','Shipped','Delivered','Cancelled') DEFAULT 'Not processed',
  `cartId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `productId` (`productId`),
  KEY `cartId` (`cartId`),
  CONSTRAINT `cart_items_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `cart_items_ibfk_101` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `cart_items_ibfk_103` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `cart_items_ibfk_105` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `cart_items_ibfk_107` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `cart_items_ibfk_109` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `cart_items_ibfk_11` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `cart_items_ibfk_111` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `cart_items_ibfk_113` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `cart_items_ibfk_115` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `cart_items_ibfk_117` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `cart_items_ibfk_119` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `cart_items_ibfk_120` FOREIGN KEY (`cartId`) REFERENCES `carts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `cart_items_ibfk_13` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `cart_items_ibfk_15` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `cart_items_ibfk_17` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `cart_items_ibfk_19` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `cart_items_ibfk_21` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `cart_items_ibfk_23` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `cart_items_ibfk_25` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `cart_items_ibfk_27` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `cart_items_ibfk_29` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `cart_items_ibfk_3` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `cart_items_ibfk_31` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `cart_items_ibfk_33` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `cart_items_ibfk_35` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `cart_items_ibfk_37` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `cart_items_ibfk_39` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `cart_items_ibfk_41` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `cart_items_ibfk_43` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `cart_items_ibfk_45` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `cart_items_ibfk_47` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `cart_items_ibfk_49` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `cart_items_ibfk_5` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `cart_items_ibfk_51` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `cart_items_ibfk_53` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `cart_items_ibfk_55` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `cart_items_ibfk_57` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `cart_items_ibfk_59` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `cart_items_ibfk_61` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `cart_items_ibfk_63` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `cart_items_ibfk_65` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `cart_items_ibfk_67` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `cart_items_ibfk_69` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `cart_items_ibfk_7` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `cart_items_ibfk_71` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `cart_items_ibfk_73` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `cart_items_ibfk_75` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `cart_items_ibfk_77` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `cart_items_ibfk_79` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `cart_items_ibfk_81` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `cart_items_ibfk_83` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `cart_items_ibfk_85` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `cart_items_ibfk_87` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `cart_items_ibfk_89` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `cart_items_ibfk_9` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `cart_items_ibfk_91` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `cart_items_ibfk_93` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `cart_items_ibfk_95` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `cart_items_ibfk_97` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `cart_items_ibfk_99` FOREIGN KEY (`productId`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table timeoffice.cart_items: ~0 rows (approximately)
DELETE FROM `cart_items`;

-- Dumping structure for table timeoffice.categories
CREATE TABLE IF NOT EXISTS `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `image` longblob,
  `imageContentType` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `isActive` tinyint(1) DEFAULT '1',
  `updated` datetime DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `slug` (`slug`),
  UNIQUE KEY `slug_2` (`slug`),
  UNIQUE KEY `slug_3` (`slug`),
  UNIQUE KEY `slug_4` (`slug`),
  UNIQUE KEY `slug_5` (`slug`),
  UNIQUE KEY `slug_6` (`slug`),
  UNIQUE KEY `slug_7` (`slug`),
  UNIQUE KEY `slug_8` (`slug`),
  UNIQUE KEY `slug_9` (`slug`),
  UNIQUE KEY `slug_10` (`slug`),
  UNIQUE KEY `slug_11` (`slug`),
  UNIQUE KEY `slug_12` (`slug`),
  UNIQUE KEY `slug_13` (`slug`),
  UNIQUE KEY `slug_14` (`slug`),
  UNIQUE KEY `slug_15` (`slug`),
  UNIQUE KEY `slug_16` (`slug`),
  UNIQUE KEY `slug_17` (`slug`),
  UNIQUE KEY `slug_18` (`slug`),
  UNIQUE KEY `slug_19` (`slug`),
  UNIQUE KEY `slug_20` (`slug`),
  UNIQUE KEY `slug_21` (`slug`),
  UNIQUE KEY `slug_22` (`slug`),
  UNIQUE KEY `slug_23` (`slug`),
  UNIQUE KEY `slug_24` (`slug`),
  UNIQUE KEY `slug_25` (`slug`),
  UNIQUE KEY `slug_26` (`slug`),
  UNIQUE KEY `slug_27` (`slug`),
  UNIQUE KEY `slug_28` (`slug`),
  UNIQUE KEY `slug_29` (`slug`),
  UNIQUE KEY `slug_30` (`slug`),
  UNIQUE KEY `slug_31` (`slug`),
  UNIQUE KEY `slug_32` (`slug`),
  UNIQUE KEY `slug_33` (`slug`),
  UNIQUE KEY `slug_34` (`slug`),
  UNIQUE KEY `slug_35` (`slug`),
  UNIQUE KEY `slug_36` (`slug`),
  UNIQUE KEY `slug_37` (`slug`),
  UNIQUE KEY `slug_38` (`slug`),
  UNIQUE KEY `slug_39` (`slug`),
  UNIQUE KEY `slug_40` (`slug`),
  UNIQUE KEY `slug_41` (`slug`),
  UNIQUE KEY `slug_42` (`slug`),
  UNIQUE KEY `slug_43` (`slug`),
  UNIQUE KEY `slug_44` (`slug`),
  UNIQUE KEY `slug_45` (`slug`),
  UNIQUE KEY `slug_46` (`slug`),
  UNIQUE KEY `slug_47` (`slug`),
  UNIQUE KEY `slug_48` (`slug`),
  UNIQUE KEY `slug_49` (`slug`),
  UNIQUE KEY `slug_50` (`slug`),
  UNIQUE KEY `slug_51` (`slug`),
  UNIQUE KEY `slug_52` (`slug`),
  UNIQUE KEY `slug_53` (`slug`),
  UNIQUE KEY `slug_54` (`slug`),
  UNIQUE KEY `slug_55` (`slug`),
  UNIQUE KEY `slug_56` (`slug`),
  UNIQUE KEY `slug_57` (`slug`),
  UNIQUE KEY `slug_58` (`slug`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table timeoffice.categories: ~7 rows (approximately)
DELETE FROM `categories`;
INSERT INTO `categories` (`id`, `name`, `slug`, `image`, `imageContentType`, `description`, `isActive`, `updated`, `created`) VALUES
	(1, 'Attendance and Access Control Systems', NULL, NULL, NULL, NULL, 1, NULL, '2024-10-20 06:27:00'),
	(2, 'Door Locks and Controllers', NULL, NULL, NULL, NULL, 1, NULL, '2024-10-20 06:43:57'),
	(3, 'Barcode Scanners ', NULL, NULL, NULL, NULL, 1, NULL, '2024-10-20 06:43:57'),
	(4, 'Accessories', NULL, NULL, NULL, NULL, 1, NULL, '2024-10-20 06:43:57'),
	(5, 'Switches for Access Control', NULL, NULL, NULL, NULL, 1, NULL, '2024-10-20 06:43:57'),
	(6, 'Readers', NULL, NULL, NULL, NULL, 1, NULL, '2024-10-20 06:43:57'),
	(7, 'Elevator Control System', NULL, NULL, NULL, NULL, 1, NULL, '2024-10-20 06:43:57');

-- Dumping structure for table timeoffice.contacts
CREATE TABLE IF NOT EXISTS `contacts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `message` text,
  `updated` datetime DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table timeoffice.contacts: ~0 rows (approximately)
DELETE FROM `contacts`;
INSERT INTO `contacts` (`id`, `name`, `email`, `message`, `updated`, `created`) VALUES
	(1, 'Dhruv Verma', 'vermadhruv09112002@gmail.com', 'dsvdvsdvsdv', NULL, '2024-10-01 08:44:24');

-- Dumping structure for table timeoffice.coupons
CREATE TABLE IF NOT EXISTS `coupons` (
  `id` int NOT NULL AUTO_INCREMENT,
  `created` datetime DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `duration` varchar(255) DEFAULT 'once',
  `duration_in_months` int DEFAULT NULL,
  `redeem_by` datetime DEFAULT NULL,
  `max_redemptions` int DEFAULT NULL,
  `times_redeemed` int DEFAULT '0',
  `percent_off` float DEFAULT NULL,
  `amount_off` float DEFAULT NULL,
  `currency` varchar(255) DEFAULT NULL,
  `metadata` json DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `code` (`code`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `code_2` (`code`),
  UNIQUE KEY `email_2` (`email`),
  UNIQUE KEY `code_3` (`code`),
  UNIQUE KEY `email_3` (`email`),
  UNIQUE KEY `code_4` (`code`),
  UNIQUE KEY `email_4` (`email`),
  UNIQUE KEY `code_5` (`code`),
  UNIQUE KEY `email_5` (`email`),
  UNIQUE KEY `code_6` (`code`),
  UNIQUE KEY `email_6` (`email`),
  UNIQUE KEY `code_7` (`code`),
  UNIQUE KEY `email_7` (`email`),
  UNIQUE KEY `code_8` (`code`),
  UNIQUE KEY `email_8` (`email`),
  UNIQUE KEY `code_9` (`code`),
  UNIQUE KEY `email_9` (`email`),
  UNIQUE KEY `code_10` (`code`),
  UNIQUE KEY `email_10` (`email`),
  UNIQUE KEY `code_11` (`code`),
  UNIQUE KEY `email_11` (`email`),
  UNIQUE KEY `code_12` (`code`),
  UNIQUE KEY `email_12` (`email`),
  UNIQUE KEY `code_13` (`code`),
  UNIQUE KEY `email_13` (`email`),
  UNIQUE KEY `code_14` (`code`),
  UNIQUE KEY `email_14` (`email`),
  UNIQUE KEY `code_15` (`code`),
  UNIQUE KEY `email_15` (`email`),
  UNIQUE KEY `code_16` (`code`),
  UNIQUE KEY `email_16` (`email`),
  UNIQUE KEY `code_17` (`code`),
  UNIQUE KEY `email_17` (`email`),
  UNIQUE KEY `code_18` (`code`),
  UNIQUE KEY `email_18` (`email`),
  UNIQUE KEY `code_19` (`code`),
  UNIQUE KEY `email_19` (`email`),
  UNIQUE KEY `code_20` (`code`),
  UNIQUE KEY `email_20` (`email`),
  UNIQUE KEY `code_21` (`code`),
  UNIQUE KEY `email_21` (`email`),
  UNIQUE KEY `code_22` (`code`),
  UNIQUE KEY `email_22` (`email`),
  UNIQUE KEY `code_23` (`code`),
  UNIQUE KEY `email_23` (`email`),
  UNIQUE KEY `code_24` (`code`),
  UNIQUE KEY `email_24` (`email`),
  UNIQUE KEY `code_25` (`code`),
  UNIQUE KEY `email_25` (`email`),
  UNIQUE KEY `code_26` (`code`),
  UNIQUE KEY `email_26` (`email`),
  UNIQUE KEY `code_27` (`code`),
  UNIQUE KEY `email_27` (`email`),
  UNIQUE KEY `code_28` (`code`),
  UNIQUE KEY `email_28` (`email`),
  UNIQUE KEY `code_29` (`code`),
  UNIQUE KEY `email_29` (`email`),
  UNIQUE KEY `code_30` (`code`),
  UNIQUE KEY `email_30` (`email`),
  UNIQUE KEY `code_31` (`code`),
  UNIQUE KEY `email_31` (`email`),
  UNIQUE KEY `code_32` (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table timeoffice.coupons: ~0 rows (approximately)
DELETE FROM `coupons`;

-- Dumping structure for table timeoffice.discounts
CREATE TABLE IF NOT EXISTS `discounts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user` varchar(255) NOT NULL,
  `code` varchar(255) NOT NULL,
  `start` datetime DEFAULT NULL,
  `end` datetime DEFAULT NULL,
  `coupon` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `discounts_user_code` (`user`,`code`),
  KEY `coupon` (`coupon`),
  CONSTRAINT `discounts_ibfk_1` FOREIGN KEY (`coupon`) REFERENCES `coupons` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `discounts_ibfk_10` FOREIGN KEY (`coupon`) REFERENCES `coupons` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `discounts_ibfk_11` FOREIGN KEY (`coupon`) REFERENCES `coupons` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `discounts_ibfk_12` FOREIGN KEY (`coupon`) REFERENCES `coupons` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `discounts_ibfk_13` FOREIGN KEY (`coupon`) REFERENCES `coupons` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `discounts_ibfk_14` FOREIGN KEY (`coupon`) REFERENCES `coupons` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `discounts_ibfk_15` FOREIGN KEY (`coupon`) REFERENCES `coupons` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `discounts_ibfk_16` FOREIGN KEY (`coupon`) REFERENCES `coupons` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `discounts_ibfk_17` FOREIGN KEY (`coupon`) REFERENCES `coupons` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `discounts_ibfk_18` FOREIGN KEY (`coupon`) REFERENCES `coupons` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `discounts_ibfk_19` FOREIGN KEY (`coupon`) REFERENCES `coupons` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `discounts_ibfk_2` FOREIGN KEY (`coupon`) REFERENCES `coupons` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `discounts_ibfk_20` FOREIGN KEY (`coupon`) REFERENCES `coupons` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `discounts_ibfk_21` FOREIGN KEY (`coupon`) REFERENCES `coupons` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `discounts_ibfk_22` FOREIGN KEY (`coupon`) REFERENCES `coupons` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `discounts_ibfk_23` FOREIGN KEY (`coupon`) REFERENCES `coupons` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `discounts_ibfk_24` FOREIGN KEY (`coupon`) REFERENCES `coupons` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `discounts_ibfk_25` FOREIGN KEY (`coupon`) REFERENCES `coupons` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `discounts_ibfk_26` FOREIGN KEY (`coupon`) REFERENCES `coupons` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `discounts_ibfk_27` FOREIGN KEY (`coupon`) REFERENCES `coupons` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `discounts_ibfk_28` FOREIGN KEY (`coupon`) REFERENCES `coupons` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `discounts_ibfk_29` FOREIGN KEY (`coupon`) REFERENCES `coupons` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `discounts_ibfk_3` FOREIGN KEY (`coupon`) REFERENCES `coupons` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `discounts_ibfk_30` FOREIGN KEY (`coupon`) REFERENCES `coupons` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `discounts_ibfk_4` FOREIGN KEY (`coupon`) REFERENCES `coupons` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `discounts_ibfk_5` FOREIGN KEY (`coupon`) REFERENCES `coupons` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `discounts_ibfk_6` FOREIGN KEY (`coupon`) REFERENCES `coupons` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `discounts_ibfk_7` FOREIGN KEY (`coupon`) REFERENCES `coupons` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `discounts_ibfk_8` FOREIGN KEY (`coupon`) REFERENCES `coupons` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `discounts_ibfk_9` FOREIGN KEY (`coupon`) REFERENCES `coupons` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table timeoffice.discounts: ~0 rows (approximately)
DELETE FROM `discounts`;

-- Dumping structure for table timeoffice.merchants
CREATE TABLE IF NOT EXISTS `merchants` (
  `id` int NOT NULL AUTO_INCREMENT,
  `brandName` varchar(255) NOT NULL,
  `business` varchar(255) DEFAULT NULL,
  `isActive` tinyint(1) DEFAULT '0',
  `status` varchar(255) DEFAULT 'Waiting Approval',
  `updated` datetime DEFAULT NULL,
  `userId` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `merchants_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table timeoffice.merchants: ~0 rows (approximately)
DELETE FROM `merchants`;

-- Dumping structure for table timeoffice.orders
CREATE TABLE IF NOT EXISTS `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cartId` int NOT NULL,
  `userId` int NOT NULL,
  `total` float DEFAULT '0',
  `updated` datetime DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `cartId` (`cartId`),
  KEY `userId` (`userId`),
  CONSTRAINT `orders_ibfk_119` FOREIGN KEY (`cartId`) REFERENCES `carts` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `orders_ibfk_120` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table timeoffice.orders: ~0 rows (approximately)
DELETE FROM `orders`;

-- Dumping structure for table timeoffice.products
CREATE TABLE IF NOT EXISTS `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `sku` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `description` text,
  `price` float DEFAULT NULL,
  `isActive` tinyint(1) DEFAULT '1',
  `brand` int DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `categoryId` int DEFAULT NULL,
  `images` json DEFAULT NULL,
  `subcategoryId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `slug` (`slug`),
  UNIQUE KEY `sku` (`sku`),
  UNIQUE KEY `sku_2` (`sku`),
  UNIQUE KEY `slug_2` (`slug`),
  UNIQUE KEY `slug_3` (`slug`),
  UNIQUE KEY `slug_4` (`slug`),
  UNIQUE KEY `sku_3` (`sku`),
  UNIQUE KEY `slug_5` (`slug`),
  KEY `brand` (`brand`),
  KEY `categoryId` (`categoryId`),
  KEY `subcategoryId` (`subcategoryId`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`brand`) REFERENCES `brands` (`id`),
  CONSTRAINT `products_ibfk_101` FOREIGN KEY (`brand`) REFERENCES `brands` (`id`),
  CONSTRAINT `products_ibfk_103` FOREIGN KEY (`brand`) REFERENCES `brands` (`id`),
  CONSTRAINT `products_ibfk_105` FOREIGN KEY (`brand`) REFERENCES `brands` (`id`),
  CONSTRAINT `products_ibfk_107` FOREIGN KEY (`brand`) REFERENCES `brands` (`id`),
  CONSTRAINT `products_ibfk_109` FOREIGN KEY (`brand`) REFERENCES `brands` (`id`),
  CONSTRAINT `products_ibfk_11` FOREIGN KEY (`brand`) REFERENCES `brands` (`id`),
  CONSTRAINT `products_ibfk_111` FOREIGN KEY (`brand`) REFERENCES `brands` (`id`),
  CONSTRAINT `products_ibfk_113` FOREIGN KEY (`brand`) REFERENCES `brands` (`id`),
  CONSTRAINT `products_ibfk_116` FOREIGN KEY (`brand`) REFERENCES `brands` (`id`),
  CONSTRAINT `products_ibfk_119` FOREIGN KEY (`brand`) REFERENCES `brands` (`id`),
  CONSTRAINT `products_ibfk_122` FOREIGN KEY (`brand`) REFERENCES `brands` (`id`),
  CONSTRAINT `products_ibfk_123` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`),
  CONSTRAINT `products_ibfk_124` FOREIGN KEY (`subcategoryId`) REFERENCES `subcategories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `products_ibfk_13` FOREIGN KEY (`brand`) REFERENCES `brands` (`id`),
  CONSTRAINT `products_ibfk_15` FOREIGN KEY (`brand`) REFERENCES `brands` (`id`),
  CONSTRAINT `products_ibfk_17` FOREIGN KEY (`brand`) REFERENCES `brands` (`id`),
  CONSTRAINT `products_ibfk_19` FOREIGN KEY (`brand`) REFERENCES `brands` (`id`),
  CONSTRAINT `products_ibfk_21` FOREIGN KEY (`brand`) REFERENCES `brands` (`id`),
  CONSTRAINT `products_ibfk_23` FOREIGN KEY (`brand`) REFERENCES `brands` (`id`),
  CONSTRAINT `products_ibfk_25` FOREIGN KEY (`brand`) REFERENCES `brands` (`id`),
  CONSTRAINT `products_ibfk_27` FOREIGN KEY (`brand`) REFERENCES `brands` (`id`),
  CONSTRAINT `products_ibfk_29` FOREIGN KEY (`brand`) REFERENCES `brands` (`id`),
  CONSTRAINT `products_ibfk_3` FOREIGN KEY (`brand`) REFERENCES `brands` (`id`),
  CONSTRAINT `products_ibfk_31` FOREIGN KEY (`brand`) REFERENCES `brands` (`id`),
  CONSTRAINT `products_ibfk_33` FOREIGN KEY (`brand`) REFERENCES `brands` (`id`),
  CONSTRAINT `products_ibfk_35` FOREIGN KEY (`brand`) REFERENCES `brands` (`id`),
  CONSTRAINT `products_ibfk_37` FOREIGN KEY (`brand`) REFERENCES `brands` (`id`),
  CONSTRAINT `products_ibfk_39` FOREIGN KEY (`brand`) REFERENCES `brands` (`id`),
  CONSTRAINT `products_ibfk_41` FOREIGN KEY (`brand`) REFERENCES `brands` (`id`),
  CONSTRAINT `products_ibfk_43` FOREIGN KEY (`brand`) REFERENCES `brands` (`id`),
  CONSTRAINT `products_ibfk_45` FOREIGN KEY (`brand`) REFERENCES `brands` (`id`),
  CONSTRAINT `products_ibfk_47` FOREIGN KEY (`brand`) REFERENCES `brands` (`id`),
  CONSTRAINT `products_ibfk_49` FOREIGN KEY (`brand`) REFERENCES `brands` (`id`),
  CONSTRAINT `products_ibfk_5` FOREIGN KEY (`brand`) REFERENCES `brands` (`id`),
  CONSTRAINT `products_ibfk_51` FOREIGN KEY (`brand`) REFERENCES `brands` (`id`),
  CONSTRAINT `products_ibfk_53` FOREIGN KEY (`brand`) REFERENCES `brands` (`id`),
  CONSTRAINT `products_ibfk_55` FOREIGN KEY (`brand`) REFERENCES `brands` (`id`),
  CONSTRAINT `products_ibfk_57` FOREIGN KEY (`brand`) REFERENCES `brands` (`id`),
  CONSTRAINT `products_ibfk_59` FOREIGN KEY (`brand`) REFERENCES `brands` (`id`),
  CONSTRAINT `products_ibfk_61` FOREIGN KEY (`brand`) REFERENCES `brands` (`id`),
  CONSTRAINT `products_ibfk_63` FOREIGN KEY (`brand`) REFERENCES `brands` (`id`),
  CONSTRAINT `products_ibfk_65` FOREIGN KEY (`brand`) REFERENCES `brands` (`id`),
  CONSTRAINT `products_ibfk_67` FOREIGN KEY (`brand`) REFERENCES `brands` (`id`),
  CONSTRAINT `products_ibfk_69` FOREIGN KEY (`brand`) REFERENCES `brands` (`id`),
  CONSTRAINT `products_ibfk_7` FOREIGN KEY (`brand`) REFERENCES `brands` (`id`),
  CONSTRAINT `products_ibfk_71` FOREIGN KEY (`brand`) REFERENCES `brands` (`id`),
  CONSTRAINT `products_ibfk_73` FOREIGN KEY (`brand`) REFERENCES `brands` (`id`),
  CONSTRAINT `products_ibfk_75` FOREIGN KEY (`brand`) REFERENCES `brands` (`id`),
  CONSTRAINT `products_ibfk_77` FOREIGN KEY (`brand`) REFERENCES `brands` (`id`),
  CONSTRAINT `products_ibfk_79` FOREIGN KEY (`brand`) REFERENCES `brands` (`id`),
  CONSTRAINT `products_ibfk_81` FOREIGN KEY (`brand`) REFERENCES `brands` (`id`),
  CONSTRAINT `products_ibfk_83` FOREIGN KEY (`brand`) REFERENCES `brands` (`id`),
  CONSTRAINT `products_ibfk_85` FOREIGN KEY (`brand`) REFERENCES `brands` (`id`),
  CONSTRAINT `products_ibfk_87` FOREIGN KEY (`brand`) REFERENCES `brands` (`id`),
  CONSTRAINT `products_ibfk_89` FOREIGN KEY (`brand`) REFERENCES `brands` (`id`),
  CONSTRAINT `products_ibfk_9` FOREIGN KEY (`brand`) REFERENCES `brands` (`id`),
  CONSTRAINT `products_ibfk_91` FOREIGN KEY (`brand`) REFERENCES `brands` (`id`),
  CONSTRAINT `products_ibfk_93` FOREIGN KEY (`brand`) REFERENCES `brands` (`id`),
  CONSTRAINT `products_ibfk_95` FOREIGN KEY (`brand`) REFERENCES `brands` (`id`),
  CONSTRAINT `products_ibfk_97` FOREIGN KEY (`brand`) REFERENCES `brands` (`id`),
  CONSTRAINT `products_ibfk_99` FOREIGN KEY (`brand`) REFERENCES `brands` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=671 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table timeoffice.products: ~64 rows (approximately)
DELETE FROM `products`;
INSERT INTO `products` (`id`, `sku`, `name`, `slug`, `description`, `price`, `isActive`, `brand`, `created`, `categoryId`, `images`, `subcategoryId`) VALUES
	(607, '305cb', 'Z305CB Fingerprint Attendance Device', NULL, '', 8000, 1, NULL, '2024-10-19 09:50:50', NULL, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2F305cb%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2F305cb%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2F305cb%2F3.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2F305cb%2F4.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2F305cb%2F5.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2F305cb%2F6.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2F305cb%2FThumbs.db?alt=media"]', 5),
	(608, 'bs20', 'BS20 / CQH20', NULL, 'scanBarcodeCategory: 0, codeReadingDensity: 0, operatingTemperature: 0, typeOfDecoding: 0, storage: 0, scanMode: 0, operatingHumidity: 0, seismicResistance: 0, promptMode: 0, Communication: 0, operatingModes: 0, drivers: 0, batteryCapacity: 0, batteryType: 0', 1999, 1, NULL, '2024-10-19 09:51:11', NULL, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fbs20%2F1.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fbs20%2F2.jpeg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fbs20%2F3.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fbs20%2F4.jpeg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fbs20%2F5.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fbs20%2F6.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fbs20%2FThumbs.db?alt=media"]', 11),
	(609, 'bs20w', 'BS20W / CQH20G', NULL, 'scanBarcodeCategory: 0, codeReadingDensity: 0, operatingTemperature: 0, typeOfDecoding: 0, storage: 0, scanMode: 0, operatingHumidity: 0, seismicResistance: 0, promptMode: 0, Communication: 0, operatingModes: 0, drivers: 0, batteryCapacity: 0, batteryType: 0', 4000, 1, NULL, '2024-10-19 09:51:30', NULL, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fbs20w%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fbs20w%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fbs20w%2F3.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fbs20w%2FThumbs.db?alt=media"]', 10),
	(610, 'clampshell-thick-card', 'Team Office Clampshell Proximity Thick Cards', NULL, '', 25, 1, NULL, '2024-10-19 09:51:44', NULL, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fclampshell-thick-card%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fclampshell-thick-card%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fclampshell-thick-card%2F3.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fclampshell-thick-card%2F4.png?alt=media"]', 15),
	(611, 'door-controller-1-12000rs2wg', '1 Door Controller', NULL, 'users: 0, eventStorage: 0, numberOfReadersSupported: 0, Communication: 0, enclosure: 0, powerSupply: 0, interlock: 0, numberOfAlarm: 0, antiPassBackFeature: 0, liveEventMonitor: 0, exitSwitchSupported: 0', 12000, 1, NULL, '2024-10-19 09:51:52', NULL, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fdoor-controller-1-12000rs2wg%2F1.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fdoor-controller-1-12000rs2wg%2F2.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fdoor-controller-1-12000rs2wg%2F3.jpg?alt=media"]', 8),
	(612, 'door-controller-2-16000rs4wg', '2 Door Controller', NULL, 'users: 0, eventStorage: 0, numberOfReadersSupported: 0, Communication: 0, enclosure: 0, powerSupply: 0, interlock: 0, numberOfAlarm: 0, antiPassBackFeature: 0, liveEventMonitor: 0, exitSwitchSupported: 0', 16000, 1, NULL, '2024-10-19 09:52:03', NULL, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fdoor-controller-2-16000rs4wg%2F1.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fdoor-controller-2-16000rs4wg%2F2.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fdoor-controller-2-16000rs4wg%2F3.jpg?alt=media"]', 8),
	(613, 'door-controller-4-20000rs', '4 Door Controller', NULL, 'users: 0, eventStorage: 0, numberOfReadersSupported: 0, Communication: 0, enclosure: 0, powerSupply: 0, interlock: 0, numberOfAlarm: 0, antiPassBackFeature: 0, liveEventMonitor: 0, exitSwitchSupported: 0', 20000, 1, NULL, '2024-10-19 09:52:14', NULL, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fdoor-controller-4-20000rs%2F1.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fdoor-controller-4-20000rs%2F2.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fdoor-controller-4-20000rs%2F3.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fdoor-controller-4-20000rs%2FThumbs.db?alt=media"]', 8),
	(614, 'drop-bolt-lock', 'Surface Mount Drop Bolt Lock', NULL, '', 2500, 1, NULL, '2024-10-19 09:52:50', NULL, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fdrop-bolt-lock%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fdrop-bolt-lock%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fdrop-bolt-lock%2F3.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fdrop-bolt-lock%2F4.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fdrop-bolt-lock%2FThumbs.db?alt=media"]', 12),
	(615, 'drop-bolt-lock-feedback', 'Drop Bolt Lock with Feedback and Timer', NULL, '', 1500, 1, NULL, '2024-10-19 09:53:25', NULL, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fdrop-bolt-lock-feedback%2F1.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fdrop-bolt-lock-feedback%2F2.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fdrop-bolt-lock-feedback%2F3.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fdrop-bolt-lock-feedback%2F4.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fdrop-bolt-lock-feedback%2FThumbs.db?alt=media"]', 12),
	(616, 'drop-bolt-lock-fully-glass', 'Drop Bolt Lock for Fully Glass Door', NULL, '', 3500, 1, NULL, '2024-10-19 09:54:55', NULL, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fdrop-bolt-lock-fully-glass%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fdrop-bolt-lock-fully-glass%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fdrop-bolt-lock-fully-glass%2F3.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fdrop-bolt-lock-fully-glass%2F4.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fdrop-bolt-lock-fully-glass%2F5.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fdrop-bolt-lock-fully-glass%2F6.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fdrop-bolt-lock-fully-glass%2F7.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fdrop-bolt-lock-fully-glass%2FThumbs.db?alt=media"]', 12),
	(617, 'electric-strike-s-es', 'Team Office Standard Electric Strike S-ES', NULL, '', 1500, 1, NULL, '2024-10-19 09:55:03', NULL, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Felectric-strike-s-es%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Felectric-strike-s-es%2F2.png?alt=media"]', 12),
	(618, 'em-lock', 'EM Lock 600 LBS', NULL, '', 550, 1, NULL, '2024-10-19 09:57:23', NULL, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fem-lock%2F1.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fem-lock%2F2.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fem-lock%2F3.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fem-lock%2F4.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fem-lock%2F5.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fem-lock%2F6.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fem-lock%2F7.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fem-lock%2F8.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fem-lock%2FThumbs.db?alt=media"]', 12),
	(619, 'em-lock-120-lbs', 'EM Lock 120LBS', NULL, '', 1500, 1, NULL, '2024-10-19 09:58:29', NULL, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fem-lock-120-lbs%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fem-lock-120-lbs%2F10.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fem-lock-120-lbs%2F11.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fem-lock-120-lbs%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fem-lock-120-lbs%2F3.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fem-lock-120-lbs%2F4.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fem-lock-120-lbs%2F5.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fem-lock-120-lbs%2F6.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fem-lock-120-lbs%2F7.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fem-lock-120-lbs%2F8.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fem-lock-120-lbs%2F9.png?alt=media"]', 12),
	(620, 'em-lock-1200-lbs', 'EM Lock 1200 LBS Double Leaf', NULL, '', 4500, 1, NULL, '2024-10-19 09:58:52', NULL, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fem-lock-1200-lbs%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fem-lock-1200-lbs%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fem-lock-1200-lbs%2F3.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fem-lock-1200-lbs%2FThumbs.db?alt=media"]', 12),
	(621, 'em-lock-300lbs', 'EM Lock 300 LBS', NULL, '', 2300, 1, NULL, '2024-10-19 09:58:59', NULL, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fem-lock-300lbs%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fem-lock-300lbs%2FThumbs.db?alt=media"]', 12),
	(622, 'emergency-glass-break-switch', 'TOFP-203 (NO/NC/COM)', NULL, '', 750, 1, NULL, '2024-10-19 09:59:14', NULL, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Femergency-glass-break-switch%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Femergency-glass-break-switch%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Femergency-glass-break-switch%2FThumbs.db?alt=media"]', 16),
	(623, 'energy-saving-switch', 'Team Office Energy Saving Switch for Hotel', NULL, '', 1200, 1, NULL, '2024-10-19 09:59:19', NULL, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fenergy-saving-switch%2F1.png?alt=media"]', 16),
	(624, 'fixed-mount-qr-code', 'Z86', NULL, '', 8500, 1, NULL, '2024-10-19 09:59:52', NULL, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Ffixed-mount-qr-code%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Ffixed-mount-qr-code%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Ffixed-mount-qr-code%2F3.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Ffixed-mount-qr-code%2F4.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Ffixed-mount-qr-code%2F5.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Ffixed-mount-qr-code%2F6.png?alt=media"]', 9),
	(625, 'l-25', 'L25 Padlock', NULL, '', 2199, 1, NULL, '2024-10-19 10:00:30', NULL, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fl-25%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fl-25%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fl-25%2F3.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fl-25%2F4-.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fl-25%2F5.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fl-25%2F6-.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fl-25%2F7.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fl-25%2FThumbs.db?alt=media"]', 7),
	(626, 'l-braket-for-em-lock-600-lbs', 'L Brackets', NULL, '', 350, 1, NULL, '2024-10-19 10:06:15', NULL, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fl-braket-for-em-lock-600-lbs%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fl-braket-for-em-lock-600-lbs%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fl-braket-for-em-lock-600-lbs%2F3.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fl-braket-for-em-lock-600-lbs%2F4.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fl-braket-for-em-lock-600-lbs%2F5.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fl-braket-for-em-lock-600-lbs%2F6.png?alt=media"]', 13),
	(627, 'morpho-usb-15-mtr-', NULL, NULL, NULL, NULL, 1, NULL, '2024-10-19 10:07:53', NULL, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fmorpho-usb-15-mtr-%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fmorpho-usb-15-mtr-%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fmorpho-usb-15-mtr-%2F3.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fmorpho-usb-15-mtr-%2F4.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fmorpho-usb-15-mtr-%2F5.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fmorpho-usb-15-mtr-%2F6.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fmorpho-usb-15-mtr-%2F7.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fmorpho-usb-15-mtr-%2FThumbs.db?alt=media"]', NULL),
	(628, 'press--exit', NULL, NULL, NULL, NULL, 1, NULL, '2024-10-19 10:09:35', NULL, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fpress--exit%2F1.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fpress--exit%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fpress--exit%2F3.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fpress--exit%2F4.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fpress--exit%2F5.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fpress--exit%2F6.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fpress--exit%2F7.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fpress--exit%2FThumbs.db?alt=media"]', NULL),
	(629, 'push-ss-exit-switch-big', 'Team Office SS Exit Switch Big', NULL, '', 402, 1, NULL, '2024-10-19 10:09:39', NULL, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fpush-ss-exit-switch-big%2F1.png?alt=media"]', 16),
	(630, 'push-ss-exit-switch-small', 'Team office SS Exit Switch Small', NULL, '', 450, 1, NULL, '2024-10-19 10:09:43', NULL, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fpush-ss-exit-switch-small%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fpush-ss-exit-switch-small%2FThumbs.db?alt=media"]', 16),
	(631, 'pvc-card', 'Proximity Cards', NULL, '', 22, 1, NULL, '2024-10-19 10:09:46', NULL, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fpvc-card%2F1.png?alt=media"]', 15),
	(632, 'pvc-exit-switch-small', 'Team office PVC Exit Switch Small', NULL, '', 206, 1, NULL, '2024-10-19 10:09:51', NULL, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fpvc-exit-switch-small%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fpvc-exit-switch-small%2FThumbs.db?alt=media"]', 16),
	(633, 'remote-kit', 'Remote Kit', NULL, '', 0, 1, NULL, '2024-10-19 10:10:04', NULL, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fremote-kit%2F1.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fremote-kit%2F2.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fremote-kit%2F3.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fremote-kit%2F4.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fremote-kit%2FThumbs.db?alt=media"]', 16),
	(634, 'rfid-card', 'RFID Key Fobs', NULL, '', 25, 1, NULL, '2024-10-19 10:10:30', NULL, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Frfid-card%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Frfid-card%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Frfid-card%2F3.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Frfid-card%2F4.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Frfid-card%2FThumbs.db?alt=media"]', 15),
	(635, 'rfid-water-park', 'RFID Locker Lock For Water Park', NULL, '', 2650, 1, NULL, '2024-10-19 10:10:54', NULL, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Frfid-water-park%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Frfid-water-park%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Frfid-water-park%2F3.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Frfid-water-park%2F4.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Frfid-water-park%2F5.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Frfid-water-park%2F6.png?alt=media"]', 15),
	(636, 'rim-lock', 'RIM Lock', NULL, '', 2070, 1, NULL, '2024-10-19 10:21:08', NULL, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Frim-lock%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Frim-lock%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Frim-lock%2F3.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Frim-lock%2F4.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Frim-lock%2F5.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Frim-lock%2F6.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Frim-lock%2F7.png?alt=media"]', 12),
	(637, 'startek-type-c', NULL, NULL, NULL, NULL, 1, NULL, '2024-10-19 10:22:31', NULL, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fstartek-type-c%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fstartek-type-c%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fstartek-type-c%2F3.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fstartek-type-c%2F4.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fstartek-type-c%2F5.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fstartek-type-c%2F6.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fstartek-type-c%2F7.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fstartek-type-c%2F8.png?alt=media"]', NULL),
	(638, 'startek-usb', NULL, NULL, NULL, NULL, 1, NULL, '2024-10-19 10:22:43', NULL, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fstartek-usb%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fstartek-usb%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fstartek-usb%2F3.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fstartek-usb%2F4.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fstartek-usb%2F5.png?alt=media"]', NULL),
	(639, 'thick-card', 'UHF Card', NULL, '', 50, 1, NULL, '2024-10-19 10:22:59', NULL, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fthick-card%2F1.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fthick-card%2F2.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fthick-card%2F3.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fthick-card%2F4.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fthick-card%2F5.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fthick-card%2F6.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fthick-card%2F7.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fthick-card%2F8.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fthick-card%2FThumbs.db?alt=media"]', 15),
	(640, 'thiin-card', NULL, NULL, NULL, NULL, 1, NULL, '2024-10-19 10:23:13', NULL, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fthiin-card%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fthiin-card%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fthiin-card%2F3.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fthiin-card%2F4.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fthiin-card%2FThumbs.db?alt=media"]', NULL),
	(641, 'top-173-no-touch', 'TOP-173R (NO/NC/COM) Inbuilt Receiver', NULL, '', 0, 1, NULL, '2024-10-19 10:24:20', NULL, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Ftop-173-no-touch%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Ftop-173-no-touch%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Ftop-173-no-touch%2F3.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Ftop-173-no-touch%2F4.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Ftop-173-no-touch%2F5.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Ftop-173-no-touch%2F6.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Ftop-173-no-touch%2F7.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Ftop-173-no-touch%2F8.png?alt=media"]', 16),
	(642, 'top-43', 'TOP-43 Exit Push Switch Metal', NULL, '', 500, 1, NULL, '2024-10-19 10:24:31', NULL, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Ftop-43%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Ftop-43%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Ftop-43%2F3.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Ftop-43%2FThumbs.db?alt=media"]', 16),
	(643, 'u-bracket-for-drop-bolt-lock', 'U Bracket For Drop Bolt Lock', NULL, '', 650, 1, NULL, '2024-10-19 10:24:45', NULL, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fu-bracket-for-drop-bolt-lock%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fu-bracket-for-drop-bolt-lock%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fu-bracket-for-drop-bolt-lock%2F3.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fu-bracket-for-drop-bolt-lock%2F4.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fu-bracket-for-drop-bolt-lock%2FThumbs.db?alt=media"]', 13),
	(644, 'u-bracket-for-em-lock', 'U Bracket For EM Lock (600lbs)', NULL, '', 550, 1, NULL, '2024-10-19 10:25:08', NULL, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fu-bracket-for-em-lock%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fu-bracket-for-em-lock%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fu-bracket-for-em-lock%2F3.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fu-bracket-for-em-lock%2F4.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fu-bracket-for-em-lock%2F5.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fu-bracket-for-em-lock%2F6.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fu-bracket-for-em-lock%2F7.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fu-bracket-for-em-lock%2FThumbs.db?alt=media"]', 13),
	(645, 'uhf', 'UHF Cards and Tags', NULL, '', 50, 1, NULL, '2024-10-19 10:25:11', NULL, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fuhf%2F1.png?alt=media"]', 15),
	(646, 'white-rotary-exit-switch-door', 'Team office PVC Exit Switch', NULL, '', 250, 1, NULL, '2024-10-19 10:25:15', NULL, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fwhite-rotary-exit-switch-door%2F1.png?alt=media"]', 16),
	(647, 'windshield-uhf', 'Team Office UHF Windshield Tags', NULL, '', 60, 1, NULL, '2024-10-19 10:25:29', NULL, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fwindshield-uhf%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fwindshield-uhf%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fwindshield-uhf%2F3.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fwindshield-uhf%2F4.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fwindshield-uhf%2FThumbs.db?alt=media"]', 15),
	(648, 'z100ac', 'Z100AC / Z199', NULL, 'Authentication Method: 0,    User Capacity: 0,    Transaction Capacity: 0,   Color: 0,    Display: 0,    Fingerprint Sensor: 0,   Communication: 0,   FAR & FRR: 0,      Voice Indication: 0,     Operating Voltage: 0,       Access Control: 0,  Fingerprint Angle: 0,         Data Push: 0,   Connection Interface: 0, LED Indication: 0', 8000, 1, NULL, '2024-10-19 10:25:47', NULL, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz100ac%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz100ac%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz100ac%2F3.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz100ac%2F4.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz100ac%2F5.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz100ac%2F6.png?alt=media"]', 4),
	(649, 'z100n', 'Z100N', NULL, 'Authentication Method: 0, User Capacity: 0, Transaction Capacity: 0, Color: 0, Display: 0, Fingerprint Sensor: 0, Language: 0, Communication: 0, FRR: 0, FAR: 0, Identification Time: 0, Operating Voltage: 0, LED & Voice Indication: 0', 7500, 1, NULL, '2024-10-19 10:26:05', NULL, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz100n%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz100n%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz100n%2F3.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz100n%2F4.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz100n%2F5.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz100n%2FThumbs.db?alt=media"]', 5),
	(650, 'z101n', 'Z101N', NULL, 'Authentication Method: 0, User Capacity: 0, Color: 0, Card Type: 0, Input/Output Ports: 0, Fingerprint Sensor: 0, Door Opening Time: 0, LED: 0, Operating Voltage: 0, Card Reading Range: 0, Short-Circuit Protection Time: 0', 4300, 1, NULL, '2024-10-19 10:26:18', NULL, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz101n%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz101n%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz101n%2F3.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz101n%2F4.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz101n%2FThumbs.db?alt=media"]', 6),
	(651, 'z11-ic', 'Team Office Z11 IC Usb Rfid Card Reader(13.56mhz)', NULL, '', 1000, 1, NULL, '2024-10-19 10:26:47', NULL, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz11-ic%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz11-ic%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz11-ic%2F3.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz11-ic%2F4.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz11-ic%2F5.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz11-ic%2F6.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz11-ic%2F7.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz11-ic%2FThumbs.db?alt=media"]', 15),
	(652, 'z11-id', 'Team Office Z11 ID- USB RFID CARD READER(125Khz)', NULL, '', 1000, 1, NULL, '2024-10-19 10:27:17', NULL, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz11-id%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz11-id%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz11-id%2F3.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz11-id%2F4.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz11-id%2F5.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz11-id%2F6.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz11-id%2F7.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz11-id%2FThumbs.db?alt=media"]', 15),
	(653, 'z200bw', 'Z200BW Fingerprint Attendance Cum Access Control Device', NULL, '', 9000, 1, NULL, '2024-10-19 10:27:39', NULL, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz200bw%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz200bw%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz200bw%2F3.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz200bw%2F4.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz200bw%2F5.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz200bw%2F6.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz200bw%2FThumbs.db?alt=media"]', 4),
	(654, 'z201-uhf-reader-12mtr', 'Z201 UHF Reader 12mtr', NULL, '', 35000, 1, NULL, '2024-10-19 10:27:45', NULL, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz201-uhf-reader-12mtr%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz201-uhf-reader-12mtr%2F2.PNG?alt=media"]', 17),
	(655, 'z203', NULL, NULL, NULL, NULL, 1, NULL, '2024-10-19 10:27:59', NULL, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz203%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz203%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz203%2F3.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz203%2F4.PNG?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz203%2FThumbs.db?alt=media"]', NULL),
	(656, 'z203t', NULL, NULL, NULL, NULL, 1, NULL, '2024-10-19 10:28:16', NULL, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz203t%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz203t%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz203t%2F3.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz203t%2F4.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz203t%2F5.png?alt=media"]', NULL),
	(657, 'z20r', 'Z20R V2 Glass Door Lock', NULL, '', 16000, 1, NULL, '2024-10-19 10:29:28', NULL, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz20r%2F1%20.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz20r%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz20r%2F3.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz20r%2F4.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz20r%2FThumbs.db?alt=media"]', 7),
	(658, 'z213', NULL, NULL, NULL, NULL, 1, NULL, '2024-10-19 10:29:39', NULL, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz213%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz213%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz213%2F3.png?alt=media"]', NULL),
	(659, 'z300ac', 'Z300AC (Cloud Supported)', NULL, 'Authentication Method: 0, User Capacity: 0, Transaction Capacity: 0, Color: 0, Display: 0, Fingerprint Sensor: 0, Communication: 0, FAR & FRR: 0, Voice Indication: 0, Operating Voltage: 0, Access Control: 0, Fingerprint Angle: 0, Data Push: 0, Connection Interface: 0, LED Indication: 0', 0, 1, NULL, '2024-10-19 10:29:46', NULL, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz300ac%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz300ac%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz300ac%2F3.png?alt=media"]', 4),
	(660, 'z305w', NULL, NULL, NULL, NULL, 1, NULL, '2024-10-19 10:30:04', NULL, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz305w%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz305w%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz305w%2F3.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz305w%2F4.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz305w%2F5.png?alt=media"]', NULL),
	(661, 'z33id', 'Z33', NULL, 'Authentication Method: 0, User Capacity: 0, Color: 0, Card Type: 0, Input/Output Ports: 0, Fingerprint Sensor: 0, Door Opening Time: 0, LED: 0, Operating Voltage: 0, Card Reading Range: 0, Short-Circuit Protection Time: 0', 3399, 1, NULL, '2024-10-19 10:30:16', NULL, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz33id%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz33id%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz33id%2F3.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz33id%2F4.png?alt=media"]', 6),
	(662, 'z500v2', 'Z500V2 Face Recognition Attendance System With Payroll Software', NULL, '', 15000, 1, NULL, '2024-10-19 10:30:35', NULL, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz500v2%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz500v2%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz500v2%2F3.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz500v2%2F4.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz500v2%2F5.png?alt=media"]', 3),
	(663, 'z619', 'Z619 Face Based Attendance Cum Access Control', NULL, '', 12000, 1, NULL, '2024-10-19 10:30:58', NULL, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz619%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz619%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz619%2F3.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz619%2F4.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz619%2F5.png?alt=media"]', 2),
	(664, 'z6n', NULL, NULL, NULL, NULL, 1, NULL, '2024-10-19 10:31:15', NULL, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz6n%2F1.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz6n%2F2.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz6n%2F3.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz6n%2F4.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz6n%2F5.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz6n%2F6.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz6n%2F7.jpg?alt=media"]', NULL),
	(665, 'z70r', 'Z70R', NULL, 'User Capacity: 200, Verification Mode: 1, Voice Indication: Doorbell and Display Highly Performance Fingerprint Sensor, USB Emergency Power Interface (5-6V) 4 x 1.5V alkaline Batteries Suitable for glass door thickness 8-12 mm, Door Gap Required: 0.8 - 1 cm, Low Voltage Alarm: < 4.2V, Working Temperature: -20°C ~ +60°C, Working Humidity: < 93%', 20999, 1, NULL, '2024-10-19 10:31:41', NULL, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz70r%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz70r%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz70r%2F3.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz70r%2F4.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz70r%2F5.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz70r%2F6.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz70r%2F7.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz70r%2F8.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz70r%2F9.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz70r%2FThumbs.db?alt=media"]', 7),
	(666, 'z900', 'Z900 Face With Fingerprint Time Attendance And Professional Access Control', NULL, '', 13550, 1, NULL, '2024-10-19 10:31:45', NULL, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz900%2F1.png?alt=media"]', 2),
	(667, 'z901', 'Z901', NULL, 'Authentication Method: Face, Card, Password and Combinations, Face Capacity: 1500 User, Card Capacity: 1500 Card Templates, Transaction Capacity: 1,50,000 Transactions,  Display: 3.5 Touch Display, Camera: 2 MP HD Camera , Voice Indication: Yes,   Operating Voltage: DC 9V-12V (Under 1.5A), Data Push: Yes, Access Control: Yes, Professional,  Identification Time: <1 Sec, Face Technology: Dynamic Face Recognition Technology recognize up to3 persons Simultaneously,  Working Mode: Day and Night,  Communication: USB, TCP/IP, Wi-Fi,   Battery Backup: No,   Face Identification Range: 0,   Humidity: 0,   Temperature: 0,   User Validity: 0,   Dimensions: 0', 21999, 1, NULL, '2024-10-19 10:32:04', NULL, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz901%2F1.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz901%2F2.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz901%2F3.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz901%2F4.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz901%2F5.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz901%2F6.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz901%2FThumbs.db?alt=media"]', 1),
	(668, 'z901-mini', 'Z901 Mini', NULL, 'Authentication Method: Face, Card, Password and Combinations, Face Capacity: 1500 User, Card Capacity: 1500 Card Templates, Transaction Capacity: 1,50,000 Transactions, Display: 3.5 Touch Display, Camera: 2 MP HD Camera , Communication:USB, TCP/IP, Wi-Fi, Data Push: Yes, Voice Indication: Yes, Operating Voltage: DC 9V-12V (Under 1.5A), Access Control: Yes, Professional, Identification Time: <1 Sec, Face Technology: Dynamic Face Recognition Technology recognize up to3 persons Simultaneously, Working Mode: Day and Night, Battery Backup: Yes Inbuilt(Upto 150 Minutes), Face Identification Range: Upto 1.5 Mtr, Humidity: 20% ~ 80% , Temperature: -10 C ~ 60 C, User Validity: Yes, Configurable, Dimensions: 110 x 110 x 70 mm', 24999, 1, NULL, '2024-10-19 10:32:32', NULL, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz901-mini%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz901-mini%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz901-mini%2F3.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz901-mini%2F4.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz901-mini%2F5.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz901-mini%2F6.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz901-mini%2F7.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz901-mini%2F8.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz901-mini%2F9.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz901-mini%2FThumbs.db?alt=media"]', 1),
	(669, 'z902n', 'Z902N', NULL, 'Authentication Method: 0, Face Capacity: 0,    Card Capacity: 0,    Transaction Capacity: 0,    Display: 0,    Camera: 0,   Voice Indication: 0,   Operating Voltage: 0,   Data Push: 0,  Access Control: 0,       Identification Time: 0,    Face Technology: 0,    Working Mode: 0,    Communication: 0,    Battery Backup: 0,  Face Identification Range: 0,   Humidity: 0, Temperature: 0, User Validity: 0,  Dimensions: 0', 33550, 1, NULL, '2024-10-19 10:32:38', NULL, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz902n%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz902n%2F3.PNG?alt=media"]', 1),
	(670, 'zl-braket-for-em-lock', 'ZL Bracket for EM Lock (600lbs)', NULL, '', 1000, 1, NULL, '2024-10-19 10:32:56', NULL, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fzl-braket-for-em-lock%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fzl-braket-for-em-lock%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fzl-braket-for-em-lock%2F3.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fzl-braket-for-em-lock%2F4.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fzl-braket-for-em-lock%2F5.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fzl-braket-for-em-lock%2FThumbs.db?alt=media"]', 13);

-- Dumping structure for table timeoffice.reviews
CREATE TABLE IF NOT EXISTS `reviews` (
  `id` int NOT NULL AUTO_INCREMENT,
  `productId` int DEFAULT NULL,
  `userId` int DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `rating` int DEFAULT '0',
  `review` text,
  `isRecommended` tinyint(1) DEFAULT '1',
  `status` enum('Waiting_Approval','Rejected','Approved') DEFAULT 'Waiting_Approval',
  `updated` datetime DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `productId` (`productId`),
  KEY `userId` (`userId`),
  CONSTRAINT `reviews_ibfk_119` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `reviews_ibfk_120` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table timeoffice.reviews: ~0 rows (approximately)
DELETE FROM `reviews`;

-- Dumping structure for table timeoffice.sequelizemeta
CREATE TABLE IF NOT EXISTS `sequelizemeta` (
  `name` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

-- Dumping data for table timeoffice.sequelizemeta: ~5 rows (approximately)
DELETE FROM `sequelizemeta`;
INSERT INTO `sequelizemeta` (`name`) VALUES
	('1-create-subcategories.js'),
	('20240930041722-add-created-at-to-users.js'),
	('20240930042209-remove-created-from-users.js'),
	('add-subcategoryId-to-products.js'),
	('remove-redundant-email-indexes.js');

-- Dumping structure for table timeoffice.subcategories
CREATE TABLE IF NOT EXISTS `subcategories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `categoryId` int NOT NULL,
  `isActive` tinyint(1) DEFAULT '1',
  `updated` datetime DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `categoryId` (`categoryId`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table timeoffice.subcategories: ~18 rows (approximately)
DELETE FROM `subcategories`;
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
  UNIQUE KEY `email_2` (`email`),
  UNIQUE KEY `email_3` (`email`),
  UNIQUE KEY `email_4` (`email`),
  UNIQUE KEY `email_5` (`email`),
  KEY `merchantId` (`merchantId`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`merchantId`) REFERENCES `merchants` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table timeoffice.users: ~2 rows (approximately)
DELETE FROM `users`;
INSERT INTO `users` (`id`, `email`, `phoneNumber`, `name`, `username`, `password`, `provider`, `googleId`, `facebookId`, `avatar`, `role`, `resetPasswordToken`, `resetPasswordExpires`, `merchantId`, `createdAt`, `updatedAt`) VALUES
	(1, 'vermadhruv09112002@gmail.com', NULL, 'dhruv', 'verma', '$2a$10$sFDIzV7w/VeL8JOp4hVhSeGYLFLOg.RJ7yOtjWzjzkTIqwR75TGAu', 'Email', NULL, NULL, NULL, 'ROLE MEMBER', NULL, NULL, NULL, '2024-09-30 04:20:12', NULL),
	(2, 'admin@teamoffice.in', NULL, NULL, 'admin', '$2a$10$MJadh/2ev9z4eGHXyCWsy.UmvPSADwsqgew036Qo8T04WzpwRkFu2', 'Email', NULL, NULL, NULL, 'ROLE ADMIN', NULL, NULL, NULL, '2024-10-21 06:09:08', '2024-10-21 06:09:08');

-- Dumping structure for table timeoffice.wishlists
CREATE TABLE IF NOT EXISTS `wishlists` (
  `id` int NOT NULL AUTO_INCREMENT,
  `productId` int DEFAULT NULL,
  `userId` int DEFAULT NULL,
  `isLiked` tinyint(1) DEFAULT '0',
  `updated` datetime DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `productId` (`productId`),
  KEY `userId` (`userId`),
  CONSTRAINT `wishlists_ibfk_119` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `wishlists_ibfk_120` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table timeoffice.wishlists: ~0 rows (approximately)
DELETE FROM `wishlists`;

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
