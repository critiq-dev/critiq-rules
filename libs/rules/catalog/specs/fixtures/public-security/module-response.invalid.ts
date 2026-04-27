function handler(req, res) {
  require(req.query.plugin);
  res.send(req.body.html);
}

