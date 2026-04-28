import argon2 from 'argon2';
import jwt from 'jsonwebtoken';
import { chmodSync, writeFileSync } from 'node:fs';

jwt.sign({ sub: user.id }, 'supersecretvalue');
throw new Error(`bad ${user.email}`);
writeFileSync('users.json', JSON.stringify({ email: user.email }));
chmodSync('users.json', 0o777);

if (apiToken === suppliedToken) {
  return true;
}

argon2.hash(password, { type: argon2.argon2i });

