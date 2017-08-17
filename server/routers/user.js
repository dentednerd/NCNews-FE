const path = require('path');

const express = require('express');
const userRouter = express.Router();
const controllers = require(path.resolve(__dirname, '..', 'controllers'));

userRouter.get('/:username', controllers.getUserProfile);

module.exports = userRouter;