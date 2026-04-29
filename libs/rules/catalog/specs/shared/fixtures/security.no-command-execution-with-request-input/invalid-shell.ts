import { execFile } from 'node:child_process';

interface RequestLike {
  body: {
    task?: string;
  };
}

export function runRequestedTask(req: RequestLike) {
  return execFile('/usr/bin/env', [req.body.task ?? 'uptime'], {
    shell: true,
  });
}
