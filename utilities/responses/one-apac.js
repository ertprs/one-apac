module.exports = (function() {
  function responses(payload) {
    const

      placeholder = 'https://via.placeholder.com/1910x1000',

      Attachment = require('../../utilities/models/Attachment'),
      Button = require('../../utilities/models/Button'),
      Element = require('../../utilities/models/Element'),
      Message = require('../../utilities/models/Message'),
      QuickReply = require('../../utilities/models/QuickReply');

    let attachment, buttons, elements, message, quickReplies;

    switch (payload) {
      case 'Home':
        buttons = [
          new Button('Agenda & Maps', 'postback', 'Agenda&Maps'),
          new Button('Transport & Contacts', 'postback', 'Transport&Contacts'),
          new Button('Lip Sync Battle', 'postback', 'LipSyncBattle')
        ];

        elements = [
          new Element('One APAC GMS Conference 2019', 'What would you like to know more about?', placeholder, buttons)
        ];

        attachment = new Attachment('generic', elements);

        message = new Message(attachment);
        return message;

      default:
        attachment = 'Sorry, I don\'t understand what you\'re saying :(';

        quickReplies = [
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        return message;
    }
  }

  return {
    responses
  };
})();