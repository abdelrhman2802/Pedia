-- Mirrors src/db/schema.ts. Used by docker-compose; for managed databases run `npm run db:push` instead.
CREATE TABLE IF NOT EXISTS attempts (
  id serial PRIMARY KEY,
  device_id text NOT NULL,
  mode text NOT NULL,
  scope text NOT NULL,
  total integer NOT NULL,
  correct integer NOT NULL,
  duration_sec integer NOT NULL DEFAULT 0,
  answers jsonb NOT NULL,
  created_at timestamp NOT NULL DEFAULT now()
);
CREATE TABLE IF NOT EXISTS bookmarks (
  id serial PRIMARY KEY,
  device_id text NOT NULL,
  question_id text NOT NULL,
  created_at timestamp NOT NULL DEFAULT now()
);
CREATE UNIQUE INDEX IF NOT EXISTS bookmarks_device_q ON bookmarks (device_id, question_id);
CREATE TABLE IF NOT EXISTS topic_notes (
  id serial PRIMARY KEY,
  device_id text NOT NULL,
  topic_key text NOT NULL,
  body text NOT NULL,
  updated_at timestamp NOT NULL DEFAULT now()
);
CREATE UNIQUE INDEX IF NOT EXISTS notes_device_topic ON topic_notes (device_id, topic_key);
CREATE INDEX IF NOT EXISTS attempts_device ON attempts (device_id);
