const CONFIG = require('./config');
const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db')();

const app = express();
const router = {};
router.main = require('./routes/main');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router.main);

//app.use('/rating', router.rating);

app.listen(CONFIG.SERVER.PORT, () => {
	console.log(`Game Server started on port ${CONFIG.SERVER.PORT}`);
});
