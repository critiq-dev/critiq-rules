# Critiq Rules

`@critiq/rules` is the public OSS rule catalog for Critiq.

[![npm version](https://img.shields.io/npm/v/%40critiq%2Frules)](https://www.npmjs.com/package/@critiq/rules)
[![CI status](https://github.com/critiq-dev/critiq-rules/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/critiq-dev/critiq-rules/actions/workflows/ci.yml)
[![License](https://img.shields.io/github/license/critiq-dev/critiq-rules)](https://github.com/critiq-dev/critiq-rules/blob/main/LICENSE)
[![Rule count](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/critiq-dev/critiq-rules/main/docs/assets/badges/rules-count.json)](https://github.com/critiq-dev/critiq-rules/tree/main/libs/rules/catalog/rules)

If you want the runtime, CLI, and rule DSL that execute this catalog, use [critiq-core](https://github.com/critiq-dev/critiq-core).

```bash
npm install -D @critiq/cli @critiq/rules
npx critiq check .
```

## Catalog At A Glance

The OSS catalog currently includes `112` rules across `10` categories, with `recommended`, `strict`, `security`, and `experimental` presets.

| Category | Rules | What it looks after |
| --- | ---: | --- |
| Security | 70 | Injection, auth and session gaps, unsafe transport, sensitive data exposure, unsafe file and HTML handling |
| Correctness | 15 | Async bugs, null access, control-flow mistakes, missing fallbacks, race conditions |
| Performance | 10 | Repeated IO, wasted async sequencing, hot-path loops, large retained objects, render churn |
| Quality | 10 | Error handling gaps, oversized functions, coupling, duplicated logic, and weak test coverage |
| Logging | 2 | Console usage and unsafe logging patterns |
| Config | 1 | Configuration access boundaries |
| Next | 1 | Server and client boundary leaks |
| Random | 1 | Unsafe randomness in core logic |
| React | 1 | Cascaded effect fetch patterns |
| Runtime | 1 | Debug-only statements left in shipped code |

## Rule Methodology

We want this catalog to stay high-signal.

- We add rules that catch production-relevant problems developers routinely miss in review: security flaws, correctness bugs, performance regressions, and maintainability issues with real cost.
- We prefer rules that are deterministic, explainable, and testable with fixtures.
- We avoid low-value rules that are already better enforced by TypeScript, `tsconfig`, or a standard linter configuration. A blanket `any` detector is a good example of what we do not want to spend catalog budget on.
- Every rule should earn its place by producing an actionable finding with evidence, not by restating generic style preferences.

## High-Value Rules You Can Browse

- [`security.no-sql-interpolation`](./libs/rules/catalog/rules/shared/security.no-sql-interpolation.rule.yaml): catches direct SQL string construction with untrusted input.
- [`ts.security.ssrf`](./libs/rules/catalog/rules/typescript/ts.security.ssrf.rule.yaml): flags user-controlled server-side outbound requests.
- [`ts.security.open-redirect`](./libs/rules/catalog/rules/typescript/ts.security.open-redirect.rule.yaml): catches redirect flows driven by untrusted values.
- [`ts.correctness.missing-await-on-async-call`](./libs/rules/catalog/rules/typescript/ts.correctness.missing-await-on-async-call.rule.yaml): finds async calls that silently escape control flow.
- [`ts.performance.repeated-io-in-loop`](./libs/rules/catalog/rules/typescript/ts.performance.repeated-io-in-loop.rule.yaml): identifies repeated IO work inside loops.
- [`ts.quality.logic-change-without-test-updates`](./libs/rules/catalog/rules/typescript/ts.quality.logic-change-without-test-updates.rule.yaml): flags risky logic edits without matching test movement.
- [`ts.next.no-server-client-boundary-leaks`](./libs/rules/catalog/rules/typescript/ts.next.no-server-client-boundary-leaks.rule.yaml): protects server and client boundaries in Next.js code.

## This Repository Contains

- `@critiq/rules`: the publishable OSS catalog package consumed by `critiq check`
- `@critiq/example-starter-pack`: private example authoring content, fixtures, and specs excluded from release versioning

## Local Development

This workspace tests against built packages from the sibling `critiq-core` workspace.

Typical flow:

```bash
cd critiq-rules
npm run prepare-core-link
npm install
npm run verify
```

`npm run prepare-core-link` builds the sibling `../critiq-core` workspace and verifies every `file:../critiq-core/dist/...` package that this repo consumes.

`npm run build` also verifies that the packaged `@critiq/rules` output contains `catalog.yaml` and every catalog-referenced rule asset.

When the catalog changes, refresh the README count and badge source with:

```bash
npm run update:rule-count
```

For a packaged CLI smoke pass against the starter pack:

```bash
npm run smoke:packaged-cli
```
