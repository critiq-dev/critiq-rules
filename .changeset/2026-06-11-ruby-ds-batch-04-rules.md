---
'@critiq/rules': minor
---

Add duplicate-constant-assignment, io-select-single-arg, bad-operand-order rules

New `ruby.bug-risk.*` pattern rules:
- `ruby.bug-risk.duplicate-constant-assignment` — flags duplicate constant assignments in the same file
- `ruby.bug-risk.io-select-single-arg` — flags IO.select calls with a single IO argument
- `ruby.bug-risk.bad-operand-order` — flags literal-on-left Yoda-style binary expressions
