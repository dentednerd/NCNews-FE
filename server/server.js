// environment
if (!process.env.NODE_ENV) process.env.NODE_ENV = 'dev';

// native modules
const path = require('path');

// 3rd Party modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// project modules
const config = require(path.resolve(__dirname, 'config'));
const articleRouter = require(
              path.resolve(__dirname, 'routers', 'article'));
const topicRouter = require(
              path.resolve(__dirname, 'routers', 'topic'));
const commentRouter = require(
              path.resolve(__dirname, 'routers', 'comment'));
const userRouter = require(
              path.resolve(__dirname, 'routers', 'user'));

// global constants
const app = express();
const db = config.DB[process.env.NODE_ENV] || process.env.DB;
const PORT = config.PORT[process.env.NODE_ENV] || process.env.PORT;
mongoose.Promise = global.Promise;

// db connection
mongoose.connect(db, function (err) {
  if (!err) {
    console.log(`connected to the Database: ${db}`);
  } else {
    console.log(`error connecting to the Database ${err}`);
  }
});

// middleware
app.use(bodyParser.json());
app.use(cors());
app.get('/', function (req, res, next) {
  res.status(200).send('All good!');
  next();
});
app.use('/api/articles',articleRouter);
app.use('/api/topics', topicRouter);
app.use('/api/comments', commentRouter);
app.use('/api/users', userRouter);
// error handling
app.use(function (err, req, res, next) {
  if (err) errorHandler(err, req, res, next);
});

function errorHandler (err, req, res, next) {
  res.status(err.status);
  res.json({ errmsg: 'Error!!',
            error: err.msg });
  next();
}

// server listening
app.listen(PORT, function () {
  console.log(`listening on port ${PORT}`);
});

module.exports = app;