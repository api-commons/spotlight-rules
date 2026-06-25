---
layout: default
title: spotlight-vscode
nav: vscode
permalink: /vscode/
---

<h1 class="mb-1">spotlight-vscode</h1>
<p class="lead text-muted">Lint your API descriptions as you write them, right in your editor.</p>

<p>
  <strong>spotlight-vscode</strong> is the Visual Studio Code companion to the Spotlight stack — a fork of
  Stoplight's <code>vscode-spectral</code>, rebranded and maintained under
  <a href="https://apicommons.org">API Commons</a>. It surfaces Spotlight's governance rules inline while
  you edit OpenAPI, AsyncAPI, and Arazzo documents, so problems show up in the Problems panel and as
  squiggles without leaving your editor.
</p>

<h2>Features</h2>
<ul>
  <li><strong>Lint on save and lint on type</strong> for JSON/YAML API descriptions.</li>
  <li><strong>Custom ruleset support</strong> — point it at your <code>.spotlight.{yaml,yml,json,js}</code> ruleset, or use the built-ins.</li>
  <li><strong>Diagnostics in the Problems panel</strong>, sourced as <code>spotlight</code>, with severities mapped to errors/warnings/info/hints.</li>
  <li>Runs the same <code>@spotlight-rules/spotlight-*</code> engine as the CLI, so editor and CI agree.</li>
</ul>

<h2>Settings</h2>
<p>All configuration lives under the <code>spotlight.*</code> namespace:</p>
<ul>
  <li><code>spotlight.enable</code> — turn linting on/off</li>
  <li><code>spotlight.rulesetFile</code> — path to a custom ruleset</li>
  <li><code>spotlight.run</code> — <code>onType</code> or <code>onSave</code></li>
  <li><code>spotlight.validateFiles</code> / <code>spotlight.validateLanguages</code> — scope which files are linted</li>
</ul>

<p class="text-muted">Extension id: <code>api-commons.spotlight</code></p>

<div class="d-flex gap-3 mt-4">
  <a class="btn btn-sm btn-info text-dark" href="https://github.com/api-commons/spotlight-vscode">GitHub</a>
  <a class="btn btn-sm btn-outline-secondary" href="/cli/">spotlight-cli</a>
  <a class="btn btn-sm btn-outline-secondary" href="/spec/">spotlight-spec</a>
</div>
