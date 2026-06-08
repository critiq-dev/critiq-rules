---
"@critiq/rules": patch
---

Add `java.correctness.unterminated-assertion-chain` rule to detect bare `assertThat()` / `verify()` calls without a terminal assertion method.
