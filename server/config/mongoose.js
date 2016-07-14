const mongoose = require('mongoose');

module.exports = function() {

  mongoose.connect('mongodb://localhost/users');

  const db = mongoose.connection;

  db.on('error', console.error.bind(console, 'Error connecting to database'));
  db.once('open', console.log.bind(console, 'Connected to database!'));


};
