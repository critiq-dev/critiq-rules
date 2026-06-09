---
"@critiq/rules": minor
---

Add 8 SQL style rules to the OSS catalog:

- `sql.style.inconsistent-keyword-case` (SQL-L010) — detects mixed-case SQL keywords
- `sql.style.implicit-table-alias` (SQL-L011) — flags missing AS in table aliases
- `sql.style.implicit-column-alias` (SQL-L012) — flags missing AS in column aliases
- `sql.style.column-expression-without-alias` (SQL-L013) — flags computed columns without alias
- `sql.style.inconsistent-capitalization` (SQL-L014) — detects inconsistent identifier casing
- `sql.style.distinct-with-parenthesis` (SQL-L015) — flags DISTINCT used like a function call
- `sql.style.duplicate-table-aliases` (SQL-L020) — detects duplicate table aliases
- `sql.style.ambiguous-distinct` (SQL-L021) — flags DISTINCT with mixed simple and computed columns

All rules are tagged as `strict` preset and `experimental` stability.
