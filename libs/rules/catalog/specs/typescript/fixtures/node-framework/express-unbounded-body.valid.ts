const express = require('express');
const multer = require('multer');

const app = express();

app.use(express.json({ limit: '1mb' }));
app.use(multer({ limits: { fileSize: 1024 * 1024 } }));
