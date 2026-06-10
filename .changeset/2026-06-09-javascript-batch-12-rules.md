---
"@critiq/rules": minor
---

Add 4 TypeScript/JavaScript rules to the OSS catalog (JavaScript parity batch 12):

- `ts.testing.no-legacy-test-waiter` (JS-0794) — flags deprecated testing-library waiter APIs (`wait()`, `waitForElement()`, `waitForDomChange()`) in unit test files
- `ts.quality.no-side-effect-in-pure-callback` (JS-0804) — flags side effects (assignments, update expressions, mutation method calls) inside getter method bodies
- `ts.vue.no-computed-missing-dependency` (JS-0813) — flags Vue Options API computed properties that reference non-reactive external data without explicit `dependencies` arrays
- `ts.react.no-hooks-rule-violation` (JS-0820) — flags React hook calls (`use[A-Z]*`) inside conditional blocks, loops, and non-component/non-hook functions

All rules include `metadata.aliases` for tracking. Testing and quality rules are experimental; react and vue rules are `strict` preset.
