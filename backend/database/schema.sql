
DROP DATABASE IF EXISTS FitcomDB;
CREATE DATABASE FitcomDB;
USE FitcomDB;

CREATE TABLE Users (
    id                                      CHAR(36) PRIMARY KEY,
    firstName                               VARCHAR(255) NOT NULL DEFAULT '',
    lastName                                VARCHAR(255) NOT NULL DEFAULT '',
    birthDate                               DATE,
    email                                   VARCHAR(255) NOT NULL CHECK (email <> ''),
    password                                VARCHAR(255),
    activationToken                         CHAR(36),
    CHECK ((firstName <> '' AND lastName <> '' AND password <> '' AND password IS NOT NULL) || (activationToken <>  '' AND activationToken IS NOT NULL))
);

CREATE TABLE FitcomAdministrators (
    userId                                  CHAR(36) PRIMARY KEY,
    FOREIGN KEY(userId)                     REFERENCES Users(id),

    invitedAt                               DATE NOT NULL,
    invitedBy                               CHAR(36) NOT NULL,
    FOREIGN KEY(invitedBy)                  REFERENCES Users(id)
);
