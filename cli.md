---
layout: default
title: spotlight-cli
nav: cli
permalink: /cli/
---

<h1 class="mb-1">spotlight-cli</h1>
<p class="lead text-muted">The linter and engine for JSON/YAML API descriptions.</p>

<p>
  <strong>spotlight-cli</strong> is a maintained, independently-released <strong>1.0</strong> fork of
  <a href="https://github.com/stoplightio/spectral">Stoplight Spectral</a> — a flexible JSON/YAML linter
  with out-of-the-box support for <strong>OpenAPI</strong>, <strong>AsyncAPI</strong>, and
  <strong>Arazzo</strong>. It carries that foundation forward as an openly-governed, vendor-neutral build
  under <a href="https://apicommons.org">API Commons</a>, published to npm under the
  <code>@spotlight-rules</code> scope.
</p>

<h2>Install</h2>
<pre class="bg-light p-3 rounded"><code>npm i -g @spotlight-rules/spotlight-cli

spotlight lint openapi.yaml
spotlight lint openapi.yaml --ruleset .spotlight.yaml</code></pre>

<h2>What you get</h2>
<ul>
  <li><strong>The <code>spotlight</code> binary</strong> — lint one or many files, with JSON/stylish/teamcity output.</li>
  <li><strong>Built-in rulesets</strong> referenced as <code>spotlight:oas</code>, <code>spotlight:asyncapi</code>, and <code>spotlight:arazzo</code>.</li>
  <li><strong>Custom rulesets</strong> discovered from <code>.spotlight.{yaml,yml,json,js}</code>, extendable and overridable.</li>
  <li><strong>A JavaScript API</strong> — the engine class is exported as <code>Spotlight</code> (diagnostics typed as <code>ISpotlightDiagnostic</code>), the same engine the VS Code extension and the browser validator run.</li>
  <li><strong>11 workspace packages</strong> published as <code>@spotlight-rules/spotlight-*</code> (core, parsers, functions, formats, rulesets, ruleset-bundler, ruleset-migrator, …).</li>
</ul>

<h2>The ruleset format</h2>
<p>
  Rulesets follow <a href="/spec/">spotlight-spec</a> — the standalone, versioned specification of the rule
  and ruleset format, with a JSON Schema for validation. Browse the full
  <a href="/spec/#openapi">catalog of rules</a> Spotlight ships.
</p>

<div class="d-flex gap-3 mt-4">
  <a class="btn btn-sm btn-primary" href="https://www.npmjs.com/package/@spotlight-rules/spotlight-cli">npm</a>
  <a class="btn btn-sm btn-outline-secondary" href="https://github.com/api-commons/spotlight-cli">GitHub</a>
  <a class="btn btn-sm btn-outline-secondary" href="/spec/">spotlight-spec</a>
</div>
