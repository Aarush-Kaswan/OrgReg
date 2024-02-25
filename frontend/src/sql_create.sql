CREATE TABLE organization (
    org_id INT PRIMARY KEY,
    name VARCHAR(255),
    org_address VARCHAR(255)
);


CREATE TABLE organization_hr (
    orghr_id INT PRIMARY KEY,
    org_id INT,
    orghr_contact_number VARCHAR(15),
    orghr_email VARCHAR(255),
    orghr_first_name VARCHAR(50),
    orghr_last_name VARCHAR(50),
);


CREATE TABLE users (
    id INT PRIMARY KEY,
    password VARCHAR(255),
    username VARCHAR(255)
);