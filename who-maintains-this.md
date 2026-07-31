---
layout: default
nav: funding
title: Who maintains this
description: >-
  The people who actually maintain the API specifications and their tooling, counted from public
  GitHub contribution data — and the question of how any of them get paid.
permalink: /who-maintains-this/
---

# Who maintains the specifications this industry runs on

Every organization reading this depends on the specifications below. Almost none of them could name
five people who maintain one.

This page is the list, generated from **public GitHub contribution counts and nothing else** — a
login and a number of commits to a named repository, both re-checkable by anyone. No employers, no
affiliations, no inferred anything. The script that builds it is
[in the repository](https://github.com/api-commons/spotlight-rules/blob/main/scripts/fetch_contributors.py),
so you can run it yourself and get the same answer.

**It is here to support one argument:** the machine-readable substrate of the modern API industry
is maintained by a countable number of named individuals, and the relationship between that number
and the size of what depends on it is the actual problem. [The funding argument is here](/funding/).

## Caveats, because a list like this can mislead

- **Commits are a terrible proxy for contribution.** Specification work is argument, review, issue
  triage, editorial judgement, and turning up to meetings for years. A one-line commit merging a
  decision can represent six months of work by people whose names are nowhere near it.
- **The endpoint counts commits and caps at 100 entries per repository.** Treat every contributor
  count as *at least* this many.
- **Repository choice shapes the answer.** Several of these projects do their real work across
  several repositories; this counts the one where the specification or the core tool lives.
- **Absence means nothing.** Plenty of the most consequential people in this space do not appear
  below, and a few of the most prolific committers would be the first to say so.

Read it as a rough census, not a leaderboard.

---

## The specifications

{% assign specs = site.data.contributors | where: "kind", "specification" %}
{% for repo in specs %}
### {{ repo.label }}

<p class="small text-muted mb-2"><a href="{{ repo.url }}">{{ repo.repo }}</a> — {{ repo.contributor_count }}+ contributors</p>

<p>{% for p in repo.top %}<a href="{{ p.url }}">{{ p.login }}</a> <span class="text-muted small">{{ p.contributions }}</span>{% unless forloop.last %} &middot; {% endunless %}{% endfor %}</p>
{% endfor %}

## The tooling

{% assign tools = site.data.contributors | where: "kind", "tooling" %}
{% for repo in tools %}
### {{ repo.label }}

<p class="small text-muted mb-2"><a href="{{ repo.url }}">{{ repo.repo }}</a> — {{ repo.contributor_count }}+ contributors</p>

<p>{% for p in repo.top %}<a href="{{ p.url }}">{{ p.login }}</a> <span class="text-muted small">{{ p.contributions }}</span>{% unless forloop.last %} &middot; {% endunless %}{% endfor %}</p>
{% endfor %}

---

## What the shape of this tells you

Look at the distribution rather than the names. In almost every project on this page, a very small
group carries most of the commits, and the tail falls off a cliff. That is not a criticism of anyone
— it is the normal shape of specification work, and it is exactly the shape that makes a project
fragile when one or two people change jobs.

Now put that next to what depends on it: national standards, procurement documents, hyperscaler
products, and effectively every API programme in the industry.

**The gap between those two facts is the thing nobody has solved.** Not for this format, and not for
its neighbours.

## The conversation this list is for

There is a question the API specification world has never really answered together: **what is
commercial open source, and how do the people maintaining the substrate get paid without selling it
to whoever shows up with capital?**

Several rounds of acquisition in this space have made the failure mode familiar. Something gets built
inside a company, becomes load-bearing for other people, and then the company's priorities change —
through acquisition, a strategy shift, or simple attrition — and everyone downstream discovers they
were depending on somebody else's roadmap.

The people on this page are the ones who would have to be part of any real answer. If you are on it,
or should be, [the conversation is open](/involved/) — and the specific structural question of
earmarked sponsorship versus foundation membership is [an open issue]({{ site.repo_rules }}/issues/8).

<p class="text-muted small mt-4">Corrections and additional repositories welcome — the repository list is at the top of the generating script.</p>
