const path = require('path');

const express = require('express');
const topicRouter = express.Router();
const controllers = require(path.resolve(__dirname, '..', 'controllers'));

topicRouter.get('/', controllers.getTopics);
topicRouter.get('/:topic_id/articles', controllers.getArticlesByTopic);

module.exports = topicRouter;
