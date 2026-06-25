---
layout: default
title: spotlight-api
nav: api
permalink: /api/
---

<h1 class="mb-1">spotlight-api</h1>
<p class="lead text-muted">Work with Spotlight over HTTP — defined, of course, with OpenAPI.</p>

<p>
  <strong>spotlight-api</strong> is a small, <strong>OpenAPI-first</strong> HTTP service over the Spotlight
  engine. Lint an API artifact, list the built-in rulesets and supported formats, or validate a ruleset —
  all over a simple JSON API that runs the same <code>@spotlight-rules</code> engine as the CLI, VS Code
  extension, and browser validator, so every surface agrees. The API <strong>defines itself with
  OpenAPI</strong> and serves it at <code>/openapi.yaml</code>, so it's lintable by Spotlight too.
</p>

<h2>Run</h2>
<pre class="bg-light p-3 rounded"><code>npm install && npm start          # http://localhost:8080
# or
docker build -t spotlight-api . && docker run -p 8080:8080 spotlight-api</code></pre>

<h2>Endpoints</h2>
<table class="table table-sm">
  <thead><tr><th>Method</th><th>Path</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>POST</code></td><td><code>/lint</code></td><td>Lint an artifact (<code>{ content, format?, ruleset? }</code>) → diagnostics + counts</td></tr>
    <tr><td><code>GET</code></td><td><code>/rulesets</code></td><td>Built-in rulesets and their rules</td></tr>
    <tr><td><code>POST</code></td><td><code>/rulesets/validate</code></td><td>Structurally validate a ruleset</td></tr>
    <tr><td><code>GET</code></td><td><code>/formats</code></td><td>Supported artifact formats</td></tr>
    <tr><td><code>GET</code></td><td><code>/openapi.yaml</code></td><td>This API's OpenAPI definition</td></tr>
  </tbody>
</table>

<pre class="bg-light p-3 rounded"><code>curl -s -X POST localhost:8080/lint -H 'content-type: application/json' \
  -d '{"format":"openapi","content":"openapi: \"3.0.3\"\ninfo: {title: T, version: \"1\"}\npaths: {}\n"}'</code></pre>

<p class="text-muted">A <code>ruleset</code> may be a built-in alias (<code>spotlight:oas</code>) or a full ruleset definition that extends the built-ins — the <a href="/spec/">spotlight-spec</a> format.</p>

<div class="d-flex gap-3 mt-4">
  <a class="btn btn-sm btn-outline-secondary" href="https://github.com/api-commons/spotlight-api">GitHub</a>
  <a class="btn btn-sm btn-outline-secondary" href="/mcp/">spotlight-mcp</a>
  <a class="btn btn-sm btn-outline-secondary" href="/cli/">spotlight-cli</a>
</div>
