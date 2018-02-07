const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var Player = new Schema({
  id: String,
	name: String,
	location: {
		x: Number,
		y: Number
	},
  direction: Number,
  hp: Number,
  maxHp: Number,
  updatedTime: String,
  started: Boolean,
  isDead: Boolean,
  currentFrame: Number
});

module.exports = mongoose.model('player', Player);
