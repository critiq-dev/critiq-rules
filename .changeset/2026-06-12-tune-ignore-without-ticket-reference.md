---
'@critiq/rules': minor
---

feat: tune rust.testing.ignore-without-ticket-reference rule

- Adds scope.paths.exclude for compiler/test infrastructure paths as a precision safety net
- Updates rule title, summary, and remediation message with actionable guidance (preceding comment, same-line comment, named ignore attribute patterns)
- Adds spec fixtures for same-line comment (`good_with_comment.rs`) and named ignore (`good_named_ignore.rs`) valid patterns
