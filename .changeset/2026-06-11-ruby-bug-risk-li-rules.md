---
'@critiq/rules': minor
---

Add deprecated-big-decimal-new, symbol-boolean-name, circular-argument-reference, deprecated-class-methods, disjunctive-assignment-in-constructor rules

New `ruby.bug-risk.*` pattern rules:
- `ruby.bug-risk.deprecated-big-decimal-new` — flags deprecated `BigDecimal.new` calls
- `ruby.bug-risk.symbol-boolean-name` — flags `:true` and `:false` symbol literals
- `ruby.bug-risk.circular-argument-reference` — flags method arguments that reference themselves
- `ruby.bug-risk.deprecated-class-methods` — flags deprecated `File.exists?`, `Dir.exists?`, and `iterator?`
- `ruby.bug-risk.disjunctive-assignment-in-constructor` — flags redundant `||=` in constructors
