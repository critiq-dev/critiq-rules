# AGENTS.md

Guidelines for agent tooling and contributors working on this repository.

## Rule Metadata Guidelines

Every rule has three core metadata fields that serve progressive disclosure: **title** identifies, **summary** informs, **rationale** educates.

### Title

A short label (noun phrase, no period) that names the problem.

- 3–8 words.
- Describe the problem or what to avoid — not what the rule "does."
- No prefixes (`Audit:`, `Detects:`).
- Distinct from the summary.

| Avoid | Prefer |
|-------|--------|
| `Controlling access to an s3 bucket should be done with bucket policies` | `S3 bucket access not controlled by bucket policy` |
| `Audit: Possibly odd compound assignment operators '+=' or '-='` | `Suspicious compound assignment misuse` |
| `@SpringBootApplication must not be used in the default package` | `SpringBootApplication in default package` |

### Summary

A single sentence telling the developer what pattern was found and what the consequence is.

- One sentence (two short ones only if necessary).
- Answer: **what pattern is flagged + what can go wrong**.
- More informative than the title — must add value, not restate.
- Specific: mention function names, API patterns, or types where relevant.
- No meta-language (`detects…`, `flags…`).

| Avoid | Prefer |
|-------|--------|
| (identical to title) | (adds consequence or mechanism beyond the title) |
| `Detects variable used before definition issues.` | `Referencing a 'let' or 'const' variable before its declaration causes a runtime ReferenceError.` |
| `Do not divide by literal zero.` (adds nothing beyond title) | `Literal zero division raises a ZeroDivisionError at runtime.` |

### Rationale

A short paragraph (2–5 sentences) explaining **why** the pattern is harmful.

- Explain the consequence or risk (runtime crash, security vulnerability, logic error).
- Use concrete examples when the bug is subtle (`x += x + y` effectively computes `x = 2x + y`).
- Reference language semantics where relevant (TDZ, `typeof` return values, ownership rules).
- May briefly mention the correct alternative.

**Exclude from rationale:**

- **Implementation details** — no explanation of how the detector works, what heuristics it uses, or what it skips.
- **Signal/noise discussion** — no "produces false positives," "conservative analysis," or "high noise relative to signal."
- **Self-references** — no "this rule," "the linter," "the analysis."
- **Undermining language** — no "rarely indicates real bugs" or "mostly artifacts."

| Avoid | Prefer |
|-------|--------|
| `cfn-lint reports W3045 when…` | `S3 bucket ACLs are a legacy mechanism with coarse granularity. Bucket policies provide centralized, auditable rules.` |
| `The data-flow analysis is deliberately conservative… high noise relative to signal.` | `Dereferencing a null value causes a runtime TypeError. Common unhappy paths routinely produce null values.` |
| `Single-file heuristic checks the enclosing class body… Classes with extends are skipped.` | `PHP emits a warning when accessing an undeclared instance property, often indicating a typo or missing declaration.` |
| `Valid error handling includes logging via recognized sinks (console.error, captureException…)` | `Silent catch blocks hide failures and make diagnosing production incidents extremely difficult.` |
| `…rarely indicate real bugs in well-structured codebases.` | `Accessing a 'let' or 'const' variable before its declaration throws a ReferenceError due to the Temporal Dead Zone.` |

### Quick Reference

| Field | Length | Answers | Stay away from |
|-------|--------|---------|----------------|
| Title | 3–8 words | "What's wrong?" | Full sentences, code symbols, prefixes |
| Summary | 1 sentence | "What was detected and what happens?" | Meta-language, repeating the title |
| Rationale | 2–5 sentences | "Why is this a problem?" | Detector internals, signal/noise, self-references |
