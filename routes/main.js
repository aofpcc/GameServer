const router = require('express').Router();
const Player = require('../models/player');
const Check  = require( '../function/check.js' );

router.get('/check', (req, res) => {
	Player.find((err, player) => {
		if (err) {
			res.status(400).send({ error: err });
		} else{
			let count = 0;
			for( let i = 0; i < player.length; ++i ){
				if( player[i].started && player[i].updatedTime < new Date().getTime() - 10000 ){
					Player.remove({ _id: player[i]._id }, (err) => {
					});
					count++;
				}
			}
			if( count > 0 ) res.json({ deleted: count });
			else res.json({ deleted: count });
		}
	});
});

router.get('/', (req, res) => {
	Player.find((err, player) => {
		if (err) {
			res.status(400).send({ error: err });
		} else {
			res.json({ player: player });
		}
	});
});

router.get('/:id', (req, res) => {
	Player.findOne({ _id: req.params.id }).exec((err, player) => {
		if (err) {
			res.status(400).send({ error: err });
		} else {
			res.json({ player: player });
		}
	});
});

router.get('/userID/:id', (req, res) => {
	Player.findOne({ id: req.params.id }).exec((err, player) => {
		if (err) {
			res.status(400).send({ error: err });
		} else {
			res.json({ player: player });
		}
	});
});

router.put('/:id', (req, res) => {
	var editPlayer = {
  	location: {
  		x: req.body.x,
  		y: req.body.y
  	},
    direction: req.body.direction,
    hp: req.body.hp,
    maxHp: req.body.maxHp,
		updatedTime: req.body.updatedTime,
		started: req.body.started,
		currentFrame: req.body.currentFrame
	};
	Player.findOneAndUpdate({ id: req.params.id}, { $set: editPlayer }, { new: true }, (err, player) => {
		if (err) {
			res.status(400).send({ error: err });
		} else {
			res.json({ player: player });
		}
	});
});

router.post('/', (req, res) => {
	var newPost = {
    id: req.body.id,
  	name: req.body.name,
  	location: {
  		x: req.body.x,
  		y: req.body.y
  	},
    direction: req.body.direction,
    hp: req.body.hp,
    maxHp: req.body.maxHp,
		updatedTime: req.body.updatedTime,
		started: req.body.started,
		isDead: req.body.isDead,
		currentFrame: req.body.currentFrame
	};

	let newPlayer = new Player(newPost);
	newPlayer.save((err, player) => {
		if (err) {
			res.status(400).send({ error: err });
		} else {
			res.json({ newPlayer: player });
		}
	});
});

router.delete('/:id', (req, res) => {
	Parking.remove({ _id: req.params.id }, (err) => {
		if (err) {
			res.status(400).send({ error: err });
		} else {
			res.json({ success: true });
		}
	});
});

module.exports = router;
