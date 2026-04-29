import { existsSync, readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(scriptDirectory, '..');
const builtCatalogRoot = resolve(repoRoot, 'dist/libs/rules/catalog');
const builtCatalogPath = resolve(builtCatalogRoot, 'catalog.yaml');

if (!existsSync(builtCatalogPath)) {
  console.error(`Missing built catalog at ${builtCatalogPath}.`);
  process.exit(1);
}

const catalogText = readFileSync(builtCatalogPath, 'utf8');
const catalogRules = [...catalogText.matchAll(/^\s*-\s+id:\s+([^\s]+)\s*$(?:[\s\S]*?)^\s*rulePath:\s+([^\s]+)\s*$/gmu)]
  .map((match) => ({
    ruleId: match[1],
    rulePath: resolve(builtCatalogRoot, match[2]),
  }));

if (catalogRules.length === 0) {
  console.error(`No rule entries were discovered in ${builtCatalogPath}.`);
  process.exit(1);
}

const missingRulePaths = catalogRules
  .filter(({ rulePath }) => !existsSync(rulePath));

if (missingRulePaths.length > 0) {
  console.error('The built @critiq/rules package is missing catalog rule assets:');
  for (const missing of missingRulePaths) {
    console.error(`- ${missing.ruleId}: ${missing.rulePath}`);
  }
  process.exit(1);
}

console.log(
  `Verified built catalog assets for ${catalogRules.length} rules.`,
);
