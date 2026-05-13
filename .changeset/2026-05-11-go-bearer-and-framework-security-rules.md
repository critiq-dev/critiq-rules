---
"@critiq/rules": feat
---

Add eleven OSS Go security rules (`go.security.*`): `echo-sensitive-binding-without-validation`, `echo-unsafe-multipart-upload`, `fiber-sensitive-binding-without-validation`, `fiber-unsafe-multipart-upload`, `gin-sensitive-binding-without-validation`, `gin-trust-all-proxies`, `gin-wildcard-cors-with-credentials`, `net-http-missing-timeouts`, `sensitive-data-egress`, `tar-path-traversal`, and `template-unescaped-request-value`. Also extends `ts.security.open-redirect` and `ts.security.ssrf` to include Go findings, adds RuleSpecs/fixtures (including Go fixtures in TypeScript rule specs), and refreshes catalog counts and badges.
