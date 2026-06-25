---
layout: default
title: spotlight-mcp
nav: mcp
permalink: /mcp/
---

<h1 class="mb-1">spotlight-mcp</h1>
<p class="lead text-muted">Spotlight for AI clients — govern your APIs conversationally.</p>

<p>
  <strong>spotlight-mcp</strong> is a <a href="https://modelcontextprotocol.io">Model Context Protocol</a>
  server that exposes Spotlight to <strong>any AI client</strong>. An agent can lint your API artifacts,
  list the rules, and validate rulesets — in conversation — running the same <code>@spotlight-rules</code>
  engine as the rest of the suite, over stdio.
</p>

<h2>Tools</h2>
<table class="table table-sm">
  <tbody>
    <tr><td><code>lint_artifact</code></td><td>Lint an artifact (<code>content</code>, optional <code>format</code>/<code>ruleset</code>) → findings + counts</td></tr>
    <tr><td><code>list_rulesets</code></td><td>Built-in rulesets and their rules</td></tr>
    <tr><td><code>list_formats</code></td><td>Artifact formats Spotlight can lint</td></tr>
    <tr><td><code>validate_ruleset</code></td><td>Structurally validate a ruleset</td></tr>
  </tbody>
</table>

<h2>Add it to your AI client</h2>
<p>For Claude Desktop (or any MCP client), add a server entry:</p>
<pre class="bg-light p-3 rounded"><code>{
  "mcpServers": {
    "spotlight": { "command": "npx", "args": ["-y", "@spotlight-rules/spotlight-mcp"] }
  }
}</code></pre>
<p class="text-muted">Then ask: <em>"Lint this OpenAPI with Spotlight and tell me what to fix."</em></p>

<div class="d-flex gap-3 mt-4">
  <a class="btn btn-sm btn-outline-secondary" href="https://github.com/api-commons/spotlight-mcp">GitHub</a>
  <a class="btn btn-sm btn-outline-secondary" href="/api/">spotlight-api</a>
  <a class="btn btn-sm btn-outline-secondary" href="/validator/">spotlight-validator</a>
</div>
