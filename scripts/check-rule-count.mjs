import { existsSync, readdirSync, readFileSync } from 'node:fs';
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
const readmePattern = /`(\d+)` rules across `(\d+)` categories/;

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
const badge = JSON.parse(readFileSync(badgePath, 'utf8'));

for (const readmePath of readmePaths) {
  const readme = readFileSync(readmePath, 'utf8');
  const readmeMatch = readme.match(readmePattern);

  if (!readmeMatch) {
    throw new Error(
      `Unable to locate the rule-count snippet in ${readmePath.replace(`${workspaceRoot}/`, '')}.`,
    );
  }

  if (Number(readmeMatch[1]) !== ruleCount) {
    throw new Error(
      `README rule count drift detected in ${readmePath.replace(`${workspaceRoot}/`, '')}: expected ${ruleCount}, found ${readmeMatch[1]}.`,
    );
  }

  if (Number(readmeMatch[2]) !== categoryCount) {
    throw new Error(
      `README category count drift detected in ${readmePath.replace(`${workspaceRoot}/`, '')}: expected ${categoryCount}, found ${readmeMatch[2]}.`,
    );
  }
}

if (badge.message !== String(ruleCount)) {
  throw new Error(
    `Rule count badge drift detected: expected ${ruleCount}, found ${badge.message}.`,
  );
}

// Validate catalog-metadata.json
if (!existsSync(metadataPath)) {
  throw new Error(
    `Missing catalog-metadata.json at ${metadataPath}. Run npm run update:rule-count to generate it.`,
  );
}

const metadata = JSON.parse(readFileSync(metadataPath, 'utf8'));

if (metadata.schemaVersion !== 1) {
  throw new Error(
    `catalog-metadata.json has unsupported schemaVersion: ${metadata.schemaVersion}.`,
  );
}

if (metadata.totalRuleCount !== ruleCount) {
  throw new Error(
    `catalog-metadata.json totalRuleCount drift detected: expected ${ruleCount}, found ${metadata.totalRuleCount}.`,
  );
}

const metadataTotal = Object.values(metadata.rulesByLanguage).reduce(
  (sum, entry) => sum + entry.count,
  0,
);

if (metadataTotal !== ruleCount) {
  throw new Error(
    `catalog-metadata.json rulesByLanguage sum (${metadataTotal}) does not match totalRuleCount (${ruleCount}).`,
  );
}

for (const [lang, count] of Object.entries(byLanguage)) {
  if (!metadata.rulesByLanguage[lang]) {
    throw new Error(
      `catalog-metadata.json missing language entry for "${lang}" (expected ${count}).`,
    );
  }

  if (metadata.rulesByLanguage[lang].count !== count) {
    throw new Error(
      `catalog-metadata.json rulesByLanguage["${lang}"] count drift: expected ${count}, found ${metadata.rulesByLanguage[lang].count}.`,
    );
  }

  if (metadata.rulesByLanguage[lang].label !== (LANGUAGE_LABEL_MAP[lang] ?? lang)) {
    throw new Error(
      `catalog-metadata.json rulesByLanguage["${lang}"] label drift: expected "${LANGUAGE_LABEL_MAP[lang]}", found "${metadata.rulesByLanguage[lang].label}".`,
    );
  }
}

console.log(`Verified README, badge, and catalog-metadata counts for ${ruleCount} shipped rules.`);
