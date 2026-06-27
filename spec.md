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
<p class="text-muted">All <strong>{{ total }} rules</strong> Spotlight applies, across <strong>{{ order.size }} artifact types</strong>. Pick an artifact below to jump to its group and expand it, click any group heading to <strong>Show rules</strong>, or open any rule for its full detail.</p>

<div id="rule-nav" class="d-flex flex-wrap gap-2 mb-4">
  {% for art in order %}{% assign info = site.data.rule_index[art] %}{% if info %}<a href="#{{ art }}" class="btn btn-sm btn-outline-secondary">{{ info.label }} <span class="badge bg-secondary ms-1">{{ info.rules | size }}</span></a>{% endif %}{% endfor %}
</div>

<style>
.rule-artifact > summary { cursor: pointer; list-style: none; }
.rule-artifact > summary::-webkit-details-marker { display: none; }
.rule-artifact > summary:hover { background: var(--bs-tertiary-bg, #f8f9fa); }
.rule-artifact > summary .when-open { display: none; }
.rule-artifact[open] > summary .when-open { display: inline; }
.rule-artifact[open] > summary .when-closed { display: none; }
</style>

{% for art in order %}
  {% assign info = site.data.rule_index[art] %}
  {% if info %}
<details class="rule-artifact card mb-2" id="{{ art }}">
  <summary class="card-body py-2 px-3 d-flex align-items-center gap-2">
    <span class="fw-semibold">{{ info.label }}</span>
    <span class="badge bg-secondary">{{ info.rules | size }}</span>
    <span class="text-primary small ms-auto"><span class="when-closed">Show rules ▾</span><span class="when-open">Hide ▴</span></span>
  </summary>
  <ul class="list-unstyled mb-0 border-top">
    {% for r in info.rules %}
    <li class="border-bottom px-3 py-2">
      <div class="d-flex flex-wrap align-items-baseline gap-2">
        <a href="/spec/rules/{{ art }}/{{ r.slug }}/" class="fw-semibold">{{ r.name }}</a>
        <span class="badge bg-light text-dark border">{{ r.severity }}</span>
        {% for e in r.experience %}<span class="badge rounded-pill bg-success-subtle text-success-emphasis border border-success-subtle">experience: {{ e }}</span>{% endfor %}
        {% for s in r.spec %}<span class="badge rounded-pill bg-primary-subtle text-primary-emphasis border border-primary-subtle">spec: {{ s }}</span>{% endfor %}
        {% for t in r.topic %}<span class="badge rounded-pill bg-info-subtle text-info-emphasis border border-info-subtle">topic: {{ t }}</span>{% endfor %}
        {% for o in r.owasp %}<span class="badge rounded-pill bg-danger-subtle text-danger-emphasis border border-danger-subtle">owasp: {{ o }}</span>{% endfor %}
      </div>
      {% if r.description %}<div class="small text-muted">{{ r.description }}</div>{% endif %}
    </li>
    {% endfor %}
  </ul>
</details>
  {% endif %}
{% endfor %}

<script>
(function () {
  function reveal(id) {
    var el = document.getElementById(id);
    if (el && el.tagName === 'DETAILS') { el.open = true; el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  }
  document.querySelectorAll('#rule-nav a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function () { reveal(this.getAttribute('href').slice(1)); });
  });
  if (location.hash) reveal(location.hash.slice(1));
})();
</script>
