# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability in `@critiq/rules` or the rule catalog,
please report it responsibly via [GitHub's private vulnerability
reporting](https://github.com/critiq-dev/critiq-rules/security/advisories/new)
instead of opening a public issue.

You should receive a response within 48 hours. Please include:

- A description of the vulnerability
- Steps to reproduce it
- Any relevant version, rule, or fixture information

## Scope

`@critiq/rules` is a static analysis rule catalog consumed by
[`@critiq/cli`](https://github.com/critiq-dev/critiq-core). It contains YAML
rule definitions, catalog metadata, preset membership, and spec fixtures. It
does **not** execute code, parse source files directly, make network requests,
or modify files on disk.

Rules are validated against the Critiq DSL schema at load time by the CLI.
Malformed or malicious rule YAML is rejected before analysis begins.

## Threat Model

The primary concern is the rule-catalog supply chain: a compromised or
maliciously crafted rule could inject arbitrary facts into analysis output.
While the CLI's DSL validation rejects structurally invalid rules, a rule that
passes validation could still produce misleading or harmful findings.

Mitigations:

- Pin `@critiq/rules` to a known version in `package.json` and
  `package-lock.json`.
- Review rule-catalog updates before bumping the version in CI or local
  development.
- For local rule files (`.critiq/rules/`), treat rule authors as trusted
  contributors.

Verify package integrity with:

```bash
npm audit signatures
```

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.x     | :white_check_mark: |
| < 1.0.0 | :x:                |

Security fixes are published as patch releases for the latest minor version
line. Before 1.0.0, breaking changes may ship in minor releases, so we only
maintain the current minor line.

## Vulnerability Disclosure

We follow a coordinated disclosure process:

1. The reporter submits a vulnerability via GitHub private reporting.
2. We acknowledge within 48 hours and begin investigation.
3. We develop and test a fix in a private fork.
4. We publish the fix as a patch release and publish a GitHub Security Advisory.
5. We credit the reporter in the advisory (unless they prefer to remain
   anonymous).

We aim to publish fixes within 30 days of the initial report, and sooner for
critical issues.
