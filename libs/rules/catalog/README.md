# @critiq/rules

`@critiq/rules` is the default public OSS catalog used by `critiq check`.

It ships:

- `catalog.yaml`
- rule YAML files under `rules/`
- preset membership for `recommended`, `strict`, `security`, and `experimental`

The current catalog is still TypeScript-heavy, but the shared security baseline
also runs across Go and Python. Some rules are pure AST matches, and others
depend on adapter facts such as control-flow, async, structural, and data-flow
observations. A smaller set now depends on check-runner project heuristics for
cross-file auth, coupling, and testing checks.

## What Gets Checked

Representative examples of patterns the catalog flags today:

```ts
console.log('hello');
console.error(error);
debugger;
```

```ts
async function load() {
  fetch('/users');
}

async function callApi() {
  return fetch('/users');
}
```

```ts
function read(req: { body: any }) {
  const payload = req.body;
  return payload.user.profile.city;
}

function maybe(flag: boolean) {
  const user = flag ? { name: 'Ada' } : null;
  return user.name;
}
```

```ts
function lookup(cacheMap: Map<string, string>, key: string) {
  return cacheMap.get(key);
}

function parseIdentity(req: { headers: Record<string, string | undefined> }) {
  const token = req.headers.authorization;
  return decode(token ?? '');
}
```

```ts
const query = `SELECT * FROM users WHERE email = '${email}'`;
element.innerHTML = req.body.html;
document.write(userMarkup);
execFile(req.query.command, []);
JSON.parse(req.body.payload);
```

## Rule Register

Each entry lists the shipped rule id, its preset membership, and the main
pattern it checks.

### Logging And Runtime

- `ts.logging.no-console-log` (`recommended`, `strict`): direct `console.log(...)` calls.
- `ts.logging.no-console-error` (`recommended`, `strict`): direct `console.error(...)` calls.
- `ts.runtime.no-debugger-statement` (`recommended`, `strict`): `debugger;` statements in committed code.

### Correctness

- `ts.correctness.constant-condition` (`recommended`, `strict`): flow-control tests that resolve to a constant boolean.
- `ts.correctness.missing-await-on-async-call` (`recommended`, `strict`): direct async work dropped inside async functions without `await`.
- `ts.correctness.implicit-undefined-return` (`recommended`, `strict`): functions that return a value on some paths but fall through on others.
- `ts.correctness.unhandled-async-error` (`recommended`, `strict`, `security`): promise chains without a terminal rejection handler.
- `ts.correctness.incorrect-boolean-logic` (`recommended`, `strict`): same-discriminant comparison chains using the wrong boolean operator.
- `ts.correctness.blocking-call-in-async-flow` (`recommended`, `strict`): blocking synchronous APIs inside async code paths.
- `ts.correctness.missing-default-dispatch` (`recommended`, `strict`): `switch` or `if` dispatch chains without a default or final `else`.
- `ts.correctness.missing-timeout-on-external-call` (`recommended`, `strict`, `security`): `fetch` or axios-style calls without timeout or cancellation configuration.
- `ts.correctness.possible-null-dereference` (`recommended`, `strict`): nullable local aliases dereferenced or invoked without a guard.
- `ts.correctness.nested-property-access-without-check` (`recommended`, `strict`): deep request-derived property chains without existence checks.
- `ts.correctness.unchecked-map-key-access` (`recommended`, `strict`): dictionary-like `Map#get(...)` or keyed-object reads without a presence check.
- `ts.correctness.optional-value-without-fallback` (`recommended`, `strict`): optional aliases used directly in expressions without `??`, `||`, or a guard.
- `ts.correctness.off-by-one-loop-boundary` (`recommended`, `strict`): index-based loops that skip the first element or iterate past `.length`.
- `ts.correctness.shared-state-race` (`experimental`): shared or outer-scope state mutated after an `await` boundary.
- `ts.correctness.unreachable-statement` (`recommended`, `strict`): statements after `return` or `throw`.

### Quality, Config, And Determinism

- `ts.quality.swallowed-error` (`recommended`, `strict`): `catch` blocks that drop errors silently.
- `ts.quality.function-too-large-or-complex` (`strict`): oversized or high-complexity functions.
- `ts.quality.duplicate-code-block` (`strict`): large near-identical function bodies duplicated across files.
- `ts.quality.deep-nesting` (`strict`): deeply nested control flow.
- `ts.quality.missing-error-context` (`strict`): `catch` paths that log or rethrow without preserving the original error.
- `ts.quality.tight-module-coupling` (`strict`): direct local import cycles between modules.
- `ts.quality.hardcoded-configuration-values` (`recommended`, `strict`): top-level config-like identifiers or properties bound to literals.
- `ts.quality.magic-numbers-or-strings` (`strict`): non-trivial literals embedded directly in logic.
- `ts.quality.missing-tests-for-critical-logic` (`strict`): critical auth or payment-like logic without a matching test file.
- `ts.quality.logic-change-without-test-updates` (`strict`): changed critical logic in a diff without a changed matching test file.
- `ts.config.no-process-env-outside-config` (`strict`): `process.env.*` access outside config modules.
- `ts.random.no-math-random-in-core` (`strict`): `Math.random()` under `**/core/**`.

### Performance

- `ts.performance.sequential-async-calls` (`recommended`, `strict`): independent awaited calls serialized in one block.
- `ts.performance.repeated-io-in-loop` (`recommended`, `strict`): direct or one-hop local IO helpers invoked inside loops.
- `ts.performance.repeated-expensive-computation` (`recommended`, `strict`): the same expensive computation repeated in a local block.
- `ts.performance.inefficient-data-structure-usage` (`recommended`, `strict`): linear membership scans or key-projection checks where a better lookup structure fits.
- `ts.performance.nested-loops-hot-path` (`strict`): loop nesting that creates quadratic hot paths.
- `ts.performance.missing-batch-operations` (`strict`): looped one-by-one helper calls when a batch or bulk variant is available locally.
- `ts.performance.large-payload-without-streaming` (`strict`): likely large file or response payloads loaded eagerly instead of streamed.
- `ts.performance.unbounded-growth-memory-leak` (`strict`): shared collections that only grow and never evict.
- `ts.performance.retained-large-object` (`experimental`): large payloads assigned into shared state and retained longer than needed.
- `ts.performance.unnecessary-rerenders-from-state-misuse` (`experimental`): React state setters called directly during render.

### Security

- `security.no-sql-interpolation` (`recommended`, `strict`, `security`): raw or interpolated SQL text passed into query sinks.
- `ts.security.no-dynamic-execution` (`recommended`, `strict`, `security`): `eval`, `Function`, `vm`, or string-evaluated timer execution.
- `security.no-request-path-file-read` (`recommended`, `strict`, `security`): file reads using request-controlled paths.
- `ts.security.non-literal-fs-filename` (`recommended`, `strict`, `security`): direct filesystem reads using request- or upload-controlled filenames.
- `ts.security.file-generation` (`recommended`, `strict`, `security`): local file writes whose destination path is derived from external input.
- `ts.security.external-file-upload` (`recommended`, `strict`, `security`): upload handlers that persist attacker-controlled filenames directly.
- `security.no-command-execution-with-request-input` (`recommended`, `strict`, `security`): process execution helpers given request-controlled executables or shell-interpreted arguments.
- `ts.security.dangerous-insert-html` (`recommended`, `strict`, `security`): unsafe `outerHTML`, `document.write*`, or `insertAdjacentHTML` use with non-literal, non-sanitized HTML.
- `ts.security.dangerously-set-inner-html` (`recommended`, `strict`, `security`): React `dangerouslySetInnerHTML` given non-literal, non-sanitized HTML.
- `ts.security.no-innerhtml-assignment` (`recommended`, `strict`, `security`): `innerHTML` assignment without fixed or explicitly sanitized HTML.
- `security.no-hardcoded-credentials` (`recommended`, `strict`, `security`): credential-like literals embedded in source.
- `ts.security.handlebars-no-escape` (`recommended`, `strict`, `security`): `Handlebars.compile(..., { noEscape: true })`.
- `ts.security.missing-authorization-before-sensitive-action` (`strict`, `security`): backend-like sensitive handlers without a local authorization guard.
- `ts.security.missing-ownership-validation` (`strict`, `security`): auth-gated handlers acting on caller-supplied resource ids without an ownership check.
- `ts.security.frontend-only-authorization` (`experimental`): frontend-auth-gated literal route calls whose matching backend route lacks authorization.
- `ts.security.token-or-session-not-validated` (`recommended`, `strict`, `security`): token or session values from external input used without same-function validation.
- `security.tls-verification-disabled` (`recommended`, `strict`, `security`): transport clients configured to skip certificate verification.
- `security.insecure-http-transport` (`recommended`, `strict`, `security`): outbound requests sent over plain HTTP to non-local endpoints.
- `security.weak-hash-algorithm` (`recommended`, `strict`, `security`): MD5, SHA-1, or similar weak hashing primitives used in security-sensitive flows.
- `ts.security.weak-cipher-or-mode` (`recommended`, `strict`, `security`): weak or obsolete cipher selections such as ECB mode, DES-family ciphers, RC4, Blowfish, or RSA no-padding.
- `ts.security.predictable-token-generation` (`recommended`, `strict`, `security`): auth-like tokens, invite codes, or reset helpers derived from `Math.random`, timestamps, or other predictable sources.
- `ts.security.insufficiently-random-values` (`recommended`, `strict`, `security`): secret-like values generated from cryptographic APIs with less than 16 bytes of entropy.
- `ts.security.weak-key-strength` (`recommended`, `strict`, `security`): explicit RSA, AES, or HMAC key-generation settings below modern minimum sizes.
- `ts.security.missing-integrity-check` (`recommended`, `strict`, `security`): token or secret encryption helpers using non-AEAD modes or predictable IVs without same-function integrity protection.
- `ts.security.insecure-password-hash-configuration` (`recommended`, `strict`, `security`): legacy or obsolete password-hash configuration such as insecure Argon2 mode selections.
- `ts.security.unvalidated-external-input` (`strict`, `security`): request-derived values used to construct `RegExp` or `URL` without validation.
- `security.unsafe-deserialization` (`recommended`, `strict`, `security`): `JSON.parse`, `yaml.load`, `qs.parse`, or similar deserializers fed external input.
- `ts.security.missing-request-timeout-or-retry` (`strict`, `security`): external calls with neither timeout or cancellation nor retry protection.
- `ts.security.unsanitized-http-response` (`recommended`, `strict`, `security`): raw `res.send`, `res.write`, or `res.end` output of request-derived HTML without trusted escaping or sanitization.
- `ts.security.permissive-file-permissions` (`recommended`, `strict`, `security`): world-accessible file or directory modes on creation helpers or `chmod`.
- `ts.security.user-controlled-sendfile` (`recommended`, `strict`, `security`): `res.sendFile()` paths or options driven by external input without a trusted root.
- `ts.security.exposed-directory-listing` (`recommended`, `strict`, `security`): explicit directory-listing middleware such as `serveIndex`.

## Notes

- `recommended` is the baseline OSS preset.
- `strict` adds higher-noise or more opinionated rules.
- `security` is the security-focused slice of the catalog.
- `experimental` holds narrower heuristics that are shipped but not enabled by
  default.

For executable examples, see the sandbox scenarios under
[`critiq-sandbox/scenarios`](</Users/aavanzyl/Documents/personal/critiq/critiq-sandbox/scenarios>).
