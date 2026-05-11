session({
  name: 'connect.sid',
  secret: process.env.SESSION_SECRET,
  cookie: {
    name: 'connect.sid',
    maxAge: 60_000,
    path: '/',
    domain: 'example.com',
    secure: true,
    httpOnly: true,
    sameSite: 'lax',
  },
});
