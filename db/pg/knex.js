var environment = process.env.NODE_ENV || 'predev';
var config = require('../../knexfile')[environment];

module.exports = require('knex')(config);