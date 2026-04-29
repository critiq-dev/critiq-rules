import util from 'node:util';

function handler(req) {
  return util.format('user=%s', req.query.user);
}
