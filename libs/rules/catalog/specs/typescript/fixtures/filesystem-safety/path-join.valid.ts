import path from 'node:path';

function serveAsset() {
  return path.join(__dirname, 'assets', 'logo.png');
}

function serveValidated(req: { query: { kind: string } }) {
  const safeName = validateReportPath(req.query.kind);
  return path.join('/srv/reports', safeName);
}

function validateReportPath(kind: string) {
  return kind === 'summary' ? 'summary.txt' : 'default.txt';
}
