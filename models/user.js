module.exports = function(sequelize, Sequelize) {

	var User = sequelize.define('user', {
		id: {
			autoIncrement: true,
			primaryKey: true,
			type: Sequelize.INTEGER
		},
		email: {
			type:Sequelize.STRING,
			unique: true,
			lowercase: true,
			validate: {isEmail:true}
		},
		password : {
			type: Sequelize.STRING,
			allowNull: false
		},
	  status: {
	    	type: Sequelize.ENUM('active','inactive'),
	    	defaultValue:'active'
	    }
	});


	return User;
}
