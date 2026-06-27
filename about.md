---
layout: default
nav: about
title: About
description: Spotlight Rules is an openly-governed, progressive build of the Spectral API linter under API Commons.
---


# About Spotlight Rules

**Spotlight Rules** is an openly-governed, **progressive** build of the
[Spectral](https://github.com/stoplightio/spectral) API linter, maintained under
the [API Commons](https://apicommons.org) organization.

Spectral is a flexible JSON/YAML linter with out-of-the-box support for OpenAPI,
AsyncAPI, and Arazzo — the de-facto way teams enforce API style guides and
governance rules. Spotlight Rules takes that proven foundation and gives it an
openly-governed home: current dependencies, a faster security response, a real
published specification for the ruleset format, a curated rule catalog, and
first-class editor, app, and CI surfaces.

## The suite

| Project | What it is |
| --- | --- |
| [**spotlight-cli**](https://github.com/api-commons/spotlight-cli) | The linter engine + CLI — a maintained fork of Spectral, published to npm as `@spotlight-rules/spotlight-*`. The `spotlight` binary lints against rulesets. |
| [**spotlight-spec**](https://github.com/api-commons/spotlight-spec) | The standalone ruleset format + a portable **JSON Schema (2020-12)**, and the [rule catalog](/spec/) — so rulesets can be authored, validated, and tooled independently of any one linter. |
| [**spotlight-vscode**](https://github.com/api-commons/spotlight-vscode) | The VS Code extension — lint-on-save and lint-on-type, with custom ruleset support, in your editor. |
| [**spotlight-validator**](https://github.com/api-commons/spotlight-validator) | A browser governance workbench at [validator.spotlight-rules.com](https://validator.spotlight-rules.com) — lint 12 artifact types against the curated catalog, filter rules by tag, fix findings with AI, and run per-artifact utilities. Runs the engine entirely client-side. |
| [**spotlight-discovery**](https://github.com/api-commons/spotlight-discovery) | A browser artifact registry at [discovery.spotlight-rules.com](https://discovery.spotlight-rules.com) — search APIs.io and GitHub/GitLab/Bitbucket for API artifacts, keep provenance, and save locally or commit/PR to git. |
| [**spotlight-api**](https://github.com/api-commons/spotlight-api) | An OpenAPI-first HTTP service over the engine — `POST /lint`, list rulesets, validate a ruleset, list formats. |
| [**spotlight-mcp**](https://github.com/api-commons/spotlight-mcp) | A Model Context Protocol server exposing linting + rulesets to any AI client. |
| [**spotlight-pipeline**](https://github.com/api-commons/spotlight-pipeline) | Governance-gate CI — a composite GitHub Action plus templates for GitLab, Bitbucket, Azure, and AWS. |

## The rule catalog

At the center is one curated catalog of **733 rules across 12 artifact types**
(OpenAPI, AsyncAPI, Arazzo, JSON Schema, JSON Structure, JSON-LD, APIs.json, MCP,
Plans, Rate-Limits, FinOps, and Agent Skills). Every rule carries a Title Case
`title`, namespaced `tags` (`format:` / `spec:` / `experience:` / `topic:` /
`owasp:`), a canonical `reference`, and an AI **`prompt`** an assistant can apply
to fix the rule. Rules ship at `info` by default — educate first, raise to `warn`
or `error` to enforce. Every surface (CLI, apps, CI) lints with the same catalog;
browse it in the [rule explorer](/spec/).

## Relationship to Spectral

Spotlight Rules is **derived from** Stoplight Spectral. The engine, CLI binary
(`spotlight`), built-in ruleset aliases (`spotlight:oas`, `spotlight:asyncapi`,
`spotlight:arazzo`, `spotlight:skill`), and ruleset filenames (`.spotlight.*`) all
use the Spotlight name. Your existing Spectral rulesets keep working: the
`spectral:` aliases and `.spectral.*` files are honored alongside the Spotlight
ones. Spectral's Apache-2.0 license is preserved, and provenance is documented in
each repository's `FORK.md`. The current release is **1.1.0**.

## Governance

Spotlight Rules lives under [API Commons](https://apicommons.org), a working
group focused on open, machine-readable API operations. The goal is a
vendor-neutral, community-maintained linter — and a shared rule catalog — that the
API governance community can rely on.
