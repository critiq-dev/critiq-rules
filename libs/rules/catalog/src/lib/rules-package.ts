import { resolve } from 'node:path';

export function rulesPackageName(): string {
  return '@critiq/rules';
}

export function resolveRulesPackageRoot(): string {
  return resolve(__dirname, '../..');
}

export function resolveRulesCatalogPath(): string {
  return resolve(resolveRulesPackageRoot(), 'catalog.yaml');
}
