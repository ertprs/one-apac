-- icons
INSERT INTO
  icons (description, url)
VALUES
  ('One APAC GMS Conference Key Visual', url),
  ('Women@ Leadership Day Key Visual', url);

-- events
INSERT INTO
  events (description, page_id, icon_id)
VALUES
  ('One APAC GMS Conference', '101827981220121', 1),
  ('Women@ Leadership Day', '120785812649183', 2);

-- contestants
INSERT INTO
  contestants (region)
VALUES
  ('Australia/New Zealand'),
  ('Greater China'),
  ('India'),
  ('Japan'),
  ('Korea'),
  ('Southeast Asia');

-- controls
INSERT INTO
  controls (description)
VALUES
  ('Lip Sync Battle');

-- views
INSERT INTO
  views (description, event_id)
VALUES
  ('Home', 1),
  ('Agenda & Maps', 1),
  ('Agenda & Maps > Agenda', 1),
  ('Agenda & Maps > Agenda > Day 1', 1),
  ('Agenda & Maps > Agenda > Day 1 > Part 1', 1),
  ('Agenda & Maps > Agenda > Day 1 > Part 2', 1),
  ('Agenda & Maps > Agenda > Day 1 > Part 3', 1),
  ('Agenda & Maps > Agenda > Day 2', 1),
  ('Agenda & Maps > Agenda > Day 2 > Full Day Agenda', 1),
  ('Agenda & Maps > Agenda > Day 2 > Full Day Agenda > Part 1', 1),
  ('Agenda & Maps > Agenda > Day 2 > Full Day Agenda > Part 2', 1),
  ('Agenda & Maps > Agenda > Day 2 > Breakout Sessions', 1),
  ('Agenda & Maps > Agenda > Day 2 > Breakout Sessions > A ~ L', 1),
  ('Agenda & Maps > Agenda > Day 2 > Breakout Sessions > A ~ L > Brand Safety', 1),
  ('Agenda & Maps > Agenda > Day 2 > Breakout Sessions > A ~ L > Conversational Commerce', 1),
  ('Agenda & Maps > Agenda > Day 2 > Breakout Sessions > A ~ L > Liquidity & Optimization', 1),
  ('Agenda & Maps > Agenda > Day 2 > Breakout Sessions > A ~ L > Future of Signals', 1),
  ('Agenda & Maps > Agenda > Day 2 > Breakout Sessions > A ~ L > #GoGlobal', 1),
  ('Agenda & Maps > Agenda > Day 2 > Breakout Sessions > A ~ L > Influencer Marketing', 1),
  ('Agenda & Maps > Agenda > Day 2 > Breakout Sessions > M ~ Z', 1),
  ('Agenda & Maps > Agenda > Day 2 > Breakout Sessions > M ~ Z > In-Stream & Watch', 1),
  ('Agenda & Maps > Agenda > Day 2 > Breakout Sessions > M ~ Z > Stories Creative', 1),
  ('Agenda & Maps > Agenda > Day 2 > Breakout Sessions > M ~ Z > O2O', 1),
  ('Agenda & Maps > Agenda > Day 2 > Breakout Sessions > M ~ Z > SBG', 1),
  ('Agenda & Maps > Agenda > Day 2 > Breakout Sessions > M ~ Z > Thumbstoppers', 1),
  ('Agenda & Maps > Agenda > Day 2 > Training Sessions', 1),
  ('Agenda & Maps > Agenda > Day 2 > Training Sessions > Always Do the Right Thing', 1),
  ('Agenda & Maps > Agenda > Day 2 > Training Sessions > Handling Hard Topics', 1),
  ('Agenda & Maps > Agenda > Day 2 > Training Sessions > Living Your Values', 1),
  ('Agenda & Maps > Agenda > Day 2 > Training Sessions > Fit & Mentally Strong', 1),
  ('Agenda & Maps > Agenda > Day 2 > Training Sessions > XFN Collaboration', 1),
  ('Agenda & Maps > Agenda > Dinner Events', 1),
  ('Agenda & Maps > Agenda > Dinner Events > ArtScience Museum', 1),
  ('Agenda & Maps > Agenda > Dinner Events > Marquee', 1),
  ('Agenda & Maps > Experience Showcase', 1),
  ('Agenda & Maps > Experience Showcase > Business', 1),
  ('Agenda & Maps > Experience Showcase > Community', 1),
  ('Agenda & Maps > Experience Showcase > People', 1),
  ('Agenda & Maps > Venue Maps', 1),
  ('Agenda & Maps > Venue Maps > Breakout Rooms', 1),
  ('Transport & Contacts', 1),
  ('Transport & Contacts > Transportation', 1),
  ('Transport & Contacts > Transportation > Marina Bay Sands', 1),
  ('Transport & Contacts > Key Contacts', 1),
  ('Lip Sync Battle', 1),
  ('Lip Sync Battle > Vote Confirmation > Australia/New Zealand', 1),
  ('Lip Sync Battle > Vote Confirmation > Greater China', 1),
  ('Lip Sync Battle > Vote Confirmation > India', 1),
  ('Lip Sync Battle > Vote Confirmation > Japan', 1),
  ('Lip Sync Battle > Vote Confirmation > Korea', 1),
  ('Lip Sync Battle > Vote Confirmation > Southeast Asia', 1);

-- broadcasts
INSERT INTO
  broadcasts (description, message, event_id)
VALUES
  ('Test Message 1', 'Spicy jalapeno jowl buffalo kevin rump flank picanha alcatra. Swine short ribs t-bone sausage pig. Beef pig alcatra spare ribs, pork chop t-bone frankfurter chuck jowl ham rump ribeye strip steak short ribs. ', 1),
  ('Test Message 2', 'Rump doner chicken spare ribs pancetta, andouille landjaeger meatball jerky.', 1),
  ('Test Message 3', 'Short ribs drumstick meatball jowl, shank chuck boudin bresaola porchetta cow filet mignon ham hock pastrami kielbasa.', 1),
  ('Test Message 1', 'Spicy jalapeno jowl buffalo kevin rump flank picanha alcatra. Swine short ribs t-bone sausage pig. Beef pig alcatra spare ribs, pork chop t-bone frankfurter chuck jowl ham rump ribeye strip steak short ribs. ', 2),
  ('Test Message 2', 'Rump doner chicken spare ribs pancetta, andouille landjaeger meatball jerky.', 2),
  ('Test Message 3', 'Short ribs drumstick meatball jowl, shank chuck boudin bresaola porchetta cow filet mignon ham hock pastrami kielbasa.', 2);