import path from 'node:path';

function serveAsset(req: { query: { name: string } }) {
  return path.join(__dirname, 'assets', req.query.name);
}

function serveUpload(req: { body: { segment: string } }) {
  return path.resolve('/var/data', req.body.segment);
}
