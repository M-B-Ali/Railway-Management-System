-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: railway_database
-- ------------------------------------------------------
-- Server version	8.0.28

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
-- Table structure for table `state`
--

DROP TABLE IF EXISTS `state`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `state` (
  `state_id` int NOT NULL AUTO_INCREMENT,
  `state_name` varchar(30) NOT NULL,
  PRIMARY KEY (`state_id`),
  UNIQUE KEY `state_id_UNIQUE` (`state_id`),
  UNIQUE KEY `state_name_UNIQUE` (`state_name`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `state`
--

LOCK TABLES `state` WRITE;
/*!40000 ALTER TABLE `state` DISABLE KEYS */;
INSERT INTO `state` VALUES (1,'Andhra Pradesh'),(2,'Arunachal Pradesh'),(3,'Assam'),(4,'Bihar'),(5,'Chhattisgarh'),(6,'Goa'),(7,'Gujarat'),(8,'Haryana'),(9,'Himachal Pradesh'),(10,'Jharkhand'),(11,'Karnataka'),(12,'Kerala'),(13,'Madhya Pradesh'),(14,'Maharashtra'),(15,'Manipur'),(16,'Meghalaya'),(17,'Mizoram'),(18,'Nagaland'),(0,'NULL'),(19,'Odisha'),(20,'Punjab'),(21,'Rajasthan'),(22,'Sikkim'),(23,'Tamil Nadu'),(24,'Telangana'),(25,'Tripura'),(26,'Uttar Pradesh'),(27,'Uttarakhand'),(28,'West Bengal');
/*!40000 ALTER TABLE `state` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stations`
--

DROP TABLE IF EXISTS `stations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stations` (
  `station_id` int NOT NULL AUTO_INCREMENT,
  `station_code` char(6) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `station_name` varchar(45) NOT NULL,
  `state_id` int DEFAULT NULL,
  `zone_id` int DEFAULT NULL,
  PRIMARY KEY (`station_code`),
  UNIQUE KEY `StationID_UNIQUE` (`station_id`),
  UNIQUE KEY `Station_Code_UNIQUE` (`station_code`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stations`
--

LOCK TABLES `stations` WRITE;
/*!40000 ALTER TABLE `stations` DISABLE KEYS */;
INSERT INTO `stations` VALUES (2,'NZM','Hazrat Nizamuddin',0,4),(1,'PNBE','Patna Junction',4,0);
/*!40000 ALTER TABLE `stations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `train_type`
--

DROP TABLE IF EXISTS `train_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `train_type` (
  `train_type_id` int unsigned NOT NULL AUTO_INCREMENT,
  `train_type_name` varchar(30) NOT NULL,
  `train_type_description` varchar(400) DEFAULT NULL,
  PRIMARY KEY (`train_type_id`),
  UNIQUE KEY `train_type_name_UNIQUE` (`train_type_name`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `train_type`
--

LOCK TABLES `train_type` WRITE;
/*!40000 ALTER TABLE `train_type` DISABLE KEYS */;
INSERT INTO `train_type` VALUES (1,'Train18','Semi-high-speed train, Air-conditioned day time journey train with facilities such as Wi-Fi, snack tables,'),(2,'Rajdhani','Limited stops air-conditioned trains linking state capital to New Delhi.'),(3,'Shatabdi','Air-conditioned, only sitting arrangements intercity trains for daytime travel.'),(4,'Duronto','Non-stop (except for technical halts)'),(5,'Garib Rath','Air conditioned, Economy 3 Tiers train'),(6,'Sampark Kranti','Superfast train service to New Delhi.'),(7,'Jan Shatabdi','Economical version of Shatabdi Express.'),(8,'AC Express','Fully Air-conditioned with limited stops.'),(9,'AC SuperFast','Fully Air-conditioned with with top speed of 110 km/h with limited stoppages.'),(10,'Suvidha','Superfast trains with Dynamic pricing concept on reservation. '),(11,'Humsafar','Air-conditioned, Only three-tier coach trains with LED screens displaying information about'),(12,'Tejas','Semi-high-speed, air-conditioned train. Coaches have bio-vacuum toilets, water-level indicators,'),(13,'Uday','Double Deck trains for Night travels.'),(14,'Antyodaya','Unreserved Superfast trains with LHB coaches.'),(15,'SuperFast','Trains with with top speed of 110 km/h with limited stoppages. '),(16,'Mail/Express','Trains with top speed of 110 Km/h with less stoppages.'),(17,'Special','Special Trains introduced by Indian Railways on a temporary basis to handle peak Summer/Festival traffic India Rail Info is a Busy Junction for Travellers & Rail Enthusiasts. It also hosts a Centralized Database of Indian Railways Trains & Stations, and provides crowd-sourced IRCTC Train Enquiry Services.'),(18,'Passenger',' Unreserved coaches with stoppages at almost all the stations on route.'),(19,'Hill Train','These trains operates in the hilly areas having narrow track gauges. '),(20,'MEMU','Unreserved trains connecting short and medium distances routes.'),(21,'DEMU','Unreserved trains connecting short and medium distances routes.'),(22,'Double Decker','Double Deck trains for Day time travel.'),(23,'EMU - Delhi','Facilitates easy commuting within City.'),(24,'Hyderabad Suburban',NULL),(25,'EMU - Chennai','Facilitates easy commuting within City.'),(26,'EMU - Kolkata','Facilitates easy commuting within City.'),(27,'EMU - Mumbai','Facilitates easy commuting within City.'),(28,'EMU - Pune','Facilitates easy commuting within City.');
/*!40000 ALTER TABLE `train_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `zone`
--

DROP TABLE IF EXISTS `zone`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `zone` (
  `zone_id` int NOT NULL AUTO_INCREMENT,
  `zone_name` varchar(30) NOT NULL,
  `zone_code` varchar(7) NOT NULL,
  PRIMARY KEY (`zone_id`),
  UNIQUE KEY `zone_id_UNIQUE` (`zone_id`),
  UNIQUE KEY `zone_name_UNIQUE` (`zone_name`),
  UNIQUE KEY `zone_code_UNIQUE` (`zone_code`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `zone`
--

LOCK TABLES `zone` WRITE;
/*!40000 ALTER TABLE `zone` DISABLE KEYS */;
INSERT INTO `zone` VALUES (0,'NULL','NULL'),(1,'Central Railway','CR'),(2,'Konkan Railway','KR'),(3,'Metro Railway, Kolkata','MTP'),(4,'Northern Railway','NR'),(5,'North Central Railway','NCR'),(6,'North Eastern Railway','NER'),(7,'Northeast Frontier Railway','NFR'),(8,'North Western Railway','NWR'),(9,'Eastern Railway','ER'),(10,'East Central Railway','ECR'),(11,'East Coast Railway','ECoR'),(12,'Southern Railway','SR'),(13,'South Central Railway','SCR'),(14,'South Coast Railway','SCoR'),(15,'South Eastern Railway','SER'),(16,'South East Central Railway','SECR'),(17,'South Western Railway','SWR'),(18,'Western Railway','WR'),(19,'West Central Railway','WCR');
/*!40000 ALTER TABLE `zone` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-14 13:56:18
