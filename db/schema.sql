-- Drop database if it exists
DROP DATABASE IF EXISTS `ng6kmk5cmyifvp6g`;

-- Create database
CREATE DATABASE ng6kmk5cmyifvp6g;

USE ng6kmk5cmyifvp6g;

CREATE TABLE IF NOT EXISTS `user` (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS game (
  id INT NOT NULL PRIMARY KEY,
  title VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS review (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  rating INT,
  description VARCHAR(255),
  date_created DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  game_id INT,
  user_id INT,
  FOREIGN KEY (game_id) REFERENCES game(id),
  FOREIGN KEY (user_id) REFERENCES `user`(id)
);





