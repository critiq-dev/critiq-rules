const User = require('../models/user');

function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', req.query.origin);
  res.set('X-Frame-Options', req.query.framePolicy);
  User.find(req.body.filter);
  console.log(req.query.message);
}

