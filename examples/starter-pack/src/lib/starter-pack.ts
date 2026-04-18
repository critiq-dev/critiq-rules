import { resolve } from 'node:path';

export const STARTER_PACK_SPEC_PATHS = [
  'rules/ts.logging.no-console-log.spec.yaml',
  'rules/ts.logging.no-console-error.spec.yaml',
  'rules/ts.runtime.no-debugger-statement.spec.yaml',
  'rules/ts.config.no-process-env-outside-config.spec.yaml',
  'rules/ts.random.no-math-random-in-core.spec.yaml',
] as const;

export function starterPackPackageName(): string {
  return '@critiq/example-starter-pack';
}

export function resolveStarterPackRoot(): string {
  return resolve(__dirname, '../..');
}

export function resolveStarterPackSpecPaths(): string[] {
  const root = resolveStarterPackRoot();

  return [...STARTER_PACK_SPEC_PATHS].map((relativePath) => resolve(root, relativePath));
}
