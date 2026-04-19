const fs = {
  readFileSync: (_path: string, _encoding: string) => 'ok',
};

export async function readConfig(path: string): Promise<string> {
  return fs.readFileSync(path, 'utf8');
}
