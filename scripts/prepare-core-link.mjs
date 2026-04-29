import { spawnSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(scriptDirectory, '..');
const coreRoot = resolve(repoRoot, '../critiq-core');

function fail(message) {
  console.error(message);
  process.exit(1);
}

if (!existsSync(resolve(coreRoot, 'package.json'))) {
  fail(`Expected a sibling critiq-core repo at ${coreRoot}.`);
}

const buildResult = spawnSync('npm', ['run', 'build'], {
  cwd: coreRoot,
  stdio: 'inherit',
});

if (buildResult.status !== 0) {
  process.exit(buildResult.status ?? 1);
}

const packageJson = JSON.parse(
  readFileSync(resolve(repoRoot, 'package.json'), 'utf8'),
);
const fileDependencies = Object.entries(packageJson.devDependencies ?? {})
  .filter(([, value]) => typeof value === 'string' && value.startsWith('file:../critiq-core/dist/'))
  .map(([name, value]) => ({
    name,
    absolutePath: resolve(repoRoot, value.slice('file:'.length)),
  }));

const missingPackages = fileDependencies.filter(
  ({ absolutePath }) => !existsSync(resolve(absolutePath, 'package.json')),
);

if (missingPackages.length > 0) {
  fail(
    [
      'critiq-core build finished, but required dist packages are still missing:',
      ...missingPackages.map(
        ({ name, absolutePath }) => `- ${name}: ${absolutePath}`,
      ),
    ].join('\n'),
  );
}

console.log(
  `Prepared ${fileDependencies.length} critiq-core dist links from ${coreRoot}.`,
);
