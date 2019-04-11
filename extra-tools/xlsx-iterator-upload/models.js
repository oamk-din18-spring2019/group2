const Sequelize = require('sequelize');
const sequelize = require('./database');

const Category = sequelize.define('category', {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},
	title: Sequelize.STRING,
	usePermission: Sequelize.INTEGER
});

const Question = sequelize.define('question', {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},
	categoryId: Sequelize.INTEGER,

	categoryTitle: Sequelize.STRING,
	question: Sequelize.STRING,
	correctAnswer: Sequelize.STRING,
	option1: Sequelize.STRING,
	option2: Sequelize.STRING,
	option3: Sequelize.STRING,
	correctGuesses: Sequelize.INTEGER,
	option1Guesses: Sequelize.INTEGER,
	option2Guesses: Sequelize.INTEGER,
	option3Guesses: Sequelize.INTEGER,
	usePermission: Sequelize.INTEGER
});

const User = sequelize.define('user', {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},

	username: Sequelize.STRING,
	points: Sequelize.INTEGER,
	correctGuesses: Sequelize.INTEGER,
	incorrectGuesses: Sequelize.INTEGER
});

const Match = sequelize.define('match', {
	id: {
		type: Sequelize.STRING,
		allowNull: false,
		primaryKey: true
	},
	creator: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	matchType: {
		type: Sequelize.STRING,
		allowNull: false
	},
	otherParticipants: {
		type: Sequelize.JSON
	}
});

Category.hasMany(Question);
Question.belongsTo(Category);
Match.belongsTo(User);

module.exports.Category = Category;
module.exports.Question = Question;
module.exports.User = User;
