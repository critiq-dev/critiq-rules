const express = require('express');
const app = express();

const corsOptions = { origin: ['https://app.example.com'] };

function buildHelmet() {
  return helmet();
}

app.disable('x-powered-by');
app.use(buildHelmet());
app.use(cors(corsOptions));
app.use(
  session({
    name: 'sid',
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
