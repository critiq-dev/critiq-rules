const express = require('express');
const helmet = require('helmet');
const app = express();

app.disable('x-powered-by');
app.use(helmet());
app.use(
  session({
    name: 'sid',
    secret: process.env.SESSION_SECRET,
    cookie: {
      name: 'sid',
      maxAge: 60_000,
      path: '/',
      domain: 'example.com',
      secure: true,
      httpOnly: true,
      sameSite: 'lax',
    },
  }),
);

expressjwt({ secret: getSecret(), isRevoked: revokeJwt });
