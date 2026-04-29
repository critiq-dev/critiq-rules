const User = require('../models/user');

function validatePipeline(filter) {
  return [{ $match: { status: filter.status === 'active' ? 'active' : 'inactive' } }];
}

function handler(req) {
  User.aggregate(validatePipeline(req.body.filter));
}
