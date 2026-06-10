---
'@critiq/rules': minor
---

Add 4 Vue Options API correctness rules to the OSS catalog (JavaScript parity batch 08):
- ts.vue.no-reserved-key-overwrite (JS-0613)
- ts.vue.no-computed-mutation (JS-0615)
- ts.vue.prefer-prop-type-constructor (JS-0621)
- ts.vue.no-data-object-declaration (JS-0629)

All rules use `strict` preset and `experimental` stability with metadata.aliases.
