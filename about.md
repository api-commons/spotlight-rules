---
layout: default
nav: about
title: About
description: Spotlight Rules is an openly-governed, maintained build of the Spectral API linter under API Commons.
---

<div class="content">

# About Spotlight Rules

**Spotlight Rules** is an openly-governed, well-maintained build of the
[Spectral](https://github.com/stoplightio/spectral) API linter, maintained under
the [API Commons](https://apicommons.org) organization.

Spectral is a flexible JSON/YAML linter with out-of-the-box support for OpenAPI,
AsyncAPI, and Arazzo — the de-facto way teams enforce API style guides and
governance rules. Spotlight Rules takes that proven foundation and gives it an
openly-governed home: current dependencies, a faster security response, a real
published specification for the ruleset format, and first-class editor support.

## The pieces

| Project | What it is |
| --- | --- |
| [**spotlight-cli**](https://github.com/api-commons/spotlight-cli) | The linter engine and command-line tool — a fork of Spectral, published to npm as `@spotlight-rules/spotlight-*`. The `spotlight` binary lints OpenAPI, AsyncAPI, and Arazzo documents against rulesets. |
| [**spotlight-spec**](https://github.com/api-commons/spotlight-spec) | A standalone specification of the ruleset format (rules and rulesets), with a single portable JSON Schema for validation — so rulesets can be authored, validated, and tooled independently of any one linter. |
| [**spotlight-vscode**](https://github.com/api-commons/spotlight-vscode) | The VS Code extension — lint-on-save and lint-on-type, with custom ruleset support, in your editor. |

## Relationship to Spectral

Spotlight Rules is **derived from** Stoplight Spectral and stays compatible with
the rulesets Spectral consumes. Existing `spectral:` rulesets (`spectral:oas`,
`spectral:asyncapi`, `spectral:arazzo`) and `.spectral.*` ruleset files continue
to work unchanged. Provenance and attribution are documented in each repository,
and Spectral's Apache 2.0 license is preserved throughout.

## Governance

Spotlight Rules lives under [API Commons](https://apicommons.org), a working
group focused on open, machine-readable API operations. The goal is a
vendor-neutral, community-maintained linter that the API governance community can
rely on.

</div>
