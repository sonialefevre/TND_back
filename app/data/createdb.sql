BEGIN;

CREATE TABLE "comment" (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    clientname text NOT NULL,
    clientcompany text NOT NULL,
    comment text NOT NULL
);

COMMIT;