---
'@critiq/rules': minor
---

Add 8 bug risk (JAVA-E) correctness rules for Java: possible-null-access,
possible-null-access-exception, invalidated-iterator, mutable-data-exposed,
duration-with-nanos-misuse, indexof-reversed-arguments, ncopies-argument-order,
class-isinstance-on-class. These detect null safety issues, collection
modification during iteration, missing defensive copies, Duration API misuse,
reversed String.indexOf arguments, reversed Collections.nCopies arguments,
and class.isInstance() misuse.
