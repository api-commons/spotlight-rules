---
layout: default
nav: research
title: Who depends on this
description: >-
  The dependent base by category — governments, enterprises, vendors, and tooling — and the one
  pattern in the ecosystem that makes the case for a specification.
permalink: /research/dependents/
---

# Who depends on this

Assembled from the npm registry, GitHub repository search, and the upstream project's own
community index of rulesets in the wild — which was itself last updated in **February 2025**, is
eighteen months stale, and undercounts substantially.

> **Names are mostly absent, on purpose.** Publishing a ruleset is evidence of *dependence*, not of
> endorsement, and nobody should be volunteered into a public position on a fork they have not been
> asked about. The exceptions are a published standard that speaks for itself, and any organization
> that has explicitly agreed to be named. Anything learned in a private conversation stays
> unattributed. Organizations who want to identify themselves are welcome to do so in
> [the discussion]({{ site.discussion }}), on their own terms — or privately by
> <!--email_off-->[email](mailto:{{ site.email }}?subject=Spectral%20fork)<!--email_on--> if a public
> post is not something your organization can do.

---

## By category

### Public sector

At least **five public-sector bodies** are publicly on the record using this format, including
**three national governments**, a national defence agency, and a major nonprofit foundation.

In at least one case, the format is not merely used — **the country's mandatory API design rules,
the ones on its official standards list, are written as rulesets in this format.** The clearest
published example is the Dutch government's [REST API Design Rules]({{ site.nl_adr }}), a mandatory
standard on the Netherlands' comply-or-explain list, which names the linter in its normative text.
Compliance with a national standard is expressed in a file format that has no specification, run by
a linter with 241 open issues.

That is the sharpest version of the problem this fork exists to fix, and it is why the public
sector is the most important constituency here rather than the most obscure one.

### Large enterprises

Roughly **eighteen enterprise organizations** have published rulesets or built on the engine
publicly — spanning cloud infrastructure, e-commerce, retail, telecommunications, banking,
insurance, databases, developer platforms, and consumer software. The deepest public investment by
any single organization runs to several published packages including a full validator built on
top of the engine.

A recurring pattern in the largest deployments: the engine is consumed as a library behind an
in-house facade, so developers never learn it is there. They submit a document and get results
back. This means **the true dependent base is substantially larger than the visible one**, and it
also means those organizations can swap the engine underneath without anyone noticing — which
cuts both ways.

### Vendors and tooling

Commercial and open-source products that consume the format: code-quality platforms, SDK
generators, API-design vendors, mocking and testing frameworks, internal-developer-portal
plugins, IDE extensions for at least three editors, CI actions, CLI wrappers, and test harnesses
for validating rules themselves.

### Alternative engines

**One.** [A Go implementation]({{ site.vacuum }}), actively maintained, which aims to be a
drop-in replacement.

---

## The pattern that matters

Look at what the ecosystem built over several years:

- Dozens of **rulesets**
- Many **wrappers, adapters, and facades**
- Multiple **editor and CI integrations**
- Several **products** with the engine embedded
- **One** alternative engine

And here is what nobody built: **an alternative format.**

Even the one team that rewrote the engine from scratch in another language deliberately kept the
format, on the explicit grounds that the world did not need another rules DSL. Everyone treated
the format as the fixed point and competed on the implementation.

**That is what a de-facto standard looks like.** The format has been behaving like a
specification for years. It has simply never been written down as one — which is why
compatibility claims between implementations cannot be adjudicated, why every tool that touches
rulesets had to reverse-engineer validity from a linter's source code, and why the format's fate
is tied to that linter's maintenance schedule.

The fork's entire job, stated plainly: **write it down, keep it compatible, and give it somewhere
to live.**

---

## What is being asked of dependents

Nothing binding. The ask is simply to be counted.

Every conversation about a permanent home — a foundation, a standards body, a nonprofit — comes
down to *who actually uses this*, and that question has never had a public answer. Most users are
invisible by design: governments with mandated rules, enterprises running it behind a facade,
teams who wired it into CI once and never thought about it again.

**A public list of organizations saying "we depend on this and would like it to keep moving" is
the single most useful artifact this effort can produce.** It costs nothing, commits no one, and
it is the difference between a fork and a standard.

---

<p class="mt-4">
  <a class="btn btn-outline-primary" href="/research/maintenance/">← The maintenance record</a>
  <a class="btn btn-outline-primary ms-2" href="/research/plan/">The plan, and what is open →</a>
  <a class="btn btn-primary ms-2" href="{{ site.discussion }}">Be counted →</a>
  <!--email_off--><a class="btn btn-outline-secondary ms-2" href="mailto:{{ site.email }}?subject=Spectral%20fork">Privately →</a><!--email_on-->
</p>
