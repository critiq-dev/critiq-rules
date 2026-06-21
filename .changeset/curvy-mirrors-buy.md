---
'@critiq/rules-catalog': patch
---

Lower `ts.correctness.no-floating-promise-in-function` severity from `high` to `medium`

Floating promises are a correctness concern (unhandled rejections, race conditions)
not a security vulnerability. `high` severity was disproportionate per the severity
calibration guide.

Changes:
- Severity: `high` → `medium`
- Path exclusions: added `scope.paths.exclude` for `**/tests/baselines/**`, `**/tests/**`, `**/test/**`, `**/*.test.*`, `**/*.spec.*`
- Message: improved title, summary, and remediation with actionable guidance (await, return, void, or .catch())
