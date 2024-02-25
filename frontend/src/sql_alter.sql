ALTER TABLE organisation_hr
ADD CONSTRAINT org_id
FOREIGN KEY (org_id)
REFERENCES organisation(org_id)
ON DELETE CASCADE;