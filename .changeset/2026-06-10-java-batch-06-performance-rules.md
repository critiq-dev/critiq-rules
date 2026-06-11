---
'@critiq/rules': minor
---

Add 5 Java performance rules for Batch 06 (JAVA-P family)

New rules:
- java.performance.pattern-compile-in-loop
- java.performance.non-zero-to-array
- java.performance.keyset-instead-of-entryset
- java.performance.replaceall-instead-of-replace
- java.performance.single-char-string-indexof

Also adds JAVA-P1003 alias to existing `java.correctness.prepared-statement-in-loop`.
