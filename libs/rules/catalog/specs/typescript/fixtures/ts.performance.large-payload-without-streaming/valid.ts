const fs = {
  createReadStream: (_path: string) => ({ on() {} }),
};

export function loadReport() {
  return fs.createReadStream('report.csv');
}
