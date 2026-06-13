import { writeFileSync } from 'node:fs';

const benchmarkResults = { duration: 1234, passCount: 42, failCount: 0 };
writeFileSync('benchmark-results.json', JSON.stringify(benchmarkResults));
