const Sequelize = require('sequelize');

const sequelize = new Sequelize('MadMindQuiz', 'root12', 'pSeHrHjM1002', {
	dialect: 'mysql',
	host: '134.209.241.135',
	logging: false
});

module.exports = sequelize;
