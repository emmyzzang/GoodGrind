var Feelings = require("./feelings.js");

module.exports = function(sequelize, DataTypes) {
  var Reasons = sequelize.define("reasons", {
    reasonId: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    reasonList: {
      type: DataTypes.STRING,
      required: true
    }
  });

  return Reasons;

  Reasons.hasMany(Feelings,{as: 'feelings', foreignKey: 'reasonId'})

};
