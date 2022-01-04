const newsRouter = require('./news');
var express = require('express')
var app = express();

function routeFunc(app) {
   app.use('/news',newsRouter);
  // app.get('/news',(req, res) => {
  //   res.send('hello news');
  // })
}

module.exports = routeFunc;
