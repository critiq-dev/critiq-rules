# Starter Pack

`examples/starter-pack` is the repo-local onboarding pack for authored rules,
fixture specs, and runnable examples. It is intentionally **not** a published
package.

## Included Rules

- `ts.logging.no-console-log`
- `ts.logging.no-console-error`
- `ts.runtime.no-debugger-statement`
- `ts.config.no-process-env-outside-config`
- `ts.random.no-math-random-in-core`

The pack demonstrates:

- real `RuleSpec` execution through `critiq rules test`
- a rule using `not` with `ancestor`
- path-scoped applicability checks
- emitted findings from real source fixtures

## Commands

```bash
critiq rules validate "examples/starter-pack/rules/*.rule.yaml"
critiq rules explain examples/starter-pack/rules/ts.logging.no-console-log.rule.yaml
critiq rules test "examples/starter-pack/rules/*.spec.yaml"
```

See [`docs/guides/write-your-first-rule.md`](../../docs/guides/write-your-first-rule.md)
for the contributor walkthrough.
