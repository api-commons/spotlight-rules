---
layout: default
nav: tools
title: Tools
description: >-
  The API Commons governance tools already built on the Spectral ruleset format — validation,
  registries, pipelines, baselines, scorecards, coverage, waivers, and federation.
permalink: /tools/
---

# Tools

This effort does not start from zero. A set of open governance tools already runs on the Spectral
ruleset format, and they are why the format's health is not an abstract concern here.

They are listed because they demonstrate something specific: **the format is already doing work
that has nothing to do with the CLI that runs it.** Registries, baselines, scorecards, coverage
reports, waivers, federation — none of that is linting. All of it depends on rules being a
durable, portable, inspectable artifact.

---

| Tool | What it does |
|---|---|
| **api-validator** | The deepest integration — validates OpenAPI, AsyncAPI, Arazzo, and JSON Schema in the browser |
| **ruleset-commons** | A registry of adoptable, provenanced rulesets — where rules come from, and whether you can trust them |
| **governance-pipeline** | A reference CI/CD governance pipeline you can fork |
| **governance-baseline** | Snapshot the violations you already have; fail only new ones. The adoption unblocker for a legacy estate |
| **governance-scorecard** | The longitudinal view — health over time, not a point-in-time verdict |
| **governance-coverage** | How much of a description your rules actually check |
| **governance-certification** | Tamper-evident certificates for a governance result |
| **governance-waivers** | Sanctioned, owned, expiring exceptions — because the alternative is people quietly ignoring the linter |
| **governance-agent-export** | Export a ruleset into agent-native artifacts, so the rules reach the agent before it authors, not after |
| **api-governance-graph** | Binds the governance building blocks — policies, rules, guidance, lifecycle — into one view |
| **codefirst-governance** | Meets annotation and code-first teams where they actually are |
| **rule-federation** | A federated rule registry — a central baseline with local overrides, for organizations that are not one team |

All of them live under [API Commons](https://github.com/api-commons) and run in the browser or in
CI, no backend required.

---

## Why this matters for the specification

Every tool above had to answer the same question: *what exactly is a valid ruleset?* And the only
available answer was "whatever the linter accepts today," discovered by reading its source.

That is a workable answer for one tool. It is not a workable answer for a registry that publishes
rulesets, a federation layer that merges them, a certification tool that has to prove what was
checked, or an agent export that has to translate them into something else entirely.

**A written specification is what turns rules from configuration into an artifact.** That is the
argument these tools make better than any post could.

---

<div class="card bg-light border-0 mt-4">
  <div class="card-body text-center py-4">
    <p class="mb-3">Building something on the ruleset format? It belongs in the conversation about where the format goes.</p>
    <a class="btn btn-primary" href="{{ site.discussion }}">Join the discussion →</a>
  </div>
</div>
