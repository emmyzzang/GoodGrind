USE goodgrind;

-- user sequelize model was copy-pasted from passport.  We should use the User Id
-- from that. I will work on writing a mySql schema for it as well. 

CREATE TABLE `data` (
  `id` Int AUTO_INCREMENT NOT NULL,
  `userId` INT,
  `date` DATETIME NOT NULL,
  `feeling` boolean not null default 0,
   FOREIGN KEY (userid) REFERENCES user(id),

  PRIMARY KEY ( `id` ) 

);
  
CREATE TABLE `dataList` (
  `id` Int AUTO_INCREMENT NOT NULL,
  `userid` INT,
  `date` DATETIME NOT NULL,
  `reason` VARCHAR(255) NOT NULL,
  FOREIGN KEY (userid) REFERENCES user(userid),
  
  PRIMARY KEY ( `id` ) 
);
  