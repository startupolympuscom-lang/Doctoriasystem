-- SnanIA simulations: one row per "try it" run through the tool.
-- Images are stored as data-URL text for simplicity at this prototype
-- stage; a production deployment should move these to object storage
-- (e.g. S3) and store a reference URL instead.
CREATE TABLE IF NOT EXISTS simulations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  patient_label TEXT,
  procedures JSONB NOT NULL DEFAULT '[]',
  landmark_summary JSONB,
  before_image TEXT NOT NULL,
  after_image TEXT NOT NULL,
  face_change JSONB NOT NULL DEFAULT '[]',
  treatment_intelligence JSONB NOT NULL DEFAULT '{}'
);

CREATE INDEX IF NOT EXISTS simulations_created_at_idx ON simulations (created_at DESC);
