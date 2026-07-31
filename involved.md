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
| **Direction — naming, governance, where this lives, what the format covers** | issues on the repository it affects, labeled `roadmap` — [see the roadmap](/roadmap/) |
| **Anything that does not have an issue yet** | [the discussion thread]({{ site.discussion }}) |

**This changed, deliberately.** Direction used to be pushed into a single discussion thread and
kept out of the issue trackers. That does not scale past about a week: a thread cannot be
labeled, cannot be cited from a procurement document, and cannot be pointed at from a pull request
six months later.

So every open decision is now **its own issue**, labeled for the roadmap, with a maturity label
that says honestly how far the conversation has actually got. The
[roadmap page](/roadmap/) is generated from those labels — nothing on it is hand-written. And when
an item moves into development it gets **one pull request referencing that one issue**, so the
homework behind every decision has provenance you can follow from the argument to the diff.

The two biggest ones are open right now: [the name]({{ site.repo_rules }}/issues/7) and
[where the specification lives]({{ site.repo_rules }}/issues/8).

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

Each of these is an issue now, not a paragraph. Argue in the thread that belongs to it.

- **[The name]({{ site.repo_rules }}/issues/7).** **Spotlight** is a working name, picked early
  because renaming before anyone depends on the packages is cheap and renaming after is not. It is
  not permanent. Trademark alone makes a rename likely, the registry checks have to be done, and
  there is a prior question underneath it: does the specification even share a name with the tool?
- **[The home]({{ site.repo_rules }}/issues/8).** API Commons for now, as a parking spot. The
  OpenAPI Initiative, the Linux Foundation, a European home, and a nonprofit are all candidates —
  and the structural question of whether the technical home and the **fiscal** home can be
  different decides more than the choice of foundation does. [The funding argument](/funding/).
- **[Governance]({{ site.repo_rules }}/issues/3).** How decisions get made, who makes them, and
  what the contribution model is. Co-maintainers are actively wanted.
- **[Conformance]({{ site.repo_rules }}/issues/9) and
  [the badge]({{ site.repo_rules }}/issues/10).** The suite that makes "multiple engines, one
  format" testable rather than aspirational, and who gets to issue a conformance claim.
- **Scope and sequencing.** [What gets supported first](/scope/), and what waits — including
  [Arazzo]({{ site.repo_rules }}/issues/12),
  [policy-engine portability]({{ site.repo_rules }}/issues/13), and
  [the CI gate and agent consumption modes]({{ site.repo_rules }}/issues/14).
- **[Knowing who depends on this]({{ site.repo_rules }}/issues/15)** without instrumenting anyone.

The full generated list, with how mature each conversation actually is, is on
[the roadmap](/roadmap/).

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
