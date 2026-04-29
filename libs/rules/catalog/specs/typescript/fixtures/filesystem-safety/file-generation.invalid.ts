import fs from 'node:fs';

function writeArtifact(req, file) {
  fs.writeFileSync(req.body.outputPath, 'report');
  fs.createWriteStream(file.originalname);
}
