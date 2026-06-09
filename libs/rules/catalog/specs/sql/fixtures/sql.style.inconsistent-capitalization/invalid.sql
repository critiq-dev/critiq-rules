SELECT * FROM Users WHERE users.id IN (SELECT id FROM users);
