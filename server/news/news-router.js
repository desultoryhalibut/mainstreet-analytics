//express middleware to help route
const NewsController = require('./news-controller');
const NewsRouter = require('express').Router();

// NewsRouter.get('/', NewsController.getFromAPI);


module.exports = NewsRouter;