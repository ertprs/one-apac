const
  controls = require('./controls'),
  errors = require('./errors'),
  events = require('./events'),
  users = require('./users'),
  votes = require('./votes');

const queries = {
  controls,
  errors,
  events,
  users,
  votes
}

module.exports = queries;