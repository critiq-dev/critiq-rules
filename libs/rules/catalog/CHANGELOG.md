# @critiq/rules

## 0.4.1

### Patch Changes

- 8f4bd4d: Lower `ts.correctness.no-floating-promise-in-function` severity from `high` to `medium`

  Floating promises are a correctness concern (unhandled rejections, race conditions)
  not a security vulnerability. `high` severity was disproportionate per the severity
  calibration guide.

  Changes:
  - Severity: `high` → `medium`
  - Path exclusions: added `scope.paths.exclude` for `**/tests/baselines/**`, `**/tests/**`, `**/test/**`, `**/*.test.*`, `**/*.spec.*`
  - Message: improved title, summary, and remediation with actionable guidance (await, return, void, or .catch())

- 8f4bd4d: Lower `ts.performance.unbounded-growth-memory-leak` severity from `high` to `medium`

  Performance/reliability concerns should not be `high` severity per the severity
  calibration guide. The rule correctly identifies unbounded collection growth but
  the impact is memory pressure over time, not an active security vulnerability.

  Changes:
  - Severity: `high` → `medium`
  - Message: expanded title, summary, and help text with when-to-fix guidance
  - Spec: updated allSeverities expectation from `high` to `medium`

## 0.4.0

### Minor Changes

- 3c42355: Ship Wave 1 benchmark peer-gap SAST rules for path-join user input, insecure Express listen bootstrap, and Python path traversal user input.
- 3c42355: Ship Wave 2 benchmark peer-gap precision updates and the taint-gated `ts.security.user-controlled-regexp` rule.
- 0f1fa17: Add 20 new `ts.correctness.*` catalog rules and wire 12 existing rules with parity aliases for JavaScript high/critical batches 01–04 (`JS-0024` through `JS-0231`).
- 0f1fa17: Add 32 PHP high/critical batch correctness rules with alias mappings for existing security and hygiene rules.
- bd4ef84: Add 20 new Python bandit security and code-quality rules: assert-outside-test, hardcoded-temp-directory, insecure-cipher, insecure-cipher-mode, insecure-xml-parser, telnet-usage, ftp-usage, insecure-crypto-import, xmlrpc-import, weak-crypto-key, insecure-ssl-version, ssh-host-key-validation, mako-insecure-templates, insecure-urllib-method, wildcard-subprocess-injection, redefined-builtin, global-statement, super-with-arguments, useless-return, and unnecessary-comprehension.
- ffb64c8: Add eight high-severity Ruby catalog rules for IO shell invocation, Rails HTTP digest auth, validation-skipping updates, inline render modes, broad exception handling, and deprecated OpenSSL and URI APIs.
- df71073: Add 8 new Rust correctness rules (strict preset) for batch 03: self-not-Self-type, invalid-regex-literal, step-by-zero, iter-next-in-for-loop, empty-range-expression, erasing-operation, identical-binary-operands, syntax-error
- df71073: Add 8 new Rust security rules (strict + security presets) for batch 07: open-redirect, invisible-unicode, const-to-mut-ptr, raw-slice-to-ptr, differently-sized-slice-conversion, actix-namedfile-path-traversal, potentially-vulnerable-regex, global-write-permission
- b8c4d52: Add 8 new Go correctness rules (strict preset) (batch 03): unreachable-switch-case, duplicate-function-arguments, duplicate-branch-body, duplicate-switch-cases, identical-binary-operands, flag-pointer-immediate-deref, terminal-call-with-defer, nil-error-returned
- b8c4d52: Add 5 new Go correctness rules (strict preset) (batch 04): off-by-one-index, incomplete-nil-check, boolean-simplification, suspicious-regex-pattern, integer-truncation
- b8c4d52: Add Go correctness unnecessary-dereference rule (strict preset) (batch 06)
- b8c4d52: Add Go correctness deferred-func-literal and redundant-type-declaration rules (strict preset) (batch 07)
- b8c4d52: Add Go bug-risk and correctness rules (strict preset) (batch 09): gin.LoadHTMLGlob ill-formed pattern, Redis incorrect arg count, Redis unimplemented method, etcd invalid Compare operator, GORM Where/Updates zero-value exclusion, signedness casting, hidden goroutine
- b8c4d52: Add 5 new Go performance rules (strict preset) (batch 11): reorder-operands, non-idiomatic-slice-zeroing, utf8-decode-rune, fmt-fprint, iowriter-write-string
- b8c4d52: Add Go correctness rules (interface-any-preferred, unnecessary-else-return, bare-return, boolean-literal-in-expression, unexported-capital-name, http-nobody-nil, string-concat-simplify) and aliases (GO-R4004 on unnecessary-dereference) (batch 12, refactoring family)
- b8c4d52: Add 5 new Go security rules (strict + security presets): decompression-bomb, http-dir-path-traversal, weak-file-permission, unsafe-defer-close, tainted-value-sink. Add alias mappings for GO-S2108 (pprof-exposed), GO-S2112/S2114 (net-http-missing-timeouts). Batch 13.
- b8c4d52: Add 7 new Go bug-risk and correctness rules (strict preset): deprecated-redis-methods, impossible-interface-nil-check, duplicate-if-else-condition, etcd-getlogger-misuse, gorm-skip-default-transaction, gorm-dry-run-enabled, reflect-makefunc-usage. Batch 14.
- b8c4d52: Add Go bug-risk rules (strict preset) (batch 10): poorly formed nilness guards, compound assignment misuse
- a98a371: Add 8 Java correctness catalog rules for batch 13: unconditional-recursion, double-checked-locking, stream-reuse, array-index-bounds, sync-on-get-class, optional-null, stringbuilder-char-ctor, static-date-field.
- a98a371: Add 8 Java OSS catalog rules for batch 14: unescaped-whitespace, unsupported-jdk-api, nan-comparison, read-resolve-return-type, serialization-method-signature, serializable-superclass, collection-remove-type-mismatch, setup-teardown-annotation.
- a98a371: Add 8 Java correctness catalog rules batch 15: `java.correctness.unsafe-collection-downcast`, `java.correctness.annotation-check-always-false`, `java.correctness.unimplementable-interface`, `java.correctness.invalid-serial-version-uid`, `java.correctness.hashcode-on-array`, `java.correctness.loop-condition-never-true`, `java.correctness.non-terminating-loop`, `java.correctness.unsupported-method-call`.
- a98a371: Add 7 Java correctness catalog rules batch 16: `java.correctness.sync-on-mutable-ref`, `java.correctness.unsync-static-lazy-init`, `java.correctness.boxed-boolean-conditional`, `java.correctness.sync-on-nullable-field`, `java.correctness.sync-on-public-field`, `java.correctness.thread-static-misuse`, `java.correctness.double-assignment`.
- a98a371: Add 6 Java correctness catalog rules batch 17: `java.correctness.invalid-time-constants`, `java.correctness.comparator-downcast-sign-flip`, `java.correctness.cacheloader-null-return`, `java.correctness.incorrect-main-signature`, `java.correctness.enum-get-class`, `java.correctness.deprecated-thread-methods`.
- a98a371: Add 5 new Java rules for batch 21 (JAVA-S): java.performance.thread-as-runnable, java.performance.url-in-collection, java.correctness.system-exit, java.performance.inefficient-string-constructor, java.performance.empty-string-constructor
- a98a371: Add 5 new Java rules and 3 alias updates for batch 23 (JAVA-P): java.performance.string-to-string, java.performance.explicit-gc, java.performance.boxed-boolean-constructor, java.performance.boxed-integer-constructor, java.performance.boxed-double-constructor; add JAVA-P0057/P0062/P0063 aliases to existing rules
- a98a371: Add 6 Java catalog rules (batch 24): java.correctness.prepared-statement-in-loop, java.correctness.assertion-in-production, java.correctness.array-compared-to-non-array, java.correctness.parameter-reassignment, java.testing.setup-without-super, java.testing.teardown-without-super; add JAVA-S0348 and JAVA-S0349 aliases to java.correctness.equals-on-array
- a98a371: Add 8 bug risk (JAVA-E) correctness rules for Java: possible-null-access,
  possible-null-access-exception, invalidated-iterator, mutable-data-exposed,
  duration-with-nanos-misuse, indexof-reversed-arguments, ncopies-argument-order,
  class-isinstance-on-class. These detect null safety issues, collection
  modification during iteration, missing defensive copies, Duration API misuse,
  reversed String.indexOf arguments, reversed Collections.nCopies arguments,
  and class.isInstance() misuse.
- a98a371: Add 6 Java OSS catalog rules for batch 15: zoneid-invalid-timezone, timezone-invalid-id, instant-unsupported-temporal-unit, iterable-path-type, throw-null, hashtable-contains-value.
- a09b194: Add `ts.correctness.new-expression-with-require` rule (JS-0261) and wire JS-0262/JS-0263 as parity aliases on existing `ts.security.unsafe-dirname-path-concat` and `ts.runtime.no-process-exit`.
- b83af7d: Add 8 SQL style rules to the OSS catalog:
  - `sql.style.inconsistent-keyword-case` (SQL-L010) — detects mixed-case SQL keywords
  - `sql.style.implicit-table-alias` (SQL-L011) — flags missing AS in table aliases
  - `sql.style.implicit-column-alias` (SQL-L012) — flags missing AS in column aliases
  - `sql.style.column-expression-without-alias` (SQL-L013) — flags computed columns without alias
  - `sql.style.inconsistent-capitalization` (SQL-L014) — detects inconsistent identifier casing
  - `sql.style.distinct-with-parenthesis` (SQL-L015) — flags DISTINCT used like a function call
  - `sql.style.duplicate-table-aliases` (SQL-L020) — detects duplicate table aliases
  - `sql.style.ambiguous-distinct` (SQL-L021) — flags DISTINCT with mixed simple and computed columns

  All rules are tagged as `strict` preset and `experimental` stability.

- b8c4d52: Add 2 new rules and 6 alias mappings for Go security parity:
  - `go.security.incomplete-hostname-regex` (alias: GO-S1016) — flags
    incomplete regular expressions for hostname validation.
  - `go.security.squirrel-unsafe-quoting` (alias: GO-S1017) — flags unsafe
    `squirrel.Expr` usage with string interpolation.

  Add aliases to existing rules:
  - GO-S1015 → `security.no-command-execution-with-request-input`
  - GO-S1019 → `go.security.jwt-without-verification`
  - GO-S1020 → `go.security.tls-missing-min-version`
  - GO-S1021 → `go.security.insecure-ssl-protocol`
  - GO-S1022, GO-S1023 → `go.security.weak-crypto-import`

- a09b194: Add 7 new rules, 1 alias update for JavaScript batch-01 parity:
  - `ts.correctness.new-symbol-instance` (JS-0233) — flags `new Symbol()` instantiation
  - `ts.correctness.var-declaration` (JS-0239) — flags `var` instead of `let`/`const`
  - `ts.correctness.parse-int-on-number-literal` (JS-0253) — flags `parseInt` on number literals
  - `ts.correctness.assignment-to-exports` (JS-0256) — flags direct `exports` reassignment
  - `ts.correctness.extraneous-import` (JS-0257) — flags unused import bindings
  - `ts.correctness.callback-missing-error-handling` (JS-0254) — experimental, flags callbacks ignoring error params
  - `ts.correctness.callback-not-error-first` (JS-0255) — experimental, flags non-error-first callback convention

  Alias updates:
  - `ts.correctness.this-before-super` — added JS-0235 alias

- a09b194: Add 6 new rules for JavaScript batch-03 parity:
  - `ts.correctness.invalid-shebang` (JS-0271) — flags shebang `#!` not on line 1 col 0
  - `ts.correctness.deprecated-api-usage` (JS-0272) — flags deprecated API usage (`new Buffer()`, `url.parse()`, etc.)
  - `ts.correctness.invalid-async-await-call` (JS-0294) — flags `await`/`for await...of` outside async function
  - `ts.correctness.no-ts-suppress-directive` (JS-0295) — flags `@ts-ignore`/`@ts-nocheck`/`@ts-expect-error` directives
  - `ts.runtime.process-exit-control-flow` (JS-0270) — flags `process.exit()` in finally blocks or with reachable code after
  - `ts.quality.no-banned-type` (JS-0296) — flags `any` type usage

- a09b194: Add 6 new rules for JavaScript parity batch 04 and 2 alias updates

  New rules:
  - `ts.correctness.require-outside-import` (JS-0359) — flags require() outside import
  - `ts.correctness.prefer-as-const-over-literal-type` (JS-0360) — prefer as const over literal type
  - `ts.correctness.prefer-includes-over-indexof` (JS-0363) — prefer includes over indexOf comparison
  - `ts.correctness.prefer-nullish-coalescing` (JS-0365) — prefer ?? over || for nullish defaults
  - `ts.correctness.private-member-should-be-readonly` (JS-0368) — mark never-mutated private members readonly
  - `ts.correctness.missing-type-annotation` (JS-0386) — add explicit type annotations (experimental, 0.70 confidence)

  Alias updates:
  - `ts.correctness.missing-async-on-promise-method`: added alias JS-0373
  - `ts.correctness.array-sort-without-compare`: added alias JS-0375

- a09b194: Add 2 new rules for JavaScript parity batch 05 and 5 alias updates

  New rules:
  - `ts.react.no-unnecessary-fragment` (JS-0424) — flags unnecessary fragments wrapping a single child
  - `ts.react.no-this-state-in-set-state` (JS-0435) — flags this.state read inside setState() calls

  Alias updates:
  - `ts.react.no-duplicate-jsx-attributes`: added alias JS-0419
  - `ts.security.no-javascript-url`: added alias JS-0421
  - `ts.react.no-target-blank-without-rel`: added alias JS-0422
  - `ts.correctness.undeclared-variable`: added alias JS-0423
  - `ts.react.no-set-state-in-component-did-mount`: added alias JS-0442

- a09b194: Add 6 new TypeScript/JavaScript React class-component rules for JavaScript batch 06 parity:
  - `ts.react.no-set-state-in-component-will-update` (JS-0459) — setState inside componentWillUpdate
  - `ts.react.no-deprecated-is-mounted` (JS-0446) — deprecated this.isMounted() usage
  - `ts.react.no-should-component-update` (JS-0448) — shouldComponentUpdate override on class components
  - `ts.react.no-lifecycle-method-typo` (JS-0453) — misspelled React lifecycle method names
  - `ts.react.no-invalid-markup-characters` (JS-0454) — control/zero-width characters in JSX text
  - `ts.react.no-render-invalid-return-type` (JS-0467) — render() returning non-JSX values

  Also add aliases to two existing rules:
  - `ts.react.no-set-state-in-component-did-update` → JS-0443
  - `ts.react.no-direct-state-mutation` → JS-0444

- a09b194: Add 8 AngularJS deprecated API rules to the OSS catalog (JavaScript parity batch 07):
  - `ts.angularjs.no-controller` (JS-0525) — flags `.controller()` calls on AngularJS modules
  - `ts.angularjs.no-deprecated-cookie-store` (JS-0530) — flags `$cookieStore` service references
  - `ts.angularjs.no-deprecated-directive-replace` (JS-0531) — flags `replace` property in directive definitions
  - `ts.angularjs.no-deprecated-http-success-error` (JS-0532) — flags `.success()` / `.error()` on `$http`
  - `ts.angularjs.inject-function-assignments-only` (JS-0546) — flags non-assignment statements in `inject()` callbacks
  - `ts.angularjs.prefer-angular-for-each` (JS-0556) — flags native `.forEach()` in AngularJS contexts
  - `ts.angularjs.no-jquery-wrapping-angular-element` (JS-0561) — flags `$(angular.element(...))` wrapping
  - `ts.angularjs.prefer-angular-is-string` (JS-0568) — flags `typeof x === "string"` in AngularJS files

  All rules are tagged as `strict` preset and `experimental` stability with `metadata.aliases` for tracking.

- a09b194: Add 4 TypeScript/JavaScript rules to the OSS catalog (JavaScript parity batch 12):
  - `ts.testing.no-legacy-test-waiter` (JS-0794) — flags deprecated testing-library waiter APIs (`wait()`, `waitForElement()`, `waitForDomChange()`) in unit test files
  - `ts.quality.no-side-effect-in-pure-callback` (JS-0804) — flags side effects (assignments, update expressions, mutation method calls) inside getter method bodies
  - `ts.vue.no-computed-missing-dependency` (JS-0813) — flags Vue Options API computed properties that reference non-reactive external data without explicit `dependencies` arrays
  - `ts.react.no-hooks-rule-violation` (JS-0820) — flags React hook calls (`use[A-Z]*`) inside conditional blocks, loops, and non-component/non-hook functions

  All rules include `metadata.aliases` for tracking. Testing and quality rules are experimental; react and vue rules are `strict` preset.

- a09b194: Add `ts.correctness.this-outside-class` (JS-B002) and `ts.correctness.unused-expression` (JS-B003) rules for JavaScript high/critical batch 13 parity.
- a09b194: Add JS-E family rules: `ts.vue.no-server-env-in-client-hooks` (JS-E1000), `ts.vue.no-browser-globals-in-created` (JS-E1001), `ts.next.no-document-import-outside-custom-document` (JS-E1002), `ts.next.no-head-import-in-custom-document` (JS-E1003), `ts.correctness.duplicate-export` (JS-E1004), `ts.correctness.namespace-import-unexported-name` (JS-E1007), `ts.correctness.unresolved-import` (JS-E1010). Add JS-E1009 alias to `ts.security.no-assign-mutable-export`.
- a09b194: Add six JS-W parity batch 16 rules: ts.correctness.non-existent-assignment-operators (JS-W1033), ts.correctness.no-href-with-nuxt-link (JS-W1034), ts.correctness.no-confusing-label-in-switch (JS-W1036), ts.testing.useless-assertion (JS-W1039), ts.correctness.flawed-string-comparison (JS-W1040), ts.correctness.simplify-boolean-return (JS-W1041).
- b83af7d: Add PHP correctness rules for batch 01: missing-return-statement, uninitialized-typed-property, throw-non-exception with alias mappings PHP-E1001, PHP-E1004, PHP-E1008.
- b83af7d: feat(php): add instanceof-invalid-type rule (PHP-E1009)

  New rule `php.correctness.instanceof-invalid-type` detects instanceof
  operands that cannot resolve to a valid class/interface/trait name.
  Registered in catalog.yaml with strict preset.

- b83af7d: Add 5 SQL rules to the OSS catalog (batch 02):
  - `sql.style.keyword-as-identifier` (SQL-L029) — flags SQL keywords used as table aliases
  - `sql.style.trailing-select-comma` (SQL-L038) — flags trailing commas before FROM in SELECT
  - `sql.style.unused-table-alias` (SQL-L025) — flags table aliases never referenced in the query
  - `sql.correctness.undefined-reference` (SQL-L026) — flags qualified column references to undefined tables or aliases
  - `sql.style.unqualified-references` (SQL-L027) — flags bare column references in multi-table queries

  All rules are tagged as `strict` preset and `experimental` stability.

- a09b194: Add 8 new Vue deprecation/correctness rules (JavaScript parity batch 11, JS-0653 through JS-0660): `ts.vue.no-deprecated-scoped-slots`, `ts.vue.no-deprecated-model-option`, `ts.vue.no-deprecated-listeners`, `ts.vue.no-keycode-modifiers`, `ts.vue.no-deprecated-keycodes-config`, `ts.vue.no-slot-property-access`, `ts.vue.require-transition-conditional`, and `ts.vue.emits-validator-return-boolean`.
- a09b194: Add 4 Vue Options API correctness rules to the OSS catalog (JavaScript parity batch 08):
  - ts.vue.no-reserved-key-overwrite (JS-0613)
  - ts.vue.no-computed-mutation (JS-0615)
  - ts.vue.prefer-prop-type-constructor (JS-0621)
  - ts.vue.no-data-object-declaration (JS-0629)

  All rules use `strict` preset and `experimental` stability with metadata.aliases.

- b8ce737: Add 4 new Java rules for batch 04 (quality + testing)
  - `java.quality.c-style-array-declaration` (JAVA-C1000)
  - `java.quality.type-name-uppercase` (JAVA-C1001)
  - `java.testing.wrong-assertion-argument-order` (JAVA-C1002)
  - `java.quality.multiple-variables-same-line` (JAVA-C1003)

- b8ce737: feat: add 4 Java documentation rules (batch 05 — JAVA-D family)

  Adds four new documentation rules to the Java catalog:
  - `java.doc.unmatched-parameter-tag` (JAVA-D1004)
  - `java.doc.parameter-tag-no-description` (JAVA-D1005)
  - `java.doc.empty-javadoc-tag` (JAVA-D1006)
  - `java.doc.malformed-javadoc-comment` (JAVA-D1007)

  Introduces the `java.doc.*` rule namespace for Javadoc documentation rules.
  All four rules are in the `recommended` preset.

- b8ce737: Add 7 Java correctness rules for Batch 06 (JAVA-E family)

  New rules:
  - java.correctness.volatile-array-elements
  - java.correctness.volatile-increment-non-atomic
  - java.correctness.unsafe-getresource
  - java.correctness.duplicate-binary-argument
  - java.correctness.illegal-monitor-state-caught
  - java.correctness.clone-without-super
  - java.correctness.equals-null

- b8ce737: Add 5 Java performance rules for Batch 06 (JAVA-P family)

  New rules:
  - java.performance.pattern-compile-in-loop
  - java.performance.non-zero-to-array
  - java.performance.keyset-instead-of-entryset
  - java.performance.replaceall-instead-of-replace
  - java.performance.single-char-string-indexof

  Also adds JAVA-P1003 alias to existing `java.correctness.prepared-statement-in-loop`.

- b8ce737: Add 8 Java correctness rules for Batch 08 (JAVA-E family)

  New rules:
  - java.correctness.equals-inherits-parent
  - java.correctness.equals-null-check
  - java.correctness.compareto-min-value
  - java.correctness.servlet-mutable-fields
  - java.correctness.runnable-run-direct
  - java.correctness.two-lock-wait
  - java.correctness.sync-boxed-primitive
  - java.correctness.class-name-collision

- b8ce737: Add 8 Java correctness rules for Batch 09 (JAVA-E family)

  New rules:
  - java.correctness.ignored-inputstream-read
  - java.correctness.ignored-inputstream-skip
  - java.correctness.constructor-starts-thread
  - java.correctness.for-loop-mismatched-increment
  - java.correctness.readline-without-null-check
  - java.correctness.unsynchronized-wait-notify
  - java.correctness.self-assignment
  - java.correctness.sync-on-lock-primitive

- b8ce737: Add 5 Java correctness rules for Batch 10 (JAVA-E family)

  New rules:
  - java.correctness.result-set-index-zero
  - java.correctness.prepared-statement-index-zero
  - java.correctness.impossible-toarray-downcast
  - java.correctness.invalid-regex-literal
  - java.correctness.lost-increment-in-assignment

  Alias updates:
  - java.correctness.equals-on-array: add JAVA-E0348
  - java.correctness.parameter-reassignment: add JAVA-E0352
  - java.correctness.servlet-mutable-fields: add JAVA-E0370

- 4c8c448: Add 3 Java correctness catalog rules for batch 13: java.correctness.random-coerced-to-zero (JAVA-E1068), java.correctness.mutable-enum-fields (JAVA-E1069), java.correctness.noallocation-method-creates-object (JAVA-E1059). Update java.correctness.catch-null-pointer with alias JAVA-E1070 and bump severity to critical.
- b8ce737: Add 5 Java OSS catalog rules for batch 14 (JAVA-E): collection-contains-self, collection-adds-self, modulus-multiplication-precedence, bitwise-or-never-equal, getter-setter-sync-mismatch. Add JAVA-E1081 alias to existing sync-on-string-literal rule.
- b8ce737: Ship 4 new Java correctness rules for batch 15: `java.correctness.threadgroup-deprecated-methods` (E1108), `java.correctness.closeable-provides-injection` (E1103), `java.correctness.non-null-method-returns-null` (E1095), and `java.correctness.missing-enum-switch-elements` (E1082).
- b8ce737: Add PHP correctness rules for batch 01 (PHP-E): php.correctness.undefined-function (PHP-E1000), php.correctness.undefined-method (PHP-E1002), php.correctness.invalid-static-method (PHP-E1003). Add alias PHP-E1007 to existing php.correctness.undefined-static-property rule.
- b8ce737: Add `php.correctness.undefined-variable` (PHP-W1066) and `php.correctness.inaccessible-property` (PHP-W1067) rules to the PHP correctness catalog.
- b8ce737: Add 2 Rust OSS quality rules: `rust.quality.deprecated-function-use` (RS-W1128, flags known deprecated std APIs) and `rust.quality.approximate-floating-constant` (RS-W1207, flags manual approximations of math constants like PI, E, TAU).
- b8ce737: Add 3 new Java performance rules: java.performance.removeall-to-clear (JAVA-P1005, critical), java.performance.string-concat-in-loop (JAVA-P1006, high), and java.performance.expensive-method-on-ui-thread (JAVA-P1007, high).
- 923d706: Add Ruby bug-risk catalog rules: with-index-value-unused, with-object-value-unused, regex-literal-in-condition, predicate-method-without-parentheses, invalid-rescue-type, unsafe-safe-navigation-chain, inconsistent-safe-navigation, and safe-navigation-with-empty.
- 923d706: Add Ruby bug-risk catalog rules: argument-overwritten-before-use, bad-rescue-ordering, outer-variable-shadowed, suppressed-exceptions, to-json-without-argument, unreachable-code, unused-method-arguments, and useless-access-modifier.
- 923d706: feat: add 8 Ruby bug-risk rules
  - `ruby.bug-risk.duplicate-case-conditions`
  - `ruby.bug-risk.duplicate-method-definitions`
  - `ruby.bug-risk.each-with-object-immutable-arg`
  - `ruby.bug-risk.else-followed-by-expression`
  - `ruby.bug-risk.empty-ensure-block`
  - `ruby.bug-risk.empty-expression`
  - `ruby.bug-risk.empty-interpolation`
  - `ruby.bug-risk.when-branch-without-body`

- 923d706: Add Ruby bug-risk rules: ruby.bug-risk.end-in-method, ruby.bug-risk.return-in-ensure, ruby.bug-risk.flip-flop-operator, ruby.bug-risk.heredoc-method-order, ruby.bug-risk.unintended-string-concatenation, ruby.bug-risk.ineffective-access-modifier, ruby.bug-risk.interpolation-in-single-quote
- 923d706: Add 8 Ruby bug risk rules: non-local exit from iterator, unsafe number conversion, bad magic comment order, grouped parentheses in function calls, invalid percent string literal, invalid percent symbol array, unnecessary require, and unnecessary splat.
- 923d706: Add deprecated-big-decimal-new, symbol-boolean-name, circular-argument-reference, deprecated-class-methods, disjunctive-assignment-in-constructor rules

  New `ruby.bug-risk.*` pattern rules:
  - `ruby.bug-risk.deprecated-big-decimal-new` — flags deprecated `BigDecimal.new` calls
  - `ruby.bug-risk.symbol-boolean-name` — flags `:true` and `:false` symbol literals
  - `ruby.bug-risk.circular-argument-reference` — flags method arguments that reference themselves
  - `ruby.bug-risk.deprecated-class-methods` — flags deprecated `File.exists?`, `Dir.exists?`, and `iterator?`
  - `ruby.bug-risk.disjunctive-assignment-in-constructor` — flags redundant `||=` in constructors

- 923d706: Add duplicate-constant-assignment, io-select-single-arg, bad-operand-order rules

  New `ruby.bug-risk.*` pattern rules:
  - `ruby.bug-risk.duplicate-constant-assignment` — flags duplicate constant assignments in the same file
  - `ruby.bug-risk.io-select-single-arg` — flags IO.select calls with a single IO argument
  - `ruby.bug-risk.bad-operand-order` — flags literal-on-left Yoda-style binary expressions

- 2324763: feat: consolidate duplicate timeout/retry rules into single correctness rule
  - Deprecates `ts.security.missing-request-timeout-or-retry` (was a duplicate of
    `ts.correctness.missing-timeout-on-external-call` — both fired on the same code
    locations with different severities)
  - Enhances `ts.correctness.missing-timeout-on-external-call` with retry protection
    guidance in title, summary, and remediation text
  - The surviving rule now covers both timeout AND retry protection expectations

- 2324763: **ts.correctness.infinite-loop**: precision + severity + message tuning
  - Added `scope.paths.exclude` for ESLint code-path-analysis test fixtures,
    DefinitelyTyped type-test files, and tests/fixtures directories
  - Lowered severity from `high` to `medium` (correctness bug, not a security
    vulnerability)
  - Improved title ("Loop has no exit condition — add a break, return, or exit
    condition"), summary, rationale, and remediation message

- 2324763: Add five high-severity Ruby OSS catalog rules: callback-order, routes-match-single-verb, redundant-foreign-key, callback-override, and irreversible-migration.
- 2324763: feat(ruby): add 8 RB-RL bug-risk catalog rules for batch 15

  Adds catalog rules for RB-RL1034-RB-RL1042:
  - ruby.bug-risk.non-null-column-without-default (RB-RL1034, high)
  - ruby.bug-risk.console-output-instead-of-logger (RB-RL1035, medium)
  - ruby.bug-risk.incorrect-pluralization (RB-RL1037, low)
  - ruby.bug-risk.use-presence-over-explicit-check (RB-RL1038, medium)
  - ruby.bug-risk.use-present-to-simplify-conditional (RB-RL1039, medium)
  - ruby.bug-risk.rake-task-missing-environment (RB-RL1040, high)
  - ruby.bug-risk.use-square-brackets-for-attributes (RB-RL1041, medium)
  - ruby.bug-risk.redundant-allow-nil (RB-RL1042, medium)

- 2324763: feat(ruby): add 6 new rules for batch 17 (RB-RL1052-RB-RL1059)

  New rules:
  - `ruby.bug-risk.plain-method-instead-of-proc` (RB-RL1052)
  - `ruby.bug-risk.time-without-zone` (RB-RL1054)
  - `ruby.bug-risk.invalid-rails-env-predicate` (RB-RL1056)
  - `ruby.bug-risk.old-style-validation-macro` (RB-RL1057)
  - `ruby.performance.enumerable-index-by` (RB-RL1058)
  - `ruby.performance.enumerable-index-with` (RB-RL1059)

- 2324763: Add ruby.performance.prefer-delete-prefix and ruby.performance.prefer-delete-suffix rules (RB-PR1026, RB-PR1027).
- 2324763: Ruby batch 05 (RB-LI-1001, 1002, 1003) ambiguous method invocation rules

  Add three new Ruby bug-risk rules for ambiguous method invocation patterns:
  - ruby.bug-risk.ambiguous-block-association (RB-LI1001)
  - ruby.bug-risk.ambiguous-operator-argument (RB-LI1002)
  - ruby.bug-risk.ambiguous-regexp-literal (RB-LI1003)

- 2324763: Add Ruby bug-risk catalog rules for batch 12 (RB-LI1079–RB-LI1091).
- 2324763: Add 7 new Ruby bug-risk rules for RB-LI batch 13: `ruby.bug-risk.self-assignment`, `ruby.bug-risk.identical-binary-operands`, `ruby.bug-risk.branches-without-body`, `ruby.bug-risk.trailing-comma-attribute`, `ruby.bug-risk.equal-instead-of-equal`, `ruby.bug-risk.invalid-integer-times`, `ruby.bug-risk.constant-in-block`. Also adds RB-LI1096 alias to existing `ruby.bug-risk.unnecessary-require`.
- 2324763: feat(ruby): add 8 RB-PR performance catalog rules for batch 16

  Adds catalog rules for RB-PR1010-RB-PR1017:
  - ruby.performance.no-static-size-computation (RB-PR1010, medium)
  - ruby.performance.prefer-flat-map (RB-PR1011, medium)
  - ruby.performance.efficient-hash-search (RB-PR1012, medium)
  - ruby.performance.prefer-struct-over-openstruct (RB-PR1013, medium)
  - ruby.performance.range-cover-over-include (RB-PR1014, medium)
  - ruby.performance.yield-over-block-call (RB-PR1015, medium)
  - ruby.performance.regex-match-over-match (RB-PR1016, medium)
  - ruby.performance.merge-single-key (RB-PR1017, medium)

- 2324763: ruby: add 8 rails framework bug-risk rules (RB-RL1001-RB-RL1008)
- 2324763: ruby: add 8 rails framework bug-risk rules (RB-RL1009-RB-RL1016)
- 2324763: Add 8 new Ruby bug-risk rules for RB-RL batch 13: `ruby.bug-risk.deprecated-find-by-dynamic` (RB-RL1017), `ruby.bug-risk.enum-array-syntax` (RB-RL1018), `ruby.bug-risk.enum-duplicate-values` (RB-RL1019), `ruby.bug-risk.rails-env-equality` (RB-RL1020), `ruby.bug-risk.exit-in-app-code` (RB-RL1021), `ruby.bug-risk.rails-root-join` (RB-RL1022), `ruby.bug-risk.where-first-over-find-by` (RB-RL1023), `ruby.bug-risk.all-each-to-find-each` (RB-RL1024).
- 2324763: Add 4 new `rust.security.*` catalog rules (`manual-error-type-id`, `unsafe-remove-dir-all`, `misused-bitwise-xor`, `missing-regex-anchor`) and add RS-S parity aliases to `weak-rsa-key-size`, `bind-all-interfaces`, `insecure-temp-file`, and `weak-crypto-import`.
- 2324763: feat: tune no-deprecated-react-dom-root-api for precision — exclude DefinitelyTyped v15/v16 type-tests and embed SDKs
  - Adds `scope.paths.exclude` for DefinitelyTyped React DOM v15/v16 type definition paths (`types/react-dom/v15/**`, `types/react-dom/v16/**`)
  - Adds `scope.paths.exclude` for embed SDK packages (`embed-*/**`) that intentionally use `ReactDOM.render` for cross-version compatibility
  - Improves rule message with cross-version compatibility guidance and React 18 migration code example
  - Adds fixture files for excluded path patterns (v15 type-test, embed SDK) to prevent regression

- 2324763: feat: tune no-flaky-timer-test for precision — exempt performance clocks and micro-delays
  - Removes `Date.now` and `performance.now` from flaky timer detection (performance measurement, not flaky timers)
  - Adds delay threshold: only flags `setTimeout`/`setInterval` with delay > 50ms (sub-50ms micro-delays for event loop yielding are now exempt)
  - No delay argument is treated as micro-delay (defaults to ~0-4ms)
  - Updates severity: remains `low` (severity schema does not support `info`)
  - Improves rule title, summary, rationale, and remediation message to reflect narrowed scope
  - Adds new fixture `performance.test.ts` verifying exemption of performance.now, Date.now, and micro-delays
  - Updates `invalid.test.ts` fixture to use 100ms delay (was 10ms, now exempt as micro-delay)
  - Updates sandbox bad-hygiene.test.ts: changes 5ms setTimeout to 100ms to remain a valid finding

- 2324763: feat: tune ts.security.iframe-missing-sandbox-attribute for precision
  - Adds `scope.paths.exclude` for DefinitelyTyped type-test files (62.5% of FPs)
  - Updates rule title, summary, and rationale to distinguish between untrusted iframes (needs sandbox) and trusted service embeds (allowFullScreen/allow signals trust)
  - Improves remediation guidance with when-to-add-sandbox vs when-trust-is-intentional examples
  - Adds spec fixtures for allowFullScreen and allow attribute variants

- 2324763: feat: tune rust.testing.ignore-without-ticket-reference rule
  - Adds scope.paths.exclude for compiler/test infrastructure paths as a precision safety net
  - Updates rule title, summary, and remediation message with actionable guidance (preceding comment, same-line comment, named ignore attribute patterns)
  - Adds spec fixtures for same-line comment (`good_with_comment.rs`) and named ignore (`good_named_ignore.rs`) valid patterns

- 2324763: feat: tune ts.security.no-javascript-url for precision — exclude test files, GitHub Actions, and DefinitelyTyped; lower severity to medium
  - Adds `scope.paths.exclude` for test files (`**/*.test.*`, `**/*.spec.*`, `**/__tests__/**`), GitHub Actions scripts (`.github/actions/**`), and DefinitelyTyped type-test files (`**/types/**/*-tests.*`)
  - Lowers severity from `high` to `medium` — `javascript:` URLs in test assertions and input strings are not exploitable without reaching a browser context
  - Improves message title, summary, and remediation with contextual guidance about href/src context and safe alternatives
  - Adds fixture file for test-path exclusion verification (invalid.test.ts) to prevent regression

- 2324763: Ruby batch 09 (RB-RL) bug-risk / framework rules
  - Add 7 new rules: redundant-with-options-receiver, class-name-should-be-string, non-preferred-assert-falseness, relative-date-as-constant, inconsistent-request-referrer, inconsistent-safe-navigation-try, safe-navigation-with-blank
  - Update irreversible-migration rule to also detect irreversible operations in `def change` methods (add RB-RL1048 alias)
  - Alias codes: RB-RL1043 through RB-RL1050

- 2324763: Add 8 new Ruby bug-risk catalog rules (RB-RL1025..RB-RL1032): `has-and-belongs-to-many`, `dependent-option-cascade`, `helper-instance-variables`, `http-methods-without-params`, `deprecated-http-status-symbols`, `skip-filter-conditional`, `missing-inverse-of`, and `undefined-action-filter`.

### Patch Changes

- ffb64c8: Extend `ts.security.open-redirect` and `ts.security.ssrf` catalog scope to Python with RuleSpec fixtures.
- df71073: Add 8 Rust correctness rules for batch 04: mistyped-suffix, forget-drop-on-reference, forget-drop-on-copy-type, nan-comparison, non-octal-permissions, non-binding-let-on-lock, unit-argument, unit-comparison.
- df71073: Add 8 Rust correctness rules for batch 05: transmute-integer-to-nonzero, transmute-int-to-fn-ptr, transmute-int-lit-to-raw-ptr, transmute-float-char-to-ref-or-ptr, transmute-integer-to-char, transmute-number-to-slice-or-array, transmute-tuple-to-slice-or-array, print-in-display-impl.
- df71073: Add 8 Rust quality rules for batch 09: potentially-incomplete-ascii-range, inaccurate-duration-calculation, map-followed-by-count, iter-nth-instead-of-get, iter-count-instead-of-len, replace-same-pattern-and-replacement, clone-on-double-reference, non-owned-rc-pointer-into-vec.
- df71073: Add `rust.correctness.ignored-future-value` rule.
- df71073: Add rust.performance.single-char-string-literal-pattern rule (batch 08)
- b8c4d52: Add go.doc.malformed-deprecated-comment rule (batch 08)
- a98a371: Add `java.correctness.unterminated-assertion-chain` rule to detect bare `assertThat()` / `verify()` calls without a terminal assertion method.
- b83af7d: Add PHP correctness rules for batch 03: unused-constructor-parameter (PHP-W1037), echo-invalid-value (PHP-W1041), print-invalid-value (PHP-W1044), invalid-string-interpolation-type (PHP-W1043)
- b83af7d: Add PHP correctness rules for batch 04: undefined-static-property (PHP-W1034), attribute-on-property (PHP-W1035)
- b8ce737: Add 7 new `java.correctness.*` catalog rules for batch 11: shift-out-of-range (JAVA-E0399), oddness-check-fails-negative (JAVA-E0405), hasnext-invokes-next (JAVA-E0409), thread-sleep-with-lock (JAVA-E0410), string-format-arg-mismatch (JAVA-E1001), bad-short-circuit-null-check (JAVA-E1003), and wait-notify-on-thread (JAVA-E1004).
- b8ce737: Add 8 new `java.correctness.*` catalog rules for batch 12: switch-statement-labels (JAVA-E1005), week-year-in-date-pattern (JAVA-E1006), jump-in-finally (JAVA-E1007), default-package-spring-scan (JAVA-E1009), case-insensitive-regex-lacks-unicode (JAVA-E1010), assert-self-comparison (JAVA-E1012), optional-get-without-present-check (JAVA-E1013), and iterable-iterator-returns-this (JAVA-E1015).
- b8ce737: Add 8 Rust correctness rules for batch 04 codes: hash-unit-value, transmute-ptr-to-ref, transmute-ref-to-ptr, transmute-ptr-to-ptr, forget-drop-on-non-drop-type, unhandled-io-result, transmute-t-to-ptr-ref, transmute-integer-to-bool.
- b8ce737: Add 8 Rust correctness rules for batch 06: hash-unit-value, transmute-ptr-to-ref, transmute-ref-to-ptr, transmute-ptr-to-ptr, forget-drop-on-non-drop-type, unhandled-io-result, transmute-t-to-ptr-ref, transmute-integer-to-bool.
- b8ce737: Add 8 Rust quality rules for batch 09: redundant-mem-replace-with-none, redundant-mem-replace-with-default, redundant-mem-replace-with-zero, fn-ptr-null-comparison, possible-missing-comma-in-array, non-utf8-literal-in-from-utf8-unchecked, size-of-val-on-reference, fn-ptr-to-non-pointer-cast.
- b8ce737: Add 8 Rust quality rules (RS-W1013, RS-W1015, RS-W1016, RS-W1028, RS-W1039, RS-W1075, RS-W1081, RS-W1084)
- 2324763: Add parity aliases (`RS-W1086`, `RS-W1087`, `RS-W1089`, `RS-W1091`, `RS-W1093`, `RS-W1094`, `RS-W1100`, `RS-W1106`) to 8 existing `rust.quality.*` rules.

## 0.3.0

### Minor Changes

- Add nine Ruby catalog rules for residual Rails security and bug-risk coverage (batches 2 and 3).
- Add four Ruby general security catalog rules for dynamic execution, Kernel.open pipe mode, insecure JSON loaders, and debugger calls.
- Add 157 CloudFormation catalog rules mapping cfn-lint parity codes (`E*`, `W*`, `I*`) to `cfn.*` rule ids with observation-based specs.
- Add 26 PHP catalog rules: one security rule (`unsafe-new-static`), 23 correctness rules, and one performance rule (`expensive-loop-condition`).

## 0.2.0

### Minor Changes

- Add Express and Node.js security rules for permissive CORS with credentials, synchronous child-process execution, blocking `readFileSync` in handlers, and mutable module exports.
- Add nine React maintenance and security rules with recommended and strict preset membership, plus security preset coverage for target=\_blank without noopener.
- Add TypeScript catalog rules for async correctness, await-in-loop performance, and empty-function quality.
- Add ten `ts.correctness.*` rules for TypeScript/JavaScript language correctness patterns backed by new adapter facts.
- Add TypeScript security and runtime catalog rules for `with` statements, `arguments.callee`, `javascript:` URLs, native prototype extension, global native reassignment, non-Error throws, blocking dialogs, `process.exit`, and unsafe `__dirname` path concatenation.
- Ship 6 new Go baseline security catalog rules covering listens that bind to all interfaces, imports of the `unsafe` package, `ssh.InsecureIgnoreHostKey()` host-key callbacks, deprecated `ioutil.TempFile`/`ioutil.TempDir` temporary file helpers, RSA key sizes below 2048 bits, and imports of broken or deprecated `crypto/md5`, `crypto/des`, `crypto/rc4`, and `crypto/sha1` packages.
- Ship 7 new Go correctness catalog rules covering nil map assignment, deferred `Close` before the matching `err` check, nil `context.Context` arguments, `time.Tick` leaks, `WaitGroup.Add` inside the launched goroutine, dropped `append` results, and `defer` statements inside loop bodies.
- Ship seven Go general security catalog rules: JWT signature verification, TLS minimum version, SSLv2/SSLv3 protocol rejection, weak TLS cipher suites, pprof endpoint exposure, weak bcrypt cost, and predictable math/rand seeding.
- Ship 6 new Java audit security catalog rules covering unsafe Jackson polymorphic deserialization, XXE on `DocumentBuilderFactory` / `SAXParserFactory` / `TransformerFactory` / `XMLInputFactory`, Hibernate `Session.createQuery` and `createNativeQuery` string concatenation, the shell form of `Runtime.getRuntime().exec(String)`, and predictable `SecureRandom` seeding.
- Ship 6 new Java correctness catalog rules covering empty catch blocks, `.equals` on array references, synchronizing on string literals, catching `NullPointerException`, unguarded `Optional.get()` calls, and control-flow statements inside `finally` blocks.
- Ship twenty Java correctness and security catalog rules with RuleSpec fixtures.
- Add eleven PHP correctness and baseline security catalog rules covering duplicate array keys, switch defaults, error suppression, unreachable code, nullsafe by-reference returns, dynamic eval, unsafe includes, weak ciphers, session ID generation, XXE, and debug exposure.
- Ship 16 new Python correctness and security catalog rules covering control-flow defects, subprocess shell usage, dynamic execution, YAML loading, temp file APIs, network bind exposure, debugger imports, Jinja autoescape, and Django/Flask framework hardening gaps.
- Ship 7 new Rust correctness catalog rules covering mutex guards held across `.await`, blocking sleep and `block_on` inside `async fn`, forgotten join handles, unbounded channels, `std::sync::Mutex` in async functions, and unchecked slice indexing with variable indices.
- Ship twelve Rust general security catalog rules covering network bind exposure, TLS configuration baseline, weak cipher suites, JWT verification, temp file hygiene, SSH host key checks, weak crypto imports, RSA key size, shell command spawn, YAML deserialization, and panic-prone async handlers.

## 0.1.0

### Minor Changes

- Add the tag-driven release pipeline for `@critiq/rules`, including Changesets enforcement, GitHub release note generation, clean-install package verification, and the generated README rule-count badge source.
- Add `ts.correctness.empty-block-statement`, `ts.correctness.reassign-catch-binding`, and `ts.correctness.regexp-pattern-unusual-control-character` with catalog specs and fixtures.

### Patch Changes

- Add two TypeScript/JavaScript security rules (`ts.security.log-injection`, `ts.security.debug-statement-in-source`), matching RuleSpecs and fixtures, and refresh catalog counts and badges (121 -> 123). Targets the broader pino/winston/bunyan/consola logger families and leftover `console.trace()` calls in production paths.
- Add nine OSS Python framework rules (`py.security.*`), RuleSpecs under `specs/python`, refreshed catalog counts and badges, and README category breakdown including the Python slice.
- Add five OSS Java security rules (`java.security.*`): `android-screenshot-exposure`, `android-world-readable-mode`, `reflected-output-from-request`, `servlet-insecure-cookie`, and `spring-debug-exposure`. Also extends the existing `ts.security.open-redirect` and `ts.security.sensitive-data-egress` rules to cover Java targets with new Java fixtures. Refreshes catalog counts and badges.
- Add five OSS React rules (`ts.react.*`): `no-accessibility-label-missing`, `no-derived-state-from-props`, `no-index-as-key-in-dynamic-list`, `no-missing-error-boundary`, and `no-uncontrolled-to-controlled-input`, with matching RuleSpecs and observation fixtures. Refreshes catalog counts and badges.
- Add eleven OSS Go security rules (`go.security.*`): `echo-sensitive-binding-without-validation`, `echo-unsafe-multipart-upload`, `fiber-sensitive-binding-without-validation`, `fiber-unsafe-multipart-upload`, `gin-sensitive-binding-without-validation`, `gin-trust-all-proxies`, `gin-wildcard-cors-with-credentials`, `net-http-missing-timeouts`, `sensitive-data-egress`, `tar-path-traversal`, and `template-unescaped-request-value`. Also extends `ts.security.open-redirect` and `ts.security.ssrf` to include Go findings, adds RuleSpecs/fixtures (including Go fixtures in TypeScript rule specs), and refreshes catalog counts and badges.
- Add seven OSS Java framework rules (`java.security.spring-permit-all-default`, `java.security.spring-csrf-globally-disabled`, `java.security.spring-actuator-sensitive-exposure`, `java.security.spring-actuator-health-details-always`, `java.security.spring-webmvc-unrestricted-data-binding`, `java.security.jpa-concatenated-query`, `java.security.template-unescaped-user-output`), RuleSpecs under `specs/java`, catalog entries, refreshed rule counts and badges, and adjust the `java.security.spring-debug-exposure` catalog spec for the narrower `security.spring-debug-exposure` fact surface.
- Add twelve OSS PHP security rules (`php.security.*`) for Laravel, Symfony, and WordPress framework risks plus parity hardening checks: mass assignment, sensitive CSRF exclusions, unsafe Blade output, Symfony debug and CSRF posture, missing nonce/capability checks, unprepared SQL, insecure session/cookie and CORS settings, insecure plaintext transport, unsafe upload handling, and PHP sensitive data egress. Includes full RuleSpecs/fixtures, catalog registration, and updated rule-count documentation/badge assets.
- Add nine OSS Ruby on Rails security rules (`ruby.security.*`): `rails-csrf-disabled`, `rails-detailed-exceptions-enabled`, `rails-open-redirect`, `rails-unsafe-html-output`, `rails-unsafe-render`, `rails-unsafe-session-or-cookie-store`, `rails-unsafe-strong-parameters`, `sensitive-data-egress`, and `sidekiq-web-unauthenticated-mount`. Includes matching RuleSpecs and Ruby/ERB fixtures, and refreshes catalog counts and badges.
- Add eight OSS Rust framework rules (`rust.security.*`), RuleSpecs under `specs/rust`, catalog entries, refreshed rule counts and badges, and catalog sync tests including the `rust` spec directory.
- Add OSS TypeScript and JavaScript framework security rules covering Angular, NestJS, Apollo, Express, Fastify, Next.js, React, Nuxt, and Astro: - `ts.security.angular-dom-sanitizer-bypass-untrusted-input` - `ts.security.apollo-server-csrf-disabled` - `ts.security.apollo-server-introspection-exposure` - `ts.security.apollo-server-missing-query-limits` - `ts.security.apollo-server-graphql-dev-tooling-exposure` - `ts.security.graphql-upload-without-csrf-guard` - `ts.security.express-unbounded-body-parser` - `ts.security.fastify-excessive-body-limit` - `ts.security.fastify-public-bind-without-trust-proxy` - `ts.security.nuxt-public-runtime-secret` - `ts.security.astro-vite-public-secret-define` - `ts.security.nestjs-helmet-after-route-mount` - `ts.security.nestjs-missing-global-validation-pipe` - `ts.security.nestjs-skip-throttle-sensitive-route` - `ts.security.nestjs-validation-pipe-without-whitelist` - `ts.next.server-action-missing-local-auth` - `ts.react.no-effect-fetch-without-cancellation` Includes matching RuleSpecs and fixtures, and refreshes catalog counts and badges.
- Add public parity catalog coverage for dependency-version policy, cross-language processor egress, upload filename handling, archive extraction paths, and permissive file permissions.
- Add nine `ts.correctness.*` catalog rules aligned to the public JavaScript directory `JS-0xxx` first wave, with fixtures and per-rule specs; register rules in `recommended` and `strict` presets.
- new `ts.security.*` rules for insecure Helmet hardening options, literal CSP unsafe directives, Ajv `allErrors` without strict mode, `xml2js` `parseString` on request-shaped input, Express error-handler information disclosure, request-driven array indexes, user-controlled `express.static` mount paths, `express.static` `dotfiles: 'allow'`, legacy `Buffer()` constructors, iframe `sandbox` omissions, JWT `none` signing, and Electron dangerous `webPreferences`, IPC origin checks, local store hardening, and narrowed `shell.openExternal` URL sources; catalog and rule specs updated.
- Add the public TypeScript performance expansion rule set (`ts.performance.no-*`) with catalog entries, RuleSpecs, and fixtures. Add polyglot performance parity catalog rules and fixtures for Go, Java, PHP, Python, Ruby, and Rust, and refresh shipped rule-count documentation artifacts.
- Add the ten new TypeScript quality-maintainability rules with catalog entries, docs metadata, and RuleSpec fixtures for boolean parameter traps, primitive obsession, public surface width, barrel cycles, hidden side effects, mixed abstraction, ambiguous abbreviations, inconsistent error shape, temporal coupling, and dead exports.
- Add six OSS React and JSX parity rules: `ts.react.no-legacy-lifecycle`, `ts.react.no-find-dom-node`, `ts.react.no-string-ref`, `ts.react.no-img-missing-alt-text`, `ts.react.no-positive-tabindex`, and `ts.react.no-click-without-keyboard-handler`, with matching RuleSpecs, fixtures, and catalog entries.
- Add eight OSS React and JSX parity rules (`ts.react.*`) covering invalid anchors, `aria-activedescendant` focus hosts, widget roles without tabindex, interactive roles on semantic elements, keyboard interactions without widget roles, synthetic pointer or key handlers without roles, deprecated `react-dom` render-style APIs, and deprecated `createFactory`. Includes RuleSpec source fixtures, catalog wiring, refreshed rule counts, per-language `project-common` observation fixtures for existing performance specs, and corrected performance RuleSpec expectations where invalid observations already contained matching facts.
- Ship seven `ts.testing.*` catalog rules plus polyglot testing hygiene rules for Go, Java, PHP, Python, Ruby, and Rust with RuleSpecs and fixtures.
