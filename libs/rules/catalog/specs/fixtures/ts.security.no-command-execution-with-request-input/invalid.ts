import { exec } from 'node:child_process';

interface RequestLike {
  query: {
    cmd?: string;
  };
}

export function runRequestedCommand(req: RequestLike) {
  return exec(req.query.cmd ?? 'uptime');
}
