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


-- Dumping database structure for u690099781_teamoffice
CREATE DATABASE IF NOT EXISTS `u690099781_teamoffice` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */;
USE `u690099781_teamoffice`;

-- Dumping structure for table u690099781_teamoffice.addresses
CREATE TABLE IF NOT EXISTS `addresses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `zipCode` varchar(255) DEFAULT NULL,
  `isDefault` tinyint(1) DEFAULT 0,
  `updated` datetime DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table u690099781_teamoffice.addresses: ~0 rows (approximately)

-- Dumping structure for table u690099781_teamoffice.brands
CREATE TABLE IF NOT EXISTS `brands` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `image` longblob DEFAULT NULL,
  `imageContentType` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `isActive` tinyint(1) DEFAULT 1,
  `merchantId` int(11) DEFAULT NULL,
  `updated` datetime DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `slug` (`slug`),
  KEY `merchantId` (`merchantId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table u690099781_teamoffice.brands: ~0 rows (approximately)

-- Dumping structure for table u690099781_teamoffice.carts
CREATE TABLE IF NOT EXISTS `carts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `updated` datetime DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table u690099781_teamoffice.carts: ~0 rows (approximately)

-- Dumping structure for table u690099781_teamoffice.cart_items
CREATE TABLE IF NOT EXISTS `cart_items` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `productId` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `purchasePrice` float DEFAULT 0,
  `totalPrice` float DEFAULT 0,
  `priceWithTax` float DEFAULT 0,
  `totalTax` float DEFAULT 0,
  `status` enum('Not processed','Processing','Shipped','Delivered','Cancelled') DEFAULT 'Not processed',
  `cartId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `productId` (`productId`),
  KEY `cartId` (`cartId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table u690099781_teamoffice.cart_items: ~0 rows (approximately)

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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table u690099781_teamoffice.categories: ~7 rows (approximately)
INSERT INTO `categories` (`id`, `name`, `slug`, `isActive`, `updated`, `created`) VALUES
	(1, 'Attendance and Access Control Systems', 'Atte', 1, NULL, '2024-10-20 06:27:00'),
	(2, 'Door Locks and Controllers', 'Door', 1, NULL, '2024-10-20 06:43:57'),
	(3, 'Barcode Scanners ', 'Barc', 1, NULL, '2024-10-20 06:43:57'),
	(4, 'Accessories', 'Acce', 1, NULL, '2024-10-20 06:43:57'),
	(5, 'Switches for Access Control', 'Swit', 1, NULL, '2024-10-20 06:43:57'),
	(6, 'Readers', 'Read', 1, NULL, '2024-10-20 06:43:57'),
	(7, 'Elevator Control System', 'Elev', 1, NULL, '2024-10-20 06:43:57');

-- Dumping structure for table u690099781_teamoffice.contacts
CREATE TABLE IF NOT EXISTS `contacts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `updated` datetime DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table u690099781_teamoffice.contacts: ~0 rows (approximately)
INSERT INTO `contacts` (`id`, `name`, `email`, `message`, `updated`, `created`) VALUES
	(1, 'Dhruv Verma', 'vermadhruv09112002@gmail.com', 'dsvdvsdvsdv', NULL, '2024-10-01 08:44:24');

-- Dumping structure for table u690099781_teamoffice.coupons
CREATE TABLE IF NOT EXISTS `coupons` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created` datetime DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `duration` varchar(255) DEFAULT 'once',
  `duration_in_months` int(11) DEFAULT NULL,
  `redeem_by` datetime DEFAULT NULL,
  `max_redemptions` int(11) DEFAULT NULL,
  `times_redeemed` int(11) DEFAULT 0,
  `percent_off` float DEFAULT NULL,
  `amount_off` float DEFAULT NULL,
  `currency` varchar(255) DEFAULT NULL,
  `metadata` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`metadata`)),
  PRIMARY KEY (`id`),
  UNIQUE KEY `code` (`code`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table u690099781_teamoffice.coupons: ~0 rows (approximately)

-- Dumping structure for table u690099781_teamoffice.Coupons
CREATE TABLE IF NOT EXISTS `Coupons` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created` datetime DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `duration` varchar(255) DEFAULT 'once',
  `duration_in_months` int(11) DEFAULT NULL,
  `redeem_by` datetime DEFAULT NULL,
  `max_redemptions` int(11) DEFAULT NULL,
  `times_redeemed` int(11) DEFAULT 0,
  `percent_off` float DEFAULT NULL,
  `amount_off` float DEFAULT NULL,
  `currency` varchar(255) DEFAULT NULL,
  `metadata` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`metadata`)),
  PRIMARY KEY (`id`),
  UNIQUE KEY `code` (`code`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table u690099781_teamoffice.Coupons: ~0 rows (approximately)

-- Dumping structure for table u690099781_teamoffice.discounts
CREATE TABLE IF NOT EXISTS `discounts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(255) NOT NULL,
  `code` varchar(255) NOT NULL,
  `start` datetime DEFAULT NULL,
  `end` datetime DEFAULT NULL,
  `coupon` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `discounts_user_code` (`user`,`code`),
  KEY `coupon` (`coupon`),
  CONSTRAINT `discounts_ibfk_1` FOREIGN KEY (`coupon`) REFERENCES `coupons` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `discounts_ibfk_2` FOREIGN KEY (`coupon`) REFERENCES `coupons` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `discounts_ibfk_3` FOREIGN KEY (`coupon`) REFERENCES `coupons` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `discounts_ibfk_4` FOREIGN KEY (`coupon`) REFERENCES `coupons` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `discounts_ibfk_5` FOREIGN KEY (`coupon`) REFERENCES `coupons` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `discounts_ibfk_6` FOREIGN KEY (`coupon`) REFERENCES `coupons` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `discounts_ibfk_7` FOREIGN KEY (`coupon`) REFERENCES `coupons` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `discounts_ibfk_8` FOREIGN KEY (`coupon`) REFERENCES `coupons` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `discounts_ibfk_9` FOREIGN KEY (`coupon`) REFERENCES `coupons` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table u690099781_teamoffice.discounts: ~0 rows (approximately)

-- Dumping structure for table u690099781_teamoffice.Discounts
CREATE TABLE IF NOT EXISTS `Discounts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(255) NOT NULL,
  `code` varchar(255) NOT NULL,
  `start` datetime DEFAULT NULL,
  `end` datetime DEFAULT NULL,
  `coupon` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `discounts_user_code` (`user`,`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table u690099781_teamoffice.Discounts: ~0 rows (approximately)

-- Dumping structure for table u690099781_teamoffice.merchants
CREATE TABLE IF NOT EXISTS `merchants` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `brandName` varchar(255) NOT NULL,
  `business` varchar(255) DEFAULT NULL,
  `isActive` tinyint(1) DEFAULT 0,
  `status` varchar(255) DEFAULT 'Waiting Approval',
  `updated` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table u690099781_teamoffice.merchants: ~0 rows (approximately)

-- Dumping structure for table u690099781_teamoffice.orders
CREATE TABLE IF NOT EXISTS `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cartId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `total` float DEFAULT 0,
  `updated` datetime DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `cartId` (`cartId`),
  KEY `userId` (`userId`),
  CONSTRAINT `orders_ibfk_167` FOREIGN KEY (`cartId`) REFERENCES `carts` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table u690099781_teamoffice.orders: ~0 rows (approximately)

-- Dumping structure for table u690099781_teamoffice.products
CREATE TABLE IF NOT EXISTS `products` (
  `sku` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `slug` varchar(50) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `price` float DEFAULT NULL,
  `isActive` tinyint(1) DEFAULT 1,
  `brand` int(11) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `categoryId` int(11) DEFAULT NULL,
  `images` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`images`)),
  `subcategoryId` int(11) DEFAULT NULL,
  `id` varchar(64) NOT NULL,
  UNIQUE KEY `sku` (`sku`),
  KEY `brand` (`brand`),
  KEY `categoryId` (`categoryId`),
  KEY `subcategoryId` (`subcategoryId`),
  CONSTRAINT `products_ibfk_194` FOREIGN KEY (`brand`) REFERENCES `brands` (`id`),
  CONSTRAINT `products_ibfk_195` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`),
  CONSTRAINT `products_ibfk_196` FOREIGN KEY (`subcategoryId`) REFERENCES `subcategories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table u690099781_teamoffice.products: ~64 rows (approximately)
INSERT INTO `products` (`sku`, `name`, `slug`, `description`, `price`, `isActive`, `brand`, `created`, `categoryId`, `images`, `subcategoryId`, `id`) VALUES
	('drop-bolt-lock-feedback', 'Drop Bolt Lock with Feedback and Timer', NULL, '', 1500, 1, NULL, '2024-10-19 09:53:25', 4, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fdrop-bolt-lock-feedback%2F1.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fdrop-bolt-lock-feedback%2F2.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fdrop-bolt-lock-feedback%2F3.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fdrop-bolt-lock-feedback%2F4.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fdrop-bolt-lock-feedback%2FThumbs.db?alt=media"]', 12, 'e2dfeba5-910b-11ef-a964-d99045a67454'),
	('bs20w', 'BS20W / CQH20G', NULL, 'scanBarcodeCategory: 0, codeReadingDensity: 0, operatingTemperature: 0, typeOfDecoding: 0, storage: 0, scanMode: 0, operatingHumidity: 0, seismicResistance: 0, promptMode: 0, Communication: 0, operatingModes: 0, drivers: 0, batteryCapacity: 0, batteryType: 0', 4000, 1, NULL, '2024-10-19 09:51:30', 3, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fbs20w%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fbs20w%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fbs20w%2F3.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fbs20w%2FThumbs.db?alt=media"]', 10, 'e2dfed9b-910b-11ef-a964-d99045a67454'),
	('electric-strike-s-es', 'Team Office Standard Electric Strike S-ES', NULL, '', 1500, 1, NULL, '2024-10-19 09:55:03', 4, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Felectric-strike-s-es%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Felectric-strike-s-es%2F2.png?alt=media"]', 12, 'e2dfeeeb-910b-11ef-a964-d99045a67454'),
	('door-controller-1-12000rs2wg', '1 Door Controller', NULL, 'users: 0, eventStorage: 0, numberOfReadersSupported: 0, Communication: 0, enclosure: 0, powerSupply: 0, interlock: 0, numberOfAlarm: 0, antiPassBackFeature: 0, liveEventMonitor: 0, exitSwitchSupported: 0', 12000, 1, NULL, '2024-10-19 09:51:52', 2, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fdoor-controller-1-12000rs2wg%2F1.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fdoor-controller-1-12000rs2wg%2F2.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fdoor-controller-1-12000rs2wg%2F3.jpg?alt=media"]', 8, 'e2dfef4b-910b-11ef-a964-d99045a67454'),
	('bs20', 'BS20 / CQH20', NULL, 'scanBarcodeCategory: 0, codeReadingDensity: 0, operatingTemperature: 0, typeOfDecoding: 0, storage: 0, scanMode: 0, operatingHumidity: 0, seismicResistance: 0, promptMode: 0, Communication: 0, operatingModes: 0, drivers: 0, batteryCapacity: 0, batteryType: 0', 1999, 1, NULL, '2024-10-19 09:51:11', 3, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fbs20%2F1.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fbs20%2F2.jpeg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fbs20%2F3.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fbs20%2F4.jpeg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fbs20%2F5.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fbs20%2F6.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fbs20%2FThumbs.db?alt=media"]', 11, 'e2dfefd9-910b-11ef-a964-d99045a67454'),
	('door-controller-4-20000rs', '4 Door Controller', NULL, 'users: 0, eventStorage: 0, numberOfReadersSupported: 0, Communication: 0, enclosure: 0, powerSupply: 0, interlock: 0, numberOfAlarm: 0, antiPassBackFeature: 0, liveEventMonitor: 0, exitSwitchSupported: 0', 20000, 1, NULL, '2024-10-19 09:52:14', 2, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fdoor-controller-4-20000rs%2F1.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fdoor-controller-4-20000rs%2F2.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fdoor-controller-4-20000rs%2F3.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fdoor-controller-4-20000rs%2FThumbs.db?alt=media"]', 8, 'e2dff09f-910b-11ef-a964-d99045a67454'),
	('door-controller-2-16000rs4wg', '2 Door Controller', NULL, 'users: 0, eventStorage: 0, numberOfReadersSupported: 0, Communication: 0, enclosure: 0, powerSupply: 0, interlock: 0, numberOfAlarm: 0, antiPassBackFeature: 0, liveEventMonitor: 0, exitSwitchSupported: 0', 16000, 1, NULL, '2024-10-19 09:52:03', 2, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fdoor-controller-2-16000rs4wg%2F1.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fdoor-controller-2-16000rs4wg%2F2.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fdoor-controller-2-16000rs4wg%2F3.jpg?alt=media"]', 8, 'e2dff0df-910b-11ef-a964-d99045a67454'),
	('em-lock', 'EM Lock 600 LBS', NULL, '', 550, 1, NULL, '2024-10-19 09:57:23', 4, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fem-lock%2F1.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fem-lock%2F2.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fem-lock%2F3.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fem-lock%2F4.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fem-lock%2F5.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fem-lock%2F6.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fem-lock%2F7.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fem-lock%2F8.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fem-lock%2FThumbs.db?alt=media"]', 12, 'e2dff17e-910b-11ef-a964-d99045a67454'),
	('em-lock-120-lbs', 'EM Lock 120LBS', NULL, '', 1500, 1, NULL, '2024-10-19 09:58:29', 4, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fem-lock-120-lbs%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fem-lock-120-lbs%2F10.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fem-lock-120-lbs%2F11.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fem-lock-120-lbs%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fem-lock-120-lbs%2F3.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fem-lock-120-lbs%2F4.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fem-lock-120-lbs%2F5.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fem-lock-120-lbs%2F6.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fem-lock-120-lbs%2F7.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fem-lock-120-lbs%2F8.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fem-lock-120-lbs%2F9.png?alt=media"]', 12, 'e2dff249-910b-11ef-a964-d99045a67454'),
	('em-lock-1200-lbs', 'EM Lock 1200 LBS Double Leaf', NULL, '', 4500, 1, NULL, '2024-10-19 09:58:52', 4, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fem-lock-1200-lbs%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fem-lock-1200-lbs%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fem-lock-1200-lbs%2F3.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fem-lock-1200-lbs%2FThumbs.db?alt=media"]', 12, 'e2dff34a-910b-11ef-a964-d99045a67454'),
	('em-lock-300lbs', 'EM Lock 300 LBS', NULL, '', 2300, 1, NULL, '2024-10-19 09:58:59', 4, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fem-lock-300lbs%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fem-lock-300lbs%2FThumbs.db?alt=media"]', 12, 'e2dff39d-910b-11ef-a964-d99045a67454'),
	('emergency-glass-break-switch', 'TOFP-203 (NO/NC/COM)', NULL, '', 750, 1, NULL, '2024-10-19 09:59:14', 5, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Femergency-glass-break-switch%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Femergency-glass-break-switch%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Femergency-glass-break-switch%2FThumbs.db?alt=media"]', 16, 'e2dff472-910b-11ef-a964-d99045a67454'),
	('energy-saving-switch', 'Team Office Energy Saving Switch for Hotel', NULL, '', 1200, 1, NULL, '2024-10-19 09:59:19', 5, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fenergy-saving-switch%2F1.png?alt=media"]', 16, 'e2dff4ae-910b-11ef-a964-d99045a67454'),
	('fixed-mount-qr-code', 'Z86', NULL, '', 8500, 1, NULL, '2024-10-19 09:59:52', 2, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Ffixed-mount-qr-code%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Ffixed-mount-qr-code%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Ffixed-mount-qr-code%2F3.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Ffixed-mount-qr-code%2F4.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Ffixed-mount-qr-code%2F5.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Ffixed-mount-qr-code%2F6.png?alt=media"]', 9, 'e2dff59d-910b-11ef-a964-d99045a67454'),
	('l-25', 'L25 Padlock', NULL, '', 2199, 1, NULL, '2024-10-19 10:00:30', 2, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fl-25%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fl-25%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fl-25%2F3.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fl-25%2F4-.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fl-25%2F5.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fl-25%2F6-.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fl-25%2F7.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fl-25%2FThumbs.db?alt=media"]', 7, 'e2dff6b2-910b-11ef-a964-d99045a67454'),
	('l-braket-for-em-lock-600-lbs', 'L Brackets', NULL, '', 350, 1, NULL, '2024-10-19 10:06:15', 4, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fl-braket-for-em-lock-600-lbs%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fl-braket-for-em-lock-600-lbs%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fl-braket-for-em-lock-600-lbs%2F3.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fl-braket-for-em-lock-600-lbs%2F4.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fl-braket-for-em-lock-600-lbs%2F5.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fl-braket-for-em-lock-600-lbs%2F6.png?alt=media"]', 13, 'e2dff7cf-910b-11ef-a964-d99045a67454'),
	('morpho-usb-15-mtr-', NULL, NULL, NULL, NULL, 1, NULL, '2024-10-19 10:07:53', NULL, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fmorpho-usb-15-mtr-%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fmorpho-usb-15-mtr-%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fmorpho-usb-15-mtr-%2F3.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fmorpho-usb-15-mtr-%2F4.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fmorpho-usb-15-mtr-%2F5.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fmorpho-usb-15-mtr-%2F6.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fmorpho-usb-15-mtr-%2F7.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fmorpho-usb-15-mtr-%2FThumbs.db?alt=media"]', NULL, 'e2dff8e9-910b-11ef-a964-d99045a67454'),
	('press--exit', NULL, NULL, NULL, NULL, 1, NULL, '2024-10-19 10:09:35', NULL, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fpress--exit%2F1.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fpress--exit%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fpress--exit%2F3.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fpress--exit%2F4.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fpress--exit%2F5.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fpress--exit%2F6.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fpress--exit%2F7.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fpress--exit%2FThumbs.db?alt=media"]', NULL, 'e2dffa21-910b-11ef-a964-d99045a67454'),
	('push-ss-exit-switch-big', 'Team Office SS Exit Switch Big', NULL, '', 402, 1, NULL, '2024-10-19 10:09:39', 5, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fpush-ss-exit-switch-big%2F1.png?alt=media"]', 16, 'e2dffb8b-910b-11ef-a964-d99045a67454'),
	('push-ss-exit-switch-small', 'Team office SS Exit Switch Small', NULL, '', 450, 1, NULL, '2024-10-19 10:09:43', 5, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fpush-ss-exit-switch-small%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fpush-ss-exit-switch-small%2FThumbs.db?alt=media"]', 16, 'e2dffbf3-910b-11ef-a964-d99045a67454'),
	('pvc-card', 'Proximity Cards', NULL, '', 22, 1, NULL, '2024-10-19 10:09:46', 4, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fpvc-card%2F1.png?alt=media"]', 15, 'e2dffc46-910b-11ef-a964-d99045a67454'),
	('pvc-exit-switch-small', 'Team office PVC Exit Switch Small', NULL, '', 206, 1, NULL, '2024-10-19 10:09:51', 5, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fpvc-exit-switch-small%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fpvc-exit-switch-small%2FThumbs.db?alt=media"]', 16, 'e2dffc76-910b-11ef-a964-d99045a67454'),
	('remote-kit', 'Remote Kit', NULL, '', 0, 1, NULL, '2024-10-19 10:10:04', 5, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fremote-kit%2F1.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fremote-kit%2F2.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fremote-kit%2F3.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fremote-kit%2F4.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fremote-kit%2FThumbs.db?alt=media"]', 16, 'e2dffcaa-910b-11ef-a964-d99045a67454'),
	('rfid-card', 'RFID Key Fobs', NULL, '', 25, 1, NULL, '2024-10-19 10:10:30', 4, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Frfid-card%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Frfid-card%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Frfid-card%2F3.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Frfid-card%2F4.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Frfid-card%2FThumbs.db?alt=media"]', 15, 'e2dffd4c-910b-11ef-a964-d99045a67454'),
	('rfid-water-park', 'RFID Locker Lock For Water Park', NULL, '', 2650, 1, NULL, '2024-10-19 10:10:54', 4, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Frfid-water-park%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Frfid-water-park%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Frfid-water-park%2F3.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Frfid-water-park%2F4.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Frfid-water-park%2F5.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Frfid-water-park%2F6.png?alt=media"]', 15, 'e2dffd8c-910b-11ef-a964-d99045a67454'),
	('rim-lock', 'RIM Lock', NULL, '', 2070, 1, NULL, '2024-10-19 10:21:08', 4, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Frim-lock%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Frim-lock%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Frim-lock%2F3.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Frim-lock%2F4.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Frim-lock%2F5.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Frim-lock%2F6.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Frim-lock%2F7.png?alt=media"]', 12, 'e2dffe19-910b-11ef-a964-d99045a67454'),
	('startek-type-c', NULL, NULL, NULL, NULL, 1, NULL, '2024-10-19 10:22:31', NULL, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fstartek-type-c%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fstartek-type-c%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fstartek-type-c%2F3.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fstartek-type-c%2F4.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fstartek-type-c%2F5.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fstartek-type-c%2F6.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fstartek-type-c%2F7.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fstartek-type-c%2F8.png?alt=media"]', NULL, 'e2dffe62-910b-11ef-a964-d99045a67454'),
	('startek-usb', NULL, NULL, NULL, NULL, 1, NULL, '2024-10-19 10:22:43', NULL, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fstartek-usb%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fstartek-usb%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fstartek-usb%2F3.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fstartek-usb%2F4.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fstartek-usb%2F5.png?alt=media"]', NULL, 'e2dfff08-910b-11ef-a964-d99045a67454'),
	('thick-card', 'UHF Card', NULL, '', 50, 1, NULL, '2024-10-19 10:22:59', 4, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fthick-card%2F1.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fthick-card%2F2.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fthick-card%2F3.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fthick-card%2F4.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fthick-card%2F5.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fthick-card%2F6.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fthick-card%2F7.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fthick-card%2F8.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fthick-card%2FThumbs.db?alt=media"]', 15, 'e2dfff49-910b-11ef-a964-d99045a67454'),
	('thiin-card', NULL, NULL, NULL, NULL, 1, NULL, '2024-10-19 10:23:13', NULL, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fthiin-card%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fthiin-card%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fthiin-card%2F3.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fthiin-card%2F4.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fthiin-card%2FThumbs.db?alt=media"]', NULL, 'e2e0002c-910b-11ef-a964-d99045a67454'),
	('top-173-no-touch', 'TOP-173R (NO/NC/COM) Inbuilt Receiver', NULL, '', 0, 1, NULL, '2024-10-19 10:24:20', 5, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Ftop-173-no-touch%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Ftop-173-no-touch%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Ftop-173-no-touch%2F3.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Ftop-173-no-touch%2F4.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Ftop-173-no-touch%2F5.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Ftop-173-no-touch%2F6.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Ftop-173-no-touch%2F7.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Ftop-173-no-touch%2F8.png?alt=media"]', 16, 'e2e0006c-910b-11ef-a964-d99045a67454'),
	('top-43', 'TOP-43 Exit Push Switch Metal', NULL, '', 500, 1, NULL, '2024-10-19 10:24:31', 5, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Ftop-43%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Ftop-43%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Ftop-43%2F3.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Ftop-43%2FThumbs.db?alt=media"]', 16, 'e2e0014c-910b-11ef-a964-d99045a67454'),
	('u-bracket-for-drop-bolt-lock', 'U Bracket For Drop Bolt Lock', NULL, '', 650, 1, NULL, '2024-10-19 10:24:45', 4, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fu-bracket-for-drop-bolt-lock%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fu-bracket-for-drop-bolt-lock%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fu-bracket-for-drop-bolt-lock%2F3.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fu-bracket-for-drop-bolt-lock%2F4.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fu-bracket-for-drop-bolt-lock%2FThumbs.db?alt=media"]', 13, 'e2e0018a-910b-11ef-a964-d99045a67454'),
	('u-bracket-for-em-lock', 'U Bracket For EM Lock (600lbs)', NULL, '', 550, 1, NULL, '2024-10-19 10:25:08', 4, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fu-bracket-for-em-lock%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fu-bracket-for-em-lock%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fu-bracket-for-em-lock%2F3.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fu-bracket-for-em-lock%2F4.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fu-bracket-for-em-lock%2F5.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fu-bracket-for-em-lock%2F6.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fu-bracket-for-em-lock%2F7.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fu-bracket-for-em-lock%2FThumbs.db?alt=media"]', 13, 'e2e0027a-910b-11ef-a964-d99045a67454'),
	('uhf', 'UHF Cards and Tags', NULL, '', 50, 1, NULL, '2024-10-19 10:25:11', 4, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fuhf%2F1.png?alt=media"]', 15, 'e2e0038a-910b-11ef-a964-d99045a67454'),
	('white-rotary-exit-switch-door', 'Team office PVC Exit Switch', NULL, '', 250, 1, NULL, '2024-10-19 10:25:15', 5, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fwhite-rotary-exit-switch-door%2F1.png?alt=media"]', 16, 'e2e003ba-910b-11ef-a964-d99045a67454'),
	('windshield-uhf', 'Team Office UHF Windshield Tags', NULL, '', 60, 1, NULL, '2024-10-19 10:25:29', 4, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fwindshield-uhf%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fwindshield-uhf%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fwindshield-uhf%2F3.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fwindshield-uhf%2F4.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fwindshield-uhf%2FThumbs.db?alt=media"]', 15, 'e2e0040b-910b-11ef-a964-d99045a67454'),
	('z100ac', 'Z100AC / Z199', NULL, 'Authentication Method: 0,    User Capacity: 0,    Transaction Capacity: 0,   Color: 0,    Display: 0,    Fingerprint Sensor: 0,   Communication: 0,   FAR & FRR: 0,      Voice Indication: 0,     Operating Voltage: 0,       Access Control: 0,  Fingerprint Angle: 0,         Data Push: 0,   Connection Interface: 0, LED Indication: 0', 8000, 1, NULL, '2024-10-19 10:25:47', 1, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz100ac%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz100ac%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz100ac%2F3.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz100ac%2F4.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz100ac%2F5.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz100ac%2F6.png?alt=media"]', 4, 'e2e00539-910b-11ef-a964-d99045a67454'),
	('z100n', 'Z100N', NULL, 'Authentication Method: 0, User Capacity: 0, Transaction Capacity: 0, Color: 0, Display: 0, Fingerprint Sensor: 0, Language: 0, Communication: 0, FRR: 0, FAR: 0, Identification Time: 0, Operating Voltage: 0, LED & Voice Indication: 0', 7500, 1, NULL, '2024-10-19 10:26:05', 1, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz100n%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz100n%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz100n%2F3.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz100n%2F4.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz100n%2F5.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz100n%2FThumbs.db?alt=media"]', 5, 'e2e0066f-910b-11ef-a964-d99045a67454'),
	('z101n', 'Z101N', NULL, 'Authentication Method: 0, User Capacity: 0, Color: 0, Card Type: 0, Input/Output Ports: 0, Fingerprint Sensor: 0, Door Opening Time: 0, LED: 0, Operating Voltage: 0, Card Reading Range: 0, Short-Circuit Protection Time: 0', 4300, 1, NULL, '2024-10-19 10:26:18', 1, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz101n%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz101n%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz101n%2F3.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz101n%2F4.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz101n%2FThumbs.db?alt=media"]', 6, 'e2e007b8-910b-11ef-a964-d99045a67454'),
	('z11-ic', 'Team Office Z11 IC Usb Rfid Card Reader(13.56mhz)', NULL, '', 1000, 1, NULL, '2024-10-19 10:26:47', 4, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz11-ic%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz11-ic%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz11-ic%2F3.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz11-ic%2F4.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz11-ic%2F5.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz11-ic%2F6.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz11-ic%2F7.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz11-ic%2FThumbs.db?alt=media"]', 15, 'e2e00819-910b-11ef-a964-d99045a67454'),
	('z11-id', 'Team Office Z11 ID- USB RFID CARD READER(125Khz)', NULL, '', 1000, 1, NULL, '2024-10-19 10:27:17', 4, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz11-id%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz11-id%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz11-id%2F3.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz11-id%2F4.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz11-id%2F5.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz11-id%2F6.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz11-id%2F7.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz11-id%2FThumbs.db?alt=media"]', 15, 'e2e008d6-910b-11ef-a964-d99045a67454'),
	('z200bw', 'Z200BW Fingerprint Attendance Cum Access Control Device', NULL, '', 9000, 1, NULL, '2024-10-19 10:27:39', 1, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz200bw%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz200bw%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz200bw%2F3.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz200bw%2F4.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz200bw%2F5.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz200bw%2F6.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz200bw%2FThumbs.db?alt=media"]', 4, 'e2e00927-910b-11ef-a964-d99045a67454'),
	('z201-uhf-reader-12mtr', 'Z201 UHF Reader 12mtr', NULL, '', 35000, 1, NULL, '2024-10-19 10:27:45', 6, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz201-uhf-reader-12mtr%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz201-uhf-reader-12mtr%2F2.PNG?alt=media"]', 17, 'e2e009b8-910b-11ef-a964-d99045a67454'),
	('z203', NULL, NULL, NULL, NULL, 1, NULL, '2024-10-19 10:27:59', NULL, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz203%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz203%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz203%2F3.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz203%2F4.PNG?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz203%2FThumbs.db?alt=media"]', NULL, 'e2e009ea-910b-11ef-a964-d99045a67454'),
	('z203t', NULL, NULL, NULL, NULL, 1, NULL, '2024-10-19 10:28:16', NULL, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz203t%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz203t%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz203t%2F3.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz203t%2F4.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz203t%2F5.png?alt=media"]', NULL, 'e2e00a29-910b-11ef-a964-d99045a67454'),
	('z20r', 'Z20R V2 Glass Door Lock', NULL, '', 16000, 1, NULL, '2024-10-19 10:29:28', 2, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz20r%2F1%20.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz20r%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz20r%2F3.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz20r%2F4.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz20r%2FThumbs.db?alt=media"]', 7, 'e2e00acf-910b-11ef-a964-d99045a67454'),
	('z213', NULL, NULL, NULL, NULL, 1, NULL, '2024-10-19 10:29:39', NULL, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz213%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz213%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz213%2F3.png?alt=media"]', NULL, 'e2e00b10-910b-11ef-a964-d99045a67454'),
	('z300ac', 'Z300AC (Cloud Supported)', NULL, 'Authentication Method: 0, User Capacity: 0, Transaction Capacity: 0, Color: 0, Display: 0, Fingerprint Sensor: 0, Communication: 0, FAR & FRR: 0, Voice Indication: 0, Operating Voltage: 0, Access Control: 0, Fingerprint Angle: 0, Data Push: 0, Connection Interface: 0, LED Indication: 0', 0, 1, NULL, '2024-10-19 10:29:46', 1, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz300ac%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz300ac%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz300ac%2F3.png?alt=media"]', 4, 'e2e00b48-910b-11ef-a964-d99045a67454'),
	('z305w', NULL, NULL, NULL, NULL, 1, NULL, '2024-10-19 10:30:04', NULL, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz305w%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz305w%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz305w%2F3.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz305w%2F4.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz305w%2F5.png?alt=media"]', NULL, 'e2e00c01-910b-11ef-a964-d99045a67454'),
	('z33id', 'Z33', NULL, 'Authentication Method: 0, User Capacity: 0, Color: 0, Card Type: 0, Input/Output Ports: 0, Fingerprint Sensor: 0, Door Opening Time: 0, LED: 0, Operating Voltage: 0, Card Reading Range: 0, Short-Circuit Protection Time: 0', 3399, 1, NULL, '2024-10-19 10:30:16', 1, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz33id%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz33id%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz33id%2F3.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz33id%2F4.png?alt=media"]', 6, 'e2e00c3e-910b-11ef-a964-d99045a67454'),
	('z500v2', 'Z500V2 Face Recognition Attendance System With Payroll Software', NULL, '', 15000, 1, NULL, '2024-10-19 10:30:35', 1, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz500v2%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz500v2%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz500v2%2F3.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz500v2%2F4.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz500v2%2F5.png?alt=media"]', 3, 'e2e00c7a-910b-11ef-a964-d99045a67454'),
	('z619', 'Z619 Face Based Attendance Cum Access Control', NULL, '', 12000, 1, NULL, '2024-10-19 10:30:58', 1, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz619%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz619%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz619%2F3.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz619%2F4.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz619%2F5.png?alt=media"]', 2, 'e2e00d56-910b-11ef-a964-d99045a67454'),
	('z6n', NULL, NULL, NULL, NULL, 1, NULL, '2024-10-19 10:31:15', NULL, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz6n%2F1.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz6n%2F2.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz6n%2F3.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz6n%2F4.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz6n%2F5.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz6n%2F6.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz6n%2F7.jpg?alt=media"]', NULL, 'e2e00d96-910b-11ef-a964-d99045a67454'),
	('z70r', 'Z70R', NULL, 'User Capacity: 200, Verification Mode: 1, Voice Indication: Doorbell and Display Highly Performance Fingerprint Sensor, USB Emergency Power Interface (5-6V) 4 x 1.5V alkaline Batteries Suitable for glass door thickness 8-12 mm, Door Gap Required: 0.8 - 1 cm, Low Voltage Alarm: < 4.2V, Working Temperature: -20Â°C ~ +60Â°C, Working Humidity: < 93%', 20999, 1, NULL, '2024-10-19 10:31:41', 2, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz70r%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz70r%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz70r%2F3.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz70r%2F4.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz70r%2F5.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz70r%2F6.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz70r%2F7.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz70r%2F8.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz70r%2F9.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz70r%2FThumbs.db?alt=media"]', 7, 'e2e00e93-910b-11ef-a964-d99045a67454'),
	('z900', 'Z900 Face With Fingerprint Time Attendance And Professional Access Control', NULL, '', 13550, 1, NULL, '2024-10-19 10:31:45', 1, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz900%2F1.png?alt=media"]', 2, 'e2e00fb4-910b-11ef-a964-d99045a67454'),
	('z901', 'Z901', NULL, 'Authentication Method: Face, Card, Password and Combinations, Face Capacity: 1500 User, Card Capacity: 1500 Card Templates, Transaction Capacity: 1,50,000 Transactions,  Display: 3.5 Touch Display, Camera: 2 MP HD Camera , Voice Indication: Yes,   Operating Voltage: DC 9V-12V (Under 1.5A), Data Push: Yes, Access Control: Yes, Professional,  Identification Time: <1 Sec, Face Technology: Dynamic Face Recognition Technology recognize up to3 persons Simultaneously,  Working Mode: Day and Night,  Communication: USB, TCP/IP, Wi-Fi,   Battery Backup: No,   Face Identification Range: 0,   Humidity: 0,   Temperature: 0,   User Validity: 0,   Dimensions: 0', 21999, 1, NULL, '2024-10-19 10:32:04', 1, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz901%2F1.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz901%2F2.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz901%2F3.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz901%2F4.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz901%2F5.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz901%2F6.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz901%2FThumbs.db?alt=media"]', 1, 'e2e00fe4-910b-11ef-a964-d99045a67454'),
	('z901-mini', 'Z901 Mini', NULL, 'Authentication Method: Face, Card, Password and Combinations, Face Capacity: 1500 User, Card Capacity: 1500 Card Templates, Transaction Capacity: 1,50,000 Transactions, Display: 3.5 Touch Display, Camera: 2 MP HD Camera , Communication:USB, TCP/IP, Wi-Fi, Data Push: Yes, Voice Indication: Yes, Operating Voltage: DC 9V-12V (Under 1.5A), Access Control: Yes, Professional, Identification Time: <1 Sec, Face Technology: Dynamic Face Recognition Technology recognize up to3 persons Simultaneously, Working Mode: Day and Night, Battery Backup: Yes Inbuilt(Upto 150 Minutes), Face Identification Range: Upto 1.5 Mtr, Humidity: 20% ~ 80% , Temperature: -10 C ~ 60 C, User Validity: Yes, Configurable, Dimensions: 110 x 110 x 70 mm', 24999, 1, NULL, '2024-10-19 10:32:32', 1, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz901-mini%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz901-mini%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz901-mini%2F3.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz901-mini%2F4.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz901-mini%2F5.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz901-mini%2F6.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz901-mini%2F7.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz901-mini%2F8.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz901-mini%2F9.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz901-mini%2FThumbs.db?alt=media"]', 1, 'e2e01128-910b-11ef-a964-d99045a67454'),
	('z902n', 'Z902N', NULL, 'Authentication Method: 0, Face Capacity: 0,    Card Capacity: 0,    Transaction Capacity: 0,    Display: 0,    Camera: 0,   Voice Indication: 0,   Operating Voltage: 0,   Data Push: 0,  Access Control: 0,       Identification Time: 0,    Face Technology: 0,    Working Mode: 0,    Communication: 0,    Battery Backup: 0,  Face Identification Range: 0,   Humidity: 0, Temperature: 0, User Validity: 0,  Dimensions: 0', 33550, 1, NULL, '2024-10-19 10:32:38', 1, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz902n%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fz902n%2F3.PNG?alt=media"]', 1, 'e2e01226-910b-11ef-a964-d99045a67454'),
	('zl-braket-for-em-lock', 'ZL Bracket for EM Lock (600lbs)', NULL, '', 1000, 1, NULL, '2024-10-19 10:32:56', 4, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fzl-braket-for-em-lock%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fzl-braket-for-em-lock%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fzl-braket-for-em-lock%2F3.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fzl-braket-for-em-lock%2F4.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fzl-braket-for-em-lock%2F5.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fzl-braket-for-em-lock%2FThumbs.db?alt=media"]', 13, 'e2e0128a-910b-11ef-a964-d99045a67454'),
	('drop-bolt-lock', 'Surface Mount Drop Bolt Lock', NULL, '', 2500, 1, NULL, '2024-10-19 09:52:50', 4, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fdrop-bolt-lock%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fdrop-bolt-lock%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fdrop-bolt-lock%2F3.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fdrop-bolt-lock%2F4.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fdrop-bolt-lock%2FThumbs.db?alt=media"]', 12, 'e2e012f1-910b-11ef-a964-d99045a67454'),
	('305cb', 'Z305CB Fingerprint Attendance Device', NULL, '', 8000, 1, NULL, '2024-10-19 09:50:50', 1, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2F305cb%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2F305cb%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2F305cb%2F3.jpg?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2F305cb%2F4.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2F305cb%2F5.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2F305cb%2F6.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2F305cb%2FThumbs.db?alt=media"]', 5, 'e2e014bb-910b-11ef-a964-d99045a67454'),
	('drop-bolt-lock-fully-glass', 'Drop Bolt Lock for Fully Glass Door', NULL, '', 3500, 1, NULL, '2024-10-19 09:54:55', 4, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fdrop-bolt-lock-fully-glass%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fdrop-bolt-lock-fully-glass%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fdrop-bolt-lock-fully-glass%2F3.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fdrop-bolt-lock-fully-glass%2F4.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fdrop-bolt-lock-fully-glass%2F5.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fdrop-bolt-lock-fully-glass%2F6.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fdrop-bolt-lock-fully-glass%2F7.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fdrop-bolt-lock-fully-glass%2FThumbs.db?alt=media"]', 12, 'e2e01528-910b-11ef-a964-d99045a67454'),
	('clampshell-thick-card', 'Team Office Clampshell Proximity Thick Cards', NULL, '', 25, 1, NULL, '2024-10-19 09:51:44', 4, '["https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fclampshell-thick-card%2F1.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fclampshell-thick-card%2F2.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fclampshell-thick-card%2F3.png?alt=media", "https://firebasestorage.googleapis.com/v0/b/teamoffice-28b46.appspot.com/o/product_images%2Fclampshell-thick-card%2F4.png?alt=media"]', 15, 'e2e015ea-910b-11ef-a964-d99045a67454');

-- Dumping structure for table u690099781_teamoffice.reviews
CREATE TABLE IF NOT EXISTS `reviews` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `productId` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `rating` int(11) DEFAULT 0,
  `review` text DEFAULT NULL,
  `isRecommended` tinyint(1) DEFAULT 1,
  `status` enum('Waiting_Approval','Rejected','Approved') DEFAULT 'Waiting_Approval',
  `updated` datetime DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `productId` (`productId`),
  KEY `userId` (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table u690099781_teamoffice.reviews: ~0 rows (approximately)

-- Dumping structure for table u690099781_teamoffice.roles
CREATE TABLE IF NOT EXISTS `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_name` enum('ROLE_ADMIN','ROLE_MEMBER','ROLE_MERCHANT','ROLE_DEVELOPER') NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table u690099781_teamoffice.roles: ~0 rows (approximately)

-- Dumping structure for table u690099781_teamoffice.sequelizemeta
CREATE TABLE IF NOT EXISTS `sequelizemeta` (
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

-- Dumping data for table u690099781_teamoffice.sequelizemeta: ~5 rows (approximately)
INSERT INTO `sequelizemeta` (`name`) VALUES
	('1-create-subcategories.js'),
	('20240930041722-add-created-at-to-users.js'),
	('20240930042209-remove-created-from-users.js'),
	('add-subcategoryId-to-products.js'),
	('remove-redundant-email-indexes.js');

-- Dumping structure for table u690099781_teamoffice.subcategories
CREATE TABLE IF NOT EXISTS `subcategories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `categoryId` int(11) DEFAULT NULL,
  `isActive` tinyint(1) DEFAULT 1,
  `updated` datetime DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

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
  `role` enum('ROLE ADMIN','ROLE MEMBER','ROLE MERCHANT','ROLE_DEVELOPER') NOT NULL DEFAULT 'ROLE MEMBER',
  `resetPasswordToken` varchar(255) DEFAULT NULL,
  `resetPasswordExpires` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `merchantId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `merchantId` (`merchantId`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`merchantId`) REFERENCES `merchants` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table u690099781_teamoffice.users: ~5 rows (approximately)
INSERT INTO `users` (`id`, `email`, `phoneNumber`, `name`, `username`, `password`, `provider`, `googleId`, `facebookId`, `avatar`, `role`, `resetPasswordToken`, `resetPasswordExpires`, `updatedAt`, `createdAt`, `merchantId`) VALUES
	('5fb3bc34aee6486f', 'gaitondebhau@gamail.com', NULL, 'social application', 'dashingvijay', '$2a$10$YsHyTM0P/51dWwv3F87OlunS5O3VzjkvSub37DwaP05O8atmLn4WW', 'Email', NULL, NULL, NULL, 'ROLE MEMBER', NULL, NULL, '2024-10-29 11:47:59', '2024-10-29 11:47:59', NULL),
	('bb1d36af-95ea-11ef-814d-8c067b553b28', 'vermadhruv09112002@gmail.com', NULL, 'dhruv', 'verma', '$2a$10$sFDIzV7w/VeL8JOp4hVhSeGYLFLOg.RJ7yOtjWzjzkTIqwR75TGAu', 'Email', NULL, NULL, NULL, 'ROLE MEMBER', NULL, NULL, NULL, '2024-09-30 04:20:12', NULL),
	('bb1d4139-95ea-11ef-814d-8c067b553b28', 'admin@teamoffice.in', NULL, NULL, 'admin', '$2a$10$MJadh/2ev9z4eGHXyCWsy.UmvPSADwsqgew036Qo8T04WzpwRkFu2', 'Email', NULL, NULL, NULL, 'ROLE ADMIN', NULL, NULL, '2024-10-21 06:09:08', '2024-10-21 06:09:08', NULL),
	('bb1d45f4-95ea-11ef-814d-8c067b553b28', 'fetch@gmail.com', NULL, 'nerdy guy', 'fleekfr', '$2a$10$6HwwrHq0TB3oRQOyxYy5AODBXCxBS0waf9OOe8VHvQiP5H8vG0ld.', 'Email', NULL, NULL, NULL, 'ROLE MEMBER', NULL, NULL, '2024-10-28 09:11:09', '2024-10-28 09:11:08', NULL),
	('bb1d4a9a-95ea-11ef-814d-8c067b553b28', 'vikasfrontenddeveloper007@gmail.com', NULL, 'Vikas', 'vkpickyvibe', '$2a$10$NN6ecWG7ZXQdcaIvfN4vR.rRu9/tflK3pwemccjfSdEL1zWYKvptm', 'Email', NULL, NULL, NULL, 'ROLE MEMBER', NULL, NULL, '2024-10-28 09:34:12', '2024-10-28 09:34:12', NULL);

-- Dumping structure for table u690099781_teamoffice.wishlists
CREATE TABLE IF NOT EXISTS `wishlists` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `productId` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `isLiked` tinyint(1) DEFAULT 0,
  `updated` datetime DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table u690099781_teamoffice.wishlists: ~1 rows (approximately)
INSERT INTO `wishlists` (`id`, `productId`, `userId`, `isLiked`, `updated`, `created`) VALUES
	(1, 0, 0, 1, '2024-12-02 06:31:11', '2024-12-02 06:31:11');

-- Dumping structure for trigger u690099781_teamoffice.set_uuid_before_insert
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER set_uuid_before_insert
BEFORE INSERT ON users
FOR EACH ROW
BEGIN
  SET NEW.new_id = UUID();
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
