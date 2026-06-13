---
'@critiq/rules': minor
---

feat: tune no-deprecated-react-dom-root-api for precision — exclude DefinitelyTyped v15/v16 type-tests and embed SDKs

- Adds `scope.paths.exclude` for DefinitelyTyped React DOM v15/v16 type definition paths (`types/react-dom/v15/**`, `types/react-dom/v16/**`)
- Adds `scope.paths.exclude` for embed SDK packages (`embed-*/**`) that intentionally use `ReactDOM.render` for cross-version compatibility
- Improves rule message with cross-version compatibility guidance and React 18 migration code example
- Adds fixture files for excluded path patterns (v15 type-test, embed SDK) to prevent regression
