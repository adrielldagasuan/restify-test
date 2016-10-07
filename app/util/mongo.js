var mongojs = require('mongojs');

var db = mongojs('YOURMONGODBHERE');

// Export collections
module.exports = db;
