DROP DATABASE IF EXISTS `crow_test`;
CREATE DATABASE `crow_test` DEFAULT CHARSET = utf8mb4 DEFAULT COLLATE = utf8mb4_unicode_ci;
USE `crow_test`;

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
    `user_email` VARCHAR (255) NOT NULL,
    `user_password` VARCHAR (500) NOT NULL,
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_unicode_ci;