const express = require('express');
const app = express();

app.use(session({ cookie: { secure: false, httpOnly: false } }));
app.use(express.static('public'));
serveIndex('public');

function handler(req, res) {
  res.render(req.body.page);
  res.sendFile(req.params.name);
}

