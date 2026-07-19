#!/usr/bin/env node

/**
 * Strips inappropriate (project-folder-structure) path excludes from rule YAML files.
 * These patterns should live in the corpus-level tuning profile, not in individual rules.
 *
 * Usage: node scripts/strip-inappropriate-excludes.mjs [--dry-run]
 */

import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DRY_RUN = process.argv.includes('--dry-run');

// ─── Inappropriate patterns (project folder structure assumptions) ───
// These must NOT live in rule scope.paths.exclude.
const INAPPROPRIATE = [
  // Build / distribution output
  '**/build/**',
  '**/dist/**',
  '**/out/**',
  '**/target/**',
  '**/.next/**',
  '**/public/build/**',

  // Project organisation folders
  '**/scripts/**',
  '**/script/**',
  '**/tools/**',
  '**/bin/**',
  '**/cli/**',
  '**/cli-*/**',
  '**/infra/**',
  '**/docs/**',

  // Examples, demos, playgrounds
  '**/examples/**',
  '**/example/**',
  '**/tutorials/**',
  '**/content/tutorials/**',
  '**/demo/**',
  '**/demos/**',
  '**/playground/**',
  '**/sandbox/**',

  // Benchmarks / performance test dirs
  '**/benchmark/**',
  '**/benchmarks/**',
  '**/benches/**',
  '**/bench/**',
  '**/perf/**',
  '**/microbenchmark/**',
  '**/microbenchmarks/**',
  '**/slowMicrobenchmarks/**',
  '**/scripts/perf/**',

  // Test infrastructure (beyond standard test/ dirs)
  '**/testdata/**',
  '**/fixtures/**',
  '**/harness/**',
  '**/baselines/**',
  '**/tests/baselines/**',
  '**/test/baselines/**',
  '**/tests/fixtures/**',
  '**/tests/fixtures/code-path-analysis/**',
  '**/tests/setup/**',
  '**/tests/smoke/**',
  '**/tests/ui/**',
  '**/src/test/**',
  '**/src/testFixtures/**',
  '**/JSTests/**',
  '**/test262/**',
  '**/mjsunit/**',
  '**/compiler/*/tests/**',
  '**/src/tools/*/tests/**',

  // E2E / integration test dirs
  '**/e2e/**',
  '**/e2e-tests/**',
  '**/integration-tests/**',
  '**/smoke/**',

  // Storybook / component lib patterns
  '**/*.stories.*',
  '**/*.story.*',
  '**/components/ui/**',
  '**/primitives/**',
  '**/ui/primitives/**',

  // Generated dirs (use file-suffix **/*.generated.* instead)
  '**/generated/**',
  '**/generated-sources/**',
  '**/gen/**',

  // Setup / tooling scripts
  '**/setup/**',
  '**/setup-*',

  // Seed dirs (non-standard seed folders; standard ones like migrations/seeds stay)
  '**/seed/**',
  '**/seed*/**',

  // Mock dirs (not the dunder __mocks__ convention)
  '**/mocks/**',

  // Too-broad dirs
  '**/lib/**',
  '**/libraries/**',

  // Static assets
  '**/assets/**',
  '**/assets/javascripts/**',
  '**/_static/**',

  // Browser / sandbox
  '**/browser/**',

  // Framework-specific dirs
  '**/activerecord/**',
  '**/actionpack/**',
  '**/action_dispatch/**',
  '**/connection_adapters/**',
  '**/zone.js/**',
  '**/DefinitelyTyped/**',
  '**/prisma/**',
  '**/prisma/migrations/**',
  '**/polyfill*/**',
  '**/shim*/**',
  '**/types/react-dom/v15/**',
  '**/types/react-dom/v16/**',

  // Project-specific source structures
  '**/src/server/**',
  '**/src/commands/**',
  '**/deprecated-packages/**',
  '**/archive/**',

  // CI / tooling
  '**/.github/actions/**',
  '**/.yarn/releases/**',

  // Embedded / bundled
  '**/embed-*/**',

  // Health / DB utilities
  '**/healthcheck*',
  '**/db/upgrade.*',
  '**/unpack-*',
  '**/db/**',

  // Specific file patterns (not test suffixes)
  '**/*.bench.js',
  '**/*.bench.ts',
  '**/*.mock.*',
  '**/*.bundle.*',
  '**/*-bundle.*',
  '**/*.esbuild.*',
  '**/postinstall.*',
  '**/install.*',
  '**/create-*/**',
  '**/*.help.ts',

  // Specific filename conventions
  '**/logger.ts',
  '**/*Logger.ts',
  '**/*logger.ts',

  // Type-def test files in specific locations
  '**/types/**/*-tests.*',
  '**/types/**/*-tests.ts',
  '**/types/**/*-tests.tsx',
  '**/types/**/*.test.*',
  '**/types/**/*.spec.*',

  // Rails features dir
  '**/features/**',

  // Specific file suffixes that aren't generic
  '**/seed.*',
  '**/seed-*.*',
  '**/cli.*',
];

// ─── Also handled: patterns that look like file suffixes but embed folder paths ───
// These contain a slash before the wildcard suffix, making them folder assumptions
const FOLDER_LIKE_SUFFIX = [
  '**/*-tests/**',
];

// Build lookup set
const REMOVE_SET = new Set([...INAPPROPRIATE, ...FOLDER_LIKE_SUFFIX]);

// Patterns that should NEVER be removed (safety net)
const PROTECTED = new Set([
  '**/test/**',
  '**/tests/**',
  '**/__tests__/**',
  '**/spec/**',
  '**/*.test.*',
  '**/*.spec.*',
  '**/*Test.*',
  '**/*Tests.*',
  '**/*_test.*',
  '**/test_*.py',
  '**/node_modules/**',
  '**/vendor/**',
  '**/*.generated.*',
  '**/*.min.*',
  '**/*.min.js',
  '**/*.d.ts',
  '**/*.config.*',
  '**/*.config.cjs',
  '**/*.config.js',
  '**/*.config.mjs',
  '**/*.config.ts',
  '**/migrations/**',
  '**/seeds/**',
  '**/db/migrations/**',
  '**/db/seeds/**',
  '**/__mocks__/**',
  '**/__fixtures__/**',
  '**/__generated__/**',
]);

// ─── Helpers ───

/**
 * Extract the glob pattern from an exclude line.
 * Handles quoted, unquoted, and commented exclude entries.
 */
function extractPattern(line) {
  // Match quoted pattern
  let m = line.match(/^\s*-\s*"([^"]+)"/);
  if (m) return m[1];
  // Match unquoted pattern (stops at space or comment)
  m = line.match(/^\s*-\s+(\S+)/);
  if (m) return m[1];
  return null;
}

function shouldRemove(pattern) {
  if (PROTECTED.has(pattern)) return false;
  return REMOVE_SET.has(pattern);
}

function stripFile(filePath) {
  const original = readFileSync(filePath, 'utf8');
  const lines = original.split('\n');

  // Find the paths.exclude section
  let inPaths = false;
  let inExclude = false;
  let pathsStartLine = -1;
  let excludeStartLine = -1;
  let excludeEndLine = -1;
  let pathsIndent = '';
  let hasInclude = false;
  let hasOtherKeys = false; // keys in 'paths' besides include/exclude

  const linesToRemove = new Set();
  const excludeLines = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trimEnd();

    // Detect paths: section
    if (/^\s{2}paths:/.test(line)) {
      inPaths = true;
      pathsStartLine = i;
      pathsIndent = line.match(/^(\s*)/)[1];
      continue;
    }

    if (inPaths) {
      // Detect when we leave the paths section (same or lower indent)
      const indent = line.match(/^(\s*)/)[1];
      const contentIndent = pathsIndent + '  '; // Children of paths

      if (indent.length <= pathsIndent.length && line.trim() !== '') {
        // We've left the paths section
        if (inExclude) {
          excludeEndLine = i - 1;
        }
        inPaths = false;
        inExclude = false;
        continue;
      }

      // Check for include: key
      if (line.includes('include:')) {
        hasInclude = true;
        continue;
      }

      // Check for exclude: key
      if (line.includes('exclude:')) {
        // But only if it's at the right indent level
        const excludeMatch = line.match(/^(\s*)exclude:/);
        if (excludeMatch && indent === contentIndent) {
          inExclude = true;
          excludeStartLine = i;
          continue;
        }
      }

      // Check for other keys at paths level (like 'languages:')
      if (inPaths && !inExclude && line.trim() && !line.includes('include:') && !line.includes('exclude:') && indent === contentIndent) {
        hasOtherKeys = true;
      }

      // Collect exclude lines
      if (inExclude) {
        const itemMatch = line.match(/^\s*-\s+/);
        if (itemMatch) {
          excludeLines.push({ index: i, line });
        } else if (line.trim() === '') {
          // Empty line in exclude block
          excludeLines.push({ index: i, line });
        } else if (line.trim().startsWith('#')) {
          // Comment line in exclude block
          excludeLines.push({ index: i, line });
        } else {
          // End of exclude block
          excludeEndLine = i - 1;
          inExclude = false;
          // Re-check: maybe this is still in paths
          if (indent.length <= pathsIndent.length) {
            inPaths = false;
          }
          continue;
        }
      }
    }
  }

  // If we reached EOF with exclude still open
  if (inExclude && excludeEndLine === -1) {
    excludeEndLine = lines.length - 1;
  }

  // Now mark lines to remove
  for (const el of excludeLines) {
    const pattern = extractPattern(el.line);
    if (pattern && shouldRemove(pattern)) {
      linesToRemove.add(el.index);
      // Also remove preceding comment line(s) if they are solely about the removed line
      // Look back for standalone comment line(s)
      let lookBack = el.index - 1;
      while (lookBack >= 0 && lines[lookBack].trim().startsWith('#')) {
        // Check if this comment is not already marked
        if (!linesToRemove.has(lookBack)) {
          // Check if the next unremoved exclude line also relates to this comment
          // Simple heuristic: if the comment is immediately before the removed line,
          // and the line after the comment is being removed, remove the comment too
          linesToRemove.add(lookBack);
        }
        lookBack--;
      }
    }
  }

  if (linesToRemove.size === 0) return { filePath, changed: false, removed: [] };

  // Check if any exclude patterns remain after removal
  let remainingExcludes = false;
  for (const el of excludeLines) {
    const pattern = extractPattern(el.line);
    if (pattern && !linesToRemove.has(el.index)) {
      remainingExcludes = true;
      break;
    }
  }

  // Build new content
  const newLines = [];
  const removed = [];

  for (let i = 0; i < lines.length; i++) {
    if (linesToRemove.has(i)) {
      const pattern = extractPattern(lines[i]);
      if (pattern) removed.push(pattern);
      continue;
    }

    newLines.push(lines[i]);
  }

  // If no excludes remain, clean up the structure
  let result = newLines.join('\n');

  if (!remainingExcludes) {
    // Remove the exclude: line and any surrounding whitespace
    // Find the exclude: line index in newLines
    result = cleanEmptyExcludeBlock(result, hasInclude);
  }

  // Write if not dry run
  if (!DRY_RUN) {
    writeFileSync(filePath, result, 'utf8');
  }

  return { filePath, changed: true, removed };
}

function cleanEmptyExcludeBlock(text, hasInclude) {
  const lines = text.split('\n');
  const newLines = [];
  let skipUntilNextSection = false;
  let inPaths = false;
  let pathsIndent = '';

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (/^\s{2}paths:/.test(line)) {
      inPaths = true;
      pathsIndent = line.match(/^(\s*)/)[1];
      newLines.push(line);
      continue;
    }

    if (inPaths) {
      const indent = line.match(/^(\s*)/)[1];
      const contentIndent = pathsIndent + '  ';

      if (indent.length <= pathsIndent.length && line.trim() !== '') {
        inPaths = false;
        skipUntilNextSection = false;
        newLines.push(line);
        continue;
      }

      if (line.trim() === 'exclude:' && indent === contentIndent) {
        // Skip the exclude: line and all its children
        skipUntilNextSection = true;
        continue;
      }

      if (skipUntilNextSection) {
        if (line.trim() === '' && i < lines.length - 1) continue; // Skip blank lines in exclude block
        if (indent.length <= pathsIndent.length && line.trim() !== '') {
          skipUntilNextSection = false;
          inPaths = false;
          newLines.push(line);
        }
        continue;
      }

      newLines.push(line);
      continue;
    }

    newLines.push(line);
  }

  // If paths section now only has an empty line or nothing, remove it
  let result = newLines.join('\n');
  // Remove empty paths section: "paths:\n\n" -> ""
  result = result.replace(/\n  paths:\n\n/g, '\n');
  // Remove trailing blank at paths section
  result = result.replace(/\n  paths:\n(?!\s{4})/g, '\n');

  return result;
}

// ─── Main ───

const RULES_ROOT = join(__dirname, '..', 'libs', 'rules', 'catalog', 'rules');
const LANGUAGES = readdirSync(RULES_ROOT, { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => d.name);

const allChanges = [];

for (const lang of LANGUAGES) {
  const langDir = join(RULES_ROOT, lang);
  const files = readdirSync(langDir).filter(f => f.endsWith('.rule.yaml'));

  for (const file of files) {
    const filePath = join(langDir, file);
    const result = stripFile(filePath);
    if (result.changed) {
      allChanges.push(result);
    }
  }
}

// Report
console.log(`\n${DRY_RUN ? '[DRY RUN] ' : ''}Processed rules across ${LANGUAGES.length} languages.`);
console.log(`Files modified: ${allChanges.length}`);
console.log(`Total patterns removed: ${allChanges.reduce((sum, c) => sum + c.removed.length, 0)}`);

// Per-language breakdown
const byLang = {};
for (const c of allChanges) {
  const lang = c.filePath.split('/').slice(-2, -1)[0];
  if (!byLang[lang]) byLang[lang] = { files: 0, patterns: 0, unique: new Set() };
  byLang[lang].files++;
  byLang[lang].patterns += c.removed.length;
  c.removed.forEach(p => byLang[lang].unique.add(p));
}

console.log('\nPer-language breakdown:');
for (const [lang, stats] of Object.entries(byLang).sort()) {
  console.log(`  ${lang}: ${stats.files} files, ${stats.patterns} patterns (${stats.unique.size} unique)`);
}

// Summary of removed patterns for tuning-profile.yaml
console.log('\nUnique patterns removed (for corpus config):');
const allUnique = new Set();
for (const c of allChanges) {
  c.removed.forEach(p => allUnique.add(p));
}
const sorted = [...allUnique].sort();
for (const p of sorted) {
  console.log(`  - "${p}"`);
}

if (DRY_RUN) {
  console.log('\n[DRY RUN] No files were modified. Remove --dry-run to apply changes.');
}
