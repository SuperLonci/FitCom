
INSERT INTO FitnessCenters (id, title)
VALUE ('d13b2ca9-4794-4f68-9bc8-2ff5dd62b232', 'Demo Fitnessstudio');

--- Demo Benutzer -------------------------------------------------------------------------------------------------------------------------------------------------------------------------

INSERT INTO FitnessCenters (id, title, country, city, postCode, street, streetNumber, phoneNumber, email)
VALUE ('d13b2ca9-4794-4f68-9bc8-2ff5dd62b232', 'Demo Fitnessstudio', 'Deutschland', 'Demostadt', '123456', 'Demostraße', '1a', '', '');

INSERT INTO Users (id, firstName, lastName, birthDate, email, password, activationToken) VALUES
('eacd43b4-f1e1-430c-905a-2ae90710d6f4', 'root', 'root', NULL, 'root', SHA2(CONCAT('root', 'eacd43b4-f1e1-430c-905a-2ae90710d6f4'), 512), NULL),
('19a7394f-fea0-4d96-897e-370ae0ccadae', 'bob', 'bob', NULL, 'bob', SHA2(CONCAT('bob', '19a7394f-fea0-4d96-897e-370ae0ccadae'), 512), NULL),
('b4434fd0-0dda-4f9d-9c1d-c70d2026ec1d', 'alice', 'alice', NULL, 'alice', SHA2(CONCAT('alice', 'b4434fd0-0dda-4f9d-9c1d-c70d2026ec1d'), 512), NULL),
('f15a3fe8-a001-4874-89ca-db067244f0e4', 'charlie', 'charlie', NULL, 'charlie', SHA2(CONCAT('charlie', 'f15a3fe8-a001-4874-89ca-db067244f0e4'), 512), NULL);

INSERT INTO FitcomAdministrators (userId, invitedAt, invitedBy) VALUES
('eacd43b4-f1e1-430c-905a-2ae90710d6f4', CURRENT_DATE, 'eacd43b4-f1e1-430c-905a-2ae90710d6f4'),
('19a7394f-fea0-4d96-897e-370ae0ccadae', CURRENT_DATE, 'eacd43b4-f1e1-430c-905a-2ae90710d6f4'),
('b4434fd0-0dda-4f9d-9c1d-c70d2026ec1d', CURRENT_DATE, 'eacd43b4-f1e1-430c-905a-2ae90710d6f4');

INSERT INTO FitnessCenterMembers (userId, fitnessCenterId, activeTrainingsplanId, bodyWeight, bodySize)
VALUE ('eacd43b4-f1e1-430c-905a-2ae90710d6f4', 'd13b2ca9-4794-4f68-9bc8-2ff5dd62b232', NULL, 75, 183);


INSERT INTO FitnessCenterStaff (userId, fitnessCenterId, canAcceptInvitations, canWatchMembers, canCreateTrainingsplans)
VALUE ('eacd43b4-f1e1-430c-905a-2ae90710d6f4', 'd13b2ca9-4794-4f68-9bc8-2ff5dd62b232', TRUE, TRUE, TRUE);



--- Anmeldung -------------------------------------------------------------------------------------------------------------------------------------------------------------------------

SELECT
	Users.id,
    Users.firstName,
    Users.lastName,
    Users.birthDate,
    Users.email,
    Users.password,
    Users.activationToken,
    EXISTS(
		SELECT * FROM FitcomAdministrators WHERE FitcomAdministrators.userId = Users.id
    ) as isFitcomAdministrator
FROM Users
WHERE id = 'eacd43b4-f1e1-430c-905a-2ae90710d6f4';

SELECT
	Users.id,
    Users.firstName,
    Users.lastName,
    Users.birthDate,
    Users.email,
    Users.password,
    Users.activationToken,
    EXISTS(
		SELECT * FROM FitcomAdministrators WHERE FitcomAdministrators.userId = Users.id
    ) as isFitcomAdministrator
FROM Users;

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------








INSERT INTO Exercises (id, type, requiresEquipment, requiresTrainingspartnert, title, description) VALUES
('787899ac-ac52-11eb-8529-0242ac130003', 'weight', TRUE, FALSE, 'Bankdrücken', 'Allegemeine Beschreibung von Bankdrücken.'),
('78789c40-ac52-11eb-8529-0242ac130003', 'weight', TRUE, FALSE, 'Kreuzheben', 'Allegemeine Beschreibung von Kreuzheben.'),
('78789fb0-ac52-11eb-8529-0242ac130003', 'duration', TRUE, FALSE, 'Rudern', 'Allegemeine Beschreibung von Rudern.'),
('7878a096-ac52-11eb-8529-0242ac130003', 'repetition', FALSE, FALSE, 'Liegestütze', 'Allegemeine Beschreibung von Liegestützen.'),
('22e6958d-3434-4754-8e27-943256ea596d', 'repetition', FALSE, FALSE, 'Sit Ups', 'Allegemeine Beschreibung von Sit Ups.'),
('7878a15e-ac52-11eb-8529-0242ac130003', 'repetition', FALSE, FALSE, 'Dips', 'Allegemeine Beschreibung von Dops.');









INSERT INTO FitnessCenterExercises (id, fitnessCenterId, exerciseId, fintessCentersDescription) VALUES
('9fd2fc6c-ac53-11eb-8529-0242ac130003', 'd13b2ca9-4794-4f68-9bc8-2ff5dd62b232', '787899ac-ac52-11eb-8529-0242ac130003', 'Fitnessstudiospezifischer Kommentar bezüglich der Übung Bankdrücken'),
('9fd2fed8-ac53-11eb-8529-0242ac130003', 'd13b2ca9-4794-4f68-9bc8-2ff5dd62b232', '78789c40-ac52-11eb-8529-0242ac130003', 'Fitnessstudiospezifischer Kommentar bezüglich der Übung Kreuzheben'),
('9fd2ffbe-ac53-11eb-8529-0242ac130003', 'd13b2ca9-4794-4f68-9bc8-2ff5dd62b232', '78789fb0-ac52-11eb-8529-0242ac130003', 'Fitnessstudiospezifischer Kommentar bezüglich der Übung Rudern'),
('9fd30086-ac53-11eb-8529-0242ac130003', 'd13b2ca9-4794-4f68-9bc8-2ff5dd62b232', '7878a096-ac52-11eb-8529-0242ac130003', 'Fitnessstudiospezifischer Kommentar bezüglich der Übung Liegestütze'),
('9fd30202-ac53-11eb-8529-0242ac130003', 'd13b2ca9-4794-4f68-9bc8-2ff5dd62b232', '7878a15e-ac52-11eb-8529-0242ac130003', 'Fitnessstudiospezifischer Kommentar bezüglich der Übung Dips');
('9fd30144-ac53-11eb-8529-0242ac130003', 'd13b2ca9-4794-4f68-9bc8-2ff5dd62b232', '22e6958d-3434-4754-8e27-943256ea596d', 'Fitnessstudiospezifischer Kommentar bezüglich der Übung Sit Ups'),

INSERT INTO Trainingsplans (id, creatorId, title, description)
VALUE ('c1900643-ca5f-436a-8799-d4352c5b3a57', 'eacd43b4-f1e1-430c-905a-2ae90710d6f4', 'Demo Trainingsplan', 'Diese Workout existiert zu technischen Demonstrationszwecken.');

INSERT INTO TrainingsplanDays (id, trainingsplanId, `index`, title, description) VALUE
('42ca51e0-ac54-11eb-8529-0242ac130003', 'c1900643-ca5f-436a-8799-d4352c5b3a57', 0, 'Demo Tag 0', 'Beschreibung von Demo Tag 0.'),
('42ca541a-ac54-11eb-8529-0242ac130003', 'c1900643-ca5f-436a-8799-d4352c5b3a57', 1, 'Demo Tag 1', 'Beschreibung von Demo Tag 1.'),
('42ca5578-ac54-11eb-8529-0242ac130003', 'c1900643-ca5f-436a-8799-d4352c5b3a57', 2, 'Demo Tag 2', 'Beschreibung von Demo Tag 2.'),
('42ca5654-ac54-11eb-8529-0242ac130003', 'c1900643-ca5f-436a-8799-d4352c5b3a57', 3, 'Demo Tag 3', 'Beschreibung von Demo Tag 3.');

INSERT INTO TrainingsplanDayExercises (id, trainingsplanDayId, `index`, exerciseId) VALUES
('851bdd70-ac54-11eb-8529-0242ac130003', '42ca51e0-ac54-11eb-8529-0242ac130003', 0, '9fd2fc6c-ac53-11eb-8529-0242ac130003'),
('851be0f4-ac54-11eb-8529-0242ac130003', '42ca51e0-ac54-11eb-8529-0242ac130003', 1, '9fd2fed8-ac53-11eb-8529-0242ac130003'),

('851be1ee-ac54-11eb-8529-0242ac130003', '42ca541a-ac54-11eb-8529-0242ac130003', 0, '9fd2fed8-ac53-11eb-8529-0242ac130003'),
('851be2de-ac54-11eb-8529-0242ac130003', '42ca541a-ac54-11eb-8529-0242ac130003', 1, '9fd2ffbe-ac53-11eb-8529-0242ac130003'),

('851be3b0-ac54-11eb-8529-0242ac130003', '42ca5578-ac54-11eb-8529-0242ac130003', 0, '9fd30202-ac53-11eb-8529-0242ac130003'),
('851be6d0-ac54-11eb-8529-0242ac130003', '42ca5578-ac54-11eb-8529-0242ac130003', 1, '9fd30144-ac53-11eb-8529-0242ac130003'),

('851be8f6-ac54-11eb-8529-0242ac130003', '42ca5654-ac54-11eb-8529-0242ac130003', 0, '9fd2ffbe-ac53-11eb-8529-0242ac130003'),
('b5953b2c-ac54-11eb-8529-0242ac130003', '42ca5654-ac54-11eb-8529-0242ac130003', 1, '9fd30086-ac53-11eb-8529-0242ac130003');

INSERT INTO TrainingsplanDayExerciseSets (id, trainingsplanDayExerciseId, `index`, weight, repeatments) VALUES
('b5953dac-ac54-11eb-8529-0242ac130003', '851bdd70-ac54-11eb-8529-0242ac130003', 0, 60, 10),
('b5953e9c-ac54-11eb-8529-0242ac130003', '851bdd70-ac54-11eb-8529-0242ac130003', 1, 60, 10),
('b5953f64-ac54-11eb-8529-0242ac130003', '851bdd70-ac54-11eb-8529-0242ac130003', 2, 60, 10),
('b595402c-ac54-11eb-8529-0242ac130003', '851bdd70-ac54-11eb-8529-0242ac130003', 3, 60, 10),
('b595427a-ac54-11eb-8529-0242ac130003', '851bdd70-ac54-11eb-8529-0242ac130003', 4, 60, 10),
('b5954342-ac54-11eb-8529-0242ac130003', '851bdd70-ac54-11eb-8529-0242ac130003', 5, 60, 10),
('b59543ec-ac54-11eb-8529-0242ac130003', '851bdd70-ac54-11eb-8529-0242ac130003', 6, 60, 10),
('b59544aa-ac54-11eb-8529-0242ac130003', '851bdd70-ac54-11eb-8529-0242ac130003', 7, 60, 10);
