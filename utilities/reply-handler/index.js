module.exports = (function() {
  const rp = require('request-promise');

  function reply(access_token, recipientId, message) {
    const body = {
      recipient: {
        id: recipientId
      },
      message
    };

    const options = {
      uri: 'https://graph.facebook.com/v3.3/me/messages',
      qs: {
        access_token
      },
      method: 'POST',
      json: body
    };

    rp(options)
      .then((response) => {
        console.log(`Message successfully sent to recipient: ${response.recipient_id}`);
      })
      .catch((error) => {
        // TODO: error log
        console.log(`Error during POST operation to Send API:\n\n${error}\n\n`)
        return;
      });
  }

  return {
    reply
  };
})();