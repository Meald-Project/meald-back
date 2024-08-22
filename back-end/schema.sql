-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema meald
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema meald
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `meald` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `meald` ;

-- -----------------------------------------------------
-- Table `meald`.`restaurants`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `meald`.`restaurants` (
  `restaurant_id` INT NOT NULL AUTO_INCREMENT,
  `nom` VARCHAR(255) NULL DEFAULT NULL,
  `address` VARCHAR(255) NULL DEFAULT NULL,
  `phone` VARCHAR(20) NULL DEFAULT NULL,
  `email` VARCHAR(50) NULL DEFAULT NULL,
  `mot_de_passe` VARCHAR(450) NULL DEFAULT NULL,
  PRIMARY KEY (`restaurant_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `meald`.`categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `meald`.`categories` (
  `categories_id` INT NOT NULL,
  `nom` VARCHAR(45) NULL DEFAULT NULL,
  `restaurant_id` INT NOT NULL,
  PRIMARY KEY (`categories_id`),
  INDEX `fk_categories_restaurants1_idx` (`restaurant_id` ASC) VISIBLE,
  CONSTRAINT `fk_categories_restaurants1`
    FOREIGN KEY (`restaurant_id`)
    REFERENCES `meald`.`restaurants` (`restaurant_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `meald`.`articles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `meald`.`articles` (
  `article_id` INT NOT NULL AUTO_INCREMENT,
  `nom` VARCHAR(255) NULL DEFAULT NULL,
  `prix` DECIMAL(10,2) NULL DEFAULT NULL,
  `description` VARCHAR(225) NULL DEFAULT NULL,
  `categories_id` INT NOT NULL,
  PRIMARY KEY (`article_id`),
  INDEX `fk_articles_categories1_idx` (`categories_id` ASC) VISIBLE,
  CONSTRAINT `fk_articles_categories1`
    FOREIGN KEY (`categories_id`)
    REFERENCES `meald`.`categories` (`categories_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `meald`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `meald`.`users` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `nom` VARCHAR(45) NULL DEFAULT NULL,
  `email` VARCHAR(45) NULL DEFAULT NULL,
  `motdepasse` VARCHAR(450) NULL DEFAULT NULL,
  `addresse` VARCHAR(255) NULL DEFAULT NULL,
  `telephone` VARCHAR(255) NULL DEFAULT NULL,
  `role` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`user_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `meald`.`livreurs`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `meald`.`livreurs` (
  `livreur_id` INT NOT NULL AUTO_INCREMENT,
  `matricule` VARCHAR(55) NULL DEFAULT NULL,
  `compte_bancaire` VARCHAR(50) NULL DEFAULT NULL,
  `user_user_id` INT NOT NULL,
  `cin` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`livreur_id`),
  INDEX `fk_livreurs_user1_idx` (`user_user_id` ASC) VISIBLE,
  CONSTRAINT `fk_livreurs_user1`
    FOREIGN KEY (`user_user_id`)
    REFERENCES `meald`.`users` (`user_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `meald`.`clients`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `meald`.`clients` (
  `client_id` INT NOT NULL AUTO_INCREMENT,
  `mode_de_payement` VARCHAR(50) NULL DEFAULT NULL,
  `user_user_id` INT NOT NULL,
  PRIMARY KEY (`client_id`),
  INDEX `fk_clients_user1_idx` (`user_user_id` ASC) VISIBLE,
  CONSTRAINT `fk_clients_user1`
    FOREIGN KEY (`user_user_id`)
    REFERENCES `meald`.`users` (`user_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `meald`.`commandes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `meald`.`commandes` (
  `commande_id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NULL DEFAULT NULL,
  `restaurant_id` INT NULL DEFAULT NULL,
  `prix_total` DECIMAL(10,2) NULL DEFAULT NULL,
  `delivery_status` VARCHAR(20) NULL DEFAULT NULL,
  `date_commande` VARCHAR(45) NULL DEFAULT NULL,
  `status` VARCHAR(45) NULL DEFAULT NULL,
  `mode_payement` VARCHAR(45) NULL DEFAULT NULL,
  `frais_livraison` VARCHAR(45) NULL DEFAULT NULL,
  `livreur_id` INT NOT NULL,
  PRIMARY KEY (`commande_id`),
  INDEX `user_id` (`user_id` ASC) VISIBLE,
  INDEX `restaurant_id` (`restaurant_id` ASC) VISIBLE,
  INDEX `fk_commandes_liveurs1_idx` (`livreur_id` ASC) VISIBLE,
  CONSTRAINT `fk_commandes_liveurs1`
    FOREIGN KEY (`livreur_id`)
    REFERENCES `meald`.`livreurs` (`livreur_id`),
  CONSTRAINT `orders_ibfk_1`
    FOREIGN KEY (`user_id`)
    REFERENCES `meald`.`clients` (`client_id`),
  CONSTRAINT `orders_ibfk_2`
    FOREIGN KEY (`restaurant_id`)
    REFERENCES `meald`.`restaurants` (`restaurant_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `meald`.`article_commande`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `meald`.`article_commande` (
  `article_id` INT NOT NULL,
  `quantité` VARCHAR(45) NULL DEFAULT NULL,
  `prix` VARCHAR(45) NULL DEFAULT NULL,
  `articles_article_id` INT NOT NULL,
  `commandes_commande_id` INT NOT NULL,
  PRIMARY KEY (`article_id`, `articles_article_id`, `commandes_commande_id`),
  INDEX `fk_article_commande_articles1_idx` (`articles_article_id` ASC) VISIBLE,
  INDEX `fk_article_commande_commandes1_idx` (`commandes_commande_id` ASC) VISIBLE,
  CONSTRAINT `fk_article_commande_articles1`
    FOREIGN KEY (`articles_article_id`)
    REFERENCES `meald`.`articles` (`article_id`),
  CONSTRAINT `fk_article_commande_commandes1`
    FOREIGN KEY (`commandes_commande_id`)
    REFERENCES `meald`.`commandes` (`commande_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `meald`.`depot_livreur`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `meald`.`depot_livreur` (
  `depot_livreur_id` INT NOT NULL,
  `date_depot` VARCHAR(45) NULL DEFAULT NULL,
  `montant` VARCHAR(45) NULL DEFAULT NULL,
  `liveurs_livreur_id` INT NOT NULL,
  PRIMARY KEY (`depot_livreur_id`),
  INDEX `fk_depot_livreur_liveurs1_idx` (`liveurs_livreur_id` ASC) VISIBLE,
  CONSTRAINT `fk_depot_livreur_liveurs1`
    FOREIGN KEY (`liveurs_livreur_id`)
    REFERENCES `meald`.`livreurs` (`livreur_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `meald`.`paiments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `meald`.`paiments` (
  `payment_id` INT NOT NULL AUTO_INCREMENT,
  `commande_id` INT NOT NULL,
  `methode_paiement` VARCHAR(20) NOT NULL,
  `montant` DECIMAL(10,2) NOT NULL,
  `status` VARCHAR(20) NOT NULL,
  `date_paiement` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`payment_id`),
  INDEX `order_id` (`commande_id` ASC) VISIBLE,
  CONSTRAINT `payment_ibfk_1`
    FOREIGN KEY (`commande_id`)
    REFERENCES `meald`.`commandes` (`commande_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `meald`.`ratings`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `meald`.`ratings` (
  `rating_id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `restaurant_id` INT NOT NULL,
  `rating` INT NOT NULL,
  `commentaire` VARCHAR(50) NULL DEFAULT NULL,
  PRIMARY KEY (`rating_id`),
  INDEX `user_id` (`user_id` ASC) VISIBLE,
  INDEX `restaurant_id` (`restaurant_id` ASC) VISIBLE,
  CONSTRAINT `rating_ibfk_1`
    FOREIGN KEY (`user_id`)
    REFERENCES `meald`.`clients` (`client_id`),
  CONSTRAINT `rating_ibfk_2`
    FOREIGN KEY (`restaurant_id`)
    REFERENCES `meald`.`restaurants` (`restaurant_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
