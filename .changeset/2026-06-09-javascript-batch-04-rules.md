---
'@critiq/rules': minor
---

Add 6 new rules for JavaScript parity batch 04 and 2 alias updates

New rules:
- `ts.correctness.require-outside-import` (JS-0359) — flags require() outside import
- `ts.correctness.prefer-as-const-over-literal-type` (JS-0360) — prefer as const over literal type
- `ts.correctness.prefer-includes-over-indexof` (JS-0363) — prefer includes over indexOf comparison
- `ts.correctness.prefer-nullish-coalescing` (JS-0365) — prefer ?? over || for nullish defaults
- `ts.correctness.private-member-should-be-readonly` (JS-0368) — mark never-mutated private members readonly
- `ts.correctness.missing-type-annotation` (JS-0386) — add explicit type annotations (experimental, 0.70 confidence)

Alias updates:
- `ts.correctness.missing-async-on-promise-method`: added alias JS-0373
- `ts.correctness.array-sort-without-compare`: added alias JS-0375
