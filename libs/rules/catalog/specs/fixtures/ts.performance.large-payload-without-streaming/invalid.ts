const fs = {
  promises: {
    readFile: async (_path: string, _encoding: string) => 'rows',
  },
};

export async function loadReport(): Promise<string> {
  return fs.promises.readFile('report.csv', 'utf8');
}
