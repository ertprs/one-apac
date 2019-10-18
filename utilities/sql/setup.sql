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