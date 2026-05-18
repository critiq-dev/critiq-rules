import { execSync } from 'node:child_process';

export function runHealthCheck() {
  return execSync('uptime');
}
