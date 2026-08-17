---
date: 2026-08-17 09:00:00 -0400
title: Below the waterline is not a stable state
description: >-
  The format did not get abandoned in a way anyone would notice. It sank into other people's
  products while adoption kept climbing — and that phase ends somewhere worse.
---

The case for doing this now rests on a claim that deserves to be made explicitly rather than
implied: **the current situation is not stable, and waiting makes extraction harder rather than
easier.**

## How infrastructure actually disappears

Not by being archived. By succeeding into invisibility.

The format goes into more products. Vendors build on it, wrap it, abstract it behind their own
interfaces, and stop naming it because their users do not need to know. Enterprises deploy it inside
internal platforms with a different name on the front. Governments write mandatory standards in it.

Adoption climbs the entire time. Underneath, the thing itself stops moving.

The numbers on [why this is happening](/why/) are the measurable half: issue triage peaked at 157
closed in 2021, then 12 in 2025 and 10 so far in 2026; 241 open issues and 39 open pull requests,
with the oldest community pull request waiting five years; a supply-chain incident in July 2026
whose issue is still open with its one follow-up question unanswered; install-time analytics added
across the packages on 30 June 2026.

## Why nobody fixes it

Because everyone who could has already routed around it privately.

Each vendor embedding the format has solved their own version of the problem. They know what their
build accepts, they pinned a version, they wrapped it, they moved on. **The cost of the format
having no specification is paid entirely by people who are not in the room** — the next implementer,
the team migrating between engines, the government citing a version number in a document that will
outlive everyone's interest, the tool author with nothing to parse a ruleset against.

## The part that makes it urgent

Below the waterline is a phase, not a resting place.

Every month of it makes extraction harder in a specific way. Vendors who abstracted the format away
drift further apart, because there is no shared document to drift *toward* — each one's private
answer to an ambiguity quietly becomes their permanent answer. People who understood the internals
move on, taking undocumented knowledge with them. New entrants reimplement rather than depend on
something unmaintained. And the stock of rulesets written by governments and enterprises keeps
growing, each one an asset whose meaning is defined by a program nobody is maintaining.

Give that another six to twelve months and there is nothing coherent left to lift out — not because
anyone killed it, but because the format will have become several slightly different formats, each
correct inside its own vendor, none documented, with no basis for saying which behaviour was ever
the real one. **You cannot write a specification for that.** You can only pick a winner, and nobody
has the standing to do that.

## What follows from it

The response is deliberately narrow, and none of it asks anyone to switch anything:

- **Write the format down normatively** while a single coherent answer still exists to write down.
- **Build the [conformance suite]({{ site.repo_rules }}/issues/9)**, so divergence becomes visible
  and adjudicable instead of silent.
- **Publish [the implementation map](/implementations/)**, so an invisible dependency becomes a
  visible one.
- **Settle [governance]({{ site.repo_rules }}/issues/3) and
  [a permanent home]({{ site.repo_rules }}/issues/8)**, so the answer to "who maintains this" is
  never one person again.

The organizations quietly running this inside their products have the most to gain here and are the
least likely to say so publicly. A specification, a suite, and a maintained engine are all cheaper
than the exposure of an undocumented private dependency on an unmaintained codebase.

You do not have to endorse anything. [Saying you depend on it is enough](/involved/), and it can be
said privately.
