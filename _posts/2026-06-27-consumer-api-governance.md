---
layout: post
title: "Consumer API Governance, and Where Spotlight Is Headed"
date: 2026-06-27
author: API Commons
description: API governance has always run design-time and producer-side. Agents and copilots are forcing a second half — governing the APIs and context we consume. Here is how Spotlight's rules, discovery, and validation extend to consumer API governance.
summary: API governance has always run design-time and producer-side. Agents and copilots are forcing a second half — governing the APIs and context we consume, by rule. Here's how Spotlight's rules, discovery, and validation extend to consumer API governance.
author: API Commons
tags:
  - Consumer API Governance
  - Agents
  - MCP
  - Discovery
nav: blog
---

Spotlight governs the APIs you **produce**. Today that means a curated catalog of
[733 rules across 12 artifact types](/spec/) — OpenAPI first, and increasingly
AsyncAPI, Arazzo, MCP servers, and agent skills. You lint a definition against a
ruleset, you find where it drifts from your standards, and you raise the severity
from `info` to `error` when you're ready to enforce. That is producer-side,
design-time governance, and it is what the last decade of API governance tooling —
Spotlight included — has been built to do.

It was always only half the story, and it is the half that is about to be overrun.

## The half we've been missing

Copilots and agents are reaching for our APIs at a rate that producer-side
governance will never keep pace with. You can run the cleanest design reviews in
the world, and it won't matter much when an agent is composing calls across a
dozen APIs you don't control to assemble the context for a single answer. The
APIs you **consume** — yours and everyone else's — are now part of your
governance surface whether you've decided to govern them or not.

Kin Lane has been making this argument city by city — APIDays New York, Amsterdam,
and next month Munich — and wrote it up in
[Consumer API Governance in an Agentic World](https://apievangelist.com/2026/06/24/consumer-api-governance-in-an-agentic-world/).
The short version: use governance rules not just to shape the APIs we produce, but
to **dynamically generate and govern the context we hand to AI when we consume
APIs**. Govern the interface — API and MCP — by rule. No PII. Products and
metadata but no pricing. Whatever the context window for a given integration
should and should not contain. Deterministically, by rule, with or without a
human in the loop.

This is a deliberate, deterministic alternative to the fuzzier "AI governance"
conversation. It is also the only way governance scales to the rate at which
agents consume.

## Why Spotlight is positioned for this

Consumer governance needs the same three things producer governance does — you
just point them in the other direction:

- **Discovery** already finds the artifacts you consume. It searches APIs.io and
  GitHub/GitLab/Bitbucket, keeps provenance, and lets you save what you depend on.
  That is the inventory of your consumption surface.
- **Validation** already runs the engine client-side over any artifact you hand
  it. The same linter that checks an API you publish can check an API you're about
  to integrate.
- **The rule catalog** already expresses policy as portable, testable assertions,
  tagged by the [experience](/rulesets/) they create — and rulesets can be
  generated as readily as hand-authored.

Producer and consumer governance are the same engine, the same rules, the same
catalog — aimed at a different target.

## Where we're taking it

Here is the direction this opens up for the suite:

- **Consumer rulesets — agent-safety packs.** Rules that assert what a surface
  may and may not expose to an AI integration: no PII, no secrets, no pricing,
  scope-limited operations, bounded and deterministic outputs. The same Spectral
  grammar you already know, pointed at the context you're about to hand an agent.
- **A consumption gate in discovery.** When you pull a third-party OpenAPI or MCP
  server, run the consumer rulesets and get a governance score before you
  integrate — is this dependency agent-ready, and safe to put in front of a
  copilot?
- **Governed surface generation.** Gateways like
  [KrakenD](https://www.krakend.io/docs/overview/) already let you consume from
  many APIs and produce exactly the API and MCP surface you need. Generate those
  declarations from a source plus a ruleset — filter the paths, strip the fields,
  redact the PII — and let Spotlight govern both the declaration and the surface
  it produces.
- **Context manifests.** A declarative artifact describing the governed context
  for an integration — which sources, which fields, which rules — that is
  generated, reviewed, diffed, and linted like any other artifact.
- **Continuous consumption monitoring.** The pipeline already gates a producer's
  build. Point it at the APIs you depend on and re-lint them on a schedule, so
  you hear about drift, breaking changes, a new field carrying PII, or a freshly
  violated policy in a dependency — before your agents do.
- **Runtime input/output governance.** A lightweight evaluator that applies the
  same rules to the actual requests and responses flowing to AI — deterministic
  input/output governance at the point of consumption.

Some of this is here today, some is on the [roadmap](/roadmap/), and some is the
work ahead. The throughline is that none of it is a new product. It is the same
rules, discovery, and validation you already use to govern what you publish —
turned to face the APIs and context you consume.

Producing well-governed APIs still matters. But governing consumption — shaping
the context we hand to AI, by rule — is how governance keeps up with the agentic
world. That is where Spotlight is headed.
