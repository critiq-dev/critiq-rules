import fs from 'node:fs';

interface RequestLike {
  query: {
    path?: string;
  };
}

export function readRequestedReport(req: RequestLike) {
  return fs.readFileSync(req.query.path ?? '', 'utf8');
}

