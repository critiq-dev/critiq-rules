function handler(req, res, error) {
  console.error('request failed', error.stack);
  process.stdout.write(JSON.stringify(req.headers));
  res.json({ cookies: req.cookies, env: process.env });
}
