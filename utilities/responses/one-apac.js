module.exports = (function() {
  function responses(payload, userId) {
    const
      placeholder = 'https://via.placeholder.com/1910x1000',
      queries = require('../../db/queries'),
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
          new Button('Dinner Events', 'postback', 'DinnerEvents')
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
          new Element('12:05 pm - 12:20 pm', 'Partners and Technologies\n\nChristine Warner\nDirector, Global Partnerships Mgmt', placeholder),
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

      case 'Day2':
        buttons = [
          new Button('Full Day Agenda', 'postback', 'Day2FullDayAgenda'),
          new Button('Breakout Sessions', 'postback', 'Day2BreakoutSessions'),
          new Button('Training Sessions', 'postback', 'Day2TrainingSessions')
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
        break;

      case 'Day2FullDayAgenda':
        buttons = [
          new Button('9:00 am - 12:00 pm', 'postback', 'Day2FullDayAgendaPart1'),
          new Button('12:00 pm - 6:00 pm', 'postback', 'Day2FullDayAgendaPart2'),
        ];

        elements = [
          new Element('November 14, 2019', null, placeholder, buttons)
        ];

        attachment = new Attachment('generic', elements);

        quickReplies = [
          new QuickReply('Back', 'Day2'),
          new QuickReply('Home', 'Home'),
        ];

        message = new Message(attachment, quickReplies);
        break;

      case 'Day2FullDayAgendaPart1':
        elements = [
          new Element('9:00 am - 9:30 am', 'Opening & Kick Off\n\nKaren Teo\nVP, Head of APAC GBG Scaled', placeholder),
          new Element('9:30 am - 9:45 am', 'Break', placeholder),
          new Element('9:45 am - 10:15 am', 'Breakout Session 1', placeholder),
          new Element('10:15 am - 10:45 am', 'Break', placeholder),
          new Element('10:45 am - 11:15 am', 'Breakout Session 2', placeholder),
          new Element('11:15 am - 11:30 am', 'Break', placeholder),
          new Element('11:30 am - 12:00 pm', 'Breakout Session 3', placeholder)
        ];

        attachment = new Attachment('generic', elements);

        quickReplies = [
          new QuickReply('Back', 'Day2FullDayAgenda'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        break;

      case 'Day2FullDayAgendaPart2':
        elements = [
          new Element('12:00 pm - 1:15 pm', 'Lunch Break', placeholder),
          new Element('1:15 pm - 2:45 pm', 'Training Sessions', placeholder),
          new Element('2:45 pm - 3:15 pm', 'Break', placeholder),
          new Element('3:15 pm - 6:00 pm', 'Vertical/Team Meetings', placeholder)
        ];

        attachment = new Attachment('generic', elements);

        quickReplies = [
          new QuickReply('Back', 'Day2FullDayAgenda'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        break;

      case 'Day2BreakoutSessions':
        buttons = [
          new Button('A - L', 'postback', 'Day2BreakoutSessionsPart1'),
          new Button('M - Z', 'postback', 'Day2BreakoutSessionsPart1')
        ];

        elements = [
          new Element('Breakout Sessions', null, placeholder, buttons)
        ];

        attachment = new Attachment('generic', elements);

        quickReplies = [
          new QuickReply('Back', 'Day2'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        break;

      case 'Day2BreakoutSessionsPart1':
        elements = [
          new Element('Breakouts A - L', 'Choose 3 of 11 breakout sessions to attend at:\n9:45 am\n10:45 am\n11:30 am', placeholder),
          new Element('Brand Safety', null, placeholder, [new Button('Details', 'postback', 'Day2BreakoutSessionsPart1Details1')]),
          new Element('Conversational Commerce: Building Business Success on Messaging Foundations', null, placeholder, [new Button('Details', 'postback', 'Day2BreakoutSessionsPart1Details2')]),
          new Element('Driving Campaign Performance Through Liquidity & Optimization', null, placeholder, [new Button('Details', 'postback', 'Day2BreakoutSessionsPart1Details3')]),
          new Element('The Future of Signals', null, placeholder, [new Button('Details', 'postback', 'Day2BreakoutSessionsPart1Details4')]),
          new Element('#GoGlobal: Winning Across Borders', null, placeholder, [new Button('Details', 'postback', 'Day2BreakoutSessionsPart1Details5')]),
          new Element('Influencer Marketing: Using Instagram Branded Content Solutions', null, placeholder, [new Button('Details', 'postback', 'Day2BreakoutSessionsPart1Details6')])
        ];

        attachment = new Attachment('generic', elements);

        quickReplies = [
          new QuickReply('Back', 'Day2BreakoutSessions'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        break;

      case 'Day2BreakoutSessionsPart1Details1':
        attachment = 'Review the latest brand safety framework, our approach to reporting & enforcing community standards and evaluate new advertiser controls built for contextual placements.\n\n#Blocklist #Inventory Filters #Dynamic Content Sets #Publisher Whitelisting';

        quickReplies = [
          new QuickReply('Back', 'Day2BreakoutSessionsPart1'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        break;

      case 'Day2BreakoutSessionsPart1Details2':
        attachment = 'Learn about the many ways that commerce is taking place across the family of apps and how clients can leverage the growing opportunity.\n\n#Marketplace #IG Shopping #Facebook Pay #Facebook Pages #Messenger #WhatsApp';

        quickReplies = [
          new QuickReply('Back', 'Day2BreakoutSessionsPart1'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        break;

      case 'Day2BreakoutSessionsPart1Details3':
        attachment = 'An in-depth, tactical session going beyond placement and audience liquidity to explore tools, including placement asset customization and campaign budget optimization to increase performance at a lower cost.\n\n#Placement Liquidity #Audience Liquidity #Campaign Budget Optimization #Placement Asset Customization #Dynamic Creative Optimization';

        quickReplies = [
          new QuickReply('Back', 'Day2BreakoutSessionsPart1'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        break;

      case 'Day2BreakoutSessionsPart1Details4':
        attachment = 'Signals are fundamental to our targeting and measurement capabilities. Learn how the changes in the ecosystem impact your clients and our product developments in the areas of signal resiliency and privacy.\n\n#Signals (Pixel, SDK, Offline Conversions) #Advanced Matching #Server-side Events';

        quickReplies = [
          new QuickReply('Back', 'Day2BreakoutSessionsPart1'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        break;

      case 'Day2BreakoutSessionsPart1Details5':
        attachment = '52% of APAC cross-channel revenue goes across borders. Get the latest updates on our cross border products, tools and insights; and programs to remove operational barriers for market diversification.\n\n#Auto Translate for Dynamic Language Optimization (DLO) #Localized Catalog #Multi-Language and Country Dynamic Ads (MMDA)';

        quickReplies = [
          new QuickReply('Back', 'Day2BreakoutSessionsPart1'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        break;

      case 'Day2BreakoutSessionsPart1Details6':
        attachment = 'Instagram is at the epicenter of the creator ecosystem. We will review the influencer landscape, client best practices, and deep dive into our branded content solutions.\n\n#Branded Content Ads';

        quickReplies = [
          new QuickReply('Back', 'Day2BreakoutSessionsPart1'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        break;

      case 'Day2BreakoutSessionsPart2':
        elements = [
          new Element('Breakouts M - Z', 'Choose 3 of 11 breakout sessions to attend at:\n9:45 am\n10:45 am\n11:30 am', placeholder),
          new Element('In-Stream & Watch: Building for and Thriving in the Facebook Video Ecosystem', null, placeholder, [new Button('Details', 'postback', 'Day2BreakoutSessionsPart2Details1')]),
          new Element('The Next Chapter for Stories Creative', null, placeholder, [new Button('Details', 'postback', 'Day2BreakoutSessionsPart2Details2')]),
          new Element('O2O (Online to Offline): Building a 0→1 Loyalty Product for APAC', null, placeholder, [new Button('Details', 'postback', 'Day2BreakoutSessionsPart2Details3')]),
          new Element('SBG: Growing Businesses Through the Funnel', null, placeholder, [new Button('Details', 'postback', 'Day2BreakoutSessionsPart2Details4')]),
          new Element('Short Form Video Ads: Facebook Thumbstoppers', null, placeholder, [new Button('Details', 'postback', 'Day2BreakoutSessionsPart2Details5')])
        ];

        attachment = new Attachment('generic', elements);

        quickReplies = [
          new QuickReply('Back', 'Day2BreakoutSessions'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        break;

      case 'Day2BreakoutSessionsPart2Details1':
        attachment = 'Learn how we are building a video ecosystem comprising Users (role of WATCH in our ecosystem), Media Companies (getting premium video content) & Advertisers (new monetization products like Reserve).\n\n#Watch #In-stream #Reserve #Contextual Targeting';

        quickReplies = [
          new QuickReply('Back', 'Day2BreakoutSessionsPart2'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        break;

      case 'Day2BreakoutSessionsPart2Details2':
        attachment = 'A dual session focused on the latest ad products for Stories creative including tools like Stories Templates, Editing Toolkits and stickers, paired with a fun session on creative best practices.\n\n#IG Stories #Stories Templates #Video Cropping and Editing #Stickers & Templates';

        quickReplies = [
          new QuickReply('Back', 'Day2BreakoutSessionsPart2'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        break;

      case 'Day2BreakoutSessionsPart2Details3':
        attachment = 'Come learn about our journey launching an APAC-centric, QR-code powered loyalty product and forging partnerships with Point of Sale (POS) providers to help businesses bridge the O2O divide.\n\n#Loyalty #QR code #Offline Signals #Retargeting';

        quickReplies = [
          new QuickReply('Back', 'Day2BreakoutSessionsPart2'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        break;

      case 'Day2BreakoutSessionsPart2Details4':
        attachment = 'SBG: Growing businesses through the funnel';

        quickReplies = [
          new QuickReply('Back', 'Day2BreakoutSessionsPart2'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        break;

      case 'Day2BreakoutSessionsPart2Details5':
        attachment = 'How strong XFN partnership between GBM, CAP & FCS can unlock short-form video adoption by inspiring, educating and empowering creative agencies to believe \'Powerful storytelling is possible in <10 secs\'.\n\n#Short Form Video Ads';

        quickReplies = [
          new QuickReply('Back', 'Day2BreakoutSessionsPart2'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        break;

      case 'Day2TrainingSessions':
        elements = [
          new Element('Training Sessions', 'Choose from one Training Session from 1:15 pm - 2:45 pm', placeholder),
          new Element('Always Do the Right Thing', 'Legal Learning Team / HRBPs', placeholder, [new Button('Details', 'postback', 'Day2TrainingSessionsDetails1')]),
          new Element('Handling Hard Topics with External Audiences (V2)', 'GMS Learning & PR', placeholder, [new Button('Details', 'postback', 'Day2TrainingSessionsDetails2')]),
          new Element('Living Your Values, 24/7', 'L&D / HRBPs', placeholder, [new Button('Details', 'postback', 'Day2TrainingSessionsDetails3')]),
          new Element('Fighting Fit & Mentally Strong', 'Benefits APAC', placeholder, [new Button('Details', 'postback', 'Day2TrainingSessionsDetails4')]),
          new Element('XFN Collaboration through Coaching', 'L&D', placeholder, [new Button('Details', 'postback', 'Day2TrainingSessionsDetails5')])
        ];

        attachment = new Attachment('generic', elements);

        quickReplies = [
          new QuickReply('Back', 'Day2'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        break;

      case 'Day2TrainingSessionsDetails1':
        attachment = 'Interactive session on handling difficult situations in the workplace. The outcome is to build your confidence and collective capability in this area as leaders at Facebook.';

        quickReplies = [
          new QuickReply('Back', 'Day2TrainingSessions'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        break;

      case 'Day2TrainingSessionsDetails2':
        attachment = 'Learn the skills needed to engage in difficult conversations with external audiences from one of the most influential executive media trainers, Lee Woodruff.';

        quickReplies = [
          new QuickReply('Back', 'Day2TrainingSessions'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        break;

      case 'Day2TrainingSessionsDetails3':
        attachment = 'Aspire to always be your own culture champion? Discuss/reflect on where you could reinvest energy to optimize your personal values individually and in our community, in order to be fully authentic and engaged!';

        quickReplies = [
          new QuickReply('Back', 'Day2TrainingSessions'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        break;

      case 'Day2TrainingSessionsDetails4':
        attachment = 'Get great tips to enhance our resilience, stay true to ourselves and thrive in an environment where we are expected to move fast and create impact!';

        quickReplies = [
          new QuickReply('Back', 'Day2TrainingSessions'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        break;

      case 'Day2TrainingSessionsDetails5':
        attachment = 'Coaching skills enables us to realize our potential in a variety of contexts. In this interactive workshop you’ll learn, practice and apply key coaching principles to better support and align with your XFN colleagues.';

        quickReplies = [
          new QuickReply('Back', 'Day2TrainingSessions'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        break;

      case 'DinnerEvents':
        elements = [
          new Element('Welcome Dinner', 'Date: Nov 13, Wed\nTime: 6:30 pm - 10:00 pm\nVenue: ArtScience Museum', placeholder, [new Button('Getting There', 'postback', 'DinnerEventsPart1')]),
          new Element('Dinner & Party', 'Date: Nov 14, Thurs\nTime: 8:00 pm - 2:00 am\nVenue: Marquee', placeholder, [new Button('Getting There', 'postback', 'DinnerEventsPart2')])
        ];

        attachment = new Attachment('generic', elements);

        quickReplies = [
          new QuickReply('Back', 'Agenda'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        break;

      case 'DinnerEventsPart1':
        attachment = 'ArtScience museum is a 5 minute walk from Marina Bay Sands.';

        quickReplies = [
          new QuickReply('Back', 'DinnerEvents'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        break;

      case 'DinnerEventsPart2':
        attachment = 'Marquee is located at B1-67, Galleria Level, The Shoppes at Marina Bay Sands.  It is a 5 minute walk from the hotel towers.';

        quickReplies = [
          new QuickReply('Back', 'DinnerEvents'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        break;

      case 'ExperienceShowcase':
        buttons = [
          new Button('Business', 'postback', 'ExperienceShowcaseBusiness'),
          new Button('Community', 'postback', 'ExperienceShowcaseCommunity'),
          new Button('People', 'postback', 'ExperienceShowcasePeople')
        ];

        elements = [
          new Element('Experience Showcase', 'Engage with activations featuring Facebook services, orgs, and partners', placeholder, buttons)
        ];

        attachment = new Attachment('generic', elements);

        quickReplies = [
          new QuickReply('Back', 'Agenda&Maps'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        break;

      case 'ExperienceShowcaseBusiness':
        elements = [
          new Element('Analog Lab', null, placeholder),
          new Element('Business Integrity', null, placeholder),
          new Element('Instagram', null, placeholder),
          new Element('Workplace', null, placeholder),
          new Element('SBG', null, placeholder),
          new Element('PSO', null, placeholder),
          new Element('Helpdesk', null, placeholder)
        ];

        attachment = new Attachment('generic', elements);

        quickReplies = [
          new QuickReply('Back', 'ExperienceShowcase'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        break;

      case 'ExperienceShowcaseCommunity':
        elements = [
          new Element('Pride@', null, placeholder),
          new Element('Developer Partnerships', null, placeholder),
          new Element('Entertainment Partnerships', null, placeholder),
          new Element('Mobile Partnerships', null, placeholder),
          new Element('Room to Read', null, placeholder)
        ];

        attachment = new Attachment('generic', elements);

        quickReplies = [
          new QuickReply('Back', 'ExperienceShowcase'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        break;

      case 'ExperienceShowcasePeople':
        elements = [
          new Element('Fuel', null, placeholder),
          new Element('People@', null, placeholder)
        ];

        attachment = new Attachment('generic', elements);

        quickReplies = [
          new QuickReply('Back', 'ExperienceShowcase'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        break;

      case 'VenueMaps':
        buttons = [
          new Button('Breakout Rooms', 'postback', 'VenueMapsBreakout'),
          new Button('Experience Showcase', 'web_url', 'https://kimkijung-one-apac.s3-ap-southeast-1.amazonaws.com/breakout+sessions+map.jpg')
        ];

        elements = [
          new Element('Venue Maps', null, placeholder, buttons)
        ];

        attachment = new Attachment('generic', elements);

        quickReplies = [
          new QuickReply('Back', 'Agenda&Maps'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        break;

      case 'VenueMapsBreakout':
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
          new QuickReply('Back', 'VenueMaps'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        break;

      case 'Transport&Contacts':
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
        break;

      case 'Transportation':
        buttons = [
          new Button('Marina Bay Sands', 'postback', 'TransportationMBS'),
          new Button('Marquee', 'web_url', 'https://facebook.com')
        ];

        elements = [
          new Element('Transportation', null, placeholder, buttons)
        ];

        attachment = new Attachment('generic', elements);

        quickReplies = [
          new QuickReply('Back', 'Transport&Contacts'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        break;

      case 'TransportationMBS':
        attachment = 'MRT:\nMarina Bay Sands is linked directly to Bayfront MRT station (CE1, Exit B, C, D, E) along the Circle Line Extension.\n\nBus:\nThe following bus routes serve Marina Bay Sands Hotel: 97, 106, 133, 502 and 518.\n\nTaxi:\nTo get around, we recommend Grab or calling +65-6552-1111 for a local cab.\nPlease alight at the drop-off point at the Sands Expo & Convention Centre.\n\nIf you are driving, please collect your complimentary parking coupons from the registration counter daily. Please note that parking coupons will be issued on a first-come-first-serve basis. Kindly refer to map below for entrance to the car park of Sands Expo & Convention Centre.'

        quickReplies = [
          new QuickReply('Back', 'Transportation'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        break;

      case 'Contacts':
        attachment = '[Emergency Contacts]\nPolice\n999\n\nAmbulance/Fire\n995\n\nISOS APAC\n+65-6338-7800\n\nFB GSOC\n+1-650-384-2000\n\nFB SOC-APAC\n+65-6704-3000\n\nEmail\nsecurity@fb.com\n\n[Facebook Onsite Help]\nHours of Operations\n13 November 2019\n8am-10pm\n\n14 November 2019\n8am-12am\n\n[Hotel Contacts]\nHotel Address\n10 Bayfront Avenue, Singapore 018956\n\nDuty Manager\n+65-6688-8833\n\nConcierge\n+65-6688-6061\n\nLost & Found\n+65-6688-0966';

        quickReplies = [
          new QuickReply('Back', 'Transport&Contacts'),
          new QuickReply('Home', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        break;

      case 'LipSyncBattle':
        elements = [
          new Element('Lip Sync Battle', 'Vote for the top 2 Lip Sync Battle champions\n*Both votes are equal 1 point each', placeholder),
          new Element('Australia/New Zealand', null, placeholder, [new Button('Vote', 'postback', 'Vote_Australia/NewZealand')]),
          new Element('Greater China', null, placeholder, [new Button('Vote', 'postback', 'Vote_Greater China')]),
          new Element('India', null, placeholder, [new Button('Vote', 'postback', 'Vote_India')]),
          new Element('Japan', null, placeholder, [new Button('Vote', 'postback', 'Vote_Japan')]),
          new Element('Korea', null, placeholder, [new Button('Vote', 'postback', 'Vote_Korea')]),
          new Element('Southeast Asia', null, placeholder, [new Button('Vote', 'postback', 'Vote_Southeast Asia')])
        ];

        attachment = new Attachment('generic', elements);

        quickReplies = [
          new QuickReply('Back', 'Home')
        ];

        message = new Message(attachment, quickReplies);
        break;

      case 'Vote_Australia/New Zealand':
      case 'Vote_Greater China':
      case 'Vote_India':
      case 'Vote_Japan':
      case 'Vote_Korea':
      case 'Vote_Southeast Asia':
        const payloadRegion = payload.split('_')[1];
        return queries.votes.fetchVotes(userId)
          .then((result) => {
            const rows = result;

            if (rows.includes(payloadRegion)) {
              attachment = `Your already voted for ${payloadRegion}!`

              quickReplies = [
                new QuickReply('Back', 'LipSyncBattle'),
                new QuickReply('Home', 'Home')
              ];
            }

            if (rows.length >= 2) {
              attachment = 'You already casted both of your votes!';

              quickReplies = [
                new QuickReply('Back', 'LipSyncBattle'),
                new QuickReply('Home', 'Home')
              ];
            }

            attachment = `Are you sure you want to vote for ${payloadRegion}?`;

            quickReplies = [
              new QuickReply('Confirm', `Confirm_${payloadRegion}`),
              new QuickReply('Cancel', 'LipSyncBattle')
            ];

            message = new Message(attachment, quickReplies);
            return message;
          })

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