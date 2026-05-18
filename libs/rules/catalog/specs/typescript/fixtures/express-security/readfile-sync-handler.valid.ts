import { readFile } from 'node:fs/promises';

export async function handler(
  req: { path: string },
  res: { send: (body: string) => void },
) {
  const body = await readFile('./template.html', 'utf8');
  res.send(body);
}
