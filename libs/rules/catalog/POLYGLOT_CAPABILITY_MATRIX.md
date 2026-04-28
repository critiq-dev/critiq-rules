# Polyglot Capability Matrix

Phase 1 keeps the existing `ts.*` rule identifiers stable while widening a shared baseline onto additional source adapters.

## Shipped In Phase 1

| Rule ID | TypeScript / JavaScript | Go | Python | Java | PHP | Ruby | Rust |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `security.no-hardcoded-credentials` | Live | Live | Live | Planned | Planned | Planned | Planned |
| `security.no-sensitive-data-in-logs-and-telemetry` | Live | Live | Live | Planned | Planned | Planned | Planned |
| `security.no-request-path-file-read` | Live | Live | Live | Planned | Planned | Planned | Planned |
| `security.no-command-execution-with-request-input` | Live | Live | Live | Planned | Planned | Planned | Planned |
| `security.no-sql-interpolation` | Live | Live | Live | Planned | Planned | Planned | Planned |
| `security.unsafe-deserialization` | Live | Live | Live | Planned | Planned | Planned | Planned |
| `security.tls-verification-disabled` | Live | Live | Live | Planned | Planned | Planned | Planned |
| `security.insecure-http-transport` | Live | Live | Live | Planned | Planned | Planned | Planned |
| `security.weak-hash-algorithm` | Live | Live | Live | Planned | Planned | Planned | Planned |

## Meaning

- `Live`: the language is accepted by the public contracts, has a registered adapter, is activated through the catalog, and has unit/spec/sandbox coverage in this phase.
- `Planned`: the language is accepted by the public contracts and repository detection, and has sandbox planning stubs, but no first-party adapter is registered yet.

## Backlog For Java / PHP / Ruby / Rust

- Add first-party adapters that emit the same shared phase-1 fact kinds.
- Widen the rule-spec source fixtures once those adapters are available.
- Turn the sandbox planning directories into executable E2E scenarios.
