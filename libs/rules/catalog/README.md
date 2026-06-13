<h1 align="center">Critiq OSS Rules</h1>
<p align="center">
  <strong>Open source static analysis rules for deterministic code review.</strong>
</p>
<p align="center">
  <a href="https://www.npmjs.com/package/@critiq/rules"><img src="https://img.shields.io/npm/v/%40critiq%2Frules" alt="npm version" /></a>
  <a href="https://github.com/critiq-dev/critiq-rules/tree/main/libs/rules/catalog"><img src="https://img.shields.io/badge/source-GitHub-181717?logo=github" alt="Source" /></a>
  <a href="https://github.com/critiq-dev/critiq-rules/blob/main/libs/rules/catalog/LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-blue.svg" alt="License" /></a>
</p>

---

`@critiq/rules` is the default rule catalog for [Critiq](https://critiq.dev) — deterministic static analysis rules for security, correctness, performance, and code quality across TypeScript, JavaScript, Go, Java, Python, PHP, Ruby, Rust, and CloudFormation.

Currently shipping `1243` rules across `21` categories.

Use it with [`@critiq/cli`](https://www.npmjs.com/package/@critiq/cli):

```bash
npm install -D @critiq/cli @critiq/rules
npx critiq check .
```

Run against a diff:

```bash
npx critiq check . --base origin/main --head HEAD
```

## GitHub Actions

Use [`critiq-dev/critiq-action`](https://github.com/critiq-dev/critiq-action) to run Critiq in CI and post inline review comments on pull requests:

```yaml
name: Critiq Review
on:
  pull_request:

permissions:
  contents: read
  pull-requests: write

jobs:
  critiq:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v6
        with:
          fetch-depth: 0
      - uses: critiq-dev/critiq-action@v1
        with:
          fail-on-severity: off
```

See the [action README](https://github.com/critiq-dev/critiq-action/blob/main/README.md) for monorepo paths, reusable workflows, and all available inputs.

## Where to find more

- **[docs.critiq.dev](https://docs.critiq.dev)** — full documentation and rule reference
- **[docs.critiq.dev/rules](https://docs.critiq.dev/rules)** — browse every rule with descriptions, severity, and language coverage
- **[docs.critiq.dev/cli](https://docs.critiq.dev/cli)** — CLI install, configuration, presets, and output formats
- **[critiq-core](https://github.com/critiq-dev/critiq-core)** — CLI, adapter, and engine source

## License

`@critiq/rules` is licensed under [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0). See the package [LICENSE](https://github.com/critiq-dev/critiq-rules/blob/main/libs/rules/catalog/LICENSE).
