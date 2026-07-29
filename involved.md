---
layout: default
nav: involved
title: Get Involved
description: >-
  Where to report problems, where to argue about direction, and what is actually being asked of
  anyone who depends on the Spectral ruleset format.
permalink: /involved/
---

# Get involved

This is an announcement of **intent**, not a finished plan. Almost everything below the two
repositories is genuinely open, and the useful window for arguing about it is now.

## Where things go

| What | Where |
|---|---|
| **Problems with the CLI or engine** | [spectral-cli issues]({{ site.repo_cli }}/issues) |
| **Problems with the ruleset format, the schema, or the spec** | [spectral-rules issues]({{ site.repo_rules }}/issues) |
| **Direction, governance, naming, where this should live** | [the discussion thread]({{ site.discussion }}) |

Please keep direction out of the issue trackers. Issues are for things that are broken; the
discussion is for things that are undecided.

## The one ask

**If you depend on the Spectral ruleset format, say so in the discussion.**

That is the whole ask. Not a commitment, not an endorsement, nothing legally binding, no
obligation to contribute anything. Just: *we rely on this and we would like to see it keep
moving.*

There is a reason it matters. Every conversation about a permanent home — a foundation, a
standards body, a nonprofit — comes down to the same question: who actually uses this? That
question has never had a public answer, because the format's users are mostly invisible. They are
governments with mandatory design rules, enterprises running it behind an internal facade, and
small teams who wired it into CI and never thought about it again.

A list of people saying "we depend on this" is the most useful artifact this effort can produce
in its first month.

## What is still open

- **The name.** The upstream name is being kept for now so the lineage stays obvious. It will not
  stay that way forever, and the right name is a community question.
- **The home.** API Commons for now, possibly permanently. The OpenAPI Initiative is a candidate,
  though its charter currently bars tooling. The Linux Foundation is a candidate. A European home
  is a candidate. A nonprofit under API Commons is a candidate.
- **Governance.** How decisions get made, who makes them, and what the contribution model is.
- **Scope and sequencing.** [What gets supported first](/scope/), and what waits.

## What is not open

- **Compatibility.** Existing rulesets keep working. Divergence will be deliberate, versioned, and
  documented.
- **JavaScript and browser support.** Non-negotiable, for reasons covered in [scope](/scope/).
- **vacuum stays supported.** This is not a competition between engines.

## If you have an unmerged contribution upstream

Several finished, useful pull requests have been sitting in the upstream queue for months or
years. If one of them is yours, **please bring it here.** Getting those merged is the fastest,
most legible way to demonstrate that a fork means your work actually lands.

## To SmartBear

The invitation made publicly in
[January 2025](https://apievangelist.com/2025/01/31/please-put-spectral-into-the-openapi-initiative-smartbear/)
still stands: donate Spectral to the OpenAPI Initiative. It would make most of this unnecessary,
and it would be the best outcome for everyone who depends on it.

---

<div class="card bg-light border-0 mt-4">
  <div class="card-body text-center py-4">
    <a class="btn btn-primary btn-lg" href="{{ site.discussion }}">Join the discussion →</a>
  </div>
</div>
