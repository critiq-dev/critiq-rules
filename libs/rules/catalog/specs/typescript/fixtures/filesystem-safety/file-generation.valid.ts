import fs from 'node:fs';
import crypto from 'node:crypto';

function writeArtifact(req) {
  const artifactPath = `/tmp/${crypto.randomUUID()}.json`;
  fs.writeFileSync(artifactPath, JSON.stringify(req.body.payload));
}
