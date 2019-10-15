const
  express = require('express'),
  administrators = require('./administrators'),
  broadcasts = require('./broadcasts'),
  views = require('./views'),
  votes = require('./votes'),
  webhook = require('./webhook');

const
  router = express.Router();

router.use('/administrators', administrators);
router.use('/broadcasts', broadcasts);
router.use('/views', views);
router.use('/votes', votes);
router.use('/webhook', webhook);

module.exports = router;