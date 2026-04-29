declare function redact<T>(value: T): T;

function handler(req, res, error) {
  if (process.env.NODE_ENV !== 'production') {
    console.error(redact(error.stack));
    process.stdout.write(JSON.stringify(redact(req.headers)));
  }

  res.json({ status: 'ok' });
}
