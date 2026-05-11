---
"@critiq/rules": patch
---

Add seven OSS Java framework rules (`java.security.spring-permit-all-default`, `java.security.spring-csrf-globally-disabled`, `java.security.spring-actuator-sensitive-exposure`, `java.security.spring-actuator-health-details-always`, `java.security.spring-webmvc-unrestricted-data-binding`, `java.security.jpa-concatenated-query`, `java.security.template-unescaped-user-output`), RuleSpecs under `specs/java`, catalog entries, refreshed rule counts and badges, and adjust the `java.security.spring-debug-exposure` catalog spec for the narrower `security.spring-debug-exposure` fact surface.
