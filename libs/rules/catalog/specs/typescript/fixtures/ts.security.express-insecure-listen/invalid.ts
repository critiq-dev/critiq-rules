import express from 'express';
import http from 'node:http';

const app = express();

app.listen(3000, '0.0.0.0');

const server = http.createServer(app);
server.listen(8080);
