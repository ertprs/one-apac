const
  express = require('express'),
  administrators = require('./administrators'),
  broadcasts = require('./broadcasts'),
  webhook = require('./webhook');

const
  router = express.Router();

router.use('/administrators', administrators);
router.use('/broadcasts', broadcasts);
router.use('/webhook', webhook);

module.exports = router;