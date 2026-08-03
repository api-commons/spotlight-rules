---
layout: default
nav: tools
title: Tools
description: >-
  The tooling built on the Spectral ruleset format — the commercial platforms and open-source
  projects that run it, and the API Commons governance tools built on top of it.
permalink: /tools/
---

# Tools

The ruleset format runs in a lot more places than the CLI that created it. This page is two
lists: **the third-party tooling that already supports the format**, and **the open-source
governance tools API Commons has built on it**.

Both lists make the same argument. Rulesets are not configuration for one linter — they are a
portable artifact that commercial platforms, alternative engines, CI tooling, and developer
portals all consume. That is exactly why the format needs to be written down independently of
any one implementation.

---

## Third-party tooling that supports the format

Other people's tools, listed because the format's real footprint is theirs, not ours. Every row
links to the vendor or project documentation that substantiates the claim — nothing here is
inferred. This is a working list of tooling you can actually pick up and use; the wider
landscape, including alternative engines and prior art with their own rules models, is mapped
with evidence on the [implementations page](/implementations/).

### Commercial platforms

These are products you pay for that read the same ruleset file you keep in your repository.

| Product | Who ships it | How it uses the ruleset format | Evidence |
|---|---|---|---|
| **[SwaggerHub / Swagger Studio](https://support.smartbear.com/swagger/studio/docs/en/api-governance.html)** | SmartBear | API Governance imports Spectral rulesets as organization style guides, with a Spectral ruleset editor in the product and `spectral:upload` / `spectral:download` in the CLI | [Docs](https://support.smartbear.com/swagger/studio/docs/en/api-governance.html) |
| **[Azure API Center](https://learn.microsoft.com/en-us/azure/api-center/enable-api-analysis-linting)** | Microsoft | Lints API definitions on add or update with Spectral as the analyzer and `spectral:oas` as the default analysis profile; rulesets are authored locally and deployed back | [Docs](https://learn.microsoft.com/en-us/azure/api-center/enable-managed-api-analysis-linting) |
| **[Apigee API hub](https://docs.cloud.google.com/apigee/docs/apihub/validate-spec)** | Google Cloud | A built-in Spectral linter validates every OpenAPI added to an API version; custom "style guides" are uploaded rulesets | [Docs](https://docs.cloud.google.com/apigee/docs/apihub/validate-spec) |
| **[Postman](https://learning.postman.com/docs/api-governance/configurable-rules/spectral)** | Postman | Configurable API governance and security rules are Spectral v6 rules, including custom JavaScript functions | [Docs](https://learning.postman.com/docs/api-governance/configurable-rules/spectral) |
| **[IBM API Connect](https://www.ibm.com/docs/en/api-connect/saas?topic=tools-api-governance)** | IBM | The governance service validates OpenAPI against Spectral rulesets — pre-configured global rulesets named `spectral-*` and version-matched to upstream, plus custom org rulesets restricted to the built-in core functions | [Docs](https://www.ibm.com/docs/en/api-connect/saas?topic=tools-api-governance) |
| **[Axway Amplify Engage](https://blog.axway.com/learning-center/apis/api-design/api-linting-api-governance)** | Axway | Rulesets execute automatically on service discovery, so every discovered service carries a compliance grade before anyone opens it | [Write-up](https://blog.axway.com/learning-center/apis/api-design/api-linting-api-governance) |
| **[Insomnia / Inso CLI](https://developer.konghq.com/how-to/add-custom-linting-rules/)** | Kong | Picks up a `.spectral.yaml` beside the specification, defaults to the standard OAS ruleset, and supports `extends` for your own | [Docs](https://developer.konghq.com/how-to/add-custom-linting-rules/) |
| **[Bump.sh](https://docs.bump.sh/guides/bump-sh-tutorials/api-linting-with-vacuum/)** | Bump.sh | Lints with vacuum using the Spectral OAS ruleset by default; existing rulesets carry over through the `spectral:` compatibility alias | [Docs](https://docs.bump.sh/guides/bump-sh-tutorials/api-linting-with-vacuum/) |

### Open-source tooling

| Tool | What it does | Source |
|---|---|---|
| **[vacuum](https://quobix.com/vacuum/)** | The independent Go engine, and the most complete alternative implementation — states 100% compatibility with Spectral rulesets, and is the engine several products above run underneath | [GitHub](https://github.com/daveshanley/vacuum) |
| **[IBM OpenAPI Validator](https://github.com/IBM/openapi-validator)** | IBM's open-source validator will pick up a standard Spectral ruleset from the working directory or any containing directory, in preference to its own IBM Cloud Validation Ruleset | [GitHub](https://github.com/IBM/openapi-validator#readme) |
| **[decK file lint](https://developer.konghq.com/deck/file/lint/)** | Kong's gateway configuration CLI lints any JSON or YAML — gateway config as readily as OpenAPI — against Spectral-compatible rulesets, implemented on vacuum | [Docs](https://developer.konghq.com/deck/file/lint/) |
| **[api-oas-checker](https://italia.github.io/api-oas-checker/)** | The Italian government's checker — a static browser application that lints against the national API guidelines, with the rules maintained as a separate public ruleset repository | [GitHub](https://github.com/italia/api-oas-checker) |
| **[Backstage API Docs Spectral Linter](https://roadie.io/backstage/plugins/api-spectral-linter/)** | Adds a linter tab to API entities inside an internal developer portal, with a default ruleset or a per-entity one set by annotation | [GitHub](https://github.com/dweber019/backstage-plugins/tree/main/plugins/api-docs-spectral-linter) |

### Adjacent, and worth knowing

| Project | What it is | Source |
|---|---|---|
| **[SpecLynx](https://github.com/speclynx)** | An independent line of API tooling — a CLI, a browser-based editor, and a VS Code toolkit — built on its own fork of ApiDOM, the semantic parser underneath much of the serious Swagger-era tooling. It does **not** consume the ruleset format today; it is listed because it is among the most capable and least known parsing and validation stacks in this space, and because semantic parsing is what rule authoring has always been missing | [GitHub](https://github.com/speclynx) |

Maintain something that belongs on this list, or something listed here wrongly? Corrections and
additions are merged on sight — [open a pull request or say so in the discussion]({{ site.discussion }}).

---

## Built by API Commons

I've been hard at work filling in the gaps in the services I offer as the API Evangelist with the
tooling needed by the folks I know building API governance programs within enterprises. These are
modular open-source solutions that help enterprises standardize and govern how they produce and
consume APIs.

They are listed because they demonstrate something specific: **the format is already doing work
that has nothing to do with the CLI that runs it.** Registries, baselines, scorecards, coverage
reports, waivers, federation — none of that is linting. All of it depends on rules being a
durable, portable, inspectable artifact.

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

Every tool on this page — the vendors at the top as much as the API Commons tools underneath —
had to answer the same question: *what exactly is a valid ruleset?* And the only available answer
was "whatever the linter accepts today," discovered by reading its source.

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
