# Changeset Agent Rules

Follow these rules for every file in this directory.

## 1) Immutability after commit

- A changeset file is immutable once committed.
- Do not edit, rename, or delete committed changeset files.
- If a correction is needed, add a new changeset file instead.

## 2) Required file naming format

- Every changeset filename must be: `yyyy-mm-dd-<slug>.md`
- `yyyy-mm-dd` is the authored date in UTC.
- `<slug>` is a short, kebab-case description.
- Example: `2026-05-09-python-framework-catalog-rules.md`
- The Changesets CLI may generate a random three-word filename; rename it before commit.

## 3) When a changeset is required

- Create a changeset for any user-facing change that affects the published `@critiq/rules` package.
- Use `npm run changeset` to create the entry.

## 4) Operational expectation

- Keep date-prefixed naming so `.changeset/` remains sortable by authoring date.
- This helps identify stale pending entries quickly.
