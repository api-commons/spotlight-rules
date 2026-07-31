---
layout: default
nav: implementations
title: Implementations
description: >-
  Every engine and product built on, or adjacent to, the Spectral ruleset format — a map, not a
  league table, with the evidence for every claim.
permalink: /implementations/
---

# The implementation landscape

**The tool is one implementation among many. The format is the thing that matters.**

That is the claim this whole effort rests on, and a claim is worth very little without a list
behind it. This page is the list — every engine that runs the Spectral ruleset format, every
product that embeds it behind its own interface, and the adjacent tooling that solves the same
problem a different way.

It exists for a second reason too. The recurring pattern in this ecosystem is vendors
independently building on the format, wrapping it in their own facade, or reimplementing it —
each of them solving the same problems privately, because there was never a specification to
solve them against. **Naming that work publicly is how parallel private effort becomes an
ecosystem.**

## How this list is kept

- **Evidence, not opinion.** Every relationship claim links to something checkable. No
  performance claims repeated without a reproducible benchmark.
- **No ranking and no scoring.** The project that maintains one of these implementations does not
  get to score the others.
- **Corrections take priority.** If you maintain something listed here and this page is wrong
  about it, open a pull request against
  [`_data/implementations.yml`]({{ site.github_org | prepend: 'https://github.com/' }}/spotlight-rules/blob/main/_data/implementations.yml)
  and it gets merged on sight. Being wrong about someone else's project in public is worse than
  being incomplete.
- **Machine-readable first.** The data file is the source of truth; this page renders from it.

---

{% assign engines = site.data.implementations | where: "relationship", "engine" %}
{% assign embeds = site.data.implementations | where: "relationship", "embeds" %}
{% assign adjacent = site.data.implementations | where: "relationship", "adjacent" %}
{% assign unknown = site.data.implementations | where: "relationship", "unknown" %}

## Engines

<p class="text-muted">Implementations that execute the ruleset format directly. These are the ones a conformance suite adjudicates between.</p>

{% for i in engines %}
<div class="card mb-3"><div class="card-body">
  <h3 class="h5 mb-1"><a href="{{ i.url }}">{{ i.name }}</a></h3>
  <p class="small text-muted mb-2">{{ i.language }}{% if i.browser == true %} &middot; runs in the browser{% endif %}</p>
  <p class="mb-2">{{ i.summary }}</p>
  <p class="small mb-0"><a href="{{ i.evidence }}">Evidence</a></p>
</div></div>
{% endfor %}

## Embedded in products

<p class="text-muted">The least visible and most significant category — the format doing load-bearing work inside somebody else's product, usually behind an interface that never mentions it. This is what "sinking below the waterline" looks like in practice, and it is the strongest argument for the format existing independently of any one tool.</p>

{% for i in embeds %}
<div class="card mb-3"><div class="card-body">
  <h3 class="h5 mb-1"><a href="{{ i.url }}">{{ i.name }}</a></h3>
  <p class="small text-muted mb-2">{{ i.language }}</p>
  <p class="mb-2">{{ i.summary }}</p>
  <p class="small mb-0"><a href="{{ i.evidence }}">Evidence</a></p>
</div></div>
{% endfor %}

## Adjacent

<p class="text-muted">Tooling that solves the same problem with its own rules model. Not competitors to be argued with — prior art to be learned from, and in several cases the reason a particular design decision in the format looks the way it does.</p>

{% for i in adjacent %}
<div class="card mb-3"><div class="card-body">
  <h3 class="h5 mb-1"><a href="{{ i.url }}">{{ i.name }}</a></h3>
  <p class="small text-muted mb-2">{{ i.language }}{% if i.browser == true %} &middot; runs in the browser{% endif %}</p>
  <p class="mb-2">{{ i.summary }}</p>
  <p class="small mb-0"><a href="{{ i.evidence }}">Evidence</a></p>
</div></div>
{% endfor %}

{% if unknown.size > 0 %}
## Relationship not established

<p class="text-muted">Believed relevant, but the relationship to the ruleset format has not been verified here. Listed openly rather than guessed at — corrections from the maintainers are the fastest way to fix these.</p>

{% for i in unknown %}
<div class="card mb-3 border-warning-subtle"><div class="card-body">
  <h3 class="h5 mb-1"><a href="{{ i.url }}">{{ i.name }}</a></h3>
  <p class="mb-2">{{ i.summary }}</p>
  <p class="small mb-0"><a href="{{ i.evidence }}">Reference</a></p>
</div></div>
{% endfor %}
{% endif %}

---

## What is missing, and it is a lot

The hardest category to map is **in-house implementations**. Several large enterprises wrote their
own engine rather than depend on an unmaintained one, and several more run the incumbent engine
behind an internal validation platform that nobody outside the company has ever heard of. None of
that is visible from a package registry.

That invisibility is not a curiosity — it is the reason every conversation about a permanent home
for the format stalls. *Who actually uses this?* has never had a public answer.

If you run one of these, saying so — [publicly or privately](/involved/) — does more for the format
than any amount of code.

## What this list is for

Once the [conformance suite]({{ site.repo_rules }}/issues/9) exists, this page becomes something
better than a map: a **register of what conforms**, run and reported the same way for every engine,
with the output published. That is the point at which "compatible with the ruleset format" stops
being a marketing claim and becomes a testable one — and the point at which the implementers doing
quiet parity work finally get credit for it.

<div class="card bg-light border-0 mt-4">
  <div class="card-body text-center py-4">
    <p class="mb-3">Maintain an implementation, or know one that is missing? The roundup is tracked in the open.</p>
    <a class="btn btn-primary" href="{{ site.repo_cli }}/issues/13">The roundup issue →</a>
    <a class="btn btn-outline-secondary ms-2" href="{{ site.discussion }}">Discussion</a>
  </div>
</div>
