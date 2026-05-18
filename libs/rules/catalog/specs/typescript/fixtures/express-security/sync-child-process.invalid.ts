import { execSync, spawnSync } from 'node:child_process';

const command = process.env.CMD ?? 'uptime';

export function run(commandName: string) {
  execSync(commandName);
  spawnSync(`ls ${command}`);
}
