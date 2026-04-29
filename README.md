# Critiq Rules

`critiq-rules` owns the public OSS rule catalog and example starter pack for
Critiq.

This repository contains:

- `@critiq/rules`: the publishable OSS catalog package consumed by `critiq check`
- `@critiq/example-starter-pack`: example authoring content, fixtures, and specs

## Local Development

This workspace tests against built packages from the sibling `critiq-core`
workspace.

Typical flow:

```bash
cd critiq-rules
npm run prepare-core-link
npm install
npm run verify
```

`npm run prepare-core-link` builds the sibling `../critiq-core` workspace and
verifies every `file:../critiq-core/dist/...` package that this repo consumes.

`npm run build` also verifies that the packaged `@critiq/rules` output contains
`catalog.yaml` and every catalog-referenced rule asset.

For a packaged CLI smoke pass against the starter pack:

```bash
npm run smoke:packaged-cli
```
