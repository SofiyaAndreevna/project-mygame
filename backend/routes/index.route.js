const router = require('express').Router();

const apiAuthRouter = require('./apiLogin.route');
const apiGameRouter = require('./apiGame.route');
const apiGetUser = require('./apiGetUser.route');

router.use('/api/registration', apiAuthRouter);
router.use('/api/game', apiGameRouter);
router.use('/getUser', apiGetUser);

module.exports = router;
