---
layout: default
title: spotlight-pipeline
nav: pipeline
permalink: /pipeline/
---

<h1 class="mb-1">spotlight-pipeline</h1>
<p class="lead text-muted">Governance as code — run Spotlight as a gate in any CI pipeline.</p>

<p>
  <strong>spotlight-pipeline</strong> makes it one step to enforce your API governance in delivery. Drop
  your <a href="/spec/">Spotlight ruleset</a> into CI and every change to your API descriptions is linted
  against it — failing the build past a severity threshold. It's a set of <strong>thin, reusable CI
  integrations</strong> that all run <a href="/cli/">spotlight-cli</a> the same way, with the same inputs
  (files, ruleset, fail-severity), across platforms. The unit you "deploy" is <strong>your ruleset + a
  threshold</strong>.
</p>

<h2>GitHub Actions</h2>
<pre class="bg-light p-3 rounded"><code>- uses: actions/checkout@v4
- uses: api-commons/spotlight-pipeline@v1
  with:
    files: 'apis/**/openapi.yaml'
    ruleset: '.spotlight.yaml'
    fail-severity: 'error'
    sarif: 'spotlight.sarif'        # optional → code scanning</code></pre>
<p class="text-muted">Emits inline PR annotations + a summary, optional SARIF for code scanning, and fails per <code>fail-severity</code>.</p>

<h2>Every platform</h2>
<p>Copy the matching template — same command, native reporting:</p>
<ul>
  <li><strong>GitHub Actions</strong> — the composite action above</li>
  <li><strong>GitLab CI</strong> — JUnit report</li>
  <li><strong>Bitbucket Pipelines</strong></li>
  <li><strong>Azure DevOps</strong> — JUnit</li>
  <li><strong>AWS CodeBuild</strong> — JUnit report</li>
</ul>

<p class="text-muted">Author and refine your rules in the <a href="/validator/">validator</a>, then enforce them here.</p>

<div class="d-flex gap-3 mt-4">
  <a class="btn btn-sm btn-outline-secondary" href="https://github.com/api-commons/spotlight-pipeline">GitHub</a>
  <a class="btn btn-sm btn-outline-secondary" href="/cli/">spotlight-cli</a>
  <a class="btn btn-sm btn-outline-secondary" href="/validator/">spotlight-validator</a>
</div>
