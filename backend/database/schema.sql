
CREATE DATABASE FitcomDB;
USE FitcomDB;

CREATE TABLE Users (
    id                                      CHAR(36) PRIMARY KEY,
    firstName                               VARCHAR(255) NOT NULL,
    lastName                                VARCHAR(255) NOT NULL,
    birthDate                               DATE,
    email                                   VARCHAR(255) NOT NULL,
    password                                VARCHAR(255) NOT NULL,
    activationToken                         CHAR(36)
);

CREATE TABLE FitcomAdministrators (
    userId                                  CHAR(36) PRIMARY KEY,
    FOREIGN KEY(userId)                     REFERENCES Users(id)
);

CREATE TABLE FitnessCenters (
    id                                      CHAR(36) PRIMARY KEY,
    title                                   VARCHAR(255) NOT NULL CHECK (title <> ''),
    country                                 VARCHAR(255) NOT NULL CHECK (country <> ''),
    city                                    VARCHAR(255) NOT NULL CHECK (city <> ''),
    postCode                                VARCHAR(255) NOT NULL CHECK (postCode <> ''),
    street                                  VARCHAR(255) NOT NULL CHECK (street <> ''),
    streetNumber                            VARCHAR(255) NOT NULL CHECK (streetNumber <> ''),
    phoneNumber                             VARCHAR(255) NOT NULL DEFAULT '',
    email                                   VARCHAR(255) NOT NULL DEFAULT ''
);

CREATE TABLE Trainingsplans (
    creatorId                               CHAR(36) NOT NULL,
    FOREIGN KEY(creatorId)                  REFERENCES Users(id),

    id                                      CHAR(36) PRIMARY KEY,
    title                                   VARCHAR(255) NOT NULL CHECK (title <> ''),
    description                             VARCHAR(255) NOT NULL DEFAULT ''
);

CREATE TABLE FitnessCenterMembers (
    userId                                  CHAR(36),
    FOREIGN KEY(userId)                     REFERENCES Users(id),

    fitnessCenterId                         CHAR(36),
    FOREIGN KEY(fitnessCenterId)            REFERENCES FitnessCenters(id),

    activeTrainingsplanId                   CHAR(36),
    FOREIGN KEY(activeTrainingsplanId)      REFERENCES Trainingsplans(id),

    bodyWeight                              SMALLINT,
    bodySize                                SMALLINT,
    PRIMARY KEY(userId, fitnessCenterId)
);

CREATE TABLE FitnessCenterStaff (
    userId                                  CHAR(36),
    FOREIGN KEY(userId)                     REFERENCES Users(id),

    fitnessCenterId                         CHAR(36),
    FOREIGN KEY(fitnessCenterId)            REFERENCES FitnessCenters(id),

    canAcceptInvitations                    BOOLEAN NOT NULL,
    canWatchMembers                         BOOLEAN NOT NULL,
    canCreateTrainingsplans                 BOOLEAN NOT NULL,

    PRIMARY KEY(userId, fitnessCenterId)
);

CREATE TABLE Exercises (
    id                                      CHAR(36) PRIMARY KEY,
    type                                    ENUM('weight', 'repetition', 'duration', 'distance'),
    requiresEquipment                       BOOLEAN NOT NULL,
    requiresTrainingsprartner               BOOLEAN NOT NULL,
    title                                   VARCHAR(255) NOT NULL CHECK (title <> ''),
    description                             VARCHAR(255) NOT NULL DEFAULT ''
);

CREATE TABLE MuscleGroups (
    id                                      CHAR(36) PRIMARY KEY,
    title                                   VARCHAR(255) NOT NULL CHECK (title <> ''),
    description                             VARCHAR(255) NOT NULL DEFAULT ''
);

CREATE TABLE ExerciseMuscleGroups (
    exerciseId                              CHAR(36),
    muscleGroupId                           CHAR(36),
    effectivity                             ENUM('low', 'medium', 'high'),
    FOREIGN KEY(exerciseId)                 REFERENCES Exercises(id),
    FOREIGN KEY(muscleGroupId)              REFERENCES MuscleGroups(id),
    PRIMARY KEY(exerciseId, muscleGroupId)
);

CREATE TABLE FitnessCenterExercises (
    id                                      CHAR(36) PRIMARY KEY,
    fitnessCenterId                         CHAR(36) NOT NULL,
    FOREIGN KEY(fitnessCenterId)            REFERENCES FitnessCenters(id),

    exerciseId                              CHAR(36) NOT NULL,
    FOREIGN KEY(exerciseId)                 REFERENCES Exercises(id),

    fintessCentersDescription               VARCHAR(255) NOT NULL,

    UNIQUE(fitnessCenterId, exerciseId)
);

CREATE TABLE TrainingsplanDays (
    id                                      CHAR(36) PRIMARY KEY,
    `index`                                 TINYINT UNSIGNED,
    trainingsplanId                         CHAR(36) NOT NULL,
    FOREIGN KEY(trainingsplanId)            REFERENCES Trainingsplans(id),

    title                                   VARCHAR(255) NOT NULL CHECK (title <> ''),
    description                             VARCHAR(255) NOT NULL DEFAULT '',
    UNIQUE(`index`, trainingsplanId)
);

CREATE TABLE TrainingsplanDayExercises (
    id                                      CHAR(36) PRIMARY KEY,
    `index`                                 TINYINT UNSIGNED,
    trainingsplanDayId                      CHAR(36) NOT NULL,
    FOREIGN KEY(trainingsplanDayId)         REFERENCES TrainingsplanDays(id),

    exerciseId                              CHAR(36) NOT NULL,
    FOREIGN KEY(exerciseId)                 REFERENCES FitnessCenterExercises(id),

    UNIQUE(`index`, trainingsplanDayId)
);

CREATE TABLE TrainingsplanDayExerciseSets (
    id                                      CHAR(36) PRIMARY KEY,
    `index`                                 TINYINT UNSIGNED,
    trainingsplanDayExerciseId              CHAR(36) NOT NULL,
    FOREIGN KEY(trainingsplanDayExerciseId) REFERENCES TrainingsplanDayExercises(id),

    value1                                  SMALLINT,
    value2                                  SMALLINT,
    UNIQUE(`index`, trainingsplanDayExerciseId)
);


CREATE TABLE UserTrainingsplans (
    userId                                  CHAR(36) NOT NULL,
    trainingsplanId                         CHAR(36) NOT NULL,
    FOREIGN KEY(userId)                     REFERENCES Users(id),
    FOREIGN KEY(trainingsplanId)            REFERENCES Trainingsplans(id),
    PRIMARY KEY(userId, trainingsplanId)
);

CREATE TABLE ExecutedTrainingsplanDays (
    id                                      CHAR(36) PRIMARY KEY,
    userId                                  CHAR(36) NOT NULL,
    FOREIGN KEY(userId)                     REFERENCES Users(id),
    trainingsplanDayId                      CHAR(36) NOT NULL,
    FOREIGN KEY(trainingsplanDayId)         REFERENCES TrainingsplanDays(id),
    date                                    DATE NOT NULL
);
