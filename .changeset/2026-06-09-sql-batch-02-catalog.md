---
"@critiq/rules": minor
---

Add 5 SQL rules to the OSS catalog (batch 02):

- `sql.style.keyword-as-identifier` (SQL-L029) — flags SQL keywords used as table aliases
- `sql.style.trailing-select-comma` (SQL-L038) — flags trailing commas before FROM in SELECT
- `sql.style.unused-table-alias` (SQL-L025) — flags table aliases never referenced in the query
- `sql.correctness.undefined-reference` (SQL-L026) — flags qualified column references to undefined tables or aliases
- `sql.style.unqualified-references` (SQL-L027) — flags bare column references in multi-table queries

All rules are tagged as `strict` preset and `experimental` stability.
