---
'@critiq/rules': minor
---

feat: tune no-flaky-timer-test for precision — exempt performance clocks and micro-delays

- Removes `Date.now` and `performance.now` from flaky timer detection (performance measurement, not flaky timers)
- Adds delay threshold: only flags `setTimeout`/`setInterval` with delay > 50ms (sub-50ms micro-delays for event loop yielding are now exempt)
- No delay argument is treated as micro-delay (defaults to ~0-4ms)
- Updates severity: remains `low` (severity schema does not support `info`)
- Improves rule title, summary, rationale, and remediation message to reflect narrowed scope
- Adds new fixture `performance.test.ts` verifying exemption of performance.now, Date.now, and micro-delays
- Updates `invalid.test.ts` fixture to use 100ms delay (was 10ms, now exempt as micro-delay)
- Updates sandbox bad-hygiene.test.ts: changes 5ms setTimeout to 100ms to remain a valid finding
