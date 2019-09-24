const
  errors = require('./errors'),
  events = require('./events'),
  users = require('./users'),
  votes = require('./votes');

const queries = {
  errors,
  events,
  users,
  votes
}

module.exports = queries;