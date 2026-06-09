---
"@critiq/rules": minor
---

Add 2 new rules and 6 alias mappings for Go security parity:

- `go.security.incomplete-hostname-regex` (alias: GO-S1016) — flags
  incomplete regular expressions for hostname validation.
- `go.security.squirrel-unsafe-quoting` (alias: GO-S1017) — flags unsafe
  `squirrel.Expr` usage with string interpolation.

Add aliases to existing rules:
- GO-S1015 → `security.no-command-execution-with-request-input`
- GO-S1019 → `go.security.jwt-without-verification`
- GO-S1020 → `go.security.tls-missing-min-version`
- GO-S1021 → `go.security.insecure-ssl-protocol`
- GO-S1022, GO-S1023 → `go.security.weak-crypto-import`
