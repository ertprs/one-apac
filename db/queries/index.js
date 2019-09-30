const
  administrators = require('./administrators'),
  controls = require('./controls'),
  errors = require('./errors'),
  events = require('./events'),
  users = require('./users'),
  views = require('./views'),
  votes = require('./votes');

const queries = {
  administrators,
  controls,
  errors,
  events,
  users,
  views,
  votes
}

module.exports = queries;