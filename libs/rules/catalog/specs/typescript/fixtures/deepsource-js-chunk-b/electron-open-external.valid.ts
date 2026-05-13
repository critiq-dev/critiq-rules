export function openDocs(): void {
  const electron = require('electron') as { shell: { openExternal: (u: string) => void } };
  electron.shell.openExternal('https://docs.example.com');
}
