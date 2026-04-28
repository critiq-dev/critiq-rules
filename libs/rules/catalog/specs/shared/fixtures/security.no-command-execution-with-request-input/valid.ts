import { execFile } from 'node:child_process';

const COMMANDS = {
  healthcheck: ['/usr/bin/env', 'uptime'],
} as const;

export function runAllowedCommand(commandName: keyof typeof COMMANDS) {
  const [command, arg] = COMMANDS[commandName];

  return execFile(command, [arg]);
}
