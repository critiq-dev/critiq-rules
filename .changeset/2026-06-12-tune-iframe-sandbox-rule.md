---
'@critiq/rules': minor
---

feat: tune ts.security.iframe-missing-sandbox-attribute for precision

- Adds `scope.paths.exclude` for DefinitelyTyped type-test files (62.5% of FPs)
- Updates rule title, summary, and rationale to distinguish between untrusted iframes (needs sandbox) and trusted service embeds (allowFullScreen/allow signals trust)
- Improves remediation guidance with when-to-add-sandbox vs when-trust-is-intentional examples
- Adds spec fixtures for allowFullScreen and allow attribute variants
