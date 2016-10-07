var mongojs = require('mongojs');

var db = mongojs('yourmongodbhere');

// Export collections
module.exports = db;
