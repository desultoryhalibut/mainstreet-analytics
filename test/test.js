const chai = require('chai');
const assert = require('chai').assert;
const expect = require('chai').expect;
const request = require('request');

const app = require('../server/server');
const db = require('../server/config/mongoose');

// FIX: Fix broken tests and add further tests for Twitter and Sentiment endpoints

  describe ('GET /api/googletrends', function() {
    it('should return status 200', function(done) {
      request
        .get('http://localhost:3001/api/googletrends', function (err, res, body) {
          res.should.have.status(200);
          done();
        });
    });
  });
