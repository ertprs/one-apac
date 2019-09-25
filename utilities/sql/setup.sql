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
  views (description)
VALUES
