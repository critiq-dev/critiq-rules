---
'@critiq/rules': minor
---

feat: tune ts.security.no-javascript-url for precision — exclude test files, GitHub Actions, and DefinitelyTyped; lower severity to medium

- Adds `scope.paths.exclude` for test files (`**/*.test.*`, `**/*.spec.*`, `**/__tests__/**`), GitHub Actions scripts (`.github/actions/**`), and DefinitelyTyped type-test files (`**/types/**/*-tests.*`)
- Lowers severity from `high` to `medium` — `javascript:` URLs in test assertions and input strings are not exploitable without reaching a browser context
- Improves message title, summary, and remediation with contextual guidance about href/src context and safe alternatives
- Adds fixture file for test-path exclusion verification (invalid.test.ts) to prevent regression
