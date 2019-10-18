module.exports = (function() {
  function responses(accessToken, payload, recipientId, userId, eventId) {
    const
      placeholder = 'https://via.placeholder.com/1910x1000',
      menus = require('../constants/menus'),
      queries = require('../../db/queries'),
      { reply } = require('../reply-handler/'),
      Attachment = require('../../utilities/models/Attachment'),
      Button = require('../../utilities/models/Button'),
      Element = require('../../utilities/models/Element'),
      Message = require('../../utilities/models/Message'),
      QuickReply = require('../../utilities/models/QuickReply');

    let attachment, buttons, elements, message, quickReplies;

    switch (payload) {
      case 'Home':
        buttons = [
          new Button('Agenda & Experiences', 'postback', 'Agenda&Experiences'),
          new Button('Venue Maps', 'postback', 'VenueMaps'),
          new Button('Contacts', 'postback', 'Contacts')
        ];

        elements = [
          new Element('Women@ Leadership Day APAC 2019', 'What would you like to know more about?', placeholder, buttons)
        ];

        attachment = new Attachment('generic', elements);

        message = new Message(attachment);
        return reply(accessToken, recipientId, message);

      case 'Agenda&Experiences':
        buttons = [
          new Button('Agenda', 'postback', 'Agenda'),
          new Button('Experiences', 'postback', 'Experiences')
        ];

        elements = [
          new Element('Agenda & Experiences', null, placeholder, buttons)
        ];

        attachment = new Attachment('generic', elements);

        quickReplies = [
          new QuickReply('Back', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        return reply(accessToken, recipientId, message);

      case 'Agenda':
        buttons = [
          new Button('Agenda at a Glance', 'postback', 'AgendaAtAGlance'),
          new Button('Conference', 'postback', 'Conference'),
          new Button('Social & Networking', 'postback', 'Social&Networking')
        ];

        elements = [
          new Element('Agenda', null, placeholder, buttons)
        ];

        attachment = new Attachment('generic', elements);

        quickReplies = [
          new QuickReply('Back', 'Agenda&Experiences'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        return reply(accessToken, recipientId, message);

      case 'AgendaAtAGlance':
        buttons = [
          new Button('8.00am - 12.00pm', 'web_url', 'https://facebook.com'),
          new Button('12.00pm - 6.00pm', 'web_url', 'https://facebook.com')
        ];

        elements = [
          new Element('Agenda at a Glance', null, placeholder, buttons)
        ];

        attachment = new Attachment('generic', elements);

        quickReplies = [
          new QuickReply('Back', 'Agenda'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        return reply(accessToken, recipientId, message);

      case 'Conference':
        buttons = [
          new Button('Main Sessions', 'postback', 'MainSessions'),
          new Button('Breakout Sessions', 'postback', 'BreakoutSessions')
        ];

        elements = [
          new Element('Conference', null, placeholder, buttons)
        ];

        attachment = new Attachment('generic', elements);

        quickReplies = [
          new QuickReply('Back', 'Agenda'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        return reply(accessToken, recipientId, message);

      case 'MainSessions':
        buttons = [
          new Button('Morning Sessions', 'postback', 'MainSessionsPart1'),
          new Button('Afternoon Sessions', 'postback', 'MainSessionsPart2')
        ];

        elements = [
          new Element('Main Sessions', 'Sessions & speakers', placeholder, buttons)
        ];

        attachment = new Attachment('generic', elements);

        quickReplies = [
          new QuickReply('Back', 'Conference'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        return reply(accessToken, recipientId, message);

      case 'MainSessionsPart1':
        elements = [
          new Element('9.00am - 9.10am', 'Opening', placeholder),
          new Element('9.10am - 9.50am', 'Main Session 1', placeholder),
          new Element('9.50am - 10.20am', 'Main Session 2', placeholder),
          new Element('10.40am - 11.20am', 'Main Session 3', placeholder),
          new Element('11.20am - 12.00pm', 'Main Session 4', placeholder)
        ];

        attachment = new Attachment('generic', elements);

        quickReplies = [
          new QuickReply('Back', 'MainSessions'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        return reply(accessToken, recipientId, message);

      case 'MainSessionsPart2':
        elements = [
          new Element('3.30pm - 4.10pm', 'Main Session 5', placeholder),
          new Element('4.10pm - 4.50pm', 'Main Session 6', placeholder),
          new Element('4.50pm - 5.00pm', 'Main Session 7', placeholder)
        ];

        attachment = new Attachment('generic', elements);

        quickReplies = [
          new QuickReply('Back', 'MainSessions'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        return reply(accessToken, recipientId, message);

      case 'BreakoutSessions':
        elements = [
          new Element('Moms & Work', 'Facilitator 1, Room 1', placeholder, [
            new Button('View Map', 'web_url', 'https://kimkijung-one-apac.s3-ap-southeast-1.amazonaws.com/learning+map.jpg'),
            new Button('Details', 'postback', 'BreakoutSessionsDetails1')
          ]),
          new Element('Women Supporting Women', 'Facilitator 2, Room 2', placeholder, [
            new Button('View Map', 'web_url', 'https://kimkijung-one-apac.s3-ap-southeast-1.amazonaws.com/learning+map.jpg'),
            new Button('Details', 'postback', 'BreakoutSessionsDetails2')
          ]),
          new Element('Building Empathy', 'Facilitator 3, Room 3', placeholder, [
            new Button('View Map', 'web_url', 'https://kimkijung-one-apac.s3-ap-southeast-1.amazonaws.com/learning+map.jpg'),
            new Button('Details', 'postback', 'BreakoutSessionsDetails3')
          ]),
          new Element('50 Ways To Fight Bias', 'Facilitator 4, Room 4', placeholder, [
            new Button('View Map', 'web_url', 'https://kimkijung-one-apac.s3-ap-southeast-1.amazonaws.com/learning+map.jpg'),
            new Button('Details', 'postback', 'BreakoutSessionsDetails4')
          ]),
          new Element('Career Breakthrough: Build Your Personal Branding', 'Facilitator 5, Room 5', placeholder, [
            new Button('View Map', 'web_url', 'https://kimkijung-one-apac.s3-ap-southeast-1.amazonaws.com/learning+map.jpg'),
            new Button('Details', 'postback', 'BreakoutSessionsDetails5')
          ]),
          new Element('Career Breakthrough: Diversifying your Career', 'Facilitator 6, Room 6', placeholder, [
            new Button('View Map', 'web_url', 'https://kimkijung-one-apac.s3-ap-southeast-1.amazonaws.com/learning+map.jpg'),
            new Button('Details', 'postback', 'BreakoutSessionsDetails6')
          ]),
          new Element('Career Breakthrough: Leadership', 'Facilitator 7, Room 7', placeholder, [
            new Button('View Map', 'web_url', 'https://kimkijung-one-apac.s3-ap-southeast-1.amazonaws.com/learning+map.jpg'),
            new Button('Details', 'postback', 'BreakoutSessionsDetails8')
          ])
        ];

        attachment = new Attachment('generic', elements);

        quickReplies = [
          new QuickReply('Back', 'Conference'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        return reply(accessToken, recipientId, message);

      case 'BreakoutSessionsDetails1':
      case 'BreakoutSessionsDetails2':
      case 'BreakoutSessionsDetails3':
      case 'BreakoutSessionsDetails4':
      case 'BreakoutSessionsDetails5':
      case 'BreakoutSessionsDetails6':
      case 'BreakoutSessionsDetails7':
        attachment = 'Details on specific sessions';

        quickReplies = [
          new QuickReply('Back', 'BreakoutSessions'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        return reply(accessToken, recipientId, message);

      case 'Social&Networking':
        elements = [
          new Element('Breakfast & Belong Exhibition', 'Foyer', placeholder),
          new Element('Lunch', 'Lunch Room', placeholder),
          new Element('Happy Hour & Bazaar', 'Foyer', placeholder)
        ];

        attachment = new Attachment('generic', elements);

        quickReplies = [
          new QuickReply('Back', 'Agenda'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        return reply(accessToken, recipientId, message);

      case 'Experiences':
        elements = [
          new Element('Belong Exhibition', 'Exhibition by our women community that tells each of their story about belonging', placeholder),
          new Element('Art Installation', 'A special art installation by 8eyedspud, made for WLD APAC', placeholder, [new Button('Full Details', 'web_url', 'https://facebook.com')]),
          new Element('Analog Lab Pop-Up', 'Create your own silk screen poster or block post card', placeholder, [new Button('Full Details', 'web_url', 'https://facebook.com')]),
          new Element('Life@ Pop-Up', 'Learn more about how Facebook is supporting women', placeholder, [new Button('Full Details', 'web_url', 'https://facebook.com')]),
          new Element('The Hub', null, placeholder),
          new Element('Small Businesses Bazaar', 'Visit and support 6 small businesses from across APAC', placeholder, [new Button('Full Details', 'web_url', 'https://facebook.com')])
        ];

        attachment = new Attachment('generic', elements);

        quickReplies = [
          new QuickReply('Back', 'Agenda&Experiences'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        return reply(accessToken, recipientId, message);

      case 'VenueMaps':
        buttons = [
          new Button('Event Floor', 'web_url', 'https://kimkijung-one-apac.s3-ap-southeast-1.amazonaws.com/learning+map.jpg'),
          new Button('Breakout Rooms', 'web_url', 'https://kimkijung-one-apac.s3-ap-southeast-1.amazonaws.com/learning+map.jpg'),
          new Button('Facilities', 'postback', 'Facilities')
        ];

        elements = [
          new Element('Venue Maps', null, placeholder, buttons)
        ];

        attachment = new Attachment('generic', elements);

        quickReplies = [
          new QuickReply('Back', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        return reply(accessToken, recipientId, message);

      case 'Facilities':
        elements = [
          new Element('Mother\'s Room', 'Strictly for nursing mothers only', placeholder, [new Button('See Full Image', 'web_url', 'https://kimkijung-one-apac.s3-ap-southeast-1.amazonaws.com/learning+map.jpg')]),
          new Element('Interfaith Room', null, placeholder, [new Button('See Full Image', 'web_url', 'https://kimkijung-one-apac.s3-ap-southeast-1.amazonaws.com/learning+map.jpg')]),
          new Element('Quiet Room', 'Shared space to take a few minutes away from the event', placeholder, [new Button('See Full Image', 'web_url', 'https://kimkijung-one-apac.s3-ap-southeast-1.amazonaws.com/learning+map.jpg')]),
          new Element('Speakers Room', 'Strictly for speakers only', placeholder, [new Button('See Full Image', 'web_url', 'https://kimkijung-one-apac.s3-ap-southeast-1.amazonaws.com/learning+map.jpg')]),
          new Element('IT Helpdesk', null, placeholder, [new Button('See Full Image', 'web_url', 'https://kimkijung-one-apac.s3-ap-southeast-1.amazonaws.com/learning+map.jpg')]),
          new Element('First Aid', null, placeholder, [new Button('See Full Image', 'web_url', 'https://kimkijung-one-apac.s3-ap-southeast-1.amazonaws.com/learning+map.jpg')])
        ];

        attachment = new Attachment('generic', elements);

        quickReplies = [
          new QuickReply('Back', 'Experiences&Facilities'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        return reply(accessToken, recipientId, message);

      case 'Contacts':
        attachment = '[Emergency Contacts]\nPolice\n999\n\nAmbulance/Fire\n995\n\nISOS APAC\n+65-6338-7800\n\nFB GSOC\n+1-650-384-2000\n\nFB SOC-APAC\n+65-6704-3000\n\nEmail\nsecurity@fb.com\n\n[Facebook Onsite Help]\nHours of Operations\n12 November 2019\n8am-7pm\n\n[Hotel Contacts]\nHotel Address\n10 Bayfront Avenue, Singapore 018956\n\nDuty Manager\n+65-6688-8833\n\nConcierge\n+65-6688-6061\n\nLost & Found\n+65-6688-0966';

        quickReplies = [
          new QuickReply('Back', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        return reply(accessToken, recipientId, message);

      default:
        attachment = 'Sorry, I don\'t understand what you\'re saying :(';

        quickReplies = [
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        return reply(accessToken, recipientId, message);
    }
  }

  return {
    responses
  };
})();