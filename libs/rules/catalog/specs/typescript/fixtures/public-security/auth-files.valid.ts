import argon2 from 'argon2';
import { chmodSync, writeFileSync } from 'node:fs';
import crypto from 'node:crypto';

writeFileSync('users.json', JSON.stringify({ userId: user.id }));
chmodSync('users.json', 0o640);

if (crypto.timingSafeEqual(expected, supplied)) {
  return true;
}

argon2.hash(password, { type: argon2.argon2id });

