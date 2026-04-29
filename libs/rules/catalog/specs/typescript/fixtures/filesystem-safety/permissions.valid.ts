import fs from 'node:fs';

function createFiles() {
  fs.writeFileSync('report.txt', 'hello', { mode: 0o640 });
  fs.mkdirSync('private-cache', { mode: 0o700 });
}
