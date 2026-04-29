import util from 'node:util';

function handler(req) {
  return util.format(req.query.message, req.query.user);
}
