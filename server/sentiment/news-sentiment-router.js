//express middleware to help route
var NewsSentimentController = require('./news-sentiment-controller');
var NewsSentimentRouter = require('express').Router();


NewsSentimentRouter.get('/', NewsSentimentController.getSentiment)

module.exports = NewsSentimentRouter
