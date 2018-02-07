const mongoose = require('mongoose');

module.exports = () => {
	mongoose.connect('mongodb://admin:RjF81xu8JJCR@localhost:27017', {
		useMongoClient: true,
		connectTimeoutMS: 5000
	});
	mongoose.Promise = Promise;
	const db = mongoose.connection;
	db.on('error', () => {
		console.log('MongoDB Connection Failed!');
		process.exit(1);
	});
	db.once('open', () => {
		console.log('MongoDB Connection Finish');
		return db;
	})
};
