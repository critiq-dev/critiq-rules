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
cd ../critiq-core
npm install
npm run build

cd ../critiq-rules
npm install
npm run verify
```

The package overrides in this repo point at `../critiq-core/dist/...` so the
core workspace must be built before installing dependencies here.
