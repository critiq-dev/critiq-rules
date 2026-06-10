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
const metadataPath = resolve(
  workspaceRoot,
  'libs/rules/catalog/catalog-metadata.json',
);
const rulesRoot = resolve(workspaceRoot, 'libs/rules/catalog/rules');
const readmePattern = /`\d+` rules across `\d+` categories/;

const LANGUAGE_LABEL_MAP = {
  typescript: 'TypeScript',
  go: 'Go',
  java: 'Java',
  php: 'PHP',
  python: 'Python',
  ruby: 'Ruby',
  rust: 'Rust',
  cfn: 'CloudFormation',
  sql: 'SQL',
  shared: 'Shared',
};

function getRuleCategory(fileName) {
  const baseName = fileName.replace(/\.rule\.yaml$/, '');
  const segments = baseName.split('.');

  if (segments[0] === 'ts' && segments.length >= 3) {
    return segments[1];
  }

  return segments[0];
}

function getLanguageDirName(prefix) {
  if (prefix === 'ts') return 'typescript';
  if (prefix === 'py') return 'python';
  if (prefix === 'cfn') return 'cfn';
  if (prefix === 'security') return 'shared';
  return prefix;
}

function collectCatalogStats(directory) {
  let ruleCount = 0;
  const categories = new Set();
  const byLanguage = {};

  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const absolutePath = resolve(directory, entry.name);

    if (entry.isDirectory()) {
      const nestedStats = collectCatalogStats(absolutePath);
      ruleCount += nestedStats.ruleCount;

      for (const category of nestedStats.categories) {
        categories.add(category);
      }

      for (const [lang, count] of Object.entries(nestedStats.byLanguage)) {
        byLanguage[lang] = (byLanguage[lang] || 0) + count;
      }

      continue;
    }

    if (entry.isFile() && entry.name.endsWith('.rule.yaml')) {
      ruleCount += 1;
      categories.add(getRuleCategory(entry.name));

      const prefix = entry.name.split('.')[0];
      const langKey = getLanguageDirName(prefix);
      byLanguage[langKey] = (byLanguage[langKey] || 0) + 1;
    }
  }

  return {
    ruleCount,
    categories,
    byLanguage,
  };
}

const { ruleCount, categories, byLanguage } = collectCatalogStats(rulesRoot);
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

const sortedLanguages = Object.entries(byLanguage)
  .sort(([, a], [, b]) => b - a)
  .reduce((acc, [lang, count]) => {
    acc[lang] = {
      count,
      label: LANGUAGE_LABEL_MAP[lang] ?? lang,
    };
    return acc;
  }, {});

const metadata = {
  schemaVersion: 1,
  totalRuleCount: ruleCount,
  lastUpdated: new Date().toISOString(),
  rulesByLanguage: sortedLanguages,
};

mkdirSync(dirname(metadataPath), { recursive: true });
writeFileSync(metadataPath, `${JSON.stringify(metadata, null, 2)}\n`);

console.log(
  `Updated README, badge, and catalog-metadata for ${ruleCount} shipped rules.`,
);
