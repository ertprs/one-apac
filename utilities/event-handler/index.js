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

      case '120785812649183':
        return process.env.WLD_ACCESS_TOKEN;
    }
  }

  function processPayload(entryId, payload, userId) {
    switch (entryId) {
      case '101827981220121':
        console.log(oneApac.responses(payload, userId));
        return oneApac.responses(payload, userId);

      case '120785812649183':
        return wld.responses(payload);
    }
  }

  return {
    parsePayload,
    processEntryId,
    processPayload
  };
})();