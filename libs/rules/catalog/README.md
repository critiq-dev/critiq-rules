# @critiq/rules

`@critiq/rules` is the default public OSS rules catalog package for the
catalog-first `critiq check` workflow.

It ships:

- `catalog.yaml`
- rule YAML files under `rules/`

This package is consumer-facing runtime content. Rule authoring examples remain
in `examples/starter-pack`.

The catalog supports the `recommended`, `strict`, `security`, and
`experimental` presets. The first OSS taxonomy-backed security rules are
shipped here under their canonical `CRQ-*` identifiers.
