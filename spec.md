---
layout: default
title: spotlight-spec
nav: spec
permalink: /spec/
---

<h1 class="mb-1">spotlight-spec</h1>
<p class="lead text-muted">A standalone, versioned specification of the Spotlight ruleset format — and an explorable catalog of every rule.</p>

<p>
  <strong>spotlight-spec</strong> defines the portable, serializable shape of a Spotlight (Spectral)
  ruleset — the <code>rules</code>, <code>extends</code>, <code>formats</code>, <code>functions</code>,
  and severities you put in a <code>.yaml</code>/<code>.json</code> file and hand to any conforming
  linter. It is published as a single, self-contained <strong>JSON Schema (draft-07)</strong>, derived
  faithfully from Spectral's own internal meta-schemas and reconciled into one document, so the format is
  documented and validatable independent of any single implementation.
</p>

<p>
  Spotlight extends that baseline with its own first-class properties. The first is <strong><code>tags</code></strong>
  on a rule — namespaced strings that classify it so tooling can group and filter rules:
  <code>format:&lt;artifact&gt;</code> (where it applies), <code>spec:&lt;location&gt;</code>
  (where in the document), <code>experience:&lt;dimension&gt;</code> (the developer-experience quality it
  improves), and <code>source:&lt;provider&gt;</code> (provenance).
</p>

<div class="d-flex gap-3 mb-4">
  <a class="btn btn-sm btn-success" href="https://api-commons.github.io/spotlight-spec/schema/v1/spotlight-ruleset.schema.json">JSON Schema</a>
  <a class="btn btn-sm btn-outline-secondary" href="https://github.com/api-commons/spotlight-spec">GitHub</a>
  <a class="btn btn-sm btn-outline-secondary" href="https://validator.spotlight-rules.com">Try in the validator</a>
</div>

<hr class="my-4">

<h2 class="mb-2">Explore the rules</h2>
<p class="text-muted">Every rule Spotlight applies, grouped by artifact. Expand an artifact and open any rule for its full detail, tags, and where it applies — with next / previous navigation.</p>

{% assign order = "openapi,apis-json,asyncapi,arazzo,json-schema,json-structure,json-ld,mcp,plans,rate-limits,finops,agent-skill" | split: "," %}
{% for art in order %}
  {% assign info = site.data.rule_index[art] %}
  {% if info %}
<details class="rule-artifact card mb-2" id="{{ art }}">
  <summary class="card-body py-2 px-3 d-flex justify-content-between align-items-center">
    <span class="fw-semibold">{{ info.label }}</span>
    <span class="text-muted small">{{ info.rules | size }} rules</span>
  </summary>
  <div class="card-body pt-0">
    <div class="row g-1">
      {% for r in info.rules %}
      <div class="col-md-6 col-lg-4 small">
        <a href="/spec/rules/{{ art }}/{{ r.slug }}/">{{ r.name }}</a>
      </div>
      {% endfor %}
    </div>
  </div>
</details>
  {% endif %}
{% endfor %}

<style>
  details.rule-artifact > summary { cursor: pointer; list-style: none; }
  details.rule-artifact > summary::-webkit-details-marker { display: none; }
  details.rule-artifact > summary::before { content: "▸"; color: #999; margin-right: .5rem; }
  details.rule-artifact[open] > summary::before { content: "▾"; }
  details.rule-artifact[open] > summary { border-bottom: 1px solid #eee; }
</style>
