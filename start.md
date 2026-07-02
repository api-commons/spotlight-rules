---
layout: default
nav: start
title: Get Started
permalink: /start/
description: Pick the Spotlight Rules surface that fits how you work — CLI, editor, browser, HTTP, AI, CI, or discovery — all running the same engine and ruleset catalog.
---

<h1 class="mb-1">Get started</h1>
<p class="lead text-muted">Eight surfaces, one engine and one curated rule catalog. Pick the one that fits how you work.</p>

<h2 class="h4 mt-4">Choose your path</h2>
<div class="row g-3 mt-1">
  <div class="col-md-6">
    <div class="card h-100"><div class="card-body">
      <h5 class="card-title">Lint in the terminal / CI</h5>
      <p class="card-text">Install the CLI and point it at your API description. Gate pull requests with the pipeline templates.</p>
      <a href="/cli/" class="fw-semibold">spotlight-cli →</a> &nbsp; <a href="/pipeline/">spotlight-pipeline →</a>
    </div></div>
  </div>
  <div class="col-md-6">
    <div class="card h-100"><div class="card-body">
      <h5 class="card-title">Lint while you edit</h5>
      <p class="card-text">Lint-on-save and lint-on-type for OpenAPI, AsyncAPI, and Arazzo, right inside VS Code.</p>
      <a href="/vscode/" class="fw-semibold">spotlight-vscode →</a>
    </div></div>
  </div>
  <div class="col-md-6">
    <div class="card h-100"><div class="card-body">
      <h5 class="card-title">Try it in the browser</h5>
      <p class="card-text">Lint 12 artifact types against the curated catalog, filter rules by tag, fix findings with AI, and run per-artifact utilities — no install.</p>
      <a href="/validator/" class="fw-semibold">spotlight-validator →</a> &nbsp; <a href="https://validator.spotlight-rules.com">open ↗</a>
    </div></div>
  </div>
  <div class="col-md-6">
    <div class="card h-100"><div class="card-body">
      <h5 class="card-title">Govern over HTTP or with AI</h5>
      <p class="card-text">Call <code>POST /lint</code> from any service, or expose linting to an AI client over the Model Context Protocol.</p>
      <a href="/api/" class="fw-semibold">spotlight-api →</a> &nbsp; <a href="/mcp/">spotlight-mcp →</a>
    </div></div>
  </div>
  <div class="col-md-6">
    <div class="card h-100"><div class="card-body">
      <h5 class="card-title">Author rules</h5>
      <p class="card-text">The ruleset format is a standalone, versioned JSON Schema (2020-12). Browse every rule, or write your own.</p>
      <a href="/spec/" class="fw-semibold">spotlight-spec &amp; the rule catalog →</a>
    </div></div>
  </div>
</div>

<h2 class="h4 mt-5">The whole suite</h2>
<div class="table-responsive">
<table class="table align-middle">
  <thead><tr><th>Tool</th><th>What it is</th><th></th></tr></thead>
  <tbody>
    <tr><td><strong>spotlight-cli</strong></td><td>The linter engine + CLI — a maintained Spectral fork, on npm.</td><td><a href="/cli/">details</a></td></tr>
    <tr><td><strong>spotlight-spec</strong></td><td>The standalone ruleset format + JSON Schema, and the rule catalog.</td><td><a href="/spec/">details</a></td></tr>
    <tr><td><strong>spotlight-vscode</strong></td><td>Lint-on-save / lint-on-type in VS Code.</td><td><a href="/vscode/">details</a></td></tr>
    <tr><td><strong>spotlight-validator</strong></td><td>Browser governance workbench — lint, filter, AI-fix, utilities.</td><td><a href="/validator/">details</a></td></tr>
    <tr><td><strong>spotlight-api</strong></td><td>OpenAPI-first HTTP service over the engine.</td><td><a href="/api/">details</a></td></tr>
    <tr><td><strong>spotlight-mcp</strong></td><td>MCP server exposing linting to AI clients.</td><td><a href="/mcp/">details</a></td></tr>
    <tr><td><strong>spotlight-pipeline</strong></td><td>Governance-gate CI for GitHub / GitLab / Bitbucket / Azure / AWS.</td><td><a href="/pipeline/">details</a></td></tr>
  </tbody>
</table>
</div>

<h2 class="h4 mt-5">Coming from Spectral?</h2>
<p>
  Spotlight is an openly-governed, progressive build of
  <a href="https://github.com/stoplightio/spectral">Stoplight Spectral</a> (Apache-2.0,
  attribution preserved throughout). Your existing rulesets keep working: the
  <code>spectral:</code> ruleset aliases and <code>.spectral.*</code> files are honored
  alongside the <code>spotlight:</code> aliases and <code>.spotlight.*</code> files.
</p>
