module.exports = function(sequelize, DataTypes) {
  var DataList = sequelize.define("DataList", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    // date: {
    //   type: Sequelize.DATE,
    //   allowNull: false,
    //   defaultValue: Sequelize.NOW
    // }, 
    reason: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });


  return DataList;
};

// CREATE TABLE `dataList` (
//   `id` Int AUTO_INCREMENT NOT NULL,
//   `userid` INT,
//   `date` DATETIME NOT NULL,
//   `reason` VARCHAR(255) NOT NULL,
//   FOREIGN KEY (userid) REFERENCES user(userid),
  
//   PRIMARY KEY ( `id` ) 
// );