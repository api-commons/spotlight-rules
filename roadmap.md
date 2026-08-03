---
layout: default
nav: roadmap
title: Roadmap
description: >-
  The roadmap is not a page somebody maintains — it is every issue labeled for it, on both
  repositories, with the discussion attached and a pull request pointing back at it.
permalink: /roadmap/
---

# Roadmap

**Nothing on this page is written by hand.** It is generated from issues labeled `roadmap` on
[spotlight-spec]({{ site.repo_rules }}) and [spotlight-tools]({{ site.repo_cli }}), refreshed
automatically. If an item is here, there is a public thread behind it that anyone can argue with.

That is deliberate, and it is the same argument the rest of this site makes about rules: **a
roadmap that only exists as prose is a claim; a roadmap that is generated from the work is an
artifact.** A hand-written roadmap tells you what somebody intends. This one tells you what is
actually open, how far the conversation has got, and — once building starts — which pull request
did it.

Two rules keep it honest:

1. **An item earns its place by being an issue first.** No item appears here that does not have a
   thread where the reasoning is visible and the objections are recorded.
2. **One issue, one pull request.** When an item moves into development, the pull request that
   implements it references the issue and only that issue, so the homework behind every roadmap
   item has provenance you can follow — from the argument, to the decision, to the diff.

<div class="row g-3 my-4">
  <div class="col-6 col-lg-3">
    <div class="card h-100"><div class="card-body py-3">
      <div class="stat fs-3">{{ site.data.roadmap.counts.open }}</div>
      <div class="small text-muted">open items</div>
    </div></div>
  </div>
  <div class="col-6 col-lg-3">
    <div class="card h-100"><div class="card-body py-3">
      <div class="stat fs-3">{{ site.data.roadmap.counts.ready }}</div>
      <div class="small text-muted">ready to implement</div>
    </div></div>
  </div>
  <div class="col-6 col-lg-3">
    <div class="card h-100"><div class="card-body py-3">
      <div class="stat fs-3">{{ site.data.roadmap.counts.discussing }}</div>
      <div class="small text-muted">still being argued</div>
    </div></div>
  </div>
  <div class="col-6 col-lg-3">
    <div class="card h-100"><div class="card-body py-3">
      <div class="stat fs-3">{{ site.data.roadmap.counts.with_prs }}</div>
      <div class="small text-muted">with a pull request</div>
    </div></div>
  </div>
</div>

## How to read it

| Label | What it means |
|---|---|
| `roadmap` | Proposed for the roadmap. Everything on this page carries it. |
| `roadmap:approved` | Approved for inclusion — the item is going to happen, whatever the sequencing. |
| `roadmap:deferred` | Considered and parked. Still visible, at the bottom, because a decision not to do something is also a decision. |
| `maturity:raised` | Raised. Little or no discussion yet — the cheapest moment to change its direction. |
| `maturity:discussing` | Active discussion, no rough consensus. |
| `maturity:consensus` | Rough consensus on what to do, not yet specified enough to build. |
| `maturity:ready` | Ready to implement. One issue, one pull request. |

**Maturity is about the conversation, not the code.** An item can be `ready` and untouched, or
`discussing` for months because the decision genuinely is hard. Nothing gets promoted by age.

---

{% comment %}
  One comparison per `where_exp`, deliberately. GitHub Pages pins Jekyll 3.10, whose `where_exp`
  parses a single comparison and then demands end-of-string; `and` / `or` inside the expression is
  a Jekyll 4 feature. A local Jekyll 4 build is therefore not evidence the Pages build passes —
  the multi-clause version of these three lines failed with "Expected end_of_string but found id".
{% endcomment %}
{% assign open_items = site.data.roadmap.items | where_exp: "i", "i.state == 'open'" %}
{% assign live = open_items | where_exp: "i", "i.deferred == false" %}
{% assign parked = open_items | where_exp: "i", "i.deferred" %}
{% assign done = site.data.roadmap.items | where_exp: "i", "i.state == 'closed'" %}

{% assign groups = "ready,consensus,discussing,raised" | split: "," %}
{% for g in groups %}
{% assign bucket = live | where: "maturity", g %}
{% if bucket.size > 0 %}
## {% case g %}{% when 'ready' %}Ready to implement{% when 'consensus' %}Rough consensus{% when 'discussing' %}Under discussion{% when 'raised' %}Raised{% endcase %}

<p class="text-muted small">{% case g %}{% when 'ready' %}Specified enough that the next step is a pull request.{% when 'consensus' %}Agreement on what to do. Still needs to be pinned down before anyone builds it.{% when 'discussing' %}Genuinely open. This is where arguing is worth the most.{% when 'raised' %}Newly raised, barely discussed. Easiest to redirect.{% endcase %}</p>

<div class="list-group mb-4">
{% for item in bucket %}
  <div class="list-group-item">
    <div class="d-flex justify-content-between align-items-start gap-3 flex-wrap">
      <div>
        <a class="fw-semibold" href="{{ item.url }}">{{ item.title }}</a>
        <div class="small text-muted mt-1">
          <span class="badge {% if item.repo == 'spotlight-spec' %}bg-success{% else %}bg-primary{% endif %}">{{ item.repo }}</span>
          <a href="{{ item.url }}">#{{ item.number }}</a>
          &middot; {{ item.comments }} comment{% unless item.comments == 1 %}s{% endunless %}
          {% if item.approved %}&middot; <span class="badge bg-dark">approved</span>{% endif %}
        </div>
      </div>
      <div class="text-end small">
        {% if item.prs.size > 0 %}
          {% for pr in item.prs %}<div><a href="{{ pr.url }}">PR #{{ pr.number }}</a>{% if pr.merged %} <span class="badge bg-success">merged</span>{% else %} <span class="badge bg-secondary">{{ pr.state }}</span>{% endif %}</div>{% endfor %}
        {% else %}
          <span class="text-muted">no PR yet</span>
        {% endif %}
      </div>
    </div>
  </div>
{% endfor %}
</div>
{% endif %}
{% endfor %}

{% if parked.size > 0 %}
## Parked

<p class="text-muted small">Considered, and deliberately not now. Listed because a decision not to do something is worth as much publicly as a decision to do it.</p>

<ul>
{% for item in parked %}
  <li><a href="{{ item.url }}">{{ item.title }}</a> <span class="text-muted small">— {{ item.repo }}#{{ item.number }}</span></li>
{% endfor %}
</ul>
{% endif %}

{% if done.size > 0 %}
## Done

<ul>
{% for item in done %}
  <li><a href="{{ item.url }}">{{ item.title }}</a> <span class="text-muted small">— {{ item.repo }}#{{ item.number }}{% for pr in item.prs %}, <a href="{{ pr.url }}">PR #{{ pr.number }}</a>{% endfor %}</span></li>
{% endfor %}
</ul>
{% endif %}

---

## Getting something onto it

Open an issue on the repository it belongs to — [the format, the schema, or the specification]({{ site.repo_rules }}/issues) on `spotlight-spec`, [the engine, the CLI, or the packaging]({{ site.repo_cli }}/issues) on `spotlight-tools` — and say what you want and why. If it belongs on the roadmap it gets labeled, and it shows up here on the next refresh.

**Direction is welcome in the issue trackers now.** That is a change from how this started: the naming question, the question of where the specification lives, and every other open decision are now issues with labels rather than buried in a single thread, precisely so that each one can be found, cited, and settled on its own terms.

<div class="card bg-light border-0 mt-4">
  <div class="card-body text-center py-4">
    <p class="mb-3">The two biggest open questions are the name and the permanent home. Both are issues. Both are genuinely undecided.</p>
    <a class="btn btn-primary" href="{{ site.repo_rules }}/issues/7">The name →</a>
    <a class="btn btn-primary ms-2" href="{{ site.repo_rules }}/issues/8">Where it lives →</a>
  </div>
</div>

<p class="text-muted small mt-4">Generated {{ site.data.roadmap.generated }} from {{ site.data.roadmap.repos | join: " and " }}.</p>
