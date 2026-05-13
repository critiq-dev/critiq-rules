---
"@critiq/rules": patch
---

Add eight OSS React and JSX parity rules (`ts.react.*`) covering invalid anchors, `aria-activedescendant` focus hosts, widget roles without tabindex, interactive roles on semantic elements, keyboard interactions without widget roles, synthetic pointer or key handlers without roles, deprecated `react-dom` render-style APIs, and deprecated `createFactory`. Includes RuleSpec source fixtures, catalog wiring, refreshed rule counts, per-language `project-common` observation fixtures for existing performance specs, and corrected performance RuleSpec expectations where invalid observations already contained matching facts.
