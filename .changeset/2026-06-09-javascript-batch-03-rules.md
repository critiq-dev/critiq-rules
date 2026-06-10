---
"@critiq/rules": minor
---

Add 6 new rules for JavaScript batch-03 parity:

- `ts.correctness.invalid-shebang` (JS-0271) — flags shebang `#!` not on line 1 col 0
- `ts.correctness.deprecated-api-usage` (JS-0272) — flags deprecated API usage (`new Buffer()`, `url.parse()`, etc.)
- `ts.correctness.invalid-async-await-call` (JS-0294) — flags `await`/`for await...of` outside async function
- `ts.correctness.no-ts-suppress-directive` (JS-0295) — flags `@ts-ignore`/`@ts-nocheck`/`@ts-expect-error` directives
- `ts.runtime.process-exit-control-flow` (JS-0270) — flags `process.exit()` in finally blocks or with reachable code after
- `ts.quality.no-banned-type` (JS-0296) — flags `any` type usage
