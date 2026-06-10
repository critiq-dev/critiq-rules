---
"@critiq/rules": minor
---

Add 8 AngularJS deprecated API rules to the OSS catalog (JavaScript parity batch 07):

- `ts.angularjs.no-controller` (JS-0525) — flags `.controller()` calls on AngularJS modules
- `ts.angularjs.no-deprecated-cookie-store` (JS-0530) — flags `$cookieStore` service references
- `ts.angularjs.no-deprecated-directive-replace` (JS-0531) — flags `replace` property in directive definitions
- `ts.angularjs.no-deprecated-http-success-error` (JS-0532) — flags `.success()` / `.error()` on `$http`
- `ts.angularjs.inject-function-assignments-only` (JS-0546) — flags non-assignment statements in `inject()` callbacks
- `ts.angularjs.prefer-angular-for-each` (JS-0556) — flags native `.forEach()` in AngularJS contexts
- `ts.angularjs.no-jquery-wrapping-angular-element` (JS-0561) — flags `$(angular.element(...))` wrapping
- `ts.angularjs.prefer-angular-is-string` (JS-0568) — flags `typeof x === "string"` in AngularJS files

All rules are tagged as `strict` preset and `experimental` stability with `metadata.aliases` for tracking.
