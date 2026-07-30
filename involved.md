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
| **Problems with the CLI or engine** | [spotlight-tools issues]({{ site.repo_cli }}/issues) |
| **Problems with the ruleset format, the schema, or the spec** | [spotlight-spec issues]({{ site.repo_rules }}/issues) |
| **Direction, governance, naming, where this should live** | [the discussion thread]({{ site.discussion }}) |

Please keep direction out of the issue trackers. Issues are for things that are broken; the
discussion is for things that are undecided.

## The one ask

**If you depend on the Spectral ruleset format, say so — publicly or privately.**

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

<div class="card bg-light border-0 my-4">
  <div class="card-body py-4">
    <p class="mb-3"><strong>Two ways to do it, and they count the same.</strong></p>
    <p>
      <a class="btn btn-primary" href="{{ site.discussion }}">Add your voice publicly →</a>
      <!--email_off--><a class="btn btn-outline-secondary ms-2" href="mailto:{{ site.email }}?subject=Spectral%20fork">Email privately →</a><!--email_on-->
    </p>
    <p class="text-muted small mb-0">
      Plenty of people cannot post something like this under their employer's name without a
      conversation first, and some organizations have policies that make it impossible. A private
      note <!--email_off--><a href="mailto:{{ site.email }}?subject=Spectral%20fork">straight to my
      inbox</a><!--email_on--> is
      just as useful — it will be counted, and <strong>nothing is attributed or shared without
      your explicit say-so</strong>.
    </p>
  </div>
</div>

## What is still open

- **The name.** Both repositories keep the upstream name for now so the lineage stays obvious, and
  the working codename for the effort is **Spotlight** — which is why this site is hosted at
  `spotlight-rules.com`. Neither is permanent. A rename is expected eventually, trademark
  considerations alone make it likely, and the right name is a community question rather than one
  person's call. Suggestions welcome in [the discussion]({{ site.discussion }}).
- **The home.** API Commons for now, possibly permanently. The OpenAPI Initiative is a candidate,
  though its charter currently bars tooling. The Linux Foundation is a candidate. A European home
  is a candidate. A nonprofit under API Commons is a candidate.
- **Governance.** How decisions get made, who makes them, and what the contribution model is.
- **Scope and sequencing.** [What gets supported first](/scope/), and what waits.

## What is not open

- **Compatibility.** Existing rulesets keep working. Divergence will be deliberate, versioned, and
  documented.
- **JavaScript and browser support.** Non-negotiable, for reasons covered in [scope](/scope/).
- **[vacuum]({{ site.vacuum }}) stays supported.** This is not a competition between engines.

## If you have an unmerged contribution upstream

Several [finished, useful pull requests]({{ site.up_pulls }}) have been sitting in the upstream
queue for months or years. If one of them is yours, **please bring it here.** Getting those merged is the fastest,
most legible way to demonstrate that a fork means your work actually lands.

## To SmartBear

The invitation made publicly in [January 2025]({{ site.donate_post }}) still stands: donate
Spectral to the [OpenAPI Initiative](https://www.openapis.org/). It would make most of this unnecessary,
and it would be the best outcome for everyone who depends on it.

---

<div class="card bg-light border-0 mt-4">
  <div class="card-body text-center py-4">
    <a class="btn btn-primary btn-lg" href="{{ site.discussion }}">Join the discussion →</a>
    <!--email_off--><a class="btn btn-outline-secondary btn-lg ms-2" href="mailto:{{ site.email }}?subject=Spectral%20fork">Email privately →</a><!--email_on-->
  </div>
</div>
