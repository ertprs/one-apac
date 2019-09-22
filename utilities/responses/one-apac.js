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
        break;

      case 'Agenda&Maps':
        buttons = [
          new Button('Agenda', 'postback', 'Agenda'),
          new Button('Experience Showcase', 'postback', 'ExperienceShowcase'),
          new Button('Venue Maps', 'postback', 'VenueMaps')
        ];

        elements = [
          new Element('Agenda & Maps', 'Agenda, venue maps, and other experiences', placeholder, buttons)
        ];

        attachment = new Attachment('generic', elements);

        quickReplies = [
          new QuickReply('Back', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        break;

      case 'Agenda':
        buttons = [
          new Button('Day 1', 'postback', 'Day1'),
          new Button('Day 2', 'postback', 'Day2'),
          new Button('DinnerEvents', 'postback', 'DinnerEvents')
        ];

        elements = [
          new Element('Agenda', 'Agenda, sessions, and speakers', placeholder, buttons)
        ];

        attachment = new Attachment('generic', elements);

        quickReplies = [
          new QuickReply('Back', 'Agenda&Maps'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        break;

      case 'Day1':
        buttons = [
          new Button('9:00 am - 12:35 pm', 'postback', 'Day1Part1'),
          new Button('12:35 pm - 3:25 pm', 'postback', 'Day1Part2'),
          new Button('3:25 pm - 6:10 pm', 'postback', 'Day1Part3')
        ];

        elements = [
          new Element('November 13, 2019', 'Main Sessions', placeholder, buttons)
        ];

        attachment = new Attachment('generic', elements);

        quickReplies = [
          new QuickReply('Back', 'Agenda'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        break;

      case 'Day1Part1':
        elements = [
          new Element('9:00 am - 10:00 am', 'APAC Vision & Priorities\n\nDan Neary\nVP, GBG APAC', placeholder),
          new Element('10:00 am - 10:15 am', 'Product Marketing\n\nTy Ahmad Taylor\nVP, Product Marketing', placeholder),
          new Element('10:15 am - 10:30 am', 'Instagram\n\nAdam Mosseri\nHead of Instagram', placeholder),
          new Element('10:30 am - 11:00 am', 'Break', placeholder),
          new Element('11:00 am - 11:20 am', 'Lip Sync Battle Performances 1 & 2', placeholder),
          new Element('11:20 am - 11:35 am', 'Messaging: Messenger\n\nStan Chudnovsky\nVP, Messenger', placeholder),
          new Element('11:35 am - 11:50 am', 'Messaging: WhatsApp\n\nMaz Sharafi\nDirector, WhatsApp', placeholder),
          new Element('11:50 am - 12:05 pm', 'TBC', placeholder),
          new Element('12:05 pm - 12:20 pm', 'Partners and Technologies\n\nChristine Warner\nDirector, Global Partnerships Management', placeholder),
          new Element('12:20 pm - 12:35 pm', 'Creative Shop\n\nRapha Vasconcellos\nVP, The Creative Shop', placeholder)
        ];

        attachment = new Attachment('generic', elements);

        quickReplies = [
          new QuickReply('Back', 'Day1'),
          new QuickReply('Home', 'Home'),
        ];

        message = new Message(attachment, quickReplies);
        break;

      case 'Day1Part2':
        elements = [
          new Element('12:35 pm - 2:05 pm', 'Lunch', placeholder),
          new Element('2:05 pm - 2:25 pm', 'Lip Sync Battle Performances 3 & 4', placeholder),
          new Element('2:25 pm - 2:40 pm', 'Marketing Science\n\nBrad Smallwood\nVP, Marketing Science', placeholder),
          new Element('2:40 pm - 2:55 pm', 'Building Community\n\nNas Daily', placeholder),
          new Element('2:55 pm - 3:10 pm', 'Marketing\n\nMark D\'Arcy\nVP, GBM & CCO', placeholder),
          new Element('3:10 pm - 3:25 pm', 'SBG\n\nRich Rao\nVP, SBG', placeholder)
        ];

        attachment = new Attachment('generic', elements);

        quickReplies = [
          new QuickReply('Back', 'Day1'),
          new QuickReply('Home', 'Home'),
        ];

        message = new Message(attachment, quickReplies);
        break;

      case 'Day1Part3':
        elements = [
          new Element('3:25 pm - 4:00 pm', 'Break', placeholder),
          new Element('4:00 pm - 4:20 pm', 'Lip Sync Battle Performances 5 & 6', placeholder),
          new Element('4:20 pm - 4:35 pm', 'People, Mission, Community\n\nLizzie Runham\nDirector, Human Resources APAC', placeholder),
          new Element('4:35 pm - 4:50 pm', 'Policy\n\nSimon Milner\nVP, Public Policy APAC', placeholder),
          new Element('4:50 pm - 5:05 pm', 'Social Good/Goodwill\n\nJohn Cantarella\nVP, Social Good & Community Partnerships', placeholder),
          new Element('5:05 pm - 5:20 pm', 'Room to Read\n\nJohn Wood', placeholder),
          new Element('5:20 pm - 5:50 pm', 'TBC\n\nCarolyn Everson\nVP, Global Marketing Solutions', placeholder),
          new Element('5:50 pm - 6:10 pm', 'Dan Neary\n\nVP, GBG APAC', placeholder)
        ];

        attachment = new Attachment('generic', elements);

        quickReplies = [
          new QuickReply('Back', 'Day1'),
          new QuickReply('Home', 'Home'),
        ];

        message = new Message(attachment, quickReplies);
        break;

      default:
        attachment = 'Sorry, I don\'t understand what you\'re saying :(';

        quickReplies = [
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        break;
    }

    return message;
  }

  return {
    responses
  };
})();