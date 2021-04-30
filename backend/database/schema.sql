
CREATE DATABASE FitcomDB;
USE FitcomDB;

CREATE TABLE Users (
    id                              CHAR(36) PRIMARY KEY,
    role                            ENUM('fitcomAdministrator', 'fitnessCenterAdministrator', 'fitnessCenterTrainer'),
    gender                          ENUM('male', 'female', 'diverse', ''),
    firstName                       VARCHAR(255) NOT NULL DEFAULT '',
    lastName                        VARCHAR(255) NOT NULL DEFAULT '',
    birthDate                       DATE,
    email                           VARCHAR(255) NOT NULL CHECK (email <> ''),
    password                        VARCHAR(255) NOT NULL DEFAULT '',
    activationToken                 CHAR(36),

    createdAt                       DATE NOT NULL,
    createdBy                       CHAR(36) NOT NULL CHECK (createdBy <> ''),
    FOREIGN KEY (createdBy)         REFERENCES Users(id)
);

INSERT INTO Users (id, role, firstName, lastName, email, password, createdAt, createdBy)
VALUE ('eacd43b4-f1e1-430c-905a-2ae90710d6f4', 'fitcomAdministrator', 'root', 'root', 'root', SHA2(CONCAT('root', 'eacd43b4-f1e1-430c-905a-2ae90710d6f4'), 512), CURRENT_DATE, 'eacd43b4-f1e1-430c-905a-2ae90710d6f4');

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
