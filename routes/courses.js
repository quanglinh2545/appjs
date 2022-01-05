var express = require('express');
var router = express.Router();

const coursesController = require('../app/controllers/CoursesController');
const { route } = require('./users');

router.use('/:slug', coursesController.show);

module.exports = router;
