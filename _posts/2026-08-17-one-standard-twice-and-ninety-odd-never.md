---
date: 2026-08-17 12:00:00 -0400
title: One standard, twice — and ninety-odd, never
description: >-
  Exactly one industry standard has a ruleset behind it, and it has two. Not because the demand is
  missing, but because nobody has said what such a ruleset is allowed to claim.
---

Count the industry standards with a ruleset behind them and the answer is **one**. It is OWASP, and
it has two — [Stoplight's](https://github.com/stoplightio/spectral-owasp-ruleset), last functionally
changed in September 2024 with twenty-one open issues, and
[API Commons' own](https://github.com/api-commons/spectral-owasp-ruleset), which maps 22 checks
across all ten categories using only built-in functions.

Two rulesets for one standard. None at all for the other ninety-odd.

There is no FHIR ruleset. There has never been one — not on npm, not in the `stoplightio`
organization, and not at any point in the history of the project's own community index, which has
never contained the word. No ISO 20022. No FDX, CAMARA, TM Forum, Peppol, or X12.

Meanwhile the same ecosystem happily carries a dozen **vendor** style guides — Adidas, Azure,
DigitalOcean, Red Hat, IBM Cloud. Those exist because they have an obvious owner with an obvious
motive. An industry standard has neither: the body publishing it is not in the linting business, and
every organization implementing it solves the problem privately, if at all.

The [full research is here](/research/industry-rulesets/), read against a public catalog of 610
standards. This is the short version.

## It is not a demand problem

The catalog types 98 standards as industry standards. Where implementer counts exist, they cluster
hard in payments and healthcare: NACHA at 83 companies, ISO 20022 at 27, FHIR and EDIFACT at 20 each,
FIX at 13, DICOM and ISO 8583 at 11.

So the demand is there and it is concentrated. Which makes the absence of rulesets a design failure
rather than an appetite one.

*Updated 2026-08-17: this said 118, "call it 95 after stripping catalog buckets and Java platform
specs." The catalog was cleaned instead of caveated — twenty entries failed an admission test and
moved to the type that describes them — so the number is now 98 and derived rather than estimated.
The implementer counts above are carried over unchanged and should be treated with more suspicion
than they were: their original source did not survive a catalog merge, and one of them, AIS at 45,
has since been retracted as a matcher artifact. The
[research page](/research/industry-rulesets/) has the detail.*

## It is a "what can this thing even see" problem

A ruleset lints a structured document. That is the entire capability. Sort industry standards by
whether a linter can inspect the thing at all, and they fall into four tiers that are nothing like
each other. The split is now computed from a schema-forms field on every entry, backfilled by
fetching each body's actual artifact: **A 30, B 36, C 13, D 12**, with seven not yet established.

**Tier A — the standard is an API description.** The body publishes OpenAPI, conformance is a
property of the description, and a ruleset can check it directly. CAMARA, TM Forum, UK Open Banking,
the Australian CDR, OGC API, RESO, DCSA, Ed-Fi, OSDM and twenty more. **This tier is servable today
and nothing serves it.** Three of the thirty — FDX, Berlin Group, Confirmation of Payee — publish
that description to members only, which makes them the most lintable standards nobody can write a
public ruleset for.

**Tier B — the standard is a data model appearing inside descriptions.** FHIR, US Core, GS1, MISMO,
ACORD. A ruleset can check a useful subset — required elements present, obvious cardinality
violations, declared extensions — and it **cannot** validate conformance, because conformance is
defined against profile logic living outside the description. Most useful tier, most dangerous tier.
Passing is not conformance, and a badge implying otherwise is worse than no badge.

**Tier C — the wire format is not a structured document.** NACHA is fixed-width files. X12 and
EDIFACT are segment grammars. ISO 8583 is bitmapped binary, HL7 v2 is pipe-delimited. A JSON linter
cannot see any of it. FIX and DICOM left this tier once the artifacts were actually fetched — both
have unlintable wire formats and a machine-readable model published at source, which is a different
problem and a much more tractable one.

**Tier D — there is no wire format.** GHG Protocol, GRI, ISSB, ISO 30414, SAE J3016, USCDI, UPRN.
Twelve entries that are methodologies, taxonomies and identifier schemes. Nothing to lint, ever — and
the tier where a ruleset would most easily overclaim, because "USCDI conformance" is a phrase you can
say and cannot check.

Now re-read the demand table. **The standard with the largest implementer count is the one a ruleset
can say least about.** That inversion is the actual story, and it is why "just write more rulesets"
has never worked.

## What the format is missing

Four things, and none of them is more rules.

**A ruleset cannot declare what it encodes, or which version.** "FHIR" is not a version — R4 and R5
differ, US Core layers on both, and a rule correct for one is wrong for another. There is no
vocabulary for stating this, which is why nobody can tell whether a published ruleset is current.

**A ruleset cannot declare what it does not check.** Tier B stated as a format feature. Without it
every industry ruleset silently overclaims, and any conformance badge inherits the overclaim.

**Composition has no precedence.** House style plus OWASP plus a regulator is the normal case. When
a regulator's naming requirement contradicts a house style — and it will — nothing says which wins.

**And the maintenance model is the real blocker.** Standards bodies version on their own cadence and
are not going to maintain rulesets. Three of the ecosystem's four published add-on rulesets have been
unmaintained since 2024. Any design assuming a maintainer per standard is designing for a world that
has not existed once.

Underneath all of it, the distribution problem: fifteen of the nineteen entries in the community
index are consumed by pointing at a file path in a Git repository. No version, no integrity, no
release.

## Where a first one starts

Not with FHIR, despite it being the obvious flag to plant.

The criteria that fall out of the above are: Tier A, so the ruleset can assert conformance rather
than a proxy for it; a body already publishing machine-readable artifacts, so rules are derived
rather than transcribed from a PDF; **published openly**, so the ruleset can be published too; real
implementer count; and a live conformance question somebody wants answered.

That points at **CAMARA** — Tier A, open across ninety-three repositories, and carrying a Spectral
ruleset promised in December 2024 that still does not exist. FHIR is the more valuable target and the
harder one, and taking it second is the difference between a demonstration and an overclaim.

*Updated 2026-08-17: this recommended FDX alongside CAMARA. FDX publishes its description to members
only — as do Berlin Group and Confirmation of Payee — so a derived ruleset could not be published
without redistributing the artifact. Three of the thirty Tier A standards are closed, which makes
them the most lintable standards nobody can write a public ruleset for.*

This is all argued at [spotlight-spec#21]({{ site.repo_rules }}/issues/21), which asks where industry
rulesets sit in the layer model. The answer this research suggests is that they cannot just be filed
somewhere — the layer has to say what a ruleset of this kind is permitted to claim. Otherwise the
first serious industry ruleset ships with a badge nobody should trust.
