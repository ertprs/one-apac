module.exports = (function() {
  const
    oneApac = require('../../utilities/responses/one-apac'),
    wld = require('../../utilities/responses/women-at-leadership-day');

  function parsePayload(event) {
    switch (true) {
      case !!event.referral:
        return event.referral.ref;

      case !!event.message:
        if (event.message.quick_reply) {
          return event.message.quick_reply.payload;
        }

        return event.message.text;

      case !!event.postback:
        if (event.postback.referral) {
          return event.postback.referral.ref;
        }

        return event.postback.payload;
    }
  }

  function processEntryId(entryId) {
    switch (entryId) {
      case '101827981220121':
        return process.env.ONE_APAC_ACCESS_TOKEN;

      case 'something else':
        return process.env.WLD_ACCESS_TOKEN;
    }
  }

  function processPayload(entryId, payload) {
    switch (entryId) {
      case '101827981220121':
        return oneApac.responses(payload);

      default:
        break;
    }
  }

  return {
    parsePayload,
    processEntryId,
    processPayload
  };
})();