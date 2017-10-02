module.exports = function(sequelize, DataTypes) {
  var Data = sequelize.define("Data", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 30]
      }
    },
    date: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW
    },
    feeling: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 'none'
    }, 
    reason: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
      defaultValue: '[]'
    }
  }

  });
  return Data;
};