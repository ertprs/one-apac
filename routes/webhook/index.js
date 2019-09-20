const
  express = require('express');

const
  router = express.Router();

// Creates the endpoint for our webhook
router.route('/')
  .get((request, response) => {
    console.log('entered route');
    // Your verify token. Should be a random string.
    const webhookVerificationToken = process.env.WEBHOOK_VERIFICATION_TOKEN;

    // Parse the query params
    const
      mode = request.query['hub.mode'],
      token = request.query['hub.verify_token'],
      challenge = request.query['hub.challenge'];

    // Checks if a token and mode is in the query string of the request
    if (!mode || !token) {
      return response.sendStatus(401)
    }

    // Checks the mode and token sent is correct
    if (mode !== 'subscribe' || token !== webhookVerificationToken) {
      console.log(webhookVerificationToken, 'Wrong');
      return response.sendStatus(403);
    }

    // Passed all checks, send back the challenge token
    console.log(webhookVerificationToken, 'Correct');
    return response.status(200).send(challenge);
  })

  .post((request, response) => {
    const body = request.body;

    // Gate check for all requests that are not from a page subscription
    if (body.object !== 'page') {
      return response.sendStatus(404);
    }

    // Iterates over each entry - there may be multiple if batched
    body.entry.forEach((entry) => {

      // Gets the message. entry.messaging is an array, but
      // will only ever contain one message, so we get index 0
      const webhook_event = entry.messaging[0];
      console.log(webhook_event);
    });

    // Returns a '200 OK' response to all requests
    return response.status(200).send('EVENT_RECEIVED');
  });

module.exports = router;