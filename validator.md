---
layout: default
title: spotlight-validator
nav: validator
permalink: /validator/
---

<h1 class="mb-1">spotlight-validator</h1>
<p class="lead text-muted">A browser governance playground — lint, explore, and edit, with no backend.</p>

<p>
  <strong>spotlight-validator</strong> runs the published <code>@spotlight-rules/spotlight-*</code> engine
  <strong>entirely in your browser</strong> — paste or load an artifact and see governance findings
  instantly. It's powered by Spotlight, not a hosted service: nothing is sent to a server to lint.
</p>

<div class="my-3">
  <a class="btn btn-warning text-dark" href="https://validator.spotlight-rules.com">Open the validator →</a>
</div>

<h2>What it does</h2>
<ul>
  <li><strong>Eleven artifact types</strong> — APIs.json, OpenAPI, MCP, Arazzo, AsyncAPI, JSON Schema, JSON Structure, JSON-LD, Plans, Rate Limits, and FinOps.</li>
  <li><strong>Search APIs.io and load real artifacts</strong> straight into the editor as a first-class consumer of the <a href="https://apis.io">APIs.io</a> API.</li>
  <li><strong>Best-of-breed rules</strong> compiled from the first-party API Evangelist ruleset plus public, redistribution-compatible Spectral rulesets — grouped by the <strong>experience</strong> they improve (documentation, security, error-handling, consistency, …).</li>
  <li><strong>Results grouped and explorable</strong> — collapse by experience area, hover a finding for its full description, and jump to the line it applies to.</li>
  <li><strong>Edit rules live</strong> — override, disable, or re-enable any rule; a Rules tab lists every rule per artifact with enable/disable toggles.</li>
  <li><strong>Local-first persistence</strong> — your artifacts and rule overrides autosave to your browser; a Config tab holds keys for upcoming Save-to-Git and AI features.</li>
  <li><strong>YAML ⇄ JSON toggle</strong> that converts the artifact in place.</li>
</ul>

<h2>The rules</h2>
<p>
  Every rule it applies is documented in <a href="/spec/">spotlight-spec</a> — browse the full
  <a href="/spec/#openapi">catalog by artifact</a>, each with its tags, where it applies, and a detail page.
</p>

<div class="d-flex gap-3 mt-4">
  <a class="btn btn-sm btn-warning text-dark" href="https://validator.spotlight-rules.com">Open</a>
  <a class="btn btn-sm btn-outline-secondary" href="https://github.com/api-commons/spotlight-validator">GitHub</a>
  <a class="btn btn-sm btn-outline-secondary" href="/spec/">spotlight-spec</a>
</div>
