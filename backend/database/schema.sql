
CREATE DATABASE FitcomDB;
USE FitcomDB;

CREATE TABLE Users (
    id                              CHAR(36) PRIMARY KEY,
    firstName                       VARCHAR(255) NOT NULL DEFAULT '',
    lastName                        VARCHAR(255) NOT NULL DEFAULT '',
    role                            ENUM('fitcomAdministrator', 'fitnessCenterStaff'),
    gender                          ENUM('male', 'female', 'diverse', ''),
    birthDate                       DATE,
    email                           VARCHAR(255) NOT NULL CHECK (email <> ''),
    password                        VARCHAR(255) NOT NULL DEFAULT '',
    activationToken                 CHAR(36),

    invitationDate                  DATE NOT NULL,
    invitedBy                       CHAR(36) NOT NULL CHECK (invitedBy <> ''),
    FOREIGN KEY (invitedBy)         REFERENCES Users(id)
);

INSERT INTO Users (id, role, firstName, lastName, email, password, invitationDate, invitedBy) VALUES
('eacd43b4-f1e1-430c-905a-2ae90710d6f4', 'fitcomAdministrator', 'root', 'root', 'root', SHA2(CONCAT('root', 'eacd43b4-f1e1-430c-905a-2ae90710d6f4'), 512), CURRENT_DATE, 'eacd43b4-f1e1-430c-905a-2ae90710d6f4'),
('83b8ed2e-a9f7-11eb-bcbc-0242ac130002', 'fitcomAdministrator', 'Cem', 'Demo', 'cem@fitcom.tech', SHA2(CONCAT('root', '83b8ed2e-a9f7-11eb-bcbc-0242ac130002'), 512), CURRENT_DATE, 'eacd43b4-f1e1-430c-905a-2ae90710d6f4'),
('83b8ef36-a9f7-11eb-bcbc-0242ac130002', 'fitcomAdministrator', 'Ian', 'Demo', 'ian@fitcom.tech', SHA2(CONCAT('root', '83b8ef36-a9f7-11eb-bcbc-0242ac130002'), 512), CURRENT_DATE, 'eacd43b4-f1e1-430c-905a-2ae90710d6f4'),
('83b8f026-a9f7-11eb-bcbc-0242ac130002', 'fitcomAdministrator', 'Daniel', 'Demo', 'daniel@fitcom.tech', SHA2(CONCAT('root', '83b8f026-a9f7-11eb-bcbc-0242ac130002'), 512), CURRENT_DATE, 'eacd43b4-f1e1-430c-905a-2ae90710d6f4');

CREATE TABLE Exercises (
    id                              CHAR(36) PRIMARY KEY,
    title                           VARCHAR(255) NOT NULL CHECK (title <> ''),
    requiresEquipment               BOOLEAN NOT NULL DEFAULT FALSE
);

INSERT INTO Exercises (id, title, requiresEquipment) VALUES
('62510952-ab3f-11eb-bcbc-0242ac130002', 'Bankdrücken', TRUE),
('62510b50-ab3f-11eb-bcbc-0242ac130002', 'Latziehen', TRUE),
('62510c40-ab3f-11eb-bcbc-0242ac130002', 'Kreuzheben', TRUE),
('62510e5c-ab3f-11eb-bcbc-0242ac130002', 'Liegestütz', FALSE),
('62510f24-ab3f-11eb-bcbc-0242ac130002', 'Kniebeugen', FALSE),
('62510f24-ab3f-11eb-japr-0242ac130002', 'Sit Ups', FALSE);









CREATE TABLE FitnessCenters (
    id                              CHAR(36) PRIMARY KEY,
    title                           VARCHAR(255) NOT NULL DEFAULT '' CHECK (title <> '') UNIQUE,
    ownerId                         CHAR(36) NOT NULL CHECK (ownerId <> ''),
    FOREIGN KEY (ownerId)           REFERENCES Users(id),
    createdAt                       DATE NOT NULL,

    country                         VARCHAR(255) NOT NULL DEFAULT '',
    city                            VARCHAR(255) NOT NULL DEFAULT '',
    postCode                        VARCHAR(255) NOT NULL DEFAULT '',
    street                          VARCHAR(255) NOT NULL DEFAULT '',
    streetNumber                    VARCHAR(255) NOT NULL DEFAULT '',

    email                           VARCHAR(255) NOT NULL DEFAULT '',
    phoneNumber                     VARCHAR(255) NOT NULL DEFAULT '',
    faxNumber                       VARCHAR(255) NOT NULL DEFAULT ''
);

CREATE TABLE FitnessCenterStaff (
    userId                          CHAR(36),
    fitnessCenterId                 CHAR(36),
    FOREIGN KEY (userId)            REFERENCES Users(id),
    FOREIGN KEY (fitnessCenterId)   REFERENCES FitnessCenters(id),
    PRIMARY KEY (userId, fitnessCenterId)
);

CREATE TABLE FitnessCenterMembers (
    id                              CHAR(36) PRIMARY KEY,
    fitnessCenterId                 CHAR(36) NOT NULL CHECK (fitnessCenterId <> ''),
    FOREIGN KEY (fitnessCenterId)   REFERENCES FitnessCenters(id),
    
    gender                          ENUM('male', 'female', 'diverse', ''),
    firstName                       VARCHAR(255) NOT NULL CHECK (firstName <> ''),
    lastName                        VARCHAR(255) NOT NULL CHECK (lastName <> ''),
    birthDate                       DATE,
    email                           VARCHAR(255) NOT NULL CHECK (email <> ''),
    password                        VARCHAR(255) NOT NULL CHECK (password <> ''),
    activationToken                 CHAR(36),
    bodyWeight                      SMALLINT,
    bodySize                        SMALLINT
);
