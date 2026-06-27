---
layout: post
title: "Governing the APIs You Consume"
date: 2026-06-27
author: API Commons
summary: API governance has always been something you do to the APIs you produce. Spotlight extends it to the APIs you consume — and to the context you hand to AI.
tags:
  - API Governance
  - Consumer Governance
  - MCP
  - Agents
  - Discovery
---

API governance, as the industry has sold it for a decade, is something you do to
the APIs you **produce**. You write a style guide, encode it as rules, and run
those rules at design time and in CI so the APIs you ship are consistent,
documented, and secure. That is good and necessary work, and it is most of what
Spotlight has been about so far — a maintained linter, a real ruleset
specification, and a curated catalog of [733 rules](/spec/) you can run on the
command line, in the browser, over HTTP, from an AI client, or in CI.

But producer-side governance has a ceiling. It only ever governs the APIs you
control, and it only governs them on your release cadence. Meanwhile, copilots and
agents are reaching for the APIs you depend on — the ones you produce and the ones
you do not — far faster than any design-time review can keep up with. The
interesting governance question is no longer only *"is the API I'm shipping any
good?"* It is *"what exactly am I handing to this agent, and what is it allowed to
reach?"*

That is **consumer API governance**, an argument [Kin Lane has been making](https://apievangelist.com/2026/06/24/consumer-api-governance-in-an-agentic-world/)
on stage at APIDays and that we are now building the tooling to support.

## Two moves, already underway

Spotlight is making two extensions at once.

**First, more artifacts.** Governance can't stop at OpenAPI. An API product today
is a REST contract *and* an event stream *and* a workflow *and*, increasingly, an
MCP server and an agent skill. The catalog already lints **12 artifact types** —
OpenAPI, AsyncAPI, Arazzo, JSON Schema, APIs.json, MCP, agent skills, and more — so
the same governance discipline reaches the whole surface an agent might touch, not
just the JSON you hand-wrote in 2019.

**Second, the other side of the arrow.** The same rules that *shape* an API you
produce can *evaluate* an API you consume. A rule that says "every collection
endpoint must paginate" is a design check when you author the API and an **intake
check** when you onboard a third-party dependency. [Discovery](/discovery/) finds
the artifacts — across APIs.io, GitHub, GitLab, and Bitbucket — and the
[validator](/validator/) governs them. Point them at something you don't control
and you learn, by rule, whether it meets your bar before you wire an agent to it.

## Governing the context, not just the contract

The deeper shift is this: when you integrate AI into a business, what you are
really doing is engineering **context** — assembling a set of digital resources
into HTTP and MCP interfaces an agent can use. Gateways like
[KrakenD](https://www.krakend.io/docs/overview/) already let you consume from many
APIs and produce exactly the surface you want. Consumer governance is the rules
that decide the shape of that surface: *products and metadata but no pricing*, *no
PII in this context window*, *read-only for this agent*, *these tools and no
others*.

Those rules are the same kind of artifact Spotlight already speaks. The difference
is **where and when** you apply them: not once at design time, but dynamically and
selectively at the moment of integration, per agent, per copilot, per context
window. Govern the inputs and outputs of an AI integration deterministically, by
rule, and you have something far more dependable than hoping a model behaves.

## Where this is heading

This reframes the Spotlight roadmap around consumption. A few of the directions
we're exploring:

- **Consumer rulesets** — intake policies (`no-pii`, `read-only`, `must-paginate`,
  `auth-required`, `rate-limit-declared`) you run against a dependency before you
  trust it, distinct from the producer rules you run against your own designs.
- **Context rulesets** — rules that govern the API/MCP surface you generate *for*
  an AI integration: which paths, tools, parameters, and fields are allowed into a
  given context window.
- **Gateway declaration generation** — emit governed gateway/MCP configs from a
  spec, so the consumed surface is rule-shaped by construction rather than reviewed
  after the fact.
- **MCP and agent-skill governance** — lint the tools, scopes, and reach of the MCP
  servers and skills you expose to agents: what can this agent actually touch?
- **A governed dependency inventory** — Discovery as a standing registry of the
  APIs you consume, each scored against your consumer rulesets, with provenance and
  drift alerts when a dependency changes underneath you, exported as
  [APIs.json](/spec/).
- **Posture packs** — curated rulesets like *AI-safe*, *PII-free context*, and
  *agent-ready*, the consumer-side cousins of the
  [experience rulesets](https://apicommons.org/rulesets/) we publish today.

Producer governance still matters. But it will never keep pace with the rate at
which agents reach for our resources. Governing **consumption** — shaping the
context we hand to AI, deterministically, by rule — is how we keep up. That is the
work Spotlight is turning to next.

[Try the validator](https://validator.spotlight-rules.com) · [browse the rules](/spec/) · [explore discovery](/discovery/)
