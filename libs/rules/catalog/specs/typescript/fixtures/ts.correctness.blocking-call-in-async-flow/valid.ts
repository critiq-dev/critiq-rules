const fs = {
  promises: {
    readFile: async (_path: string, _encoding: string) => 'ok',
  },
};

export async function readConfig(path: string): Promise<string> {
  return fs.promises.readFile(path, 'utf8');
}
