module.exports = function(sequelize, DataTypes) {
  var Reason = sequelize.define("reason", {
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


  return Reason;
};
