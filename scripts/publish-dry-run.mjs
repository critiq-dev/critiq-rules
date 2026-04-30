import { execFileSync, spawnSync } from 'node:child_process';
import {
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { resolve } from 'node:path';

const workspaceRoot = resolve(import.meta.dirname, '..');
const coreRoot = process.env['CRITIQ_CORE_ROOT']?.trim()
  ? resolve(process.env['CRITIQ_CORE_ROOT'])
  : resolve(workspaceRoot, '../critiq-core');
const npmCache = process.env.npm_config_cache ?? '/tmp/critiq-npm-cache';
const rulesPackageRoot = resolve(workspaceRoot, 'dist/libs/rules/catalog');
const cliPackageRoot = resolve(coreRoot, 'dist/publish/cli');

function run(command, args, options = {}) {
  return execFileSync(command, args, {
    cwd: options.cwd ?? workspaceRoot,
    encoding: 'utf8',
    env: {
      ...process.env,
      npm_config_cache: npmCache,
      ...(options.env ?? {}),
    },
    stdio: options.stdio ?? 'pipe',
  });
}

function runChecked(command, args, options = {}) {
  const result = spawnSync(command, args, {
    cwd: options.cwd ?? workspaceRoot,
    encoding: 'utf8',
    env: {
      ...process.env,
      npm_config_cache: npmCache,
      ...(options.env ?? {}),
    },
  });

  if (result.status === 0) {
    return result;
  }

  if (result.stdout) {
    process.stdout.write(result.stdout);
  }

  if (result.stderr) {
    process.stderr.write(result.stderr);
  }

  throw new Error(
    `${command} ${args.join(' ')} failed with status ${result.status ?? 'unknown'}.`,
  );
}

const rulesManifest = JSON.parse(
  readFileSync(resolve(rulesPackageRoot, 'package.json'), 'utf8'),
);

if (rulesManifest.name !== '@critiq/rules') {
  throw new Error(
    `Expected dist rules package to be @critiq/rules, found ${rulesManifest.name}.`,
  );
}

const internalDependencies = Object.keys(rulesManifest.dependencies ?? {}).filter(
  (dependency) => dependency.startsWith('@critiq/'),
);

if (internalDependencies.length > 0) {
  throw new Error(
    `Expected @critiq/rules to avoid internal runtime dependencies. Found: ${internalDependencies.join(', ')}`,
  );
}

const tempRoot = mkdtempSync(resolve(tmpdir(), 'critiq-rules-release-'));

try {
  const rulesPackInfo = JSON.parse(
    run('npm', ['pack', '--json', '--pack-destination', tempRoot], {
      cwd: rulesPackageRoot,
    }),
  )[0];
  const cliPackInfo = JSON.parse(
    run('npm', ['pack', '--json', '--pack-destination', tempRoot], {
      cwd: cliPackageRoot,
    }),
  )[0];

  const packedFiles = new Set((rulesPackInfo.files ?? []).map((file) => file.path));

  if (!packedFiles.has('catalog.yaml')) {
    throw new Error('Expected packed @critiq/rules artifact to include catalog.yaml.');
  }

  if (![...packedFiles].some((path) => path.startsWith('rules/') && path.endsWith('.rule.yaml'))) {
    throw new Error('Expected packed @critiq/rules artifact to include shipped rule YAML files.');
  }

  const tempProjectRoot = resolve(tempRoot, 'consumer-project');
  mkdirSync(resolve(tempProjectRoot, '.critiq'), { recursive: true });
  mkdirSync(resolve(tempProjectRoot, 'src'), { recursive: true });

  writeFileSync(
    resolve(tempProjectRoot, '.critiq/config.yaml'),
    [
      'apiVersion: critiq.dev/v1alpha1',
      'kind: CritiqConfig',
      'catalog:',
      '  package: "@critiq/rules"',
      'preset: recommended',
      'disableRules: []',
      'disableCategories: []',
      'disableLanguages: []',
      'includeTests: false',
      'ignorePaths: []',
      'severityOverrides: {}',
      '',
    ].join('\n'),
  );
  writeFileSync(
    resolve(tempProjectRoot, 'src/index.ts'),
    "console.log('rules dry run');\n",
  );

  runChecked('npm', ['init', '-y'], { cwd: tempProjectRoot });
  runChecked(
    'npm',
    [
      'install',
      '--no-package-lock',
      '--no-save',
      resolve(tempRoot, cliPackInfo.filename),
      resolve(tempRoot, rulesPackInfo.filename),
    ],
    { cwd: tempProjectRoot },
  );

  const checkResult = spawnSync(
    'node',
    ['node_modules/@critiq/cli/main.js', 'check', '.', '--format', 'json'],
    {
      cwd: tempProjectRoot,
      encoding: 'utf8',
      env: {
        ...process.env,
        npm_config_cache: npmCache,
      },
    },
  );

  if (checkResult.status !== 1) {
    if (checkResult.stdout) {
      process.stdout.write(checkResult.stdout);
    }

    if (checkResult.stderr) {
      process.stderr.write(checkResult.stderr);
    }

    throw new Error(
      `Expected packaged @critiq/rules smoke to exit with 1, received ${checkResult.status}.`,
    );
  }

  const envelope = JSON.parse(checkResult.stdout.trim());

  if (envelope.command !== 'check' || envelope.findingCount < 1) {
    throw new Error(
      'Expected packaged @critiq/rules smoke to return a finding-producing check envelope.',
    );
  }

  console.log('Validated @critiq/rules pack contents and clean-install smoke behavior.');
} finally {
  rmSync(tempRoot, { recursive: true, force: true });
}
