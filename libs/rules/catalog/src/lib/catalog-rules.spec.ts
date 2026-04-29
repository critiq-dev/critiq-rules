import { loadRuleCatalogFile } from '@critiq/core-catalog';
import { runRuleSpec } from '@critiq/testing-harness';
import { readdirSync, readFileSync } from 'node:fs';
import { relative, resolve } from 'node:path';

function collectFiles(directory: string, suffix: string): string[] {
  return readdirSync(directory, { withFileTypes: true })
    .flatMap((entry) => {
      const entryPath = resolve(directory, entry.name);

      if (entry.isDirectory()) {
        return collectFiles(entryPath, suffix);
      }

      return entry.name.endsWith(suffix) ? [entryPath] : [];
    })
    .sort((left, right) => left.localeCompare(right));
}

describe('rules catalog rule specs', () => {
  const catalogPath = resolve(__dirname, '../../catalog.yaml');
  const rulesDirectory = resolve(__dirname, '../../rules');
  const specsDirectory = resolve(__dirname, '../../specs');
  const specPaths = collectFiles(specsDirectory, '.spec.yaml');

  it('keeps catalog entries, rule files, and spec files in sync', () => {
    const loadedCatalog = loadRuleCatalogFile(catalogPath);

    expect(loadedCatalog.success).toBe(true);

    if (!loadedCatalog.success) {
      throw new Error(
        loadedCatalog.diagnostics
          .map((diagnostic) => `${diagnostic.code}: ${diagnostic.message}`)
          .join('\n'),
      );
    }

    const catalogRuleIds = loadedCatalog.data.rules
      .map((ruleEntry) => ruleEntry.id)
      .sort((left, right) => left.localeCompare(right));
    const catalogRuleFiles = loadedCatalog.data.rules
      .map((ruleEntry) =>
        ruleEntry.rulePath.replace(/^\.\/rules\//u, ''),
      )
      .sort((left, right) => left.localeCompare(right));
    const discoveredRuleFiles = collectFiles(rulesDirectory, '.rule.yaml').map((rulePath) =>
      relative(rulesDirectory, rulePath).replace(/\\/gu, '/'),
    );
    const discoveredSpecFiles = collectFiles(specsDirectory, '.spec.yaml').map((specPath) =>
      relative(specsDirectory, specPath).replace(/\\/gu, '/'),
    );
    const topLevelSpecDirectories = readdirSync(specsDirectory, {
      withFileTypes: true,
    })
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name)
      .sort((left, right) => left.localeCompare(right));
    const discoveredSpecIds = specPaths
      .map((specPath) =>
        specPath
          .split('/')
          .at(-1)
          ?.replace(/\.spec\.yaml$/, ''),
      )
      .filter((ruleId): ruleId is string => Boolean(ruleId))
      .sort((left, right) => left.localeCompare(right));
    const referencedFixturePaths = specPaths.flatMap((specPath) =>
      [...readFileSync(specPath, 'utf8').matchAll(/^\s+(?:sourcePath|observationPath|workspacePath):\s+([^\s]+)\s*$/gm)]
        .map((match) => match[1]),
    );

    expect(discoveredRuleFiles).toEqual(catalogRuleFiles);
    expect(discoveredSpecFiles).toEqual(
      catalogRuleFiles.map((rulePath) =>
        rulePath.replace(/\.rule\.yaml$/u, '.spec.yaml'),
      ),
    );
    expect(topLevelSpecDirectories).toEqual(['shared', 'typescript']);
    expect(referencedFixturePaths.every((fixturePath) => fixturePath.startsWith('./fixtures/'))).toBe(
      true,
    );
    expect(discoveredSpecIds).toEqual(catalogRuleIds);
  });

  it.each(specPaths)('passes %s', (specPath) => {
    const result = runRuleSpec(specPath);

    expect(result).toMatchObject({
      specPath,
      success: true,
      diagnostics: [],
    });
  });
});
