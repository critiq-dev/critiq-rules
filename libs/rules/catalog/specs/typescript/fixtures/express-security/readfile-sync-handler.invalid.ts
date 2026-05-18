import { readFileSync } from 'node:fs';

export function handler(req: { path: string }, res: { send: (body: string) => void }) {
  const body = readFileSync('./template.html', 'utf8');
  res.send(body);
}
