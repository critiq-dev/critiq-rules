---
'@critiq/rules-catalog': patch
---

Lower `ts.performance.unbounded-growth-memory-leak` severity from `high` to `medium`

Performance/reliability concerns should not be `high` severity per the severity
calibration guide. The rule correctly identifies unbounded collection growth but
the impact is memory pressure over time, not an active security vulnerability.

Changes:
- Severity: `high` → `medium`
- Message: expanded title, summary, and help text with when-to-fix guidance
- Spec: updated allSeverities expectation from `high` to `medium`
