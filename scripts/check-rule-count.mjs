import { readdirSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const workspaceRoot = resolve(import.meta.dirname, '..');
const readmePath = resolve(workspaceRoot, 'README.md');
const badgePath = resolve(
  workspaceRoot,
  'docs/assets/badges/rules-count.json',
);
const rulesRoot = resolve(workspaceRoot, 'libs/rules/catalog/rules');

function getRuleCategory(fileName) {
  const baseName = fileName.replace(/\.rule\.yaml$/, '');
  const segments = baseName.split('.');

  if (segments[0] === 'ts' && segments.length >= 3) {
    return segments[1];
  }

  return segments[0];
}

function collectCatalogStats(directory) {
  let ruleCount = 0;
  const categories = new Set();

  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const absolutePath = resolve(directory, entry.name);

    if (entry.isDirectory()) {
      const nestedStats = collectCatalogStats(absolutePath);
      ruleCount += nestedStats.ruleCount;

      for (const category of nestedStats.categories) {
        categories.add(category);
      }

      continue;
    }

    if (entry.isFile() && entry.name.endsWith('.rule.yaml')) {
      ruleCount += 1;
      categories.add(getRuleCategory(entry.name));
    }
  }

  return {
    ruleCount,
    categories,
  };
}

const { ruleCount, categories } = collectCatalogStats(rulesRoot);
const categoryCount = categories.size;
const readme = readFileSync(readmePath, 'utf8');
const badge = JSON.parse(readFileSync(badgePath, 'utf8'));
const readmeMatch = readme.match(
  /The OSS catalog currently includes `(\d+)` rules across `(\d+)` categories,/,
);

if (!readmeMatch) {
  throw new Error('Unable to locate the rule-count sentence in README.md.');
}

if (Number(readmeMatch[1]) !== ruleCount) {
  throw new Error(
    `README rule count drift detected: expected ${ruleCount}, found ${readmeMatch[1]}.`,
  );
}

if (Number(readmeMatch[2]) !== categoryCount) {
  throw new Error(
    `README category count drift detected: expected ${categoryCount}, found ${readmeMatch[2]}.`,
  );
}

if (badge.message !== String(ruleCount)) {
  throw new Error(
    `Rule count badge drift detected: expected ${ruleCount}, found ${badge.message}.`,
  );
}

console.log(`Verified README and badge rule counts for ${ruleCount} shipped rules.`);
