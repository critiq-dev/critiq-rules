<h1 align="center">Critiq OSS Rules</h1>
<p align="center">
  <strong>Open source static analysis rules for deterministic code review.</strong>
</p>
<p align="center">
  <a href="https://www.npmjs.com/package/@critiq/rules"><img src="https://img.shields.io/npm/v/%40critiq%2Frules" alt="npm version" /></a>
  <a href="https://github.com/critiq-dev/critiq-rules"><img src="https://img.shields.io/badge/source-GitHub-181717?logo=github" alt="Source" /></a>
  <a href="https://github.com/critiq-dev/critiq-rules/blob/main/libs/rules/catalog/LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-blue.svg" alt="License" /></a>
</p>

---

`@critiq/rules` is the default rule catalog for [Critiq](https://critiq.dev). Use it with [`@critiq/cli`](https://www.npmjs.com/package/@critiq/cli) to scan for bugs, security issues, performance problems, and risky changes before they reach production.

Currently shipping `1243` rules across `21` categories.

```bash
npm install -D @critiq/cli @critiq/rules
npx critiq check .
```

## Documentation

- **[docs.critiq.dev](https://docs.critiq.dev)** — full documentation and rule reference
- **[critiq.dev](https://critiq.dev)** — product site
- **[critiq-core](https://github.com/critiq-dev/critiq-core)** — CLI, adapter, and engine source

## Quick links

- [Rule catalog](https://docs.critiq.dev/rules) — browse every rule with descriptions, severity, and language coverage
- [CLI guide](https://docs.critiq.dev/cli) — install, configure, and run scans locally or in CI
- [GitHub Action](https://github.com/critiq-dev/critiq-action) — inline PR review comments via `critiq-dev/critiq-action`

## Contributing

See the [contribution guide](https://github.com/critiq-dev/critiq-rules/blob/main/CONTRIBUTING.md) for local setup, rule authoring, and test expectations.

## License

`@critiq/rules` is licensed under [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0). See the package [LICENSE](https://github.com/critiq-dev/critiq-rules/blob/main/libs/rules/catalog/LICENSE).
