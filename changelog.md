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

