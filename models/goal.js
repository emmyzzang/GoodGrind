module.exports = function(sequelize, DataTypes) {
  var Goal = sequelize.define("goal", {
    id: {
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

  return Goal;

};
