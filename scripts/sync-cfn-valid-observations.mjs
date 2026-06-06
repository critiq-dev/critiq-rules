import {
  existsSync,
  readdirSync,
  readFileSync,
  writeFileSync,
} from 'node:fs';
import { join, resolve } from 'node:path';

const workspaceRoot = resolve(import.meta.dirname, '..');
const specsRoot = resolve(workspaceRoot, 'libs/rules/catalog/specs/cfn');
const fixturesRoot = join(specsRoot, 'fixtures');

const UNRELATED_BY_PREFIX = {
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

function getUnrelatedFact(externalId) {
  const prefix = externalId[0];
  let unrelated = UNRELATED_BY_PREFIX[prefix] ?? UNRELATED_BY_PREFIX.E;

  if (unrelated.ruleId === externalId) {
    unrelated =
      prefix === 'E' ? UNRELATED_BY_PREFIX.W : UNRELATED_BY_PREFIX.E;
  }

  return unrelated;
}

function buildValidObservation(externalId) {
  const unrelated = getUnrelatedFact(externalId);

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

function readExternalIdFromInvalid(invalidPath) {
  const observation = JSON.parse(readFileSync(invalidPath, 'utf8'));
  const ruleId = observation?.semantics?.controlFlow?.facts?.[0]?.props?.ruleId;

  if (typeof ruleId !== 'string' || ruleId.length === 0) {
    throw new Error(`Unable to read ruleId from ${invalidPath}`);
  }

  return ruleId;
}

function updateSpecYaml(specPath, critiqId) {
  const validPath = `./fixtures/${critiqId}/valid.observation.json`;
  const specText = readFileSync(specPath, 'utf8');
  const updated = specText.replace(
    /observationPath: \.\/fixtures\/project-common\/valid\.observation\.json/gu,
    `observationPath: ${validPath}`,
  );

  if (updated === specText) {
    throw new Error(`Spec ${specPath} does not reference project-common valid fixture.`);
  }

  writeFileSync(specPath, updated);
}

function main() {
  const fixtureDirectories = readdirSync(fixturesRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && entry.name !== 'project-common')
    .map((entry) => entry.name)
    .sort();

  let created = 0;

  for (const critiqId of fixtureDirectories) {
    const fixtureDir = join(fixturesRoot, critiqId);
    const invalidPath = join(fixtureDir, 'invalid.observation.json');
    const validPath = join(fixtureDir, 'valid.observation.json');
    const specPath = join(specsRoot, `${critiqId}.spec.yaml`);

    if (!existsSync(invalidPath)) {
      throw new Error(`Missing invalid fixture for ${critiqId}`);
    }

    if (!existsSync(specPath)) {
      throw new Error(`Missing spec for ${critiqId}`);
    }

    const externalId = readExternalIdFromInvalid(invalidPath);

    writeFileSync(
      validPath,
      `${JSON.stringify(buildValidObservation(externalId), null, 2)}\n`,
    );
    updateSpecYaml(specPath, critiqId);
    created += 1;
  }

  console.log(`Synced ${created} cfn valid.observation.json fixtures.`);
}

main();
