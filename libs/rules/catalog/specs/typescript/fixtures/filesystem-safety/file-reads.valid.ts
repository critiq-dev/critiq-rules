import fs from 'node:fs';

function validateReportPath(kind) {
  return kind === 'summary'
    ? '/srv/reports/summary.txt'
    : '/srv/reports/default.txt';
}

function readReport(req) {
  const safePath = validateReportPath(req.query.kind);
  return fs.readFileSync(safePath, 'utf8');
}
