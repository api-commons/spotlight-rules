---
title: A development strategy you can actually switch to
description: >-
  Branching, releases, package management, README, and communication — proposed in public before
  any of it is built, because a fork nobody can switch to is worthless.
---

There are now two issues open, one on each repository, and they are the whole plan:

- **[spotlight-tools#1]({{ site.repo_cli }}/issues/1)** — branching, releases, package management, and how you switch.
- **[spotlight-spec#1]({{ site.repo_rules }}/issues/1)** — schema identity, spec versioning, the conformance suite, and how implementers get told things.

They are the first issues either repository has ever had. Please go argue with them. Nothing in
either one is built yet, and that is deliberate — I would rather be corrected before writing the
release automation than after asking people to depend on it.

## The one constraint everything else follows from

**A fork nobody can switch to is worthless.**

That sounds obvious and it is not how most forks behave. The usual pattern is to spend the first
three months on the maintainer's own roadmap — the cleanup, the rewrite, the thing that was
annoying about upstream — and treat migration as documentation to be written later. Then adoption
does not come, and the honest reason is never the code. It is that switching was a day of work
with no undo button.

So every choice in both issues gets graded against one question: *what does an existing Spectral
user have to actually do, and can they reverse it?* If the answer involves rewriting CI
configuration or a one-way door, it is the wrong choice regardless of how much better it is on
the merits.

## Where this genuinely stands

Worth stating plainly, because the gap between the announcement and the reality is where forks
lose people:

**Nothing is published.** The `spotlight-tools` README still tells you to install
`@stoplight/spectral-cli` from upstream, because that is still the only place the packages exist.
The repository inherited release automation pointed at a scope it does not own, along with
upstream's `develop` default branch and 42 of its branches. Right now this is a source archive
with a good argument attached, not a maintained build.

And **upstream is not dead.** It published 6.16.2 on July 20th, ten days ago. It ships dependency
bumps. What it does not ship is triage, features, or answers to questions. That distinction
matters, because the pitch here cannot be "they are gone" — it has to be *predictability*, and
predictability is earned with a published calendar, not asserted in a README.

## The three decisions worth your attention

Most of what is in those issues is bookkeeping. Three parts are load-bearing.

**The npm scope, and not making you rewrite your imports.** Eleven packages need a home that is
not `@stoplight/*`. The proposal is `@apicommons/spectral-*` — same names, same API — plus a
migration path built on alias installs and dependency overrides, so switching is one line and
rolling back is deleting that line. This matters far more for the transitive case than the direct
one: most people do not depend on Spectral directly, they get `spectral-core` underneath a
ruleset, a wrapper, an editor plugin, or an internal platform they do not control. Those
consumers cannot change their imports at all. If the migration story does not lead with them, it
is not a migration story.

**The schema `$id` is currently wrong, and it is the most time-sensitive item anywhere in this
effort.** The specification's schema identifies itself with a `raw.githubusercontent.com` URL
pointing at a branch. That is a source-control URL wearing a specification's identity: mutable by
definition, on a hostname this project does not control, and not something anybody should cite in
a national standard. Changing an `$id` breaks every downstream `$ref`, which means it has to be
settled *before* adoption rather than after. What the permanent identity should be is a real open
question and I am the least confident about that one.

**The conformance suite is what makes the compatibility promise falsifiable.** Everyone who has
attempted Spectral compatibility reports the same finding: happy paths pass everywhere, and
production rulesets are where implementations diverge. Today no compatibility claim between any
two engines can be adjudicated, because there is nothing to adjudicate against. The proposal is a
machine-readable suite living with the specification — not with the CLI, because a suite that
lives in an implementation measures that implementation instead of defining the format — with
published results for every engine including this one, especially where this one fails.

That last part is not a courtesy. [vacuum]({{ site.vacuum }}) is a supported and valued
implementation, and when Dave rewrote the engine in Go he deliberately refused to fork the
format. A conformance suite is what lets several engines coexist honestly instead of drifting
apart quietly and arguing about it in three years. If it makes this project's own CLI look bad in
public, it is working.

## On over-communicating

The failure being corrected here was never really technical. Spectral's code is good. What broke
was communication: 241 issues nobody answered, a fourteen-month release gap nobody explained, a
supply-chain report that got one follow-up question and no reply, and a rules format whose
definition lived in five internal meta-schemas that outsiders had to read a source tree to
understand.

You do not fix that with better code. You fix it with a schedule.

So: a public status note weekly for the first eight weeks, then monthly. Content deliberately
mundane — what merged, what was triaged, what is blocked, what I got wrong. Eight weeks is chosen
because it is long enough that the burst-of-energy-then-silence pattern would be visible if it
happens, which is the point of picking a number in advance.

A monthly triage log, too. The metric this project criticized upstream on is issues *closed*, and
it would be absurd not to publish my own version of that number — including when it is bad.

And this blog, which exists as of today, with [an RSS feed](/feed.xml) so nobody has to check a
website to find out whether anyone is home.

## What would actually help

Five things, in order of how much they would change what gets built:

1. **If you consume `spectral-core` transitively through something you do not control** — say what, and how. That is the migration case I am most likely to get wrong.
2. **If you `$ref` the ruleset schema anywhere already** — I need to know before changing the `$id`.
3. **If you have a ruleset that broke a tool** — that is the single most valuable contribution available right now. Gnarly and production-real beats minimal and clean.
4. **If you maintain an implementation** — what would you need to run against a conformance suite and have the results published?
5. **What would you need to see before switching a production pipeline?** Not an opinion on the fork. The actual blocker.

And if you depend on this format at all, [say so in the discussion]({{ site.discussion }}). A
visible list of dependents is worth more than any argument I can make about why this should have
a permanent home.
