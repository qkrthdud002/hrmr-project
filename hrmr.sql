-- --------------------------------------------------------
-- 호스트:                          127.0.0.1
-- 서버 버전:                        10.6.4-MariaDB - mariadb.org binary distribution
-- 서버 OS:                        Win64
-- HeidiSQL 버전:                  11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- hrmr 데이터베이스 구조 내보내기
CREATE DATABASE IF NOT EXISTS `hrmr` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */;
USE `hrmr`;

-- 테이블 hrmr.time_record 구조 내보내기
CREATE TABLE IF NOT EXISTS `time_record` (
  `record_id` int(11) NOT NULL AUTO_INCREMENT,
  `todo_id` int(11) DEFAULT NULL,
  `start_time` datetime DEFAULT NULL,
  `end_time` datetime DEFAULT NULL,
  `user_id` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`record_id`) USING BTREE,
  KEY `FK__todo` (`todo_id`) USING BTREE,
  CONSTRAINT `FK__todo` FOREIGN KEY (`todo_id`) REFERENCES `todo` (`todo_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=85 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 테이블 hrmr.todo 구조 내보내기
CREATE TABLE IF NOT EXISTS `todo` (
  `todo_id` int(11) NOT NULL AUTO_INCREMENT,
  `todo_text` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `todo_date` date NOT NULL,
  `finished` tinyint(4) NOT NULL DEFAULT 0,
  `user_id` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`todo_id`),
  KEY `FK__user_information` (`user_id`),
  CONSTRAINT `FK__user_information` FOREIGN KEY (`user_id`) REFERENCES `user_information` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=82 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 테이블 hrmr.user_information 구조 내보내기
CREATE TABLE IF NOT EXISTS `user_information` (
  `user_id` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_password` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 내보낼 데이터가 선택되어 있지 않습니다.

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
