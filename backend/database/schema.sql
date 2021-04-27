
CREATE DATABASE FitcomDB;
USE FitcomDB;

CREATE TABLE FitcomAdministrators (
    id                              CHAR(36) PRIMARY KEY,
    firstName                       VARCHAR(255) NOT NULL CHECK (firstName <> ''),
    lastName                        VARCHAR(255) NOT NULL CHECK (lastName <> ''),
    email                           VARCHAR(255) NOT NULL CHECK (email <> ''),
    password                        VARCHAR(255) NOT NULL CHECK (password <> '')
);

INSERT INTO FitcomAdministrators (id, firstName, lastName, email, password)
VALUE ('eacd43b4-f1e1-430c-905a-2ae90710d6f4', 'root', 'root', 'root', SHA2(CONCAT('root', 'eacd43b4-f1e1-430c-905a-2ae90710d6f4'), 512));

CREATE TABLE FitnessCenters (
    id                              CHAR(36) PRIMARY KEY,
    title                           VARCHAR(255) NOT NULL DEFAULT '' CHECK (title <> ''),
    ownerId                         CHAR(36) NOT NULL CHECK (ownerId <> ''),
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
    id                              CHAR(36) PRIMARY KEY,
    fitnessCenterId                 CHAR(36) NOT NULL CHECK (fitnessCenterId <> ''),

    isAdmin                         BOOLEAN NOT NULL DEFAULT FALSE,

    gender                          ENUM('male', 'female', 'diverse', ''),
    firstName                       VARCHAR(255) NOT NULL DEFAULT '',
    lastName                        VARCHAR(255) NOT NULL DEFAULT '',
    birthDate                       DATE,
    email                           VARCHAR(255) NOT NULL CHECK (email <> ''),
    password                        VARCHAR(255) NOT NULL DEFAULT '',
    activationToken                 CHAR(36)
);

CREATE TABLE FitnessCenterMembers (
    id                              CHAR(36) PRIMARY KEY,
    fitnessCenterId                 CHAR(36) NOT NULL CHECK (fitnessCenterId <> ''),
    
    gender                          ENUM('male', 'female', 'diverse', ''),
    firstName                       VARCHAR(255) NOT NULL CHECK (firstName <> ''),
    lastName                        VARCHAR(255) NOT NULL CHECK (lastName <> ''),
    birthDate                       DATE,
    email                           VARCHAR(255) NOT NULL CHECK (email <> ''),
    password                        VARCHAR(255) NOT NULL CHECK (password <> ''),
    activationToken                 CHAR(36)
);
