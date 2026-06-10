---
"@critiq/rules": minor
---

Add 7 new rules, 1 alias update for JavaScript batch-01 parity:

- `ts.correctness.new-symbol-instance` (JS-0233) — flags `new Symbol()` instantiation
- `ts.correctness.var-declaration` (JS-0239) — flags `var` instead of `let`/`const`
- `ts.correctness.parse-int-on-number-literal` (JS-0253) — flags `parseInt` on number literals
- `ts.correctness.assignment-to-exports` (JS-0256) — flags direct `exports` reassignment
- `ts.correctness.extraneous-import` (JS-0257) — flags unused import bindings
- `ts.correctness.callback-missing-error-handling` (JS-0254) — experimental, flags callbacks ignoring error params
- `ts.correctness.callback-not-error-first` (JS-0255) — experimental, flags non-error-first callback convention

Alias updates:
- `ts.correctness.this-before-super` — added JS-0235 alias
