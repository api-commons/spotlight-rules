---
layout: default
nav: research
title: Research
description: >-
  The research behind the decision to fork — the maintenance record, who depends on the format,
  and the open questions about where it should live.
permalink: /research/
---

# Research

Every claim made on this site is backed by something. This section publishes the work.

It is deliberately unglamorous: counts pulled from public APIs, a maintenance record anyone can
reproduce, and a list of decisions with the reasoning shown — including the ones that are still
open.

> **A note on names.** This research was assembled partly from public data and partly from private
> conversations with organizations and individuals who depend on this format. Those references
> have been removed. Nobody gets volunteered into a public position they did not take. People and
> organizations who want to identify themselves are welcome to do so in
> [the discussion]({{ site.discussion }}) — on their own terms, in their own words.
>
> What remains is the evidence, stated in categories rather than names. If you would rather be
> counted privately than post in public, [email {{ site.email }}](mailto:{{ site.email }}?subject=Spectral%20fork)
> — it counts the same, and nothing is attributed without your say-so.

---

<div class="row g-4 mt-1">

  <div class="col-md-4">
    <div class="card shadow-sm">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">The maintenance record</h5>
        <p class="card-text flex-grow-1 small">
          What the repository and the wider organization actually look like — issues closed per
          year, the open backlog, release cadence, what recent commits consist of, and the state
          of the surrounding tools. All of it reproducible from public data.
        </p>
        <a href="/research/maintenance/" class="fw-semibold">Read →</a>
      </div>
    </div>
  </div>

  <div class="col-md-4">
    <div class="card shadow-sm">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">Who depends on this</h5>
        <p class="card-text flex-grow-1 small">
          The dependent base, by category — governments, enterprises, vendors, tooling. Plus the
          pattern that matters most: what the ecosystem built, and what it conspicuously did not.
        </p>
        <a href="/research/dependents/" class="fw-semibold">Read →</a>
      </div>
    </div>
  </div>

  <div class="col-md-4">
    <div class="card shadow-sm">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">The plan, and what is open</h5>
        <p class="card-text flex-grow-1 small">
          The decisions taken so far and the reasoning behind each, the questions deliberately
          left open, and the risks worth naming out loud.
        </p>
        <a href="/research/plan/" class="fw-semibold">Read →</a>
      </div>
    </div>
  </div>

</div>

---

## Method

**Maintenance data** was pulled from the GitHub API on 2026-07-29 — the full issue and pull
request history of the linter's repository (2,789 records), the repository list for its
organization (125 public repositories), release history, and commit history. Anyone can re-run it
and should; these numbers will drift.

**Dependency data** was assembled from the npm registry (packages depending on the engine, plus
keyword searches), GitHub repository search, and the upstream project's own community index of
rulesets in the wild — which was itself last updated eighteen months ago and undercounts
significantly.

**Everything else** — the parts that came from conversations with people who run this in
production — informs the reasoning but is not reproduced here. Where a claim rests only on a
private conversation, it is either omitted or stated generically enough that no one is identified.

---

<div class="card bg-light border-0 mt-4">
  <div class="card-body text-center py-4">
    <p class="mb-3">Found an error, or have data that contradicts this? That is genuinely useful.</p>
    <a class="btn btn-primary" href="{{ site.discussion }}">Say so in the discussion →</a>
    <a class="btn btn-outline-secondary ms-2" href="mailto:{{ site.email }}?subject=Spectral%20fork">Or email privately →</a>
  </div>
</div>
