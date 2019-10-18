module.exports = (function() {
  function responses(accessToken, payload, recipientId, userId, eventId) {
    const
      placeholder = 'https://via.placeholder.com/1910x1000',
      menus = require('../constants/menus'),
      queries = require('../../db/queries'),
      { reply } = require('../reply-handler'),
      Attachment = require('../../utilities/models/Attachment'),
      Button = require('../../utilities/models/Button'),
      Element = require('../../utilities/models/Element'),
      Message = require('../../utilities/models/Message'),
      QuickReply = require('../../utilities/models/QuickReply');

    let attachment, buttons, elements, message, quickReplies, payloadRegion, isVotingActive;

    queries.views.getView(payload, eventId)
      .then((result) => {
        const row = result.rows[0];

        if (!row) {
          return queries.views.insertView(payload, eventId);
        }

        const { id } = row;

        return { rows: [{ id }] };
      })
      .then((result) => {
        const { id } = result.rows[0];

        return queries.views.increaseView(id);
      })
      .then(() => {
        // for update to fire
        return;
      })
      .catch((error) => {
        return queries.errors.logError(error.name, error.message, error.stack);
      });

    switch (payload) {
      case 'Home':
        buttons = [
          new Button('Event Details', 'postback', 'Event Details'),
          new Button('Lip Sync Battle', 'postback', 'Lip Sync Battle'),
          new Button('Donate: Room to Read', 'web_url', 'https://give.roomtoread.org/campaign/gms-one-apac-2019/c249590')
        ];

        elements = [
          new Element('One APAC GMS Conference 2019', 'What would you like to know more about?', placeholder, buttons)
        ];

        attachment = new Attachment('generic', elements);

        message = new Message(attachment);
        return reply(accessToken, recipientId, message);

      case 'Event Details':
        buttons = [
          new Button('Agenda & Maps', 'postback', 'Agenda & Maps'),
          new Button('Transport & Contacts', 'postback', 'Transport & Contacts')
        ];

        elements = [
          new Element('Event Details', null, placeholder, buttons)
        ];

        attachment = new Attachment('generic', elements);

        quickReplies = [
          new QuickReply('Back', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        return reply(accessToken, recipientId, message);

      case 'Agenda & Maps':
        buttons = [
          new Button('Agenda', 'postback', 'Agenda'),
          new Button('Experience Showcase', 'postback', 'Experience Showcase'),
          new Button('Venue Maps', 'postback', 'Venue Maps')
        ];

        elements = [
          new Element('Agenda & Maps', 'Agenda, venue maps, and other experiences', placeholder, buttons)
        ];

        attachment = new Attachment('generic', elements);

        quickReplies = [
          new QuickReply('Back', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        return reply(accessToken, recipientId, message);

      case 'Agenda':
        buttons = [
          new Button('Day 1', 'postback', 'Agenda Day 1'),
          new Button('Day 2', 'postback', 'Agenda Day 2'),
          new Button('Dinner Events', 'postback', 'Dinner Events')
        ];

        elements = [
          new Element('Agenda', 'Agenda, sessions, and speakers', placeholder, buttons)
        ];

        attachment = new Attachment('generic', elements);

        quickReplies = [
          new QuickReply('Back', 'Agenda & Maps'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        return reply(accessToken, recipientId, message);

      case 'Agenda Day 1':
        buttons = [
          new Button('9:00 am - 12:20 pm', 'postback', 'Agenda Day 1 Part 1'),
          new Button('12:20 pm - 3:10 pm', 'postback', 'Agenda Day 1 Part 2'),
          new Button('3:10 pm - 6:00 pm', 'postback', 'Agenda Day 1 Part 3')
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
        return reply(accessToken, recipientId, message);

      case 'Agenda Day 1 Part 1':
        elements = [
          new Element('9:00 am - 10:00 am', 'APAC Vision & Priorities\n\nDan Neary\nVP, GBG APAC', placeholder),
          new Element('10:00 am - 10:25 am', 'Product Marketing\n\nTy Ahmad-Taylor\nBenji Shomair\nVP, Product Marketing', placeholder),
          new Element('10:25 am - 10:45 am', 'Instagram\n\nAdam Mosseri\nHead of Instagram', placeholder),
          new Element('10:45 am - 11:15 am', 'Break', placeholder),
          new Element('11:15 am - 11:35 am', 'Lip Sync Battle Performances 1 & 2', placeholder),
          new Element('11:35 am - 11:50 am', 'Messaging: Messenger\n\nStan Chudnovsky\nVP, Messenger', placeholder),
          new Element('11:50 am - 12:05 pm', 'Partnerships\n\nChristine Warner\nDirector, Global Partnerships Management', placeholder),
          new Element('12:05 pm - 12:20 pm', 'Creative Shop\n\nRapha Vasconcellos\nVP, The Creative Shop', placeholder)
        ];

        attachment = new Attachment('generic', elements);

        quickReplies = [
          new QuickReply('Back', 'Agenda Day 1'),
          new QuickReply('Home', 'Home'),
        ];

        message = new Message(attachment, quickReplies);
        return reply(accessToken, recipientId, message);

      case 'Agenda Day 1 Part 2':
        elements = [
          new Element('12:20 pm - 1:50 pm', 'Lunch', placeholder),
          new Element('1:50 pm - 2:10 pm', 'Lip Sync Battle Performances 3 & 4', placeholder),
          new Element('2:10 pm - 2:25 pm', 'Marketing Science\n\nBrad Smallwood\nVP, Marketing Science', placeholder),
          new Element('2:25 pm - 2:40 pm', 'Building Community\n\nNas Daily', placeholder),
          new Element('2:40 pm - 2:55 pm', 'Marketing\n\nMark D\'Arcy\nVP, GBM & CCO', placeholder),
          new Element('2:55 pm - 3:10 pm', 'SBG\n\nRich Rao\nVP, SBG', placeholder)
        ];

        attachment = new Attachment('generic', elements);

        quickReplies = [
          new QuickReply('Back', 'Agenda Day 1'),
          new QuickReply('Home', 'Home'),
        ];

        message = new Message(attachment, quickReplies);
        return reply(accessToken, recipientId, message);

      case 'Agenda Day 1 Part 3':
        elements = [
          new Element('3:10 pm - 3:40 pm', 'Break', placeholder),
          new Element('3:40 pm - 4:00 pm', 'Lip Sync Battle Performances 5 & 6', placeholder),
          new Element('4:00 pm - 4:15 pm', 'People, Mission, Community\n\nLizzie Runham\nDirector, Human Resources APAC', placeholder),
          new Element('4:15 pm - 4:30 pm', 'Policy\n\nSimon Milner\nVP, Public Policy APAC', placeholder),
          new Element('4:30 pm - 4:45 pm', 'Social Good\n\nJohn Cantarella\nVP, Social Good & Community Partnerships', placeholder),
          new Element('4:45 pm - 5:05 pm', 'Room to Read\n\nJohn Wood', placeholder),
          new Element('5:05 pm - 5:35 pm', 'People & Culture\n\nCarolyn Everson\nVP, Global Marketing Solutions', placeholder),
          new Element('5:35 pm - 6:00 pm', 'Closing\n\nDan Neary\nVP, GBG APAC', placeholder)
        ];

        attachment = new Attachment('generic', elements);

        quickReplies = [
          new QuickReply('Back', 'Agenda Day 1'),
          new QuickReply('Home', 'Home'),
        ];

        message = new Message(attachment, quickReplies);
        return reply(accessToken, recipientId, message);

      case 'Agenda Day 2':
        buttons = [
          new Button('Full Day Agenda', 'postback', 'Agenda Day 2 Full Day Agenda'),
          new Button('Breakouts', 'postback', 'Agenda Day 2 Breakouts')
        ];

        elements = [
          new Element('November 14, 2019', 'Main Session & Breakout Sessions', placeholder, buttons)
        ];

        attachment = new Attachment('generic', elements);

        quickReplies = [
          new QuickReply('Back', 'Agenda'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        return reply(accessToken, recipientId, message);

      case 'Agenda Day 2 Full Day Agenda':
        buttons = [
          new Button('9:00 am - 12:30 pm', 'postback', 'Agenda Day 2 Full Day Agenda Part 1'),
          new Button('12:30 pm - 6:00 pm', 'postback', 'Agenda Day 2 Full Day Agenda Part 2'),
        ];

        elements = [
          new Element('November 14, 2019', null, placeholder, buttons)
        ];

        attachment = new Attachment('generic', elements);

        quickReplies = [
          new QuickReply('Back', 'Agenda Day 2'),
          new QuickReply('Home', 'Home'),
        ];

        message = new Message(attachment, quickReplies);
        return reply(accessToken, recipientId, message);

      case 'Agenda Day 2 Full Day Agenda Part 1':
        elements = [
          new Element('9:00 am - 9:20 am', 'Opening & Kick Off\n\nKaren Teo\nVP, Head of APAC GBG Scaled', placeholder),
          new Element('9:20 am - 9:30 am', 'Verticalization\n\nTawana Murphy Burnett\nDirector, APAC', placeholder),
          new Element('9:30 am - 9:45 am', 'Break', placeholder),
          new Element('9:45 am - 10:25 am', 'Breakout Session 1', placeholder),
          new Element('10:25 am - 10:55 am', 'Break', placeholder),
          new Element('10:55 am - 11:35 am', 'Breakout Session 2', placeholder),
          new Element('11:35 am - 11:50 am', 'Break', placeholder),
          new Element('11:50 am - 12:30 pm', 'Breakout Session 3', placeholder)
        ];

        attachment = new Attachment('generic', elements);

        quickReplies = [
          new QuickReply('Back', 'Agenda Day 2 Full Day Agenda'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        return reply(accessToken, recipientId, message);

      case 'Agenda Day 2 Full Day Agenda Part 2':
        elements = [
          new Element('12:30 pm - 1:30 pm', 'Lunch Break', placeholder),
          new Element('1:30 pm - 2:45 pm', 'Training Sessions', placeholder),
          new Element('2:45 pm - 3:15 pm', 'Break', placeholder),
          new Element('3:15 pm - 6:00 pm', 'Vertical/Team Meetings', placeholder)
        ];

        attachment = new Attachment('generic', elements);

        quickReplies = [
          new QuickReply('Back', 'Agenda Day 2 Full Day Agenda'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        return reply(accessToken, recipientId, message);

      case 'Agenda Day 2 Breakouts':
        buttons = [
          new Button('Breakout Sessions', 'postback', 'Agenda Day 2 Breakout Sessions'),
          new Button('Training Sessions', 'postback', 'Agenda Day 2 Training Sessions'),
          new Button('Vertical Meetings', 'postback', 'Agenda Day 2 Vertical Meetings')
        ];

        elements = [
          new Element('Breakouts', null, placeholder, buttons)
        ];

        attachment = new Attachment('generic', elements);

        quickReplies = [
          new QuickReply('Back', 'Agenda Day 2'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        return reply(accessToken, recipientId, message);

      case 'Agenda Day 2 Breakout Sessions':
        buttons = [
          new Button('A - L', 'postback', 'Agenda Day 2 Breakout Sessions A - L'),
          new Button('M - Z', 'postback', 'Agenda Day 2 Breakout Sessions M - Z')
        ];

        elements = [
          new Element('Breakout Sessions', null, placeholder, buttons)
        ];

        attachment = new Attachment('generic', elements);

        quickReplies = [
          new QuickReply('Back', 'Agenda Day 2'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        return reply(accessToken, recipientId, message);

      case 'Agenda Day 2 Breakout Sessions A - L':
        elements = [
          new Element('Breakouts A - L', 'Choose 3 of 11 breakout sessions to attend at:\n9:45 am\n10:55 am\n11:50 am', placeholder),
          new Element('Brand Safety', 'Room 5103', placeholder, [new Button('Details', 'postback', 'Breakout Details Brand Safety')]),
          new Element('Conversational Commerce: Building Business Success on Messaging Foundations', 'Ballroom H', placeholder, [new Button('Details', 'postback', 'Breakout Details Conversational Commerce')]),
          new Element('Driving Campaign Performance Through Liquidity & Optimization', 'Room 5102', placeholder, [new Button('Details', 'postback', 'Breakout Details Liquidity & Optimization')]),
          new Element('The Future of Signals', 'Ballroom J-P (Main Plenary)', placeholder, [new Button('Details', 'postback', 'Breakout Details Future of Signals')]),
          new Element('#GoGlobal: Winning Across Borders', 'Room 5001', placeholder, [new Button('Details', 'postback', 'Breakout Details Go Global')]),
          new Element('Influencer Marketing: Using Instagram Branded Content Solutions', 'Ballroom A', placeholder, [new Button('Details', 'postback', 'Breakout Details Influencer Marketing')])
        ];

        attachment = new Attachment('generic', elements);

        quickReplies = [
          new QuickReply('Back', 'Agenda Day 2 Breakout Sessions'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        return reply(accessToken, recipientId, message);

      case 'Breakout Details Brand Safety':
        attachment = 'Review the latest brand safety framework, our approach to reporting & enforcing community standards and evaluate new advertiser controls built for contextual placements.\n\n#Blocklist #Inventory Filters #Dynamic Content Sets #Publisher Whitelisting';

        quickReplies = [
          new QuickReply('Back', 'Agenda Day 2 Breakout Sessions A - L'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        return reply(accessToken, recipientId, message);

      case 'Breakout Details Conversational Commerce':
        attachment = 'Learn about the many ways that commerce is taking place across the family of apps and how clients can leverage the growing opportunity.\n\n#Marketplace #IG Shopping #Facebook Pay #Facebook Pages #Messenger #WhatsApp';

        quickReplies = [
          new QuickReply('Back', 'Agenda Day 2 Breakout Sessions A - L'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        return reply(accessToken, recipientId, message);

      case 'Breakout Details Liquidity & Optimization':
        attachment = 'An in-depth, tactical session going beyond placement and audience liquidity to explore tools, including placement asset customization and campaign budget optimization to increase performance at a lower cost.\n\n#Placement Liquidity #Audience Liquidity #Campaign Budget Optimization #Placement Asset Customization #Dynamic Creative Optimization';

        quickReplies = [
          new QuickReply('Back', 'Agenda Day 2 Breakout Sessions A - L'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        return reply(accessToken, recipientId, message);

      case 'Breakout Details Future of Signals':
        attachment = 'Signals are fundamental to our targeting and measurement capabilities. Learn how the changes in the ecosystem impact your clients and our product developments in the areas of signal resiliency and privacy.\n\n#Signals (Pixel, SDK, Offline Conversions) #Advanced Matching #Server-side Events';

        quickReplies = [
          new QuickReply('Back', 'Agenda Day 2 Breakout Sessions A - L'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        return reply(accessToken, recipientId, message);

      case 'Breakout Details Go Global':
        attachment = '52% of APAC cross-channel revenue goes across borders. Get the latest updates on our cross border products, tools and insights; and programs to remove operational barriers for market diversification.\n\n#Auto Translate for Dynamic Language Optimization (DLO) #Localized Catalog #Multi-Language and Country Dynamic Ads (MMDA)';

        quickReplies = [
          new QuickReply('Back', 'Agenda Day 2 Breakout Sessions A - L'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        return reply(accessToken, recipientId, message);

      case 'Breakout Details Influencer Marketing':
        attachment = 'Instagram is at the epicenter of the creator ecosystem. We will review the influencer landscape, client best practices, and deep dive into our branded content solutions.\n\n#Branded Content Ads';

        quickReplies = [
          new QuickReply('Back', 'Agenda Day 2 Breakout Sessions A - L'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        return reply(accessToken, recipientId, message);

      case 'Agenda Day 2 Breakout Sessions M - Z':
        elements = [
          new Element('Breakouts M - Z', 'Choose 3 of 11 breakout sessions to attend at:\n9:45 am\n10:55 am\n11:50 am', placeholder),
          new Element('In-Stream & Watch: Building for and Thriving in the Facebook Video Ecosystem', 'Room 5201', placeholder, [new Button('Details', 'postback', 'Breakout Details Facebook Video')]),
          new Element('The Next Chapter for Stories Creative', 'Ballroom I', placeholder, [new Button('Details', 'postback', 'Breakout Details Stories Creative')]),
          new Element('O2O (Online to Offline): Building a 0→1 Loyalty Product for APAC', 'Room 5202', placeholder, [new Button('Details', 'postback', 'Breakout Details O2O')]),
          new Element('SBG: Growing Businesses Through the Funnel', 'Room 5002', placeholder, [new Button('Details', 'postback', 'Breakout Details SBG')]),
          new Element('Short Form Video Ads: Facebook Thumbstoppers', 'Room 5101', placeholder, [new Button('Details', 'postback', 'Breakout Details Thumbstoppers')])
        ];

        attachment = new Attachment('generic', elements);

        quickReplies = [
          new QuickReply('Back', 'Agenda Day 2 Breakout Sessions'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        return reply(accessToken, recipientId, message);

      case 'Breakout Details Facebook Video':
        attachment = 'Learn how we are building a video ecosystem comprising Users (role of WATCH in our ecosystem), Media Companies (getting premium video content) & Advertisers (new monetization products like Reserve).\n\n#Watch #In-stream #Reserve #Contextual Targeting';

        quickReplies = [
          new QuickReply('Back', 'Agenda Day 2 Breakout Sessions M - Z'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        return reply(accessToken, recipientId, message);

      case 'Breakout Details Stories Creative':
        attachment = 'A dual session focused on the latest ad products for Stories creative including tools like Stories Templates, Editing Toolkits and stickers, paired with a fun session on creative best practices.\n\n#IG Stories #Stories Templates #Video Cropping and Editing #Stickers & Templates';

        quickReplies = [
          new QuickReply('Back', 'Agenda Day 2 Breakout Sessions M - Z'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        return reply(accessToken, recipientId, message);

      case 'Breakout Details O2O':
        attachment = 'Come learn about our journey launching an APAC-centric, QR-code powered loyalty product and forging partnerships with Point of Sale (POS) providers to help businesses bridge the O2O divide.\n\n#Loyalty #QR code #Offline Signals #Retargeting';

        quickReplies = [
          new QuickReply('Back', 'Agenda Day 2 Breakout Sessions M - Z'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        return reply(accessToken, recipientId, message);

      case 'Breakout Details SBG':
        attachment = 'SBG: Growing businesses through the funnel';

        quickReplies = [
          new QuickReply('Back', 'Agenda Day 2 Breakout Sessions M - Z'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        return reply(accessToken, recipientId, message);

      case 'Breakout Details Thumbstoppers':
        attachment = 'How strong XFN partnership between GBM, CAP & FCS can unlock short-form video adoption by inspiring, educating and empowering creative agencies to believe \'Powerful storytelling is possible in <10 secs\'.\n\n#Short Form Video Ads';

        quickReplies = [
          new QuickReply('Back', 'Agenda Day 2 Breakout Sessions M - Z'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        return reply(accessToken, recipientId, message);

      case 'Agenda Day 2 Training Sessions':
        elements = [
          new Element('Training Sessions', 'Choose from one Training Session from 1:15 pm - 2:45 pm', placeholder),
          new Element('Always Do the Right Thing', 'Led by Legal Learning Team / HRBPs\nRoom 5201', placeholder, [new Button('Details', 'postback', 'Training Details Do the Right Thing')]),
          new Element('Handling Hard Topics with External Audiences (V2)', 'Led by GMS Learning & PR\nBallroom J-P (Main Plenary)', placeholder, [new Button('Details', 'postback', 'Training Details Handling Hard Topics')]),
          new Element('Living Your Values, 24/7', 'Led by L&D / HRBPs\nBallroom A', placeholder, [new Button('Details', 'postback', 'Training Details Living Your Values')]),
          new Element('Fighting Fit & Mentally Strong', 'Led by Benefits APAC\nBallroom I', placeholder, [new Button('Details', 'postback', 'Training Details Fit & Mentally Strong')]),
          new Element('XFN Collaboration through Coaching', 'Led by L&D\nBallroom H', placeholder, [new Button('Details', 'postback', 'Training Details XFN Collaboration')])
        ];

        attachment = new Attachment('generic', elements);

        quickReplies = [
          new QuickReply('Back', 'Agenda Day 2'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        return reply(accessToken, recipientId, message);

      case 'Training Details Do the Right Thing':
        attachment = 'Interactive session on handling difficult situations in the workplace. The outcome is to build your confidence and collective capability in this area as leaders at Facebook.';

        quickReplies = [
          new QuickReply('Back', 'Agenda Day 2 Training Sessions'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        return reply(accessToken, recipientId, message);

      case 'Training Details Handling Hard Topics':
        attachment = 'Learn the skills needed to engage in difficult conversations with external audiences from one of the most influential executive media trainers, Lee Woodruff.';

        quickReplies = [
          new QuickReply('Back', 'Agenda Day 2 Training Sessions'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        return reply(accessToken, recipientId, message);

      case 'Training Details Living Your Values':
        attachment = 'Aspire to always be your own culture champion? Discuss/reflect on where you could reinvest energy to optimize your personal values individually and in our community, in order to be fully authentic and engaged!';

        quickReplies = [
          new QuickReply('Back', 'Agenda Day 2 Training Sessions'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        return reply(accessToken, recipientId, message);

      case 'Training Details Fit & Mentally Strong':
        attachment = 'Get great tips to enhance our resilience, stay true to ourselves and thrive in an environment where we are expected to move fast and create impact!';

        quickReplies = [
          new QuickReply('Back', 'Agenda Day 2 Training Sessions'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        return reply(accessToken, recipientId, message);

      case 'Training Details XFN Collaboration':
        attachment = 'Coaching skills enables us to realize our potential in a variety of contexts. In this interactive workshop you’ll learn, practice and apply key coaching principles to better support and align with your XFN colleagues.';

        quickReplies = [
          new QuickReply('Back', 'Agenda Day 2 Training Sessions'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        return reply(accessToken, recipientId, message);

      case 'Agenda Day 2 Vertical Meetings':
        elements = [
          new Element('eComm', 'Ballroom A', placeholder),
          new Element('Tech/Telco', 'Room 5001', placeholder),
          new Element('CPG', 'Ballroom H', placeholder),
          new Element('Retail', 'Room 5101', placeholder),
          new Element('FinServ', 'Room 5202', placeholder),
          new Element('Travel', 'Room 5102', placeholder),
          new Element('Auto', 'Room 5103', placeholder),
          new Element('Ent & Media', 'Room 5201', placeholder),
          new Element('Agency (Team Only)', 'Restricted to Agency team only', placeholder),
          new Element('Gaming (Team Only)', 'Restricted to Gaming team only', placeholder)
        ];

        attachment = new Attachment('generic', elements);

        quickReplies = [
          new QuickReply('Back', 'Agenda Day 2'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        return reply(accessToken, recipientId, message);

      case 'Dinner Events':
        buttons = [
          new Button('Welcome Dinner', 'postback', 'Dinner Events Welcome Dinner'),
          new Button('Closing Party', 'postback', 'Dinner Events Closing Party')
        ];

        elements = [
          new Element('Dinner Events', 'Welcome and Closing Dinner Info', placeholder, buttons)
        ];

        attachment = new Attachment('generic', elements);

        quickReplies = [
          new QuickReply('Back', 'Agenda'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        return reply(accessToken, recipientId, message);

      case 'Dinner Events Welcome Dinner':
        elements = [
          new Element('Welcome Dinner', 'Date: Nov 13, Wed\nTime: 6:30 pm - 10:00 pm\nVenue: ArtScience Museum', placeholder, [new Button('Getting There', 'postback', 'Welcome Dinner Getting There')]),
          new Element('DPole', 'Dance with Dpole on B1', placeholder, [new Button('Discover More', 'web_url', 'https://tinyurl.com/dpole-arts')]),
          new Element('Miss Lou Duo', 'R&B and jazz soul with Miss Lou on L2', placeholder, [new Button('Discover More', 'web_url', 'https://tinyurl.com/hellomisslou')]),
          new Element('NationOne', 'Rock & Roll with NationOne on L3', placeholder, [new Button('Discover More', 'web_url', 'https://tinyurl.com/thebandnationone')])
        ];

        attachment = new Attachment('generic', elements);

        quickReplies = [
          new QuickReply('Back', 'Dinner Events'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        return reply(accessToken, recipientId, message);

      case 'Welcome Dinner Getting There':
        attachment = 'ArtScience museum is a 5 minute walk from Marina Bay Sands';

        quickReplies = [
          new QuickReply('Back', 'Dinner Events Welcome Dinner'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        return reply(accessToken, recipientId, message);

      case 'Dinner Events Closing Party':
        attachment = 'Closing Party\n\nDate: Nov 14, Thurs\nTime: 8:00 pm - 1:00 am\nVenue: Marquee\n\nGetting There:\nMarquee is located at B1-67, Galleria Level, The Shoppes at Marina Bay Sands. It is a 5 minute walk from the hotel towers.';

        quickReplies = [
          new QuickReply('Back', 'Dinner Events'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        return reply(accessToken, recipientId, message);

      case 'Experience Showcase':
        buttons = [
          new Button('Business', 'postback', 'Experience Showcase Business'),
          new Button('Community', 'postback', 'Experience Showcase Community'),
          new Button('Hub & Ecosystem', 'postback', 'Experience Showcase Hub & Ecosystem')
        ];

        elements = [
          new Element('Experience Showcase', 'Engage with activations featuring Facebook services, orgs, and partners', placeholder, buttons)
        ];

        attachment = new Attachment('generic', elements);

        quickReplies = [
          new QuickReply('Back', 'Agenda & Maps'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        return reply(accessToken, recipientId, message);

      case 'Experience Showcase Business':
        elements = [
          new Element('Small Business Group', null, placeholder),
          new Element('Product Service and Operations', null, placeholder),
          new Element('Instagram Business Marketing', null, placeholder),
          new Element('Business Integrity', null, placeholder)
        ];

        attachment = new Attachment('generic', elements);

        quickReplies = [
          new QuickReply('Back', 'Experience Showcase'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        return reply(accessToken, recipientId, message);

      case 'Experience Showcase Community':
        elements = [
          new Element('Pride@ / Women@', null, placeholder),
          new Element('Analog Lab', null, placeholder),
          new Element('Fuel', null, placeholder),
          new Element('People@', null, placeholder),
          new Element('Room to Read', null, placeholder)
        ];

        attachment = new Attachment('generic', elements);

        quickReplies = [
          new QuickReply('Back', 'Experience Showcase'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        return reply(accessToken, recipientId, message);

      case 'Experience Showcase Hub & Ecosystem':
        elements = [
          new Element('Swag Store', null, placeholder),
          new Element('Sweet Shop', null, placeholder),
          new Element('Help Desk', null, placeholder),
          new Element('Developer Partnerships', null, placeholder),
          new Element('Entertainment Partnerships', null, placeholder),
          new Element('Mobile Partnerships', null, placeholder),
          new Element('Nas Daily', null, placeholder)
        ];

        attachment = new Attachment('generic', elements);

        quickReplies = [
          new QuickReply('Back', 'Experience Showcase'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        return reply(accessToken, recipientId, message);

      case 'Venue Maps':
        buttons = [
          new Button('Breakout Rooms', 'postback', 'Venue Maps Breakout'),
          new Button('Experience Showcase', 'web_url', 'https://kimkijung-one-apac.s3-ap-southeast-1.amazonaws.com/breakout+sessions+map.jpg')
        ];

        elements = [
          new Element('Venue Maps', null, placeholder, buttons)
        ];

        attachment = new Attachment('generic', elements);

        quickReplies = [
          new QuickReply('Back', 'Agenda & Maps'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        return reply(accessToken, recipientId, message);

      case 'Venue Maps Breakout':
        buttons = [
          new Button('Breakout Sessions', 'web_url', 'https://kimkijung-one-apac.s3-ap-southeast-1.amazonaws.com/breakout+sessions+map.jpg'),
          new Button('Training Sessions', 'web_url', 'https://kimkijung-one-apac.s3-ap-southeast-1.amazonaws.com/breakout+sessions+map.jpg'),
          new Button('Vertical Meetings', 'web_url', 'https://kimkijung-one-apac.s3-ap-southeast-1.amazonaws.com/breakout+sessions+map.jpg')
        ];

        elements = [
          new Element('Breakout Rooms', null, placeholder, buttons)
        ];

        attachment = new Attachment('generic', elements);

        quickReplies = [
          new QuickReply('Back', 'Venue Maps'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        return reply(accessToken, recipientId, message);

      case 'Transport & Contacts':
        buttons = [
          new Button('Transportation', 'postback', 'Transportation'),
          new Button('Key Contacts', 'postback', 'Contacts')
        ];

        elements = [
          new Element('Transport details and contacts', null, placeholder, buttons)
        ];

        attachment = new Attachment('generic', elements);

        quickReplies = [
          new QuickReply('Back', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        return reply(accessToken, recipientId, message);

      case 'Transportation':
        buttons = [
          new Button('Marina Bay Sands', 'postback', 'Transportation Marina Bay Sands'),
          new Button('Marquee', 'postback', 'Transportation Marquee')
        ];

        elements = [
          new Element('Transportation', null, placeholder, buttons)
        ];

        attachment = new Attachment('generic', elements);

        quickReplies = [
          new QuickReply('Back', 'Transport & Contacts'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        return reply(accessToken, recipientId, message);

      case 'Transportation Marina Bay Sands':
        attachment = 'MRT:\nMarina Bay Sands is linked directly to Bayfront MRT station (CE1, Exit B, C, D, E) along the Circle Line Extension.\n\nBus:\nThe following bus routes serve Marina Bay Sands Hotel: 97, 106, 133, 502 and 518.\n\nTaxi:\nTo get around, we recommend Grab or calling +65-6552-1111 for a local cab.\nPlease alight at the drop-off point at the Sands Expo & Convention Centre.\n\nIf you are driving, please collect your complimentary parking coupons from the registration counter daily. Please note that parking coupons will be issued on a first-come-first-serve basis. Kindly refer to map below for entrance to the car park of Sands Expo & Convention Centre.'

        quickReplies = [
          new QuickReply('Back', 'Transportation'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        return reply(accessToken, recipientId, message);

      case 'Transportation Marquee':
        attachment = 'Marquee is located at B1-67, Galleria Level, The Shoppes at Marina Bay Sands\nNearest carpark: North (Green zone)';

        quickReplies = [
          new QuickReply('Back', 'Transportation'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        return reply(accessToken, recipientId, message);

      case 'Contacts':
        attachment = '[Emergency Contacts]\nPolice\n999\n\nAmbulance/Fire\n995\n\nISOS APAC\n+65-6338-7800\n\nFB GSOC\n+1-650-384-2000\n\nFB SOC-APAC\n+65-6704-3000\n\nEmail\nsecurity@fb.com\n\n[Facebook Onsite Help]\nHours of Operations\n13 November 2019\n8am-10pm\n\n14 November 2019\n8am-12am\n\n[Hotel Contacts]\nHotel Address\n10 Bayfront Avenue, Singapore 018956\n\nDuty Manager\n+65-6688-8833\n\nConcierge\n+65-6688-6061\n\nLost & Found\n+65-6688-0966';

        quickReplies = [
          new QuickReply('Back', 'Transport & Contacts'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        return reply(accessToken, recipientId, message);

      case 'Lip Sync Battle':
        return queries.controls.getStatus('Lip Sync Battle')
          .then((result) => {
            const { active } = result.rows[0];

            if (!active) {
              attachment = 'Voting for Lip Sync Battle will open after all performances have finished.';
            } else {
              elements = [
                new Element('Lip Sync Battle', 'Vote for the top 2 Lip Sync Battle champions\n*Both votes are equal 1 point each', placeholder),
                new Element('Australia/New Zealand', null, placeholder, [new Button('Vote', 'postback', 'Vote_Australia/New Zealand')]),
                new Element('Greater China', null, placeholder, [new Button('Vote', 'postback', 'Vote_Greater China')]),
                new Element('India', null, placeholder, [new Button('Vote', 'postback', 'Vote_India')]),
                new Element('Japan', null, placeholder, [new Button('Vote', 'postback', 'Vote_Japan')]),
                new Element('Korea', null, placeholder, [new Button('Vote', 'postback', 'Vote_Korea')]),
                new Element('Southeast Asia', null, placeholder, [new Button('Vote', 'postback', 'Vote_Southeast Asia')])
              ];

              attachment = new Attachment('generic', elements);
            }

            quickReplies = [
              new QuickReply('Back', 'Home')
            ];

            message = new Message(attachment, quickReplies);
            return reply(accessToken, recipientId, message);
          })
          .catch((error) => {
            console.log(error);
            return;
          });

      case 'Vote_Australia/New Zealand':
      case 'Vote_Greater China':
      case 'Vote_India':
      case 'Vote_Japan':
      case 'Vote_Korea':
      case 'Vote_Southeast Asia':
        payloadRegion = payload.split('_')[1];

        return queries.controls.getStatus('Lip Sync Battle')
          .then((result) => {
            const { active } = result.rows[0];

            isVotingActive = active;

            return queries.votes.fetchVotesByUser(userId);
          })
          .then((result) => {
            if (!isVotingActive) {
              attachment = 'Voting for Lip Sync Battle is closed at this time.';

              quickReplies = [
                new QuickReply('Back', 'Home')
              ];
            } else {
              const { rows } = result;

              rows.forEach((row) => {
                if (row.region === payloadRegion) {
                  attachment = `You already placed your vote for ${payloadRegion}!`

                  quickReplies = [
                    new QuickReply('Back', 'Lip Sync Battle'),
                    new QuickReply('Home', 'Home')
                  ];
                }
              });

              if (rows.length === 2) {
                attachment = 'You already placed both of your votes!';

                quickReplies = [
                  new QuickReply('Back', 'Lip Sync Battle'),
                  new QuickReply('Home', 'Home')
                ];
              } else {
                attachment = `Your 1st of 2 votes is final. Are you sure you want to vote for ${payloadRegion}?`;

                if (rows.length > 0) {
                  attachment = `Your 2nd of 2 votes is final. Are you sure you want to vote for ${payloadRegion}?`
                }

                quickReplies = [
                  new QuickReply('Confirm', `Confirm_${payloadRegion}`),
                  new QuickReply('Cancel', 'Lip Sync Battle')
                ];
              }
            }

            message = new Message(attachment, quickReplies);
            return reply(accessToken, recipientId, message);
          })
          .catch((error) => {
            console.log(error);
            return;
          });

      case 'Confirm_Australia/New Zealand':
      case 'Confirm_Greater China':
      case 'Confirm_India':
      case 'Confirm_Japan':
      case 'Confirm_Korea':
      case 'Confirm_Southeast Asia':
        payloadRegion = payload.split('_')[1];

        return queries.votes.castVote(payloadRegion, userId)
          .then(() => {

            return queries.votes.fetchVotesByUser(userId);
          })
          .then((result) => {
            const { rows } = result;

            if (rows.length === 1) {
              elements = [
                new Element('Lip Sync Battle', 'Vote for the top 2 Lip Sync Battle champions\n*Both votes are equal 1 point each', placeholder),
                new Element('Australia/New Zealand', null, placeholder, [new Button('Vote', 'postback', 'Vote_Australia/New Zealand')]),
                new Element('Greater China', null, placeholder, [new Button('Vote', 'postback', 'Vote_Greater China')]),
                new Element('India', null, placeholder, [new Button('Vote', 'postback', 'Vote_India')]),
                new Element('Japan', null, placeholder, [new Button('Vote', 'postback', 'Vote_Japan')]),
                new Element('Korea', null, placeholder, [new Button('Vote', 'postback', 'Vote_Korea')]),
                new Element('Southeast Asia', null, placeholder, [new Button('Vote', 'postback', 'Vote_Southeast Asia')])
              ];

              attachment = new Attachment('generic', elements);
            }

            if (rows.length === 2) {
              attachment = 'Thank you for voting! Please wait until the final tally to see who won.';
            }

            quickReplies = [
              new QuickReply('Home', 'Home')
            ];

            message = new Message(attachment, quickReplies);
            return reply(accessToken, recipientId, message);
          })
          .catch((error) => {
            console.log(error);
            return;
          });

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