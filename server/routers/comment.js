const path = require('path');

const express = require('express');
const commentRouter = express.Router();
const controllers = require(path.resolve(__dirname, '..', 'controllers'));

commentRouter.put('/:comment_id', controllers.voteComment);
commentRouter.delete('/:comment_id', controllers.deleteComment);

module.exports = commentRouter;
