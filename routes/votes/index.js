const
  express = require('express'),
  httpStatusCodes = require('../../utilities/constants/http-status-codes'),
  queries = require('../../db/queries');

const router = express.Router();

router.route('/')
  .get((request, response) => {
    return queries.votes.fetchVotes()
      .then((result) => {
        const { rows } = result;

        return response.status(httpStatusCodes.ok).send(rows);
      })
      .catch((error) => {
        queries.errors.logError(error.name, error.message, error.stack);
        return response.status(500).send(error);
      });
  })

module.exports = router;