const
  express = require('express'),
  webhook = require('./webhook');

const
  router = express.Router();

console.log('hit route');

router.use('/webhook', webhook);

module.exports = router;