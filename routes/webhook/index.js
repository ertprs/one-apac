const
  express = require('express'),
  httpStatusCodes = require('../../utilities/constants/http-status-codes'),
  { parsePayload } = require('../../utilities/event-handler');

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

    if (body.object !== 'page') {
      return response.sendStatus(httpStatusCodes.notFound);
    }

    body.entry.forEach((entry) => {
      const
        entryId = entry.id, // the page entry id
        event = entry.messaging[0], // the webhook event
        senderId = event.sender.id, // the page-scoped id of event sender
        payload = parsePayload(event); // get payload based on event type

      console.log('entryId: ', entryId);
      console.log('event: ', event);
      console.log('senderId: ', senderId);
      console.log('payload: ', payload);
    });

    // Returns a '200 OK' response to all requests
    return response.sendStatus(httpStatusCodes.ok);
  });

module.exports = router;