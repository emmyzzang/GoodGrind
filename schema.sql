USE goodgrind;

CREATE TABLE `user` (
  `userid` Int( 11 ) AUTO_INCREMENT NOT NULL,
  `firstname`VARCHAR( 255) NOT NULL,
  `lastname`VARCHAR( 255) NOT NULL,
  `username` VARCHAR( 255) NOT NULL,
  `email` VARCHAR( 255) NOT NULL,
  `password`VARCHAR( 255) NOT NULL,
  `last_login`DATETIME NOT NULL,
  `status`DATETIME NOT NULL,

  PRIMARY KEY ( `userid` )
);

CREATE TABLE `Feelings` (
  `feelingId` Int AUTO_INCREMENT NOT NULL,
  `date` DATETIME NOT NULL,
  `feeling` boolean not null default 0,
   FOREIGN KEY (userid) REFERENCES feelingId(userid),

  PRIMARY KEY ( `FeelingId` ) 
);
  
CREATE TABLE `Reasons` (
  `reasonId` Int AUTO_INCREMENT NOT NULL,
  `date` DATETIME NOT NULL,
  `reasonList` VARCHAR(255) NOT NULL,
  FOREIGN KEY (feelingId) REFERENCES reasonId(feelingId),
  

  PRIMARY KEY ( `reasonId` ) 
);
