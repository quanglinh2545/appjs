var express = require('express');
var router = express.Router();

const newsController = require('../app/controllers/NewsController');
const { route } = require('./users');

router.use('/show', newsController.show);
router.use('/', newsController.index);


module.exports = router;
