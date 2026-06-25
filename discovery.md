---
layout: default
title: spotlight-discovery
nav: discovery
permalink: /discovery/
---

<h1 class="mb-1">spotlight-discovery</h1>
<p class="lead text-muted">Find API artifacts anywhere, keep where you found them, and save them into git.</p>

<p>
  <strong>spotlight-discovery</strong> is a <strong>browser-first registry</strong> for API artifacts.
  Search the open <a href="https://apis.io">APIs.io</a> catalog and code across
  <strong>GitHub, GitLab, and Bitbucket</strong>; load any result into the editor; keep a
  <strong>provenance pointer</strong> to exactly where it came from; <strong>save it locally</strong>; and
  <strong>commit or open a pull request</strong> to git with your own access token — all in the browser,
  no backend. Then search and edit your saved artifacts.
</p>

<div class="my-3">
  <a class="btn btn-dark" href="https://discovery.spotlight-rules.com">Open Discovery →</a>
</div>

<h2>What it does</h2>
<ul>
  <li><strong>Multi-source search</strong> — APIs.io plus GitHub/GitLab/Bitbucket code search, in one place.</li>
  <li><strong>Provenance</strong> — every artifact remembers its origin (a catalog entry, or <code>repo/path@ref</code>) with a link back.</li>
  <li><strong>Save locally</strong> — artifacts persist in your browser; filter, search, and re-edit them.</li>
  <li><strong>Save to git</strong> — <strong>Commit</strong> or <strong>Open PR</strong> to a GitHub repo with a personal access token you store locally (GitLab/Bitbucket writes are a fast-follow).</li>
  <li><strong>Edit</strong> with Monaco, YAML ⇄ JSON.</li>
</ul>

<p class="text-muted">
  Tokens are stored only in your browser and sent straight to the provider APIs. Found something? Lint it
  in the <a href="/validator/">validator</a> against the <a href="/spec/">Spotlight rules</a>.
</p>

<div class="d-flex gap-3 mt-4">
  <a class="btn btn-sm btn-dark" href="https://discovery.spotlight-rules.com">Open</a>
  <a class="btn btn-sm btn-outline-secondary" href="https://github.com/api-commons/spotlight-discovery">GitHub</a>
  <a class="btn btn-sm btn-outline-secondary" href="/validator/">spotlight-validator</a>
</div>
