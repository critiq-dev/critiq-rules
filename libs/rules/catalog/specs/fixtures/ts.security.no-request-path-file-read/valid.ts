import fs from 'node:fs';
import path from 'node:path';

const REPORTS_DIR = '/srv/reports';

export function readReport(reportName: string) {
  const candidatePath = path.resolve(REPORTS_DIR, reportName);

  if (!candidatePath.startsWith(`${REPORTS_DIR}/`)) {
    throw new Error('invalid report path');
  }

  return fs.readFileSync(candidatePath, 'utf8');
}
