import {
  mkdirSync,
  readFileSync,
  readdirSync,
  rmSync,
  writeFileSync,
} from 'node:fs';
import { dirname, join, resolve } from 'node:path';

const workspaceRoot = resolve(import.meta.dirname, '..');
const mappingPath = resolve(
  workspaceRoot,
  '../context/research/competitors/deepsource/rule-mapping-cfn-lint.md',
);
const storyCandidates = [
  '../context/domains/oss/stories/planned/rules/deepsource-cfn-lint-analyzer-rule-parity-core.md',
  '../context/domains/oss/stories/done/rules/deepsource-cfn-lint-analyzer-rule-parity-core.md',
].map((relativePath) => resolve(workspaceRoot, relativePath));
const catalogPath = resolve(workspaceRoot, 'libs/rules/catalog/catalog.yaml');
const rulesRoot = resolve(workspaceRoot, 'libs/rules/catalog/rules/cfn');
const specsRoot = resolve(workspaceRoot, 'libs/rules/catalog/specs/cfn');
const fixturesRoot = join(specsRoot, 'fixtures');

const SECURITY_CODES = new Set([
  'E1027',
  'E2507',
  'W2501',
  'W3037',
  'W3045',
  'W4002',
]);

const REPRESENTATIVE_CODES = new Set([
  'E1020',
  'E2014',
  'E3003',
  'W2001',
  'W2501',
  'W3010',
  'I1022',
  'I2010',
  'I3100',
]);

function parseMappingRows(markdown) {
  const rows = [];
  const rowPattern =
    /\|\s*\[`(CFLIN-[EWI]\d+)`\][^|]*\|\s*([^|]+?)\s*\|\s*[^|]*\|/gu;

  for (const match of markdown.matchAll(rowPattern)) {
    const directoryCode = match[1];
    const title = match[2].trim();
    const externalId = directoryCode.replace(/^CFLIN-/u, '');

    rows.push({
      directoryCode,
      externalId,
      title,
    });
  }

  return rows;
}

function parseStoryCodes(markdown) {
  const codes = [];
  const codePattern = /^CFLIN-[EWI]\d+$/u;

  for (const line of markdown.split('\n')) {
    const trimmed = line.trim();

    if (codePattern.test(trimmed)) {
      codes.push(trimmed.replace(/^CFLIN-/u, ''));
    }
  }

  return codes;
}

function titleToSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/gu, '-')
    .replace(/^-+|-+$/gu, '')
    .replace(/-{2,}/gu, '-');
}

function getRuleCategory(externalId) {
  if (SECURITY_CODES.has(externalId)) {
    return 'security';
  }

  if (externalId.startsWith('I') || externalId.startsWith('W')) {
    return 'maintainability';
  }

  return 'correctness';
}

function getFindingCategory(externalId) {
  if (SECURITY_CODES.has(externalId)) {
    return 'security.configuration';
  }

  if (externalId.startsWith('I') || externalId.startsWith('W')) {
    return 'maintainability.configuration';
  }

  return 'correctness.configuration';
}

function getSeverity(externalId) {
  if (externalId.startsWith('E')) {
    return 'high';
  }

  if (externalId.startsWith('W')) {
    return 'medium';
  }

  return 'low';
}

function getConfidence(externalId) {
  if (externalId.startsWith('E')) {
    return 0.9;
  }

  if (externalId.startsWith('W')) {
    return 0.85;
  }

  return 0.8;
}

function sentenceCase(title) {
  if (!title) {
    return title;
  }

  return title.charAt(0).toUpperCase() + title.slice(1);
}

function yamlScalar(value) {
  if (/[:#{}[\],&*!|>'"%@`]/u.test(value) || value.startsWith('-')) {
    return JSON.stringify(value);
  }

  return value;
}

function buildRuleYaml(rule) {
  const referencesBlock =
    rule.category === 'security'
      ? `  references:
    - kind: url
      title: AWS CloudFormation Linter (${rule.externalId})
      url: https://github.com/aws-cloudformation/cfn-lint
`
      : '';

  return `apiVersion: critiq.dev/v1alpha1
kind: Rule
metadata:
  id: ${rule.critiqId}
  title: ${yamlScalar(sentenceCase(rule.title))}
  summary: ${yamlScalar(sentenceCase(rule.title))}
  rationale: ${yamlScalar(`cfn-lint reports ${rule.externalId} when ${rule.title}.`)}
  aliases:
    - ${rule.directoryCode}
  tags:
    - cfn
    - cfn-lint
    - cloudformation
    - ${rule.externalId.toLowerCase()}
    - rules-catalog
  stability: stable
  appliesTo: file
  detection:
    kind: pattern
${referencesBlock}scope:
  languages:
    - all
  paths:
    include:
      - "**/*.yaml"
      - "**/*.yml"
      - "**/*.json"
    exclude:
      - "**/node_modules/**"
match:
  fact:
    kind: cfn.lint.finding
    bind: finding
    where:
      - path: ruleId
        equals: ${rule.externalId}
emit:
  finding:
    category: ${rule.findingCategory}
    severity: ${rule.severity}
    confidence: ${rule.confidence}
    tags:
      - cfn
      - cloudformation
  message:
    title: ${yamlScalar(sentenceCase(rule.title))}
    summary: "${'${captures.finding.text}'} matches cfn-lint ${rule.externalId}."
  remediation:
    summary: ${yamlScalar(`Resolve the cfn-lint ${rule.externalId} finding in this CloudFormation template.`)}
`;
}

function getUnrelatedFact(externalId) {
  const unrelatedByPrefix = {
    E: {
      ruleId: 'W2001',
      message: 'Check if parameters are used',
    },
    W: {
      ruleId: 'E1001',
      message: 'Basic cloudformation template configuration',
    },
    I: {
      ruleId: 'E1001',
      message: 'Basic cloudformation template configuration',
    },
  };
  const prefix = externalId[0];
  let unrelated = unrelatedByPrefix[prefix] ?? unrelatedByPrefix.E;

  if (unrelated.ruleId === externalId) {
    unrelated = prefix === 'E' ? unrelatedByPrefix.W : unrelatedByPrefix.E;
  }

  return unrelated;
}

function buildSpecYaml(rule) {
  const fixtureBase = `./fixtures/${rule.critiqId}`;

  return `apiVersion: critiq.dev/v1alpha1
kind: RuleSpec
rulePath: ../../rules/cfn/${rule.critiqId}.rule.yaml
fixtures:
  - name: flags ${rule.externalId} finding
    observationPath: ${fixtureBase}/invalid.observation.json
    expect:
      findingCount: 1
      allRuleIds:
        - ${rule.critiqId}
      allSeverities:
        - ${rule.severity}
  - name: ignores unrelated findings
    observationPath: ${fixtureBase}/valid.observation.json
    expect:
      findingCount: 0
      allRuleIds: []
`;
}

function buildValidObservation(rule) {
  const unrelated = getUnrelatedFact(rule.externalId);

  return {
    path: 'template.yaml',
    language: 'all',
    text: 'AWSTemplateFormatVersion: "2010-09-09"\n',
    nodes: [],
    semantics: {
      controlFlow: {
        functions: [],
        blocks: [],
        edges: [],
        facts: [
          {
            id: `fact-${unrelated.ruleId.toLowerCase()}-unrelated`,
            kind: 'cfn.lint.finding',
            appliesTo: 'file',
            range: {
              startLine: 1,
              startColumn: 1,
              endLine: 1,
              endColumn: 30,
            },
            text: `${unrelated.ruleId}: ${unrelated.message}`,
            props: {
              ruleId: unrelated.ruleId,
              message: unrelated.message,
            },
          },
        ],
      },
    },
  };
}

function buildInvalidObservation(rule) {
  return {
    path: 'template.yaml',
    language: 'all',
    text: 'AWSTemplateFormatVersion: "2010-09-09"\n',
    nodes: [],
    semantics: {
      controlFlow: {
        functions: [],
        blocks: [],
        edges: [],
        facts: [
          {
            id: `fact-${rule.externalId.toLowerCase()}`,
            kind: 'cfn.lint.finding',
            appliesTo: 'file',
            range: {
              startLine: 1,
              startColumn: 1,
              endLine: 1,
              endColumn: 30,
            },
            text: `${rule.externalId}: ${rule.title}`,
            props: {
              ruleId: rule.externalId,
              directoryCode: rule.directoryCode,
              message: rule.title,
            },
          },
        ],
      },
    },
  };
}

function buildCatalogEntry(rule) {
  const presets =
    rule.category === 'security' ? ['strict', 'security'] : ['strict'];

  return [
    `  - id: ${rule.critiqId}`,
    `    rulePath: ./rules/cfn/${rule.critiqId}.rule.yaml`,
    '    presets:',
    ...presets.map((preset) => `      - ${preset}`),
  ].join('\n');
}

function resetGeneratedTree(directory) {
  if (!directory.includes('/rules/cfn') && !directory.includes('/specs/cfn')) {
    return;
  }

  rmSync(directory, { recursive: true, force: true });
  mkdirSync(directory, { recursive: true });
}

function loadExistingCatalogEntries(catalogText) {
  const lines = catalogText.split('\n');
  const kept = [];
  let skipping = false;

  for (const line of lines) {
    if (line.startsWith('  - id: cfn.')) {
      skipping = true;
      continue;
    }

    if (skipping) {
      if (line.startsWith('  - id: ') && !line.startsWith('  - id: cfn.')) {
        skipping = false;
        kept.push(line);
      }

      continue;
    }

    kept.push(line);
  }

  return kept.join('\n').replace(/\n{3,}/gu, '\n\n');
}

function main() {
  const mappingMarkdown = readFileSync(mappingPath, 'utf8');
  const storyPath = storyCandidates.find((candidate) => {
    try {
      readFileSync(candidate, 'utf8');
      return true;
    } catch {
      return false;
    }
  });

  if (!storyPath) {
    throw new Error(
      `Unable to locate cfn-lint parity story at ${storyCandidates.join(' or ')}.`,
    );
  }

  const storyMarkdown = readFileSync(storyPath, 'utf8');
  const mappingRows = parseMappingRows(mappingMarkdown);
  const storyCodes = parseStoryCodes(storyMarkdown);

  if (mappingRows.length !== storyCodes.length) {
    throw new Error(
      `Mapping row count (${mappingRows.length}) does not match story appendix (${storyCodes.length}).`,
    );
  }

  const mappingByExternalId = new Map(
    mappingRows.map((row) => [row.externalId, row]),
  );

  for (const externalId of storyCodes) {
    if (!mappingByExternalId.has(externalId)) {
      throw new Error(`Missing mapping row for ${externalId}.`);
    }
  }

  const usedSlugs = new Map();
  const rules = storyCodes.map((externalId) => {
    const row = mappingByExternalId.get(externalId);
    const category = getRuleCategory(externalId);
    let slug = titleToSlug(row.title);

    if (usedSlugs.has(slug)) {
      slug = `${slug}-${externalId.toLowerCase()}`;
    }

    usedSlugs.set(slug, externalId);

    return {
      ...row,
      slug,
      critiqId: `cfn.${category}.${slug}`,
      category,
      findingCategory: getFindingCategory(externalId),
      severity: getSeverity(externalId),
      confidence: getConfidence(externalId),
      representative: REPRESENTATIVE_CODES.has(externalId),
    };
  });

  const duplicateIds = rules
    .map((rule) => rule.critiqId)
    .filter((id, index, all) => all.indexOf(id) !== index);

  if (duplicateIds.length > 0) {
    throw new Error(`Duplicate Critiq rule ids: ${duplicateIds.join(', ')}`);
  }

  resetGeneratedTree(rulesRoot);
  resetGeneratedTree(specsRoot);
  mkdirSync(fixturesRoot, { recursive: true });

  for (const rule of rules) {
    const ruleFile = join(rulesRoot, `${rule.critiqId}.rule.yaml`);
    const specFile = join(specsRoot, `${rule.critiqId}.spec.yaml`);
    const fixtureDir = join(fixturesRoot, rule.critiqId);

    mkdirSync(fixtureDir, { recursive: true });
    writeFileSync(ruleFile, buildRuleYaml(rule));
    writeFileSync(specFile, buildSpecYaml(rule));
    writeFileSync(
      join(fixtureDir, 'invalid.observation.json'),
      `${JSON.stringify(buildInvalidObservation(rule), null, 2)}\n`,
    );
    writeFileSync(
      join(fixtureDir, 'valid.observation.json'),
      `${JSON.stringify(buildValidObservation(rule), null, 2)}\n`,
    );
  }

  const catalogText = loadExistingCatalogEntries(readFileSync(catalogPath, 'utf8'));
  const catalogEntries = rules.map((rule) => buildCatalogEntry(rule)).join('\n');
  const updatedCatalog = `${catalogText.trimEnd()}\n${catalogEntries}\n`;

  writeFileSync(catalogPath, updatedCatalog);

  const representative = rules.filter((rule) => rule.representative);

  console.log(`Generated ${rules.length} CloudFormation cfn-lint parity rules.`);
  console.log(
    `Representative specs: ${representative.map((rule) => rule.critiqId).join(', ')}`,
  );
}

main();
