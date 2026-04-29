import { execFile } from 'node:child_process';

const COMMANDS = {
  healthcheck: '/usr/bin/env',
} as const;

export function runAllowedCommand(commandName: keyof typeof COMMANDS) {
  return execFile(COMMANDS[commandName], ['uptime']);
}
