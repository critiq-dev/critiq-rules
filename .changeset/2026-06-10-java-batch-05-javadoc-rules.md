---
'@critiq/rules': minor
---

feat: add 4 Java documentation rules (batch 05 — JAVA-D family)

Adds four new documentation rules to the Java catalog:
- `java.doc.unmatched-parameter-tag` (JAVA-D1004)
- `java.doc.parameter-tag-no-description` (JAVA-D1005)
- `java.doc.empty-javadoc-tag` (JAVA-D1006)
- `java.doc.malformed-javadoc-comment` (JAVA-D1007)

Introduces the `java.doc.*` rule namespace for Javadoc documentation rules.
All four rules are in the `recommended` preset.
