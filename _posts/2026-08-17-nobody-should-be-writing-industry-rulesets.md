---
date: 2026-08-17 13:00:00 -0400
title: Nobody should be writing industry rulesets
description: >-
  Speculation, on purpose. If the blocker on industry rulesets is that nobody will maintain them,
  then the answer is not to find maintainers — it is to stop authoring the rules by hand.
---

This one is exploratory. Nothing here is decided, most of it is not even proposed yet, and some of
it will turn out to be wrong. It is written to give
[spotlight-spec#21]({{ site.repo_rules }}/issues/21) something to argue with, because the research
underneath it established a problem without establishing a direction.

The problem, briefly: [exactly one industry standard](/research/industry-rulesets/) has a ruleset
behind it, and the reason is not demand. It is maintenance. Standards bodies version on their own
cadence and are not in the linting business. Three of the four published add-on rulesets in this
ecosystem have been untouched since 2024. Any plan that assumes a volunteer maintainer per standard
is planning for a world that has never existed.

So here are three bets about what the answer looks like, in increasing order of how likely I am to
be wrong.

## Bet one: derive the rules, do not write them

The framing that makes this feel impossible is *someone has to sit down and write a FHIR ruleset*.
That framing is probably the mistake.

Tier A standards — the ones where the standard **is** an API description — already publish the
source of truth in machine-readable form. CAMARA ships OpenAPI across ninety-three repositories.
TM Forum, the Australian CDR, OGC API, RESO and twenty-odd others publish machine-readable
artifacts openly. The normative content a ruleset would encode is *already in a file*, versioned by
the body, in a repository anyone can watch.

The caveat is licensing, not technology. **Three Tier A standards — FDX, Berlin Group and
Confirmation of Payee — publish to members only.** Derivation works fine against a closed artifact;
publishing the result does not, because a derived ruleset carries the thing it was derived from.
They are the most lintable standards nobody can write a public ruleset for, and no amount of tooling
fixes it.

A ruleset derived from that file has completely different economics:

- **It regenerates when the standard versions.** Nobody maintains it. A pipeline does.
- **It cannot drift from the standard**, because it has no independent existence to drift with.
- **It is auditable in a way a hand-written one is not** — every rule traces to a line in the source.

What derivation gets you is the mechanical layer, and the mechanical layer is most of it: required
paths present, operations declared, response schemas matching, mandatory security schemes present,
naming conventions held, enum values in range.

What it does not get you is intent — the rules a human writes after reading the prose and knowing
which mistakes implementers actually make. Those still have to be authored, but there are far fewer
of them, and they are the part worth a human's time.

**Derived core, hand-authored overlay.** The overlay is small, and it is the only thing anyone has to
maintain.

## Bet two: an industry ruleset is a conformance instrument, not a style guide

These have been treated as the same kind of object and they are not. A style guide expresses a
preference and nobody is harmed if it is incomplete. A conformance instrument makes a claim about
whether something meets an external standard, and an incomplete one that does not say so is
actively misleading.

Which means the format needs vocabulary this kind of ruleset cannot currently express:

> This ruleset checks 41 of the 118 normative statements in CAMARA QualityOnDemand v1.0. It does
> not check anything requiring a live request, and it cannot verify runtime behaviour.

That is a shippable, falsifiable claim. "FHIR ruleset" is not a claim at all. And the moment a
[conformance badge]({{ site.repo_rules }}/issues/10) exists, the difference between those two
becomes the difference between a useful signal and a lie with a logo on it.

The uncomfortable version: **most industry rulesets will legitimately cover a minority of their
standard**, and that is fine — as long as the ruleset says so in a field rather than in a README
nobody reads.

## Bet three: identity needs somewhere to live, and it is the same somewhere

Two issues that look unrelated are converging.
[#20]({{ site.repo_rules }}/issues/20) wants aliases lifted out of rulesets into their own
addressable namespace, because an alias trapped in one file cannot be shared. This issue wants
industry rulesets to declare which standard and version they encode, because "FHIR" is not a version.

Both are asking for the same missing thing: **a place where named, versioned governance artifacts
live and can be pointed at.** Not a package registry — those exist and are the wrong shape. A
registry of governance identity: aliases, format definitions, standard identifiers, ruleset
coverage claims.

I have low confidence in this one. Registries are easy to propose, expensive to run, and the
graveyard is well populated. But two independent problems pointing at the same gap is usually worth
noticing before designing around each of them separately.

## What agents change about this

Conformance has always been a CI concern: does my document pass before I merge. That is one
consumption mode and it is the one everything is designed for.

An agent choosing between APIs has a different question — *does this conform to CAMARA v1.0?* — and it
wants a machine-readable answer at discovery time, not a pipeline it can run. Nobody can currently
give one. Not because it is hard, but because there is no artifact whose job it is to say so.

That makes industry rulesets infrastructure for something bigger than linting, and it is the
strongest argument I know for doing this work now rather than when someone volunteers. It is also
directly the second consumption mode in
[#14]({{ site.repo_rules }}/issues/14), arriving from a different direction.

## Governance: separate the ruleset from the claim

Anybody should be able to write a FHIR ruleset. Not anybody should be able to issue a FHIR
conformance badge.

Those two have been tangled together in every version of this discussion, and untangling them
resolves most of the anxiety. **Authorship is a community activity** — fork it, improve it, publish
a better one, compete. **Issuance is a governed one**, and belongs with whoever governs the
specification rather than whoever wrote the tool, which is already the position in
[#10]({{ site.repo_rules }}/issues/10).

A standards body that will never maintain a ruleset might well be willing to *recognise* one. That
is a much smaller ask, and it is the one worth making.

## A sequence, for the roadmap

Roughly in order of cheap-and-provable to expensive-and-speculative:

1. **Derive one ruleset from one Tier A standard's published artifacts** and see what falls out. This
   is a weekend, not a programme, and it either works or it visibly does not.
2. **Add coverage vocabulary to the format** — what a ruleset encodes, which version, what it does
   not check. Small change, unblocks the badge, and it is what stops the first industry ruleset
   shipping as an overclaim.
3. **Extend the rule envelope** that [already exists](https://github.com/api-commons/rules) rather
   than inventing one. It has `specification`, `specificationUrl`, `guidance` and an `engine` enum
   with a single member already.
4. **Then, and only then**, the registry question — with two working examples in hand rather than
   as a design exercise.

## What would prove this wrong

Worth stating, because a piece full of bets should say how it loses.

**If derived rules turn out to be trivial or unbearably noisy**, bet one collapses and the hand
authoring was the work all along.

**If the corpora are too poor to derive from**, it collapses differently and more interestingly.
There is a real warning here already: CAMARA is the cleanest Tier A candidate in the catalogue, and
across those ninety-three repositories *every server declaration is the template variable*
`{apiRoot}` — with exactly one operator on earth publishing a contract a developer can download and
call. Derive naively from a corpus with a systemic defect and you encode the defect as the standard.

The correct response to that is not to abandon derivation. It is to notice that a ruleset which
flagged `{apiRoot}` on day one would have been worth having in 2024 — which is when
[a Spectral ruleset for Open Gateway was publicly promised](https://reports.apievangelist.com/reports/the-camara-standard/),
and it still does not exist.

Arguments, corrections and better ideas belong on
[#21]({{ site.repo_rules }}/issues/21).
