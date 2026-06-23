---
layout: default
nav: changelog
title: Changelog
description: Notable changes across the Spotlight Rules projects.
---

<div class="content">

# Changelog

Notable changes across Spotlight Rules. Each project also keeps its own changelog
in its repository.

## 2026-06-23 — Launch

- **spotlight-cli** — Forked [Stoplight Spectral](https://github.com/stoplightio/spectral)
  (`develop`, June 2026) as an API Commons project. Renamed the 11 internal
  packages to the `@spotlight-rules/spotlight-*` scope and the CLI binary to
  `spotlight`, preserving the `spectral:` ruleset aliases and `.spectral.*`
  filenames for compatibility. Verified build and tests.
- **spotlight-cli** — **Published all 11 packages to npm** under the
  `@spotlight-rules` scope. Install with
  `npm i -g @spotlight-rules/spotlight-cli`.
- **spotlight-spec** — Created a standalone specification of the ruleset format
  with a single portable JSON Schema (draft-07), a written specification, worked
  examples, and a generator that keeps it in sync with the engine. Versioned at
  `v1` and served over GitHub Pages.
- **spotlight-vscode** — Forked Stoplight's `vscode-spectral` and rebranded it
  (extension id `api-commons.spotlight`, `spotlight.*` settings, `spotlight`
  command namespace), keeping the Spectral engine. Build and unit tests pass.
- **spotlight-rules.com** — Launched this site under API Commons.

</div>
