---
layout: default
nav: roadmap
title: Roadmap
description: The Spotlight Rules roadmap across the CLI, the specification, and the VS Code extension.
---

<div class="content">

# Roadmap

This is a living, draft roadmap for Spotlight Rules, prioritized from community
feedback on the upstream Spectral project (972 issues and 172 discussions). It is
a direction, not a commitment.

## The thesis

Three signals shape the work:

1. **Current on security, faster on cadence.** The loudest open requests upstream
   are dependency and security updates that sit unreleased. Spotlight Rules' first
   promise is staying current and responding quickly.
2. **A real ruleset specification.** Users have asked for a JSON Schema for
   rulesets, editor autocomplete, and schemastore registration —
   [spotlight-spec](https://github.com/api-commons/spotlight-spec) delivers exactly
   that.
3. **Format coverage.** Ongoing demand for AsyncAPI 3.x, OpenAPI 3.1 + OWASP
   rules, and JSON Schema 2020-12 keywords.

## spotlight-cli

| Phase | Focus |
| --- | --- |
| **Now** | Dependency &amp; security sweep; crash/robustness hardening; decouple package versions from upstream on the first independent release. |
| **Next** | Apply overrides to external `$ref`'d files; `$ref` path-printing fixes; make `unrecognized-format` a first-class rule; richer output formatters; JSON Schema 2020-12 keywords (`prefixItems`). |
| **Later** | AsyncAPI 3.x ruleset; OpenAPI 3.1 + OWASP rule pack; evaluate the `$ref` resolver swap; remote/private ruleset `extends`; lint plain JSON Schema. |

## spotlight-spec

| Phase | Focus |
| --- | --- |
| **Now** | Register the schema on [schemastore.org](https://www.schemastore.org/) for `.spectral.*` / `.spotlight.*`; promote the stable, versioned schema URL. |
| **Next** | Per-builtin-function `functionOptions` schemas (the biggest authoring-DX upgrade); a ruleset authoring guide. |
| **Later** | A published conformance test suite other implementations can target. |

## spotlight-vscode

| Phase | Focus |
| --- | --- |
| **Now** | Associate the spotlight-spec schema with ruleset files for autocomplete and validation while editing; refresh the extension artwork. |
| **Next** | Consume the published `@spotlight-rules` engine; surface rule documentation inline; publish to the Marketplace and Open VSX. |
| **Later** | Custom-rule debugging; ruleset scaffolding commands. |

## Ecosystem

A published security &amp; release policy, multi-arch (arm64) container images, a
reusable GitHub Action, and a discoverable, spec-validated catalog of community
rulesets.

</div>
