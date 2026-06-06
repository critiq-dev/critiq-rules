import express from 'express';
import https from 'node:https';

const app = express();
const credentials = { key: 'key.pem', cert: 'cert.pem' };

https.createServer(credentials, app).listen(443);

if (process.env.NODE_ENV !== 'production') {
  app.listen(3000);
}
