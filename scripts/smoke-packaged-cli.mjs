import { spawnSync } from 'node:child_process';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(scriptDirectory, '..');
const coreRoot = process.env['CRITIQ_CORE_ROOT']?.trim()
  ? resolve(process.env['CRITIQ_CORE_ROOT'])
  : resolve(repoRoot, '../critiq-core');
const packagedCliPath =
  process.env['CRITIQ_PACKAGED_CLI_PATH']?.trim() ??
  resolve(coreRoot, 'dist/publish/cli/main.js');
const packagedCatalogRoot = resolve(repoRoot, 'dist/libs/rules/catalog');

function runCli(args, options = {}) {
  const result = spawnSync('node', [packagedCliPath, ...args], {
    cwd: options.cwd ?? repoRoot,
    encoding: 'utf8',
    env: {
      ...process.env,
      ...(options.env ?? {}),
    },
  });

  return result;
}

function assertStatus(result, expectedStatus, args) {
  if (result.status === expectedStatus) {
    return;
  }

  if (result.stdout) {
    process.stdout.write(result.stdout);
  }

  if (result.stderr) {
    process.stderr.write(result.stderr);
  }

  throw new Error(
    `Expected \`critiq ${args.join(' ')}\` to exit with ${expectedStatus}, received ${result.status}.`,
  );
}

function runJsonCommand(args, options = {}) {
  const result = runCli(args, options);
  const expectedStatus = options.expectedStatus ?? 0;

  assertStatus(result, expectedStatus, args);

  const stdout = result.stdout?.trim() ?? '';

  if (!stdout) {
    throw new Error(`Expected JSON output from \`critiq ${args.join(' ')}\`.`);
  }

  try {
    return JSON.parse(stdout);
  } catch (error) {
    if (result.stderr) {
      process.stderr.write(result.stderr);
    }

    throw new Error(
      `Failed to parse JSON output from \`critiq ${args.join(' ')}\`: ${
        error instanceof Error ? error.message : String(error)
      }`,
    );
  }
}

const validateResult = runJsonCommand([
  'rules',
  'validate',
  'examples/starter-pack/rules/*.rule.yaml',
  '--format',
  'json',
]);

if (validateResult.command !== 'rules.validate') {
  throw new Error('Expected starter-pack validate smoke to return a rules.validate envelope.');
}

const testResult = runJsonCommand([
  'rules',
  'test',
  'examples/starter-pack/rules/*.spec.yaml',
  '--format',
  'json',
]);

if (testResult.command !== 'rules.test') {
  throw new Error('Expected starter-pack spec smoke to return a rules.test envelope.');
}

const starterPackCheck = runJsonCommand(
  ['check', 'examples/starter-pack/fixtures/ts.logging.no-console-log', '--format', 'json'],
  {
    env: {
      CRITIQ_RULES_ROOT: packagedCatalogRoot,
    },
    expectedStatus: 1,
  },
);

if (
  starterPackCheck.command !== 'check' ||
  starterPackCheck.findingCount < 1 ||
  starterPackCheck.exitCode !== 1
) {
  throw new Error('Expected packaged starter-pack check smoke to surface at least one finding.');
}

const scenarioChecks = [
  '../critiq-sandbox/scenarios/typescript/project-cross-file',
  '../critiq-sandbox/scenarios/typescript/weak-crypto',
  '../critiq-sandbox/scenarios/go/sql-interpolation',
  '../critiq-sandbox/scenarios/python/unsafe-deserialization',
];

for (const scenarioPath of scenarioChecks) {
  const result = runJsonCommand(['check', scenarioPath, '--format', 'json'], {
    env: {
      CRITIQ_RULES_ROOT: packagedCatalogRoot,
    },
    expectedStatus: 1,
  });

  if (result.command !== 'check' || result.findingCount < 1) {
    throw new Error(
      `Expected packaged scenario smoke to surface at least one finding for ${scenarioPath}.`,
    );
  }
}
