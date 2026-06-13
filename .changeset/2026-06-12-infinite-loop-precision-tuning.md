---
'@critiq/rules': minor
---

**ts.correctness.infinite-loop**: precision + severity + message tuning

- Added `scope.paths.exclude` for ESLint code-path-analysis test fixtures,
  DefinitelyTyped type-test files, and tests/fixtures directories
- Lowered severity from `high` to `medium` (correctness bug, not a security
  vulnerability)
- Improved title ("Loop has no exit condition — add a break, return, or exit
  condition"), summary, rationale, and remediation message
