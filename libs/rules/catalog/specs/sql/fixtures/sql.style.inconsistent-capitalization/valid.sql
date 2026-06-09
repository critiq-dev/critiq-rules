SELECT * FROM users WHERE users.id IN (SELECT id FROM users);
