---
"@critiq/rules": patch
---

Add twelve OSS TypeScript framework security rules covering Angular, NestJS, Apollo, Express, Fastify, Next.js, and React:

- `ts.security.angular-dom-sanitizer-bypass-untrusted-input`
- `ts.security.apollo-server-csrf-disabled`
- `ts.security.apollo-server-introspection-exposure`
- `ts.security.apollo-server-missing-query-limits`
- `ts.security.express-unbounded-body-parser`
- `ts.security.fastify-excessive-body-limit`
- `ts.security.nestjs-helmet-after-route-mount`
- `ts.security.nestjs-missing-global-validation-pipe`
- `ts.security.nestjs-skip-throttle-sensitive-route`
- `ts.security.nestjs-validation-pipe-without-whitelist`
- `ts.next.server-action-missing-local-auth`
- `ts.react.no-effect-fetch-without-cancellation`

Includes matching RuleSpecs and fixtures, and refreshes catalog counts and badges.
