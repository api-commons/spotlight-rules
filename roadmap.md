---
layout: default
nav: roadmap
title: Roadmap
description: The road to a firm 1.0 across the Spotlight Rules suite — engine, spec, editors, apps, and CI.
---

# Roadmap

The **Spotlight Rules** suite is an openly-governed, progressive build of the
Spectral API linter under [API Commons](https://apicommons.org). The eight tools
below are all shipped and at `1.0.0`; what remains for a **firm 1.0** is
*coherence* — making the engine, the catalog, and every surface speak with one
voice — plus the trust work (tests, registry reach, a coordinated release).

## The suite

| Tool | Role | State |
| --- | --- | --- |
| **spotlight-cli** | the linter engine + CLI (Spectral fork) | published to npm; `spotlight:oas/asyncapi/arazzo/skill` rulesets |
| **spotlight-spec** | the standalone ruleset format + JSON Schema (2020-12) | `tags` / `title` / `reference` / `prompt` extensions; rule explorer |
| **spotlight-vscode** | editor experience | embeds the published engine |
| **spotlight-validator** | browser governance workbench | 733-rule catalog · AI fix · tag filter · utilities · repos · APIs.json |
| **spotlight-discovery** | browser artifact registry | search + provenance + save / commit / PR |
| **spotlight-api** | HTTP service over the engine | OpenAPI-first `POST /lint`, rulesets, formats |
| **spotlight-mcp** | MCP server for AI clients | lint + rulesets over stdio |
| **spotlight-pipeline** | governance-gate CI | GitHub Action + GitLab/Bitbucket/Azure/AWS templates |

**Thesis:** *the openly-governed, progressive build of Spectral — current on
security, faster on cadence, with a real ruleset specification, a curated rule
catalog, and first-class editor, app, and CI surfaces.*

---

## Road to 1.0

The suite is feature-complete. A firm 1.0 is about alignment and trust.

### 1. Align the engine with the catalog *(the keystone)*
The validator now lints with a curated **catalog of 733 rules across 12 artifact
types** (`all-rules.yaml`) — but the cli engine still ships its own
`spotlight:*` rulesets. For 1.0, **publish the catalog into the engine** so the
CLI, api, mcp, vscode, and pipeline all lint with the *same* rules as the
validator.
- Pick the catalog's **canonical home** (spotlight-spec is the natural one) and
  generate the per-format rulesets + the validator bundle from it.
- Resolve the **agent-skill drift**: the catalog has 18 skill rules,
  `spotlight:skill` ships 12 — land the other 6 in the cli (the drift guard
  flags this today).

### 2. A construction / regression test gate
The engine-construction sweep (build every format's ruleset from the catalog and
lint a sample) caught two broken `given`s before they shipped. **Commit it as
CI** for the cli rulesets *and* the catalog, so a malformed `given` or a
missing function can never reach a release.

### 3. Editor + registry reach
- **Register the ruleset schema on [schemastore.org](https://www.schemastore.org/)**
  for `.spotlight.*` / `.spectral.*` — autocomplete + validation in every
  schemastore-aware editor, for free.
- **vscode:** associate the spotlight-spec schema with ruleset files; **publish
  to the Marketplace and Open VSX**.

### 4. One front door
A single **Getting started** that routes all eight tools, states the
**Spectral-compatibility promise** (`spectral:` rulesets and `.spectral.*` files
keep working), and publishes the **security & release cadence**.

### 5. Coordinated cut
Tag all eight repos at a coordinated **1.0** with a security/release policy and a
single announcement.

### Should-have (1.0 or fast-follow)
- Harden the two Trimble path rules that error on an empty `paths: {}`.
- **`functionOptions` schemas** in the spec — the biggest authoring-autocomplete win.
- Have the validator / api / mcp consume the **published** engine instead of an
  embedded copy.
- Publish the **catalog as data** (the rule index) for third-party tools.

### Could-have (post-1.0)
- Shareable validator state (ruleset + document in the URL) + an embeddable widget.
- A **ruleset registry** / community curation — a natural API Commons fit.
- The deeper Spectral-feedback backlog (below).

---

## Post-1.0 backlog — from the Spectral feedback corpus

Derived from issues + discussions mirrored from upstream Spectral; the demand
signals (👍/⬆/💬) prioritize the list.

- **Engine:** overrides on external `$ref`'d files ([#2195], 13👍); `$ref`
  correctness for nested refs ([#2007]); `unrecognized-format` as a real rule
  ([#1124]); OR combinator ([#1276]); remote/private `extends` with auth
  ([#2464]); richer formatters (JUnit passed tests [#1555], `documentationUrl` in
  output [#2705]).
- **Spec:** a conformance test suite published as a reusable fixture set so other
  implementations (e.g. the Java interest in [#2704]) can target the format.
- **Distribution:** arm64 multi-arch images ([#2636]); SonarQube path ([#1415]).

<p class="text-muted small">This roadmap is the living plan for the suite; the
upstream Spectral feedback corpus in <code>spotlight-cli/planning/</code> remains
the evidence base for the post-1.0 backlog.</p>
