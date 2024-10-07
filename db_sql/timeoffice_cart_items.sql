CREATE DATABASE  IF NOT EXISTS `timeoffice` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `timeoffice`;
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: timeoffice
-- ------------------------------------------------------
-- Server version	8.0.37

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cart_items`
--

DROP TABLE IF EXISTS `cart_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart_items` (
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
  CONSTRAINT `cart_items_ibfk_11` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
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
  CONSTRAINT `cart_items_ibfk_34` FOREIGN KEY (`cartId`) REFERENCES `carts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `cart_items_ibfk_5` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `cart_items_ibfk_7` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `cart_items_ibfk_9` FOREIGN KEY (`productId`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart_items`
--

LOCK TABLES `cart_items` WRITE;
/*!40000 ALTER TABLE `cart_items` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart_items` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-03 12:24:08
