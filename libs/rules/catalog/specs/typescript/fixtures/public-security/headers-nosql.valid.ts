const User = require('../models/user');

function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://app.example.com');
  res.set('X-Frame-Options', 'DENY');
  User.find({ status: 'active' });
  console.log('static message');
}

