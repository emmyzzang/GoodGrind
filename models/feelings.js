var Reasons = require("./reasons.js");

module.exports = function(sequelize, DataTypes) {
  var Feelings = sequelize.define("feelings", {
    feelingId: { 
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }, 
    feeling: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });

  return Feelings;
  Feelings.hasMany(Reasons,{as: 'reasonList', foreignKey: 'feelingId'})

};
