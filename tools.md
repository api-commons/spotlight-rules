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

I've been hard at work filling in the gaps in the services I offer as the API Evangelist with the
tooling needed by the folks I know building API governance programs within enterprises. These are
modular open-source solutions that help enterprises standardize and govern how they produce and
consume APIs.

They are listed because they demonstrate something specific: **the format is already doing work
that has nothing to do with the CLI that runs it.** Registries, baselines, scorecards, coverage
reports, waivers, federation — none of that is linting. All of it depends on rules being a
durable, portable, inspectable artifact.

---

| Tool | What it does | Source |
|---|---|---|
| **[api-validator](https://validator.apicommons.org/)** | The deepest integration — validates OpenAPI, AsyncAPI, Arazzo, and JSON Schema in the browser | [GitHub](https://github.com/api-commons/api-validator) |
| **[ruleset-commons](https://rulesets.apicommons.org/)** | A registry of adoptable, provenanced rulesets — where rules come from, and whether you can trust them | [GitHub](https://github.com/api-commons/ruleset-commons) |
| **[governance-pipeline](https://pipeline.apicommons.org/)** | A reference CI/CD governance pipeline you can fork | [GitHub](https://github.com/api-commons/governance-pipeline) |
| **[governance-baseline](https://baseline.apicommons.org/)** | Snapshot the violations you already have; fail only new ones. The adoption unblocker for a legacy estate | [GitHub](https://github.com/api-commons/governance-baseline) |
| **[governance-scorecard](https://scorecard.apicommons.org/)** | The longitudinal view — health over time, not a point-in-time verdict | [GitHub](https://github.com/api-commons/governance-scorecard) |
| **[governance-coverage](https://coverage.apicommons.org/)** | How much of a description your rules actually check | [GitHub](https://github.com/api-commons/governance-coverage) |
| **[governance-certification](https://certification.apicommons.org/)** | Tamper-evident certificates for a governance result | [GitHub](https://github.com/api-commons/governance-certification) |
| **[governance-waivers](https://waivers.apicommons.org/)** | Sanctioned, owned, expiring exceptions — because the alternative is people quietly ignoring the linter | [GitHub](https://github.com/api-commons/governance-waivers) |
| **[governance-agent-export](https://agents.apicommons.org/)** | Export a ruleset into agent-native artifacts, so the rules reach the agent before it authors, not after | [GitHub](https://github.com/api-commons/governance-agent-export) |
| **[api-governance-graph](https://graph.apicommons.org/)** | Binds the governance building blocks — policies, rules, guidance, lifecycle — into one view | [GitHub](https://github.com/api-commons/api-governance-graph) |
| **[codefirst-governance](https://codefirst.apicommons.org/)** | Meets annotation and code-first teams where they actually are | [GitHub](https://github.com/api-commons/codefirst-governance) |
| **[rule-federation](https://federation.apicommons.org/)** | A federated rule registry — a central baseline with local overrides, for organizations that are not one team | [GitHub](https://github.com/api-commons/rule-federation) |

All of them live under [API Commons](https://github.com/api-commons), run in the browser or in
CI with no backend required, and are open source under Apache-2.0.

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
