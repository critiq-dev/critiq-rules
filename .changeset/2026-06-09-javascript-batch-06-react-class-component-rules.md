---
"@critiq/rules": minor
---

Add 6 new TypeScript/JavaScript React class-component rules for JavaScript batch 06 parity:

- `ts.react.no-set-state-in-component-will-update` (JS-0459) — setState inside componentWillUpdate
- `ts.react.no-deprecated-is-mounted` (JS-0446) — deprecated this.isMounted() usage
- `ts.react.no-should-component-update` (JS-0448) — shouldComponentUpdate override on class components
- `ts.react.no-lifecycle-method-typo` (JS-0453) — misspelled React lifecycle method names
- `ts.react.no-invalid-markup-characters` (JS-0454) — control/zero-width characters in JSX text
- `ts.react.no-render-invalid-return-type` (JS-0467) — render() returning non-JSX values

Also add aliases to two existing rules:
- `ts.react.no-set-state-in-component-did-update` → JS-0443
- `ts.react.no-direct-state-mutation` → JS-0444
