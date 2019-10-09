const
  express = require('express'),
  { hashPassword } = require('../../utilities/authentication/hash-password'),
  httpStatusCodes = require('../../utilities/constants/http-status-codes'),
  queries = require('../../db/queries');

const router = express.Router();

// router.route('/')
//   .post((request, response) => {
//     const
//       { body } = request,
//       { username, eventId } = body;

//     let { password } = body;

//     password = hashPassword(password);

//     return queries.administrators.insertAdministrator(username, password, eventId)
//       .then(() => {
//         return response.sendStatus(httpStatusCodes.ok);
//       })
//       .catch((error) => {
//         return queries.errors.logError(error.name, error.message, error.stack);
//       });
//   });

router.route('/login')
  .post((request, response) => {
    const
      { body } = request,
      { username } = body;

    let { password } = body;

    password = hashPassword(password);

    return queries.administrators.getAdministrator(username)
      .then((result) => {
        const administrator = result.rows[0];

        if (!administrator) {
          const usernameError = new Error('Incorrect username');
          usernameError.status = httpStatusCodes.badRequest;
          throw usernameError;
        }

        if (administrator.password !== password) {
          const passwordError = new Error('Incorrect password');
          passwordError.status = httpStatusCodes.badRequest;
          throw passwordError;
        }

        const payload = {
          id: administrator.id,
          username: administrator.username,
          eventId: administrator.eventId
        };

        return response.status(httpStatusCodes.ok).json(payload);
      })
      .catch((error) => {
        if (error.status !== httpStatusCodes.badRequest) {
          // ignoring bad request errors since it's being handled gracefully
          queries.errors.logError(error.name, error.message, error.stack);
        }

        return response.status(error.status).send(error.message);
      });
  });

module.exports = router;