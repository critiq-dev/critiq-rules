import { spawnSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(scriptDirectory, '..');
const configuredCoreRoot = process.env['CRITIQ_CORE_ROOT']?.trim();
const coreRoot = configuredCoreRoot
  ? resolve(configuredCoreRoot)
  : resolve(repoRoot, '../critiq-core');

function fail(message) {
  console.error(message);
  process.exit(1);
}

if (!existsSync(resolve(coreRoot, 'package.json'))) {
  fail(`Expected a sibling critiq-core repo at ${coreRoot}.`);
}

const packageJson = JSON.parse(
  readFileSync(resolve(repoRoot, 'package.json'), 'utf8'),
);
const fileDependencies = Object.entries(packageJson.devDependencies ?? {})
  .filter(([, value]) => typeof value === 'string' && value.startsWith('file:../critiq-core/dist/'))
  .map(([name, value]) => ({
    name,
    absolutePath: resolve(coreRoot, value.slice('file:../critiq-core/'.length)),
  }));
const packagedCliPath = resolve(coreRoot, 'dist/publish/cli/main.js');

const missingPackages = fileDependencies.filter(
  ({ absolutePath }) => !existsSync(resolve(absolutePath, 'package.json')),
);

const shouldSkipBuild =
  process.env['CRITIQ_SKIP_CORE_BUILD'] === '1' &&
  missingPackages.length === 0 &&
  existsSync(packagedCliPath);

if (!shouldSkipBuild) {
  const buildResult = spawnSync('npm', ['run', 'build'], {
    cwd: coreRoot,
    stdio: 'inherit',
  });

  if (buildResult.status !== 0) {
    process.exit(buildResult.status ?? 1);
  }

  const releaseBuildResult = spawnSync('npm', ['run', 'build:release-cli'], {
    cwd: coreRoot,
    stdio: 'inherit',
  });

  if (releaseBuildResult.status !== 0) {
    process.exit(releaseBuildResult.status ?? 1);
  }
}

const missingAfterBuild = fileDependencies.filter(
  ({ absolutePath }) => !existsSync(resolve(absolutePath, 'package.json')),
);

if (missingAfterBuild.length > 0 || !existsSync(packagedCliPath)) {
  fail(
    [
      'critiq-core preparation finished, but required dist artifacts are still missing:',
      ...missingAfterBuild.map(
        ({ name, absolutePath }) => `- ${name}: ${absolutePath}`,
      ),
      !existsSync(packagedCliPath)
        ? `- @critiq/cli packaged artifact: ${packagedCliPath}`
        : null,
    ]
      .filter(Boolean)
      .join('\n'),
  );
}

console.log(
  `${shouldSkipBuild ? 'Reused' : 'Prepared'} critiq-core dist links from ${coreRoot}.`,
);
