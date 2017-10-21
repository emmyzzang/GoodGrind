module.exports = function(sequelize, DataTypes) {
  var Feeling = sequelize.define("feeling", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    feeling: {
      type: DataTypes.ENUM('-1','0','+1'),
      defaultValue:'0'
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at',
    },
  });



  return Feeling;

};
