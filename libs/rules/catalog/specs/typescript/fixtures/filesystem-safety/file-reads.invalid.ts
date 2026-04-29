import fs from 'node:fs';

function readReport(req, file) {
  fs.readFileSync(req.query.report, 'utf8');
  return fs.createReadStream(file.originalname);
}
