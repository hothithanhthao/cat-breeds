CREATE TABLE IF NOT EXISTS `Cats`(
  `catId` INT  NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(150) NOT NULL,
  `imperial` VARCHAR(150) NOT NULL,
  `metric` VARCHAR(150) NOT NULL,
  `breed` VARCHAR(150)
) ENGINE = InnoDB;


INSERT INTO `Cats` (`name`, `imperial`, `metric`, `breed`)
VALUES
('Olga', '8-15', '5 - 7', 'Siberian'),
('Bosse', '5-10', '3 - 5', 'Exotic'),
('Mochi', '7-12', '4 - 6', 'Persian'),
('Kiwi', '7 - 14', '3 - 6', 'Scottish'),
('Map', '6 - 12', '5 - 7', 'Scottish'),
('Cup', '6 - 13', '4 - 8', 'Scottish'),
('Trang', '5 - 13', '4 - 7', 'Scottish');
