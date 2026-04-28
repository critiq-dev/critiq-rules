const express = require('express');
const helmet = require('helmet');
const app = express();

app.disable('x-powered-by');
app.use(helmet());
app.use(express.static('public'));
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
    },
  }),
);

function handler(req, res) {
  res.render('dashboard');
  res.sendFile(fileName, { root: safeRoot });
}

