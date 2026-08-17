---
date: 2026-08-17 11:00:00 -0400
title: Valuable real estate, claimed in the open
description: >-
  Specifications are economic land grabs. This one is too — so the only thing that distinguishes it
  is doing it openly, honestly, and giving the land away at the end.
---

Worth being direct about something, because the alternative is pretending.

**Specifications are economic land grabs.** Whoever defines the format defines the default; the
default determines what the tooling assumes, what the tutorials teach, and eventually what an
entire generation of engineers thinks the natural shape of the problem is. That is valuable ground,
and it is claimed by writing a document and getting people to use it.

Not always cynically, and not always badly. The reason this industry has any interoperability at all
is that a group of people claimed the API description format and defended it long enough for it to
become the assumption. **The question is never whether a specification is a land grab — it is who is
grabbing, what they intend to do with the land, and whether anyone else is allowed on it.**

## Why this format is worth claiming

The Spectral ruleset format is unclaimed valuable real estate:

- Governments write **mandatory API design rules** in it.
- Multiple vendors run it inside their own [governance products](/implementations/).
- An entire category of governance tooling has to parse, merge, publish and reason about it.
- And it has **never been written down** — it exists only as configuration for one program.

Unclaimed valuable real estate does not stay unclaimed. It gets enclosed by whoever gets there
first, and the usual first mover is a vendor who needs the format to work a particular way for their
product. The realistic bad outcome is not villainy — it is five vendors quietly enclosing five
slightly different parcels, and users discovering the fences later.

## So yes, this is a claim. Here is how it is being made.

**Openly.** Every decision is a public issue with a thread, before it hardens — [the
name]({{ site.repo_rules }}/issues/7), [where it lives]({{ site.repo_rules }}/issues/8), scope,
conformance. Nothing announced after the fact. [The roadmap](/roadmap/) is generated from those
issues rather than written by hand.

**Honestly.** No claim of neutrality while steering the format toward one implementation. The build
here is one engine among several, [the others are mapped](/implementations/), and the
[conformance suite]({{ site.repo_rules }}/issues/9) will publish where this engine fails. If the
suite makes the reference implementation look bad in public, it is working.

**Communicatively.** Every other implementer gets invited in before anything is published about
them, and corrections get merged on sight. Nobody should first encounter their own failing scores in
somebody else's blog post.

**And then the land gets given away.** The entire point of claiming it is to put it somewhere it
cannot be enclosed again: a real home, a governance model with more than one person in it, and a
[permanent open-source stance](/funding/) that makes a commercial tier impossible. Owning this would
reproduce the exact problem it exists to fix.

## The declared interest

The frame applies here too, so it should be said. The person driving this makes a living on
reputation, and visible work on a format the industry depends on builds reputation. That is a real
interest and it gets declared rather than denied.

What it does not confer is control — which is why the [governance work]({{ site.repo_rules }}/issues/3)
and the conformance suite matter more than the code, and why every mechanism set up so far is
designed to make it possible for other people to overrule the person who set it up.
