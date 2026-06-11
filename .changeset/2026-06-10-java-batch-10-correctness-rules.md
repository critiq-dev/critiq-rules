---
'@critiq/rules': minor
---

Add 5 Java correctness rules for Batch 10 (JAVA-E family)

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
