const
  express = require('express'),
  rp = require('request-promise'),
  entryIdLabels = require('../../utilities/constants/entry-id-labels'),
  httpStatusCodes = require('../../utilities/constants/http-status-codes'),
  { processEntryId } = require('../../utilities/event-handler'),
  Message = require('../../utilities/models/Message'),
  queries = require('../../db/queries');

const router = express.Router();

router.route('/')
  .get((request, response) => {
    const { eventId } = request.query;

    if (!eventId) {
      return response.sendStatus(httpStatusCodes.badRequest);
    }

    return queries.broadcasts.getBroadcasts(eventId)
      .then((result) => {
        const { rows } = result;

        return response.status(httpStatusCodes.ok).send(rows);
      })
      .catch((error) => {
        return queries.errors.logError(error.name, error.message, error.stack);
      });
  })

  .post((request, response) => {
    const { eventId, text } = request.body;
    let
      accessToken,
      pageLabel;

    if (!text || !eventId) {
      return response.sendStatus(httpStatusCodes.badRequest);
    }

    const message = new Message(text);

    return queries.events.getById(eventId)
      .then((result) => {
        const
          entryId = result.rows[0].page_id;

        accessToken = processEntryId(entryId);
        pageLabel = entryIdLabels[entryId];

        const broadcastCreateOptions = {
          uri: 'https://graph.facebook.com/v2.11/me/message_creatives',
          method: 'POST',
          qs: {
            access_token: accessToken
          },
          json: {
            messages: [message]
          }
        }

        return rp(broadcastCreateOptions);
      })
      .then((result) => {
        const broadcastObject = {
          message_creative_id: result.message_creative_id,
          notification_type: 'REGULAR',
          messaging_type: 'MESSAGE_TAG',
          tag: 'NON_PROMOTIONAL_SUBSCRIPTION',
          custom_label_id: pageLabel
        }

        const broadcastSendOptions = {
          uri: 'https://graph.facebook.com/v2.11/me/broadcast_messages',
          qs: {
            access_token: accessToken
          },
          method: 'POST',
          json: broadcastObject
        }

        return rp(broadcastSendOptions);
      })
      .then(() => {
        return response.status(httpStatusCodes.ok).json({ success: true });
      })
      .catch((error) => {
        return queries.errors.logError(error.name, error.message, error.stack);
      });
  });
module.exports = router;