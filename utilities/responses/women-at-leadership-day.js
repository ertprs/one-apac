module.exports = (function() {
  function responses(accessToken, payload, recipientId, userId) {
    const
      placeholder = 'https://via.placeholder.com/1910x1000',
      { reply } = require('../reply-handler/'),
      Attachment = require('../../utilities/models/Attachment'),
      Button = require('../../utilities/models/Button'),
      Element = require('../../utilities/models/Element'),
      Message = require('../../utilities/models/Message'),
      QuickReply = require('../../utilities/models/QuickReply');

    let attachment, buttons, elements, message, quickReplies;

    switch (payload) {
      case 'Home':
        attachment = 'Hello World';

        message = new Message(attachment);
        return reply(accessToken, recipientId, message);

      default:

        break;
    }

    return message;
  }

  return {
    responses
  };
})();