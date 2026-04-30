const express = require('express');
const app = express();

const permissiveCors = { origin: true };
const crossSiteCookie = {
  name: 'sid',
  maxAge: 60_000,
  path: '/',
  domain: '.example.com',
  secure: true,
  httpOnly: true,
  sameSite: 'none',
};

function reflectOrigin(origin, callback) {
  callback(null, origin);
}

app.disable('x-powered-by');
app.use(cors(permissiveCors));
app.use(cors({ origin: reflectOrigin }));
app.use(helmet({ frameguard: false }));
app.use(
  session({
    name: 'sid',
    cookie: crossSiteCookie,
  }),
);
