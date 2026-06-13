---
'@critiq/rules': minor
---

feat: consolidate duplicate timeout/retry rules into single correctness rule

- Deprecates `ts.security.missing-request-timeout-or-retry` (was a duplicate of
  `ts.correctness.missing-timeout-on-external-call` — both fired on the same code
  locations with different severities)
- Enhances `ts.correctness.missing-timeout-on-external-call` with retry protection
  guidance in title, summary, and remediation text
- The surviving rule now covers both timeout AND retry protection expectations
