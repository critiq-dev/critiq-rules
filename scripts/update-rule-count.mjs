import { mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

const workspaceRoot = resolve(import.meta.dirname, '..');
const readmePaths = [
  resolve(workspaceRoot, 'README.md'),
  resolve(workspaceRoot, 'libs/rules/catalog/README.md'),
];
const badgePath = resolve(
  workspaceRoot,
  'docs/assets/badges/rules-count.json',
);
const rulesRoot = resolve(workspaceRoot, 'libs/rules/catalog/rules');
const readmePattern = /`\d+` rules across `\d+` categories/;

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

for (const readmePath of readmePaths) {
  const readme = readFileSync(readmePath, 'utf8');

  if (!readmePattern.test(readme)) {
    throw new Error(
      `Unable to locate the rule-count snippet in ${readmePath.replace(`${workspaceRoot}/`, '')}.`,
    );
  }

  const updatedReadme = readme.replace(
    readmePattern,
    `\`${ruleCount}\` rules across \`${categoryCount}\` categories`,
  );

  writeFileSync(readmePath, updatedReadme);
}

mkdirSync(dirname(badgePath), { recursive: true });
writeFileSync(
  badgePath,
  `${JSON.stringify(
    {
      schemaVersion: 1,
      label: 'rules',
      message: String(ruleCount),
      color: '0a7f5a',
    },
    null,
    2,
  )}\n`,
);

console.log(
  `Updated README and badge artifacts for ${ruleCount} shipped rules.`,
);
