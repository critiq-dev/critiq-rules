---
"@critiq/rules": feat
---

Add two TypeScript/JavaScript security rules (`ts.security.log-injection`, `ts.security.debug-statement-in-source`), matching RuleSpecs and fixtures, and refresh catalog counts and badges (121 -> 123). Targets the broader pino/winston/bunyan/consola logger families and leftover `console.trace()` calls in production paths.
