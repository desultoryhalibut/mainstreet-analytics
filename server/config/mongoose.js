const mongoose = require('mongoose');

module.exports = function() {

  // DigitalOcean MongoDB droplet
  mongoose.connect('mongodb://root:mainstreet@138.68.8.220:27017/mainstreet');

  const db = mongoose.connection;

  db.on('error', console.error.bind(console, 'Error connecting to database'));
  db.once('open', console.log.bind(console, 'Connected to database!'));

};
