module.exports = function(sequelize, DataTypes, Sequelize) {
  var Data = sequelize.define("Data", {
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
    //   defaultValue: Sequelize.NOW
    // }, 
    feeling: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
});

  // Data.associate = function(models) {
  // // We're saying that a Post should belong to an Author
  // // A Post can't be created without an Author due to the foreign key constraint
  //   Data.belongsTo(models.User, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };
  return Data;

};


////// the mysql schema
// CREATE TABLE `data` (
//   `id` Int AUTO_INCREMENT NOT NULL,
//   `userId` INT,
//   `date` DATETIME NOT NULL,
//   `feeling` boolean not null default 0,
//    FOREIGN KEY (userid) REFERENCES user(userid),

//   PRIMARY KEY ( `id` ) 

// );





////////taken from the sequelize website
// const Product = this.sequelize.define('product', {
//   title: Sequelize.STRING
// });
// const User = this.sequelize.define('user', {
//   first_name: Sequelize.STRING,
//   last_name: Sequelize.STRING
// });
// const Address = this.sequelize.define('address', {
//   type: Sequelize.STRING,
//   line_1: Sequelize.STRING,
//   line_2: Sequelize.STRING,
//   city: Sequelize.STRING,
//   state: Sequelize.STRING,
//   zip: Sequelize.STRING,
// });

// Product.User = Product.belongsTo(User);
// User.Addresses = User.hasMany(Address);
// Also works for `hasOne`