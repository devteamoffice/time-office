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
DROP DATABASE IF EXISTS `timeoffice`;
CREATE DATABASE IF NOT EXISTS `timeoffice` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `timeoffice`;

-- Dumping structure for table timeoffice.addresses
DROP TABLE IF EXISTS `addresses`;
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

-- Data exporting was unselected.

-- Dumping structure for table timeoffice.brands
DROP TABLE IF EXISTS `brands`;
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

-- Data exporting was unselected.

-- Dumping structure for table timeoffice.carts
DROP TABLE IF EXISTS `carts`;
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

-- Data exporting was unselected.

-- Dumping structure for table timeoffice.cart_items
DROP TABLE IF EXISTS `cart_items`;
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

-- Data exporting was unselected.

-- Dumping structure for table timeoffice.categories
DROP TABLE IF EXISTS `categories`;
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

-- Data exporting was unselected.

-- Dumping structure for table timeoffice.contacts
DROP TABLE IF EXISTS `contacts`;
CREATE TABLE IF NOT EXISTS `contacts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `message` text,
  `updated` datetime DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Data exporting was unselected.

-- Dumping structure for table timeoffice.coupons
DROP TABLE IF EXISTS `coupons`;
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

-- Data exporting was unselected.

-- Dumping structure for table timeoffice.discounts
DROP TABLE IF EXISTS `discounts`;
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

-- Data exporting was unselected.

-- Dumping structure for table timeoffice.merchants
DROP TABLE IF EXISTS `merchants`;
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

-- Data exporting was unselected.

-- Dumping structure for table timeoffice.orders
DROP TABLE IF EXISTS `orders`;
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

-- Data exporting was unselected.

-- Dumping structure for table timeoffice.products
DROP TABLE IF EXISTS `products`;
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

-- Data exporting was unselected.

-- Dumping structure for table timeoffice.reviews
DROP TABLE IF EXISTS `reviews`;
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

-- Data exporting was unselected.

-- Dumping structure for table timeoffice.sequelizemeta
DROP TABLE IF EXISTS `sequelizemeta`;
CREATE TABLE IF NOT EXISTS `sequelizemeta` (
  `name` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

-- Data exporting was unselected.

-- Dumping structure for table timeoffice.subcategories
DROP TABLE IF EXISTS `subcategories`;
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

-- Data exporting was unselected.

-- Dumping structure for table timeoffice.users
DROP TABLE IF EXISTS `users`;
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

-- Data exporting was unselected.

-- Dumping structure for table timeoffice.wishlists
DROP TABLE IF EXISTS `wishlists`;
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

-- Data exporting was unselected.

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
