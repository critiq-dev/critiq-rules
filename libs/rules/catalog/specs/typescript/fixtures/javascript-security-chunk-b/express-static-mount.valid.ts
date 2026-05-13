const express = require('express');
const app = express();
app.use('/files', express.static('public'));
