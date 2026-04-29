const express = require('express');
const app = express();

app.use(
  session({
    secret: 'inline-session-secret',
    cookie: {
      secure: false,
      httpOnly: false,
    },
  }),
);

expressjwt({ secret: getSecret() });
