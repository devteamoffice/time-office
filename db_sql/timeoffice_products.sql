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
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `sku` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `imageUrl` varchar(255) DEFAULT NULL,
  `imageKey` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `price` float DEFAULT NULL,
  `taxable` tinyint(1) DEFAULT '0',
  `isActive` tinyint(1) DEFAULT '1',
  `brand` int DEFAULT NULL,
  `updated` datetime DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `categoryId` int DEFAULT NULL,
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
  KEY `brand` (`brand`),
  KEY `categoryId` (`categoryId`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`brand`) REFERENCES `brands` (`id`),
  CONSTRAINT `products_ibfk_11` FOREIGN KEY (`brand`) REFERENCES `brands` (`id`),
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
  CONSTRAINT `products_ibfk_34` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `products_ibfk_5` FOREIGN KEY (`brand`) REFERENCES `brands` (`id`),
  CONSTRAINT `products_ibfk_7` FOREIGN KEY (`brand`) REFERENCES `brands` (`id`),
  CONSTRAINT `products_ibfk_9` FOREIGN KEY (`brand`) REFERENCES `brands` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-03 12:24:09
