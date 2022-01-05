const newsRouter = require('./news');
const coursesRouter = require('./courses');

var express = require('express')
var app = express();

function routeFunc(app) {
   app.use('/news',newsRouter);
   app.use('/courses',coursesRouter);
}

module.exports = routeFunc;
