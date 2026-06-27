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
  linter. It is published as a single, self-contained <strong>JSON Schema (2020-12)</strong>, derived
  faithfully from Spectral's own internal meta-schemas and reconciled into one document, so the format is
  documented and validatable independent of any single implementation.
</p>

<p>
  Spotlight extends that baseline with its own first-class rule properties — <code>tags</code> (namespaced
  classifiers), <code>title</code> (a display name), <code>reference</code> (a canonical docs URL), and
  <code>prompt</code> (an AI fix instruction). They're detailed in the schema below.
</p>

<div class="d-flex gap-3 mb-4">
  <a class="btn btn-sm btn-success" href="https://api-commons.github.io/spotlight-spec/schema/v1/spotlight-ruleset.schema.json">JSON Schema</a>
  <a class="btn btn-sm btn-outline-secondary" href="https://github.com/api-commons/spotlight-spec">GitHub</a>
  <a class="btn btn-sm btn-outline-secondary" href="https://validator.spotlight-rules.com">Try in the validator</a>
</div>

<hr class="my-4">

<h2 class="mb-2" id="schema">Schema properties</h2>
<p class="text-muted">The shape of a ruleset document, and of a single rule. Spotlight's own additions are highlighted.</p>

<h5 class="mt-3">Ruleset (top level)</h5>
<div class="table-responsive">
<table class="table table-sm align-middle">
  <thead><tr><th style="width:10rem">Property</th><th style="width:9rem">Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>rules</code></td><td>object</td><td>Map of rule name → rule definition (or a severity to toggle a rule inherited via <code>extends</code>).</td></tr>
    <tr><td><code>extends</code></td><td>string · array</td><td>Inherit rules from other rulesets — e.g. <code>spotlight:oas</code>, <code>spotlight:asyncapi</code>, <code>spotlight:arazzo</code>.</td></tr>
    <tr><td><code>formats</code></td><td>array</td><td>Document formats the whole ruleset targets (e.g. <code>oas3</code>, <code>asyncapi2</code>).</td></tr>
    <tr><td><code>functions</code></td><td>array</td><td>Names of custom functions a rule's <code>then</code> may reference.</td></tr>
    <tr><td><code>functionsDir</code></td><td>string</td><td>Directory the custom functions are loaded from.</td></tr>
    <tr><td><code>overrides</code></td><td>array</td><td>Apply or re-scope rules to specific files / JSON Pointers.</td></tr>
    <tr><td><code>aliases</code></td><td>object</td><td>Reusable named JSONPath targets that a rule's <code>given</code> can reference.</td></tr>
    <tr><td><code>documentationUrl</code></td><td>string</td><td>Docs URL for the ruleset.</td></tr>
    <tr><td><code>description</code></td><td>string</td><td>Human description of the ruleset.</td></tr>
  </tbody>
</table>
</div>

<h5 class="mt-3">Rule</h5>
<div class="table-responsive">
<table class="table table-sm align-middle">
  <thead><tr><th style="width:10rem">Property</th><th style="width:9rem">Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>given</code></td><td>JSONPath · array</td><td>Where in the document the rule applies.</td></tr>
    <tr><td><code>then</code></td><td>object · array</td><td>The assertion — a <code>field</code> plus a <code>function</code> (with optional <code>functionOptions</code>).</td></tr>
    <tr><td><code>severity</code></td><td>error · warn · info · hint · off</td><td>How a violation is reported. Spotlight ships every rule at <code>info</code> — raise to <code>warn</code>/<code>error</code> to enforce.</td></tr>
    <tr><td><code>message</code></td><td>string</td><td>The lint message; supports <code>{{value}}</code>, <code>{{property}}</code>, <code>{{error}}</code> placeholders.</td></tr>
    <tr><td><code>description</code></td><td>string</td><td>What the rule checks, and why it matters.</td></tr>
    <tr><td><code>formats</code></td><td>array</td><td>Restrict the rule to specific document formats.</td></tr>
    <tr><td><code>recommended</code></td><td>boolean</td><td>Whether the rule runs in the ruleset's recommended set.</td></tr>
    <tr><td><code>resolved</code></td><td>boolean</td><td>Lint the resolved (<code>$ref</code>-dereferenced) document, or the raw source.</td></tr>
    <tr><td><code>documentationUrl</code></td><td>string</td><td>Per-rule documentation link.</td></tr>
  </tbody>
</table>
</div>

<h5 class="mt-3">Spotlight extensions <span class="badge bg-warning text-dark align-middle">beyond Spectral</span></h5>
<div class="table-responsive">
<table class="table table-sm align-middle">
  <thead><tr><th style="width:10rem">Property</th><th style="width:9rem">Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>tags</code></td><td>array</td><td>Namespaced classifiers tooling groups &amp; filters by: <code>format:&lt;artifact&gt;</code>, <code>spec:&lt;location&gt;</code>, <code>experience:&lt;dimension&gt;</code>, <code>topic:&lt;feature&gt;</code>, <code>owasp:&lt;apiN&gt;</code>.</td></tr>
    <tr><td><code>title</code></td><td>string</td><td>A short Title Case display name (e.g. <code>Response Define 429</code>).</td></tr>
    <tr><td><code>reference</code></td><td>string (url)</td><td>Canonical documentation URL — every Spotlight rule points at its page on this site.</td></tr>
    <tr><td><code>prompt</code></td><td>string</td><td>A natural-language fix instruction an AI assistant (Claude, Gemini, ChatGPT) can apply to remediate a violation.</td></tr>
  </tbody>
</table>
</div>

<hr class="my-4">

{% assign order = "openapi,apis-json,asyncapi,arazzo,json-schema,json-structure,json-ld,mcp,plans,rate-limits,finops,agent-skill" | split: "," %}
{% assign total = 0 %}{% for art in order %}{% assign info = site.data.rule_index[art] %}{% if info %}{% assign total = total | plus: info.rules.size %}{% endif %}{% endfor %}
<h2 class="mb-2">Explore the rules</h2>
<p class="text-muted">All <strong>{{ total }} rules</strong> Spotlight applies, across <strong>{{ order.size }} artifact types</strong>. Pick an artifact to browse and filter its rules, then open any rule for its full detail and AI fix prompt.</p>

<div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3 mb-2">
{% for art in order %}{% assign info = site.data.rule_index[art] %}{% if info %}
  <div class="col">
    <a href="/spec/rules/{{ art }}/" class="card h-100 text-decoration-none text-reset shadow-sm">
      <div class="card-body d-flex flex-column">
        <div class="d-flex justify-content-between align-items-start gap-2 mb-1">
          <h3 class="h5 mb-0">{{ info.label }}</h3>
          <span class="badge bg-secondary">{{ info.rules | size }}</span>
        </div>
        {% if info.description %}<p class="small text-muted mb-3">{{ info.description }}</p>{% endif %}
        <span class="small text-primary mt-auto">View {{ info.rules | size }} rules →</span>
      </div>
    </a>
  </div>
{% endif %}{% endfor %}
</div>
