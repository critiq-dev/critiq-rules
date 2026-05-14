export function handler(req: { query: { url: string } }): void {
  const electron = require('electron') as { shell: { openExternal: (u: string) => void } };
  electron.shell.openExternal(req.query.url);
}
