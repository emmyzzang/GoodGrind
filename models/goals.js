var Reasons = require("./reasons.js");

module.exports = function(sequelize, DataTypes) {
  var Feelings = sequelize.define("feelings", {
    goalId: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    goal: {
      type: DataTypes.STRING,
      required: true
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at',
    },
  });


};
