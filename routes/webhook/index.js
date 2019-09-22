const
  express = require('express'),
  httpStatusCodes = require('../../utilities/constants/http-status-codes'),
  { parsePayload, processEntryId, processPayload } = require('../../utilities/event-handler'),
  { reply } = require('../../utilities/reply-handler'),
  queries = require('../../db/queries');

const
  router = express.Router();

router.route('/')
  .get((request, response) => {
    const webhookVerificationToken = process.env.WEBHOOK_VERIFICATION_TOKEN;

    const
      mode = request.query['hub.mode'],
      token = request.query['hub.verify_token'],
      challenge = request.query['hub.challenge'];

    if (!mode || !token) {
      return response.sendStatus(httpStatusCodes.unauthorized)
    }

    if (mode !== 'subscribe' || token !== webhookVerificationToken) {
      return response.sendStatus(httpStatusCodes.forbidden);
    }

    return response.status(httpStatusCodes.ok).send(challenge);
  })

  .post((request, response) => {
    const body = request.body;

    let entryId, event, senderId, payload, accessToken;

    if (body.object !== 'page') {
      return response.sendStatus(httpStatusCodes.notFound);
    }

    body.entry.forEach((entry) => {
      entryId = entry.id; // thepage entry id
      accessToken = processEntryId(entryId); // gets access token by entry id
      event = entry.messaging[0]; // the webhook event
      senderId = event.sender.id; // the page-scoped id of event sender
      payload = parsePayload(event); // get payload based on event type
    });

    return queries.users.fetchByPageUserId(senderId)
      .then((result) => {
        throw new Error();

        const user = result.rows[0]; // id of users table

        if (!user) {
          return queries.users.insert(senderId);
        }

        return { rows: [user] };
      })
      .then((result) => {
        const { id } = result.rows[0]; // id of users table

        // based on the entryId, send payload to be processed.. if entry id === one apac, process one apac payload with one apac access token
        const message = processPayload(entryId, payload);
        console.log(message);
        return reply(accessToken, senderId, message);
      })
      .catch((error) => {
        console.log(error.stack);
      })
      .finally(() => {
        // Returns a '200 OK' response to all requests
        console.log('testing finally');
        return response.sendStatus(httpStatusCodes.ok);
      });
  });

module.exports = router;