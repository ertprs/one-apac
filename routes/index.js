const
  express = require('express'),
  administrators = require('./administrators'),
  webhook = require('./webhook');

const
  router = express.Router();

router.use('/administrators', administrators);
router.use('/webhook', webhook);

module.exports = router;