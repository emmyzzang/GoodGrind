var Feelings = require("./feelings.js");

module.exports = function(sequelize, DataTypes) {
  var Reasons = sequelize.define("reasons", {
    reasonId: { 
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    }, 
    reasonList: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });

  return Reasons;

  Reasons.hasMany(Feelings,{as: 'feelings', foreignKey: 'reasonId'})

};
