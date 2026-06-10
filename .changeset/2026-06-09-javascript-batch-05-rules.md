---
'@critiq/rules': minor
---

Add 2 new rules for JavaScript parity batch 05 and 5 alias updates

New rules:
- `ts.react.no-unnecessary-fragment` (JS-0424) — flags unnecessary fragments wrapping a single child
- `ts.react.no-this-state-in-set-state` (JS-0435) — flags this.state read inside setState() calls

Alias updates:
- `ts.react.no-duplicate-jsx-attributes`: added alias JS-0419
- `ts.security.no-javascript-url`: added alias JS-0421
- `ts.react.no-target-blank-without-rel`: added alias JS-0422
- `ts.correctness.undeclared-variable`: added alias JS-0423
- `ts.react.no-set-state-in-component-did-mount`: added alias JS-0442
