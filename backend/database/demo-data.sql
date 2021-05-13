
INSERT INTO Users (id, firstName, lastName, email, password) VALUES
('9341678a-f9c8-49ff-9452-b7b60b815589', 'root', 'root', 'root', SHA2(CONCAT('root', '9341678a-f9c8-49ff-9452-b7b60b815589'), 512)),
('97e4adce-b433-11eb-8529-0242ac130003', 'bob', 'bob', 'bob', SHA2(CONCAT('bob', '97e4adce-b433-11eb-8529-0242ac130003'), 512)),
('97e4b0d0-b433-11eb-8529-0242ac130003', 'alice', 'alice', 'alice', SHA2(CONCAT('alice', '97e4b0d0-b433-11eb-8529-0242ac130003'), 512)),
('97e4b1f2-b433-11eb-8529-0242ac130003', 'chalie', 'chalie', 'chalie', SHA2(CONCAT('chalie', '97e4b1f2-b433-11eb-8529-0242ac130003'), 512));

INSERT INTO FitcomAdministrators (userId, invitedAt, invitedBy) VALUE
('9341678a-f9c8-49ff-9452-b7b60b815589', CURRENT_DATE, '9341678a-f9c8-49ff-9452-b7b60b815589');
