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
        return response.status(httpStatusCodes.internalServer).send(error);
      });
  })

router.route('/status')
  .get((request, response) => {
    return queries.controls.getStatus('Lip Sync Battle')
      .then((result) => {
        const { active } = result.rows[0];

        return response.status(httpStatusCodes.ok).send({ isActive: active });
      })
      .catch((error) => {
        queries.errors.logError(error.name, error.message, error.stack);
        return response.sendStatus(httpStatusCodes.internalServer);
      });
  })

  .put((request, response) => {
    const { isActive } = request.body;

    console.log(request.body);

    return queries.controls.setStatus('Lip Sync Battle', isActive)
      .then(() => {
        return response.status(httpStatusCodes.ok).send({ success: true });
      })
      .catch((error) => {
        queries.errors.logError(error.name, error.message, error.stack);
        return response.sendStatus(httpStatusCodes.internalServer);
      });
  });

module.exports = router;