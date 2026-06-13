// Static string literals in require() should not be flagged
const lodash = require('lodash');
const path = require('path');
const fs = require('fs');

function handler(req, res) {
  // Static require calls inside handlers are also safe
  const config = require('./config');
  res.send('ok');
}
