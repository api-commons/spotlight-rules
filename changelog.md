---
layout: default
nav: changelog
title: Changelog
description: Notable changes and releases across the Spotlight Rules projects.
---


# Changelog

Releases below are pulled automatically from npm; the project history is the
one-time launch record. Each repository also keeps its own changelog
([spotlight-cli](https://github.com/api-commons/spotlight-cli/blob/main/FORK.md),
[spotlight-spec](https://github.com/api-commons/spotlight-spec),
[spotlight-vscode](https://github.com/api-commons/spotlight-vscode/blob/main/CHANGELOG.md)).

## Releases

{% if site.data.releases and site.data.releases.size > 0 %}
<table>
  <thead><tr><th>Package</th><th>Version</th><th>Published</th></tr></thead>
  <tbody>
  {% for r in site.data.releases %}
    <tr>
      <td><code>{{ r.package }}</code></td>
      <td><a href="{{ r.url }}">{{ r.version }}</a></td>
      <td>{{ r.date | date: "%Y-%m-%d" }}</td>
    </tr>
  {% endfor %}
  </tbody>
</table>
{% else %}
<p class="text-muted">No published releases recorded yet.</p>
{% endif %}

## Project history

### 2026-07-02 — Discovery rehomed to API Commons

- **spotlight-discovery** left the suite — it is now **API Discovery**, an
  [API Commons](https://apicommons.org) tool at
  [discovery.apicommons.org](https://discovery.apicommons.org)
  ([api-commons/api-discovery](https://github.com/api-commons/api-discovery)).

### 2026-06-29 — Editor schema completion for rulesets (extension v1.1.0)

- **spotlight-vscode 1.1.0** ([Marketplace](https://marketplace.visualstudio.com/items?itemName=spotlightrules.spotlight)
  · [Open VSX](https://open-vsx.org/extension/spotlightrules/spotlight)) associates
  the [spotlight-spec](https://github.com/api-commons/spotlight-spec) ruleset JSON
  Schema with `.spotlight.json` / `spotlight-ruleset.json` files — so authoring a
  ruleset gets completion, hovers, and validation in-editor, on top of the linting
  the extension already does. YAML rulesets get the same via the SchemaStore listing.

### 2026-06-29 — Spotlight Rules in your editor (Marketplace + Open VSX)

- **spotlight-vscode** is now published as **Spotlight Rules**
  (`spotlightrules.spotlight`) to both the
  [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=spotlightrules.spotlight)
  and [Open VSX](https://open-vsx.org/extension/spotlightrules/spotlight) — so it
  installs in VS Code, VSCodium, Cursor, and Windsurf. Lint OpenAPI, AsyncAPI,
  Arazzo, JSON Schema, and APIs.json against Spotlight rulesets right in the
  editor — lint-on-save / lint-as-you-type, with the embedded Spotlight engine.

### 2026-06-29 — Ruleset schema on SchemaStore

- The [spotlight-spec](https://github.com/api-commons/spotlight-spec) ruleset JSON
  Schema is now listed on [SchemaStore](https://www.schemastore.org/) ([catalog
  PR](https://github.com/SchemaStore/schemastore/pull/5869)). Editors that use
  SchemaStore (VS Code, JetBrains, …) now apply Spotlight autocomplete and
  validation automatically to `*.spotlight.{json,yaml,yml}` and
  `spotlight-ruleset.{json,yaml,yml}` files — no per-file `$schema` needed.
- Ahead of listing, the schema was **fully documented**: a generated enrichment
  pass adds a `description` to every property and `$def`, a `title` to each
  definition, per-function `functionOptions` descriptions, and worked top-level
  `examples` — all annotations, with no change to what validates.

### 2026-06-26 — Spotlight CLI 1.1.0

- **spotlight-cli 1.1.0** — republished all 11 `@spotlight-rules/*` packages to
  npm. `spotlight:skill` now carries **18 rules** — the 6 added align the executable
  ruleset with the agent-skill catalog (require allowed-tools / metadata / version,
  single-line description, metadata object, name max-length). A distributable
  **rule catalog pack** (per-format rulesets + bundled functions) now lets the CLI,
  api, mcp, and pipeline lint with the same rules as the validator.

### 2026-06-26 — Curated rule catalog + the validator as a workbench

- **One curated catalog of 733 rules across 12 artifact types** now drives both the
  validator and the [rule explorer](/spec/). Every rule carries a Title Case
  `title`, namespaced `tags` (`format:` / `spec:` / `experience:` / `topic:` /
  `owasp:`), a canonical `reference` URL, and an AI **`prompt`**. Rules ship at
  `info` by default — educate first, raise to `warn`/`error` to enforce.
- **spotlight-validator** grew from a linter into a workbench: **AI Fix** (Claude /
  Gemini / ChatGPT — whole-document or precise single-node fragment splice), a
  **tag filter** across Results + Rules, a **Utilities** tab of per-artifact
  transforms (componentize, split, extract schemas, prune, migrate drafts,
  flatten, bundle `$ref`s, …), a **Repos** tab with **commit / PR** of any saved
  artifact to GitHub, and **Download as APIs.json** (0.21). The validator now runs
  the curated catalog directly.

### 2026-06-26 — Spec extensions + JSON Schema 2020-12

- Added three first-class Spotlight rule properties beyond the Spectral baseline,
  documented in [spotlight-spec](/spec/#schema): **`title`**, **`reference`**, and
  **`prompt`** (joining `tags`). Bumped the ruleset JSON Schema to **2020-12**.

### 2026-06-25 — The governance suite (api · mcp · pipeline)

- **spotlight-api** — an OpenAPI-first HTTP service over the engine (`POST /lint`,
  list rulesets, validate a ruleset, list formats).
- **spotlight-mcp** — a Model Context Protocol server exposing lint + rulesets to
  any AI client.
- **spotlight-pipeline** — governance-gate CI: a composite GitHub Action plus
  templates for GitLab, Bitbucket, Azure, and AWS.
- **Agent skills** became a first-class artifact (`spotlight:skill` lints
  `SKILL.md`); APIs.io now indexes Arazzo, APIs.json, and skills.

### 2026-06-23 — spotlight-validator

- **spotlight-validator** — Launched a browser-based API governance playground at
  [validator.spotlight-rules.com](https://validator.spotlight-rules.com). It runs
  the Spotlight engine entirely client-side (Vite + Monaco) to lint OpenAPI,
  AsyncAPI, and JSON Schema. Ships a **best-of-breed ruleset of ~289 rules**
  compiled from 10 public Spectral rulesets (SPS Commerce, Italian Government,
  Adidas, Trimble, Paystack, DigitalOcean, Microcks, Baloise, Team Digitale,
  Schwarz IT) — selectable by `source:`/`category:`/`format:` tags — plus a
  custom-ruleset editor.

### 2026-06-23 — 1.0 reboot

- Rebooted **spotlight-cli**, **spotlight-spec**, and **spotlight-vscode** as a
  clean **1.0**: everything product-facing renamed from Spectral to Spotlight
  (the `Spotlight` engine class, `spotlight:` ruleset aliases, `.spotlight.*`
  ruleset files), package versions reset to `1.0.0`, and the npm packages
  republished. spotlight-vscode now embeds the published `@spotlight-rules`
  engine. Stoplight Spectral's Apache-2.0 attribution is preserved throughout.

### 2026-06-23 — Launch

- **spotlight-cli** — Forked [Stoplight Spectral](https://github.com/stoplightio/spectral)
  as an API Commons project; renamed the 11 packages to the
  `@spotlight-rules/spotlight-*` scope and the CLI binary to `spotlight`.
  **Published all 11 packages to npm.**
- **spotlight-spec** — Created a standalone ruleset specification with a portable
  JSON Schema (`v1`), examples, and a generator that keeps it in sync with the
  engine.
- **spotlight-vscode** — Forked and rebranded the VS Code extension
  (`api-commons.spotlight`, `spotlight.*` settings).
- **spotlight-rules.com** — Launched this site under API Commons.

