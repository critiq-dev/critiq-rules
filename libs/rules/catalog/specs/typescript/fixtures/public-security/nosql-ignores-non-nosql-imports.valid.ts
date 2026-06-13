const oracledb = require('oracledb');

function handler(req) {
  oracledb.createPool({ user: req.body.user, password: req.body.password });
  oracledb.getConnection({ user: req.body.user });
}
