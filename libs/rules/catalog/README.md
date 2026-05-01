<p align="center">
  <img src="https://raw.githubusercontent.com/critiq-dev/critiq-core/main/docs/assets/owl.png" alt="critiq.dev" style="max-height:200px" />
</p>

<h1 align="center">Critiq OSS Rules</h1>
<p align="center">
  <strong>Open source static analysis rules for deterministic code review.<br/>High-signal rules for security, correctness, performance, and code quality.</strong>
</p>
<p align="center">
  <a href="https://www.npmjs.com/package/@critiq/rules"><img src="https://img.shields.io/npm/v/%40critiq%2Frules" alt="npm version" /></a>
  <a href="https://github.com/critiq-dev/critiq-rules/tree/main/libs/rules/catalog"><img src="https://img.shields.io/badge/source-GitHub-181717?logo=github" alt="Source" /></a>
  <a href="https://github.com/critiq-dev/critiq-rules/blob/main/libs/rules/catalog/LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-blue.svg" alt="License" /></a>
</p>

<p align="center">
  <img
    src="https://raw.githubusercontent.com/critiq-dev/critiq-core/main/docs/assets/languages.png"
    alt="TypeScript, JavaScript, Node.js, Go, Java, Python, PHP, Ruby, and Rust support"
  />
</p>

`@critiq/rules` is the default open source rule catalog for Critiq. It ships `catalog.yaml`, preset membership, and rule YAML files for high-signal checks across TypeScript and JavaScript, plus shared security coverage for Go, Java, Python, PHP, Ruby, and Rust.

Use it with [`@critiq/cli`](https://www.npmjs.com/package/@critiq/cli):

```bash
npm install -D @critiq/cli @critiq/rules
npx critiq check .
```

Run against a diff:

```bash
npx critiq check . --base origin/main --head HEAD
```

## Catalog At A Glance

Today the catalog includes `112` rules across `10` categories, with `recommended`, `strict`, `security`, and `experimental` presets.

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

## High-Value Rules In This Catalog

| Rule title | Description |
| --- | --- |
| `Hardcoded API keys or credentials` | Source files should not embed credential-like string literals. |
| `Avoid raw or interpolated SQL`  | Database query sinks must not receive request-driven or dynamically interpolated SQL text. |
| `Path traversal via user input` | File access calls must not use request-controlled paths directly. |
| `Protect deserialization trust boundaries` | Deserializers should not consume untrusted payloads directly across a trust boundary. |
| `Server-side request forgery` | Outbound requests should not use attacker-controlled targets or private hosts. |
| `Open redirect via request-controlled target` | Redirect and navigation sinks should not use request-controlled destinations without validation. |
| `Missing authorization before sensitive action` | Sensitive backend actions should be guarded by an authorization or permission check. |
| `Use authenticated encryption for secrets and tokens`  | Session, cookie, and token encryption should provide integrity protection in the same helper. |
| `Missing await on async call` | Async functions should not drop direct async calls without awaiting them. |
| `Repeated IO call inside loop` | Database or network calls inside loops can multiply latency and load. |
| `Logic change without corresponding test updates` | Diffs that change critical logic should usually update the matching tests in the same change. |
| `Avoid server/client boundary leaks in Next.js` | Server components should not use browser-only APIs or client-only hooks without an explicit client boundary. |

## Rule Methodology

Critiq keeps the OSS catalog intentionally high-signal.

- We add rules that change code review outcomes: security flaws, correctness bugs, performance regressions, and maintainability issues with real operational cost.
- We prefer rules that are deterministic, explainable, and backed by fixtures instead of vague heuristics.
- We avoid generic style rules that compilers and standard linters already handle well.
- Every rule should produce an actionable finding with evidence, not restate general guidance.

## License

`@critiq/rules` is licensed under [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0). See the package [LICENSE](https://github.com/critiq-dev/critiq-rules/blob/main/libs/rules/catalog/LICENSE).
