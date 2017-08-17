const path = require('path');

const express = require('express');
const articleRouter = express.Router();
const controllers = require(path.resolve(__dirname, '..', 'controllers'));

articleRouter.get('/', controllers.getArticlesWithCount);
articleRouter.get('/:article_id', controllers.getArticlesById);
articleRouter.get('/:article_id/comments', controllers.getCommentsByArticles);
articleRouter.post('/:article_id/comments', controllers.postCommentToArticle);
articleRouter.put('/:article_id', controllers.voteArticle);

module.exports = articleRouter;