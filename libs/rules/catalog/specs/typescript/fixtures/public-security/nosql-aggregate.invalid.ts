const User = require('../models/user');

function handler(req) {
  User.aggregate([{ $match: req.body.filter }]);
}
