module.exports = function(sequelize, DataTypes) {
  var DataList = sequelize.define("DataList", {
    id: {
      type: DataTypes.INT,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INT,
      allowNull: false,
    },
    date: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW
    }, 
    reason: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 'none'
    }

    //FIGURE OUT HOW TO SET FOREIGN KEY WITH SEQUELIZE
  }

  });
  return Data;
};

// CREATE TABLE `dataList` (
//   `id` Int AUTO_INCREMENT NOT NULL,
//   `userid` INT,
//   `date` DATETIME NOT NULL,
//   `reason` VARCHAR(255) NOT NULL,
//   FOREIGN KEY (userid) REFERENCES user(userid),
  
//   PRIMARY KEY ( `id` ) 
// );