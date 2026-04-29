import fs from 'node:fs';

function createFiles() {
  fs.writeFileSync('report.txt', 'hello', { mode: 0o666 });
  fs.mkdirSync('public-cache', { mode: 0o777 });
}
