---
name: author-rule
description: Author a new Critiq static analysis rule or update an existing one. USE WHEN: creating a new rule, modifying a rule's YAML definition, adjusting scope/paths, or reviewing rule changes. Covers the end-to-end workflow, match kinds, spec files, catalog registration, metadata, path exclusion principles, and verification.
---

# Author a Critiq Rule

Create or update a static analysis rule in the Critiq OSS rule catalog.

## Key Files and Locations

| Artifact | Path | Purpose |
|----------|------|---------|
| Rule YAML | `libs/rules/catalog/rules/<lang>/<id>.rule.yaml` | Rule definition |
| Spec YAML | `libs/rules/catalog/specs/<lang>/<id>.spec.yaml` | Test specification |
| Fixtures | `libs/rules/catalog/specs/<lang>/fixtures/<id>/` | valid.invalid test inputs |
| Catalog | `libs/rules/catalog/catalog.yaml` | Rule registry with presets |

## Authoring Workflow

When creating a new rule, follow these steps in order:

### Step 1: Choose Rule ID

Rule IDs follow the pattern `<language>.<category>.<slug>`:

- **language**: Matches the directory name under `rules/` (typescript, java, python, go, ruby, php, rust, cfn, sql). Use `security` (no prefix) for shared/cross-language rules.
- **category**: The primary category — `correctness`, `security`, `performance`, `quality`, `testing`, `runtime`, `config`, `logging`, `random`, `bug-risk`, `doc`, `maintainability`, `style`.
- **slug**: Lowercase, hyphen-separated, self-describing name without the category duplicated.

Good: `ts.correctness.missing-await-on-async-call`, `java.security.permissive-cors`, `sql.correctness.undefined-reference`
Bad: `ts.correctness.detects-missing-await` (meta-prefix), `ts.bug-risk.ts-error-misuse` (redundant prefix), `typescript.correctness.foo` (full language name)

The rule file name MUST be `<id>.rule.yaml` and the spec file MUST be `<id>.spec.yaml`.

### Step 2: Create the Rule YAML

Create `libs/rules/catalog/rules/<lang>/<id>.rule.yaml`. Use the annotated template in the [Rule YAML Reference](#rule-yaml-reference) below.

Start with the minimal fields: `metadata` (id, version, title, summary, rationale, tags), `scope`, `match`, and `emit`. Add `detection`, `references`, `aliases`, `stability`, `appliesTo`, and `scope.paths` as needed.

### Step 3: Create the Spec YAML

Create `libs/rules/catalog/specs/<lang>/<id>.spec.yaml`:

```yaml
apiVersion: critiq.dev/v1alpha1
kind: RuleSpec
rulePath: ../../rules/<lang>/<id>.rule.yaml
fixtures:
  - name: <describes what the invalid case flags>
    sourcePath: ./fixtures/<id>/invalid.<ext>
    expect:
      findingCount: 1
      allRuleIds:
        - <id>
  - name: <describes what the valid case accepts>
    sourcePath: ./fixtures/<id>/valid.<ext>
    expect:
      findingCount: 0
      allRuleIds: []
```

The `rulePath` is always a relative path from the spec file to the rule YAML.

See [Spec YAML Reference](#spec-yaml-reference) for available fixture and expect fields.

### Step 4: Create Fixture Files

Create two fixture files in `libs/rules/catalog/specs/<lang>/fixtures/<id>/`:

- `valid.<ext>` — code that should NOT trigger the rule (0 findings).
- `invalid.<ext>` — code that SHOULD trigger the rule (>=1 findings).

Each fixture should be minimal: just enough code to exercise the rule. The invalid case should trigger exactly the expected number of findings.

### Step 5: Register in Catalog

Add an entry to the bottom of `libs/rules/catalog/catalog.yaml` under `rules:`:

```yaml
  - id: <id>
    rulePath: ./rules/<lang>/<id>.rule.yaml
    presets:
      - recommended
```

Preset options: `recommended`, `strict`, `security`, `experimental`. New rules should typically start with `recommended` unless they are niche or noisy (use `experimental`).

### Step 6: Verify

```bash
# Run all spec tests (includes all rule YAML validation)
npx jest libs/rules/catalog/src/lib/catalog-rules.spec.ts

# Full verification pipeline
npm run verify
```

Fix any failures before considering the rule complete.

---

## Rule YAML Reference

### Complete Annotated Template

```yaml
apiVersion: critiq.dev/v1alpha1
kind: Rule
metadata:
  # ----- Required -----
  id: <lang>.<category>.<slug>                    # Unique rule ID
  version: v1                                      # Increment integer on substantive changes
  title: <3-8 word noun phrase>                    # What's wrong? No prefixes, no code symbols
  summary: <1 sentence>                            # Pattern found + consequence
  rationale: <2-5 sentences>                       # Why harmful, no detector internals
  tags:
    - <category>
    - <language>
    - rules-catalog
    # Additional tags as needed

  # ----- Optional -----
  detection:
    kind: pattern                                  # Required for security rules. "pattern" = regex/text-based.
                                                   # Omit for AST/fact-based rules.
  references:                                      # REQUIRED for security rules. Optional otherwise.
    - kind: cwe
      id: CWE-94
      title: Improper Control of Generation of Code
    - kind: owasp
      title: Code Injection
      url: https://owasp.org/www-community/attacks/Code_Injection
  aliases:                                         # External linter rule IDs this maps to
    - SQL-L026
    - GO-E1009
  stability: stable                                # "stable" or "experimental"
  appliesTo: block                                 # "block" | "function" | "file" | "project"

scope:
  languages:
    - <language>                                   # Can list multiple for shared rules
  paths:
    include:                                       # Optional: restrict to specific file patterns
      - "**/*.<ext>"
    exclude:                                       # Optional: file-TYPE patterns ONLY (see Path Exclusion Principles)
      - "**/*.test.*"
      - "**/*.spec.*"
      - "**/__tests__/**"

match:
  # Exactly ONE of 'fact' or 'node':

  # --- Fact-based matching (pattern/text rules) ---
  fact:
    kind: <namespace>.<rule-name>
    bind: issue                                    # Variable name for captures: ${captures.issue.text}

  # --- Node-based matching (AST rules) ---
  node:
    kind: <ASTNodeKind>                            # AST node type from the language adapter
    bind: <variable>
    where:                                         # Optional filter conditions
      - path: <jsonpath to property>
        equals: <value>                            # exact match
        # in: [<val1>, <val2>]                     # alternative: match any value in list

emit:
  finding:
    category: <correctness|security|performance|maintainability|quality|...>[.<subcategory>]
    severity: <critical|high|medium|low>
    confidence: <high|medium|low>                  # or a number 0.0-1.0
    tags:                                          # Optional finding-level tags
      - <category>
      - <language>
  message:
    title: <short title, can use ${captures.var.text}>
    summary: <detailed message, can use ${captures.var.text}>
  remediation:                                     # Optional but recommended
    summary: <how to fix>
```

### Match Configuration

Rules use exactly one match type: `fact` or `node`.

**Fact-based matching (`match.fact`)** — Used when a pre-built detector (in `critiq-core`) handles the analysis. The `kind` field identifies which detector to invoke. Most rules in the catalog use fact-based matching.

```yaml
match:
  fact:
    kind: security.hardcoded-credentials
    bind: credential
```

The `bind` name becomes a capture variable. Use `${captures.credential.text}` in message templates.

**Node-based / AST matching (`match.node`)** — Used when the rule matches an AST node directly by its node kind. This is for simple structural patterns that don't need a custom detector.

```yaml
match:
  node:
    kind: DebuggerStatement
    bind: statement
```

Node kinds come from the language adapter's AST representation (e.g., `DebuggerStatement`, `CallExpression`, `MemberExpression`, `BinaryExpression`).

**Where clauses** — Filter node matches based on properties of the bound node. Use JSONPath-like paths to navigate the AST:

```yaml
match:
  node:
    kind: CallExpression
    bind: call
    where:
      - path: callee.object.text
        equals: console
      - path: callee.property.text
        in:
          - log
          - warn
          - error
```

Conditions support `equals` (exact match) and `in` (match any value in a list). Multiple conditions are AND-ed together.

### Message Templates

Use `${captures.<bind-name>.text}` to interpolate the matched code into messages:

```yaml
message:
  title: Avoid `${captures.call.text}`
  summary: "`${captures.call.text}` should be replaced with the project logger."
```

This always resolves to the source text of the captured node.

### Detection Kind

The `detection.kind` field has two purposes:

- `pattern` — The rule uses pattern/text-based matching (regex, string search). **Required for all security rules.**
- Omitted (default) — The rule uses AST/fact-based matching.

### Metadata Field Guidelines

From `AGENTS.md`:

| Field | Length | Answers | Stay away from |
|-------|--------|---------|----------------|
| Title | 3-8 words | "What's wrong?" | Full sentences, code symbols, prefixes (`Audit:`, `Detects:`) |
| Summary | 1 sentence | "What was detected and what happens?" | Meta-language, repeating the title |
| Rationale | 2-5 sentences | "Why is this a problem?" | Detector internals, signal/noise, self-references |

The summary is the most important field — it tells the developer what pattern was found AND what the consequence is. It must add value beyond the title.

| Avoid | Prefer |
|-------|--------|
| (identical to title) | (adds consequence or mechanism beyond the title) |
| `Detects variable used before definition issues.` | `Referencing a 'let' or 'const' variable before its declaration causes a runtime ReferenceError.` |
| `Do not divide by literal zero.` | `Literal zero division raises a ZeroDivisionError at runtime.` |

For the rationale, never include:
- How the detector works (implementation details)
- Whether it produces false positives (signal/noise)
- References to "this rule" or "the linter" (self-references)
- "Rarely indicates real bugs" (undermining language)

### Security Rules

Rules with `emit.finding.category` starting with `security.` have two hard requirements verified by tests:

1. **`metadata.references` must be present** with at least one entry (CWE and/or OWASP).
2. **`metadata.detection.kind` must be `pattern`** — security rules MUST use pattern-based detection, not AST matching.

Example reference entries:
```yaml
references:
  - kind: cwe
    id: CWE-94
    title: Improper Control of Generation of Code
  - kind: owasp
    title: Code Injection
    url: https://owasp.org/www-community/attacks/Code_Injection
```

### Shared / Cross-Language Rules

Rules in `rules/shared/` apply to multiple languages. Use `security` (no language prefix) as the ID prefix for shared security rules:

```yaml
metadata:
  id: security.no-hardcoded-credentials
scope:
  languages:
    - typescript
    - javascript
    - go
    - python
    - java
    - php
    - ruby
    - rust
```

### Stability

- `stable` — The rule is well-tuned and ready for production use. Default for new rules unless they are niche or experimental.
- `experimental` — The rule is under evaluation, may produce more false positives, or covers an edge case. Use when the detector is new or the pattern is not well-validated.

---

## Spec YAML Reference

Spec files validate that a rule fires on the right code and stays silent on the right code.

### Fixture Types

| Field | Purpose |
|-------|---------|
| `sourcePath` | Path to a source file that is processed through the language adapter and scanned. Used for most rules. |
| `observationPath` | Path to a pre-computed `.observation.json` file (bypasses the adapter). Used when the adapter is not available or the fixture needs exact observation data. |
| `workspacePath` | Path to a directory containing a multi-file project (for project-level rules). |

### Expect Fields

| Field | Type | Description |
|-------|------|-------------|
| `findingCount` | number | Exact number of findings expected |
| `allRuleIds` | string[] | Every rule ID that should appear in findings |
| `allSeverities` | string[] | Expected severity levels across all findings |
| `titleContains` | string | Substring that must appear in at least one finding title |
| `primaryLocation` | object | Expected line/column of the first finding: `{ line: number, column: number }` |

### Fixture File Convention

- Each rule gets a directory: `libs/rules/catalog/specs/<lang>/fixtures/<rule-id>/`
- Each fixture file has a descriptive name matching the spec fixture's `name`
- Minimum: one `valid.<ext>` and one `invalid.<ext>` file
- Fixtures should be minimal — just enough code to exercise the rule

---

## Path Exclusion Principles

A rule's `scope.paths.exclude` must only use patterns that describe **inherent file properties** — suffix, purpose (test file, generated file), standard conventions. It must never assume a project's folder layout.

### The Test

For every exclude, ask: "Would this be valid for ANY project regardless of directory structure?"

`**/*.test.ts` → YES. A test suffix is universal.
`**/scripts/**` → NO. Scripts could live anywhere.
`**/node_modules/**` → YES. Universal dependency directory.
`**/examples/**` → NO. Examples may live in `examples/`, `demo/`, `docs/examples/`, etc.

### Appropriate (keep in rules)

Patterns that identify **file types**, not folder locations:

| Category | Patterns |
|----------|----------|
| Test files | `**/test/**`, `**/tests/**`, `**/__tests__/**`, `**/spec/**`, `**/*.test.*`, `**/*.spec.*`, `**/*Test.*`, `**/*Tests.*`, `**/*_test.*`, `**/test_*.py` |
| Test support | `**/__mocks__/**`, `**/__fixtures__/**`, `**/__generated__/**` |
| Dependencies | `**/node_modules/**`, `**/vendor/**` |
| Generated/minified | `**/*.generated.*`, `**/*.min.*`, `**/*.d.ts` |
| Config files | `**/*.config.*` (NOT `**/config/**`) |
| Migrations/seeds | `**/migrations/**`, `**/seeds/**`, `**/db/migrations/**`, `**/db/seeds/**` |

### Inappropriate (must NOT be in rules)

These belong in **corpus-level configuration** (`critiq-oss-tuning/config/tuning-profile.yaml`) or the user's project config:

| Category | Examples (partial list) |
|----------|----------|
| Build output | `**/build/**`, `**/dist/**`, `**/out/**`, `**/target/**`, `**/.next/**` |
| Project folders | `**/scripts/**`, `**/tools/**`, `**/bin/**`, `**/cli/**`, `**/infra/**`, `**/docs/**` |
| Examples/demos | `**/examples/**`, `**/demo/**`, `**/playground/**`, `**/sandbox/**` |
| Benchmarks | `**/benchmark/**`, `**/benches/**`, `**/perf/**` |
| E2E/integration | `**/e2e/**`, `**/e2e-tests/**`, `**/integration-tests/**` |
| Storybook | `**/*.stories.*`, `**/*.story.*` |
| Framework internals | `**/prisma/**`, `**/activerecord/**`, `**/zone.js/**` |
| Overly broad | `**/db/**`, `**/lib/**`, `**/generated/**`, `**/fixtures/**` (use `**/__fixtures__/**` instead) |
| Misc project-specific | `**/mocks/**`, `**/*.mock.*`, `**/*.bench.*`, `**/archive/**`, `**/src/server/**`, `.github/actions/**` |

### What to Do Instead

When false positives cluster in project-specific directories:
1. **File-type cause** → Add to the rule's `scope.paths.exclude`.
2. **Folder-structure cause** → Add to `critiq-oss-tuning/config/tuning-profile.yaml` under `scan.excludeGlobs`.
3. **Detector issue** → Fix in `critiq-core`, then bump the rule version.

---

## Version Bumping

Bump `metadata.version` (increment integer: `v1` → `v2`) for substantive changes:
- Scope changes (include/exclude paths)
- Match logic changes
- Severity or confidence changes

Do NOT bump for:
- Title/summary/rationale rewording
- Tag additions or removals
- Adding/removing references or aliases

---

## Verification

```bash
# Run all rule tests (specs, catalog sync, policy validation)
npx jest libs/rules/catalog/src/lib/catalog-rules.spec.ts

# Full pipeline: lint, test, build, typecheck, rule count
npm run verify
```

The test suite validates:
1. Catalog, rule files, and spec files are in sync (every rule has a spec, every spec matches a catalog entry)
2. All rule YAML parses correctly and passes policy validation
3. Security rules have `references` and `detection.kind: pattern`
4. Every spec file's fixtures pass (rule fires on invalid code, stays silent on valid code)

---

## Anti-Patterns

| Behavior | Why It's Wrong |
|----------|---------------|
| Excluding `**/scripts/**` in a rule | Scripts folder location is project-specific |
| Excluding `**/examples/**` in a rule | Examples may sit anywhere in the project |
| Excluding framework-specific directories | Rule becomes tied to one framework's layout |
| Adding excludes without investigating real findings | Always verify the exclude is needed |
| Over-fitting excludes to one repo's layout | Rules must generalize across all users |
| Using `**/config/**` instead of `**/*.config.*` | The former excludes all config directories regardless of content |
| Excluding `**/db/**` broadly | Too broad; use `**/db/migrations/**` and `**/db/seeds/**` |
| Skipping spec files | Every rule must have a spec with valid+invalid fixtures |
| Skipping catalog registration | The rule won't be discoverable without a catalog entry |
| Security rule without references | Enforced by tests — security rules must cite CWE or OWASP |
| Security rule without `detection.kind: pattern` | Enforced by tests — security rules must be pattern-based |
| Putting `detection.kind: ast` | The value is `pattern` or omitted; there is no `ast` kind |

---

## Self-Improvement

This skill is a living document. Update it when you discover:

| Criteria | Example |
|----------|---------|
| A new universally-valid exclude pattern | `**/*.generated.*` for code generators |
| A pattern that should move from appropriate to inappropriate | If a "standard" directory convention becomes uncommon |
| A new anti-pattern | "Excluding by folder name that varies across frameworks" |
| New spec fixture type or expect field | `primaryLocation` for exact position assertions |
