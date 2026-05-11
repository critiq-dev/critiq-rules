session({
  name: 'app-session',
  secret: process.env.SESSION_SECRET,
  cookie: {
    name: 'app-session',
    maxAge: 60_000,
    path: '/',
    domain: 'example.com',
    secure: true,
    httpOnly: true,
  },
});
