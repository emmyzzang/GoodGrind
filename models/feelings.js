var Reasons = require("./reasons.js");

module.exports = function(sequelize, DataTypes) {
  var Feelings = sequelize.define("feelings", {
    feelingId: { 
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    feeling: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at',
    },
  });

  return Feelings;
  Feelings.hasMany(Reasons,{as: 'reasonList', foreignKey: 'feelingId'})

};
