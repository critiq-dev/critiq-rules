---
"@critiq/rules": minor
---

feat(php): add instanceof-invalid-type rule (PHP-E1009)

New rule `php.correctness.instanceof-invalid-type` detects instanceof
operands that cannot resolve to a valid class/interface/trait name.
Registered in catalog.yaml with strict preset.
