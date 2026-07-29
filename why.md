---
layout: default
nav: why
title: Why
description: >-
  The case for forking Spectral — acquisition, measurable abandonment, an open backlog, a
  supply-chain incident, added telemetry, and a format with nowhere to grow.
permalink: /why/
---

# Why fork Spectral

Spectral's ruleset format became the de-facto way organizations express machine-readable API
governance rules. National governments have written their mandatory API design rules as Spectral
rulesets. Large enterprises embed the engine inside their own internal validation platforms,
behind a facade their developers never see. Small startups wire it into CI on their first week.
Dozens of published rulesets, wrappers, adapters, editor plugins, and pipeline integrations
depend on it.

Nobody set out to make it a standard. It happened anyway, the way Swagger happened — a
configuration file for one tool that everyone started treating as an interchange format.

And then the tool stopped moving.

---

## The reasons, in order

### 1. The acquisition

Stoplight was acquired by SmartBear. The investment that would have kept the project healthy did
not follow. This is a familiar pattern and it is not being alleged here — it is visible in the
commit history, the release cadence, and the issue tracker.

### 2. Abandonment, and it is measurable

The cleanest single measure of whether anyone is home on an open-source project is how many
issues get *closed*. For the Spectral repository:

| 2019 | 2020 | 2021 | 2022 | 2023 | 2024 | 2025 | 2026 to date |
|---|---|---|---|---|---|---|---|
| 156 | 126 | **157** | 125 | 86 | 36 | **12** | **10** |

A peak in 2021, then a fall of roughly 93%. Meanwhile the issues keep arriving — 61 of the
currently-open ones were filed in 2024, 40 in 2025, and 26 already in 2026. **The backlog is not
old and settled. It is accumulating.**

Releases tell the same story: fourteen months elapsed between v6.15.0 (April 2025) and v6.16.1
(June 2026).

### 3. A backlog nobody is draining

**241 open issues. 39 open pull requests.** The oldest open issue was filed in October 2019. The
oldest open community pull request has been waiting **five years**.

Some of those pull requests are real, finished contributions from people who wanted to help — a
runtime-expression validator, external-reference validation for OpenAPI 3.1, formatter
improvements, an AsyncAPI 3.1.0 upgrade contributed days before this was written. They sit there.

The most-reacted open issue in the repository is a security advisory with **24 reactions and zero
comments**.

### 4. The supply-chain incident

In July 2026 a compromised dependency reached Spectral through its rulesets package. Someone
filed an issue explaining the vector and advising people to pin their versions or stop using the
package until it was resolved.

**That issue is still open.** The one follow-up comment on it — asking whether the newly published
release had actually fixed the problem — was never answered by a maintainer.

That is the moment this stopped being a philosophical concern. An unanswered security question,
open for weeks, in a dependency chain that multiple national governments sit on top of.

### 5. Telemetry

On 2026-06-30, install-time analytics were added across the `cli`, `core`, `rulesets`, `formats`,
and `functions` packages, and to the Docker image.

To be fair about it: the mechanism is a legitimate, widely used one, the opt-out is real, and it
is documented in the README rather than buried. Maintainers have every right to understand who
uses their work. But install-time in a modern governance setup means every CI run, every image
build, every ephemeral pipeline container — and knowing what your tools do is itself a governance
practice. Enterprises and public-sector teams will care. **This build removes it.**

### 6. The format has nowhere to grow

This is the reason that matters most, and it is the least dramatic.

The ruleset format is a general-purpose JSON/YAML rules language that happened to be born inside
an OpenAPI tool. People already use it far beyond OpenAPI and AsyncAPI — geospatial document
formats, JSON-LD, proprietary internal metadata formats, GraphQL, XML-based schemas, agent
descriptors. Every one of those users is extending a format that has no specification to extend.

Because the specification and the tool were never separated, **an unmaintained tool means an
unmaintained format.** You cannot fix one without a home for the other.

---

## What follows from that

Two repositories, deliberately separate:

- **[spectral-rules]({{ site.repo_rules }})** — the ruleset and rules format as a standalone,
  independently versioned specification with a portable JSON Schema. Rules should be authorable,
  validatable, publishable, exchangeable, and consumable by *any* tool.
- **[spectral-cli]({{ site.repo_cli }})** — the reference implementation, kept aligned with the
  specification rather than the other way around.

**The rules standing on their own is the whole point.** Everything else here is logistics.

An [upstream-tracking fork]({{ site.repo_fork }}) is also kept, so lineage stays visible and
changes can be pulled in cleanly. The working repository is a copy rather than that fork for a
mundane reason: GitHub forks cannot have their own issues, and somewhere to report a problem and
be answered is precisely what has been missing.

---

## What this is not

**Not a rewrite.** It starts from the exact ruleset format and the exact CLI behavior of v6.16.2.
Existing rulesets keep working. Any divergence will be deliberate, versioned, and documented.

**Not a competitor to vacuum.** vacuum is a supported and valued implementation. The concern with
a compiled Go implementation is not that it exists — it is that browser-based tooling cannot use
it, and that compatibility claims cannot be adjudicated without a written specification and a
public conformance suite. Providing those helps vacuum as much as anyone.

**Not hostile to the original.** Spectral was built by Stoplight and its contributors over many
years, and grew out of Speccy before that. The Apache-2.0 license and full commit history carry
forward unchanged. SmartBear was asked publicly, in
[January 2025](https://apievangelist.com/2025/01/31/please-put-spectral-into-the-openapi-initiative-smartbear/),
to donate Spectral to the OpenAPI Initiative. That invitation still stands and remains the best
possible outcome.

---

<div class="card bg-light border-0 mt-4">
  <div class="card-body text-center py-4">
    <p class="mb-3">The detailed research behind every number on this page is published in full.</p>
    <a class="btn btn-outline-primary" href="/research/">Read the research →</a>
    <a class="btn btn-primary ms-2" href="{{ site.discussion }}">Join the discussion →</a>
  </div>
</div>
