---
layout: default
nav: research
title: Industry rulesets, and why only one standard has any
description: >-
  Two industry rulesets exist and both encode the same standard. A public catalog tracks over a
  hundred. The gap is not appetite — it is that nobody has said what an industry ruleset is allowed
  to assert.
permalink: /research/industry-rulesets/
---

# Industry rulesets, and why only one standard has any

Governance conversations reach the same place every time: *we need the OWASP rules, and our own
house rules, and whatever our regulator requires.* The first two are solved. The third is almost
entirely unbuilt, and the reason is more interesting than "nobody got round to it."

This page is the evidence behind [spotlight-spec#21]({{ site.repo_rules }}/issues/21), which asks
where industry rulesets sit in the layer model. It argues that the question cannot be answered by
filing them — the layer has to say what a ruleset of this kind is *allowed to claim*, and that turns
out to differ enormously by standard.

> **Disclosure.** The standards catalog used below as a demand signal is
> [API Evangelist Standards](https://standards.apievangelist.com), which is maintained by the same
> person who maintains this fork. It is used here because it is public, sizeable and checkable — not
> because it is neutral. Treat it as one worked dataset, not as the industry's register. Anyone with
> a better one should say so.

---

## What exists

**One industry standard is covered, by two rulesets — both of them OWASP.**

- [OWASP API Security](https://github.com/stoplightio/spectral-owasp-ruleset), published by
  Stoplight. Last functional change September 2024, 21 open issues.
- [`@api-common/spectral-owasp-ruleset`](https://github.com/api-commons/spectral-owasp-ruleset)
  v0.2.0, published by **API Commons — the same organization publishing this research.** 22 checks
  mapped across all ten OWASP API Security Top 10 (2023) categories, using only Spectral's built-in
  functions so it runs anywhere Spectral runs.

> **Correction, 2026-08-17.** The first version of this page named only Stoplight's ruleset and
> described the tier as served by nobody. That omitted API Commons' own ruleset, which is the wrong
> omission for this page in particular to make. The argument is unchanged — **one standard has
> coverage, and it is the same standard twice** — but the count of rulesets was wrong and the
> conflict of interest went unstated.

That is the entire tier. There is no FHIR ruleset — not on npm, not in the `stoplightio`
organization, and not at any point in the history of the project's own
[community index](https://github.com/stoplightio/spectral-rulesets), which has never contained the
string. No ISO 20022 ruleset. No FDX, no CAMARA, no TM Forum, no Peppol, no X12.

Two rulesets for one standard, and none at all for the other ninety-odd, is a sharper way of putting
the problem than "there is only one."

For contrast, the same ecosystem carries a dozen or more **vendor style guides** — Adidas, Azure,
DigitalOcean, Red Hat, IBM Cloud, VTEX, SPS Commerce — because those have an obvious owner with an
obvious motive. Industry standards have neither. The body that publishes the standard is not in the
linting business, and the organizations implementing it each solve it privately, if at all.

## What is being tracked

The catalog holds **610 standards**, of which **98 are typed `industry-standard`** and 37 more are
`regulation-compliance`.

> **Correction, 2026-08-17.** This section previously said 118, with a caveat that roughly two dozen
> of them were catalog buckets or Java platform specifications and that the realistic count was
> "closer to 95." The catalog has since been cleaned rather than caveated. An admission test — a
> published standard, governed by a body, scoped to a vertical — moved twenty entries out of the
> type: the seven Java platform specifications, five horizontal formats (ISO 8601, vCard, vCard
> Ontology, iCalendar, RDF, DOI), two things that are software rather than standards (ROS, the CKAN
> Action API), and the five buckets, which now sit under a new `umbrella` type. Nothing was deleted.
> **The number is 98, and it is now derived rather than estimated.**

One caveat still stands, and it got worse on inspection:

- **Demand data is not just partial, it is largely unsourced.** Twelve of the 98 carry a company
  count. Every one of those twelve arrived in a catalog merge whose original source did not survive,
  which means the ranking below cannot be traced to a method. A thirteenth, AIS, has been retracted
  outright: it read 45 companies, and sampling the matched text across 250 corpora returned
  "Air-Insulated Switchgear" every time, with no maritime hit at all. Treat the table as an ordering
  worth investigating, not as a measurement.

With that stated plainly, where counts do exist they point somewhere specific:

| Standard | Companies |
|---|---|
| [NACHA](https://standards.apievangelist.com/store/nacha) | 83 |
| [ISO 20022](https://standards.apievangelist.com/store/iso-20022) | 27 |
| [HL7 FHIR](https://standards.apievangelist.com/store/fhir) | 20 |
| [EDIFACT](https://standards.apievangelist.com/store/edifact) | 20 |
| [FIX Protocol](https://standards.apievangelist.com/store/fix-protocol) | 13 |
| [DICOM](https://standards.apievangelist.com/store/dicom) | 11 |
| [ISO 8583](https://standards.apievangelist.com/store/iso-8583) | 11 |
| [X12 EDI](https://standards.apievangelist.com/store/x12-edi) | 8 |
| [HL7 v2](https://standards.apievangelist.com/store/hl7-v2) | 5 |
| [FDX](https://standards.apievangelist.com/store/fdx) | 3 |

Payments and healthcare, overwhelmingly. Which is what you would expect, and also — as the next
section shows — the worst possible news for a linter.

## The problem nobody has named

**A ruleset lints a structured document.** That is the whole capability. It can assert things about
an OpenAPI, AsyncAPI or Arazzo description, or any JSON/YAML you point it at.

Most industry standards are not structured documents in that sense. Sorting the catalog by *what a
ruleset could actually check* produces four very different tiers, and they are not equally
serviceable.

The tiers below started as a hand-made reading of the catalog. They are now **computed** from a
`schema_forms` field carried by every industry standard, backfilled by fetching each body's actual
artifact — 63 of the 98 have one that can be retrieved at source, and the rest are recorded as gated,
sold, blocked to automated clients, or absent. The split:

| Tier | Count | What a ruleset can claim |
|---|---|---|
| **A** | 30 | Real conformance. The standard *is* an API description. |
| **B** | 36 | A meaningful subset, and never conformance. |
| **C** | 13 | Only the API *around* an unlintable wire format. |
| **D** | 12 | Nothing, ever. There is no wire format to check. |
| — | 7 | Not established at the last verification pass. |

Tier D is an addition to the original three, and it earns its place: a methodology, a taxonomy or an
identifier scheme is not a Tier C standard with an awkward format. It has no format at all, and
filing it as C implies there is something a linter is failing to reach.

### Tier A — the standard *is* an API description

The body publishes OpenAPI (or equivalent), and conformance is a property of the description. Here a
ruleset can check real conformance: required paths present, response schemas matching, naming
conventions held, mandatory security schemes declared.

Thirty standards, of which twenty-seven publish the description openly: CAMARA, GSMA Open Gateway,
TM Forum Open API, UK Open Banking, Australian Consumer Data Standards, OGC API, RESO Web API,
CDS Hooks, DCSA, UIC OSDM, Ed-Fi, GA4GH, COUNTER, OpenADR 3, Green Button, MEF LSO Sonata, 3GPP,
ETSI MEC, HSDA and InterUSS among them.

Three are Tier A and **gated** — FDX, Berlin Group NextGenPSD2 and Confirmation of Payee all publish
an API description to members only. They are the most lintable standards in the catalog and the
hardest to write a public ruleset for, which is a specific and fixable problem rather than a
technical one.

**This tier is genuinely servable today, and nothing serves it.**

### Tier B — the standard is a data model that shows up inside API descriptions

FHIR, US Core, C-CDA, GS1, EPCIS, UBL, Peppol, ISO 20022, CDISC, MTConnect, DICOM, MISMO and ACORD —
thirty-six in all. The standard defines resources and fields.
An API implementing it usually has an OpenAPI description whose schemas *should* reflect the model.

A ruleset here can check a meaningful subset — that a resource named `Patient` carries the elements
the profile requires, that cardinality is not obviously violated, that required extensions are
declared. It **cannot** validate conformance, because conformance is defined against
StructureDefinitions and profile logic that live outside the description entirely.

This is the tier where a ruleset is most useful and most dangerous. Useful because it catches the
common errors early and cheaply. Dangerous because **passing it is not conformance**, and a badge
that implies otherwise is worse than no badge.

### Tier C — the wire format is not a structured document at all

NACHA (fixed-width files), X12 and EDIFACT (segment grammars), ISO 8583 (bitmapped binary), HL7 v2
(pipe-delimited), SEMI SECS/GEM and AIS (binary). A JSON/YAML linter cannot inspect any of these.

Two moved out of this tier when the artifacts were actually fetched, and the reason is worth stating.
**FIX** publishes its message catalog as XML against a public XSD in the FIX Repository, and **DICOM**
publishes the entire standard as DocBook XML from which the data dictionary is extractable. Both have
unlintable wire formats and machine-readable models at source — so a ruleset still cannot inspect an
instance, but it *could* be generated rather than hand-written. That is a different problem from
NACHA's, and the tiering now says so.

Note what this does to the demand table above: **the standard with the largest company count in the
catalog is the one a ruleset can say least about.** The most a ruleset can do here is govern the API
*around* the format — that an endpoint accepting NACHA files declares the right content type, sets a
size limit, documents its error semantics. Worth doing, easy to oversell.

### Tier D — there is no wire format

GHG Protocol, the GRI Standards, ISSB IFRS S1/S2, ISO 14064, ISO 30414, SAE J3016, USCDI, UPRN and the
RESO UPI. Twelve entries that are methodologies, taxonomies, identifier schemes or disclosure
frameworks. They are cited constantly in API conversations and there is nothing in any of them to
serialise, let alone lint.

This tier matters for one reason: it is where a ruleset would *most* easily overclaim. "USCDI
conformance" is a phrase that can be said and cannot be checked — USCDI is a PDF list of data
elements, and the thing that is actually checkable is US Core, a different standard in Tier B.

## What this means for the layer model

The classification above is a first pass and is offered as something to argue with rather than as a
finished taxonomy. But it already forces four requirements onto whatever #21 lands on:

1. **A ruleset must be able to declare what it encodes, and which version.** "FHIR" is not a
   version. R4 and R5 differ, US Core layers on top of both, and a rule written for one is wrong for
   another. Today a ruleset cannot say this at all, which is why nobody can tell whether a published
   ruleset is current.
2. **A ruleset must be able to declare what it does *not* check.** This is the Tier B problem stated
   as a format feature. Without it, every industry ruleset silently overclaims, and the conformance
   badge in [#10]({{ site.repo_rules }}/issues/10) inherits the overclaim.
3. **Composition needs precedence.** House style plus OWASP plus a regulator's rules is the normal
   case, not the exotic one. When they disagree — and a regulator's naming requirement will disagree
   with a house style — something has to say which wins, and the format currently has no vocabulary
   for it.
4. **The maintenance model is the actual blocker.** Standards bodies version on their own cadence
   and are not going to maintain rulesets. Three of the ecosystem's four published add-on rulesets
   have been unmaintained since 2024. A layer model that assumes a maintainer per standard is
   designing for a world that has not existed once.

And the distribution problem underneath all of it: fifteen of the nineteen entries in the community
index are consumed by pointing at a file path in someone's Git repository. No version, no integrity,
no release. Whatever industry rulesets turn out to be, they cannot be distributed that way.

## Where a first one should start

If the point is to prove the tier is servable rather than to boil the ocean, the selection criteria
fall out of the above:

- **Tier A**, so the ruleset can assert conformance rather than a proxy for it.
- **A body that already publishes machine-readable artifacts**, so the rules can be derived from a
  source of truth rather than hand-transcribed from a PDF.
- **Published openly**, so the ruleset can be published too.
- **Real implementer count**, so it is used.
- **A live conformance question**, so someone cares about the answer.

The third criterion is new, and it removes the candidate this page originally led with. **FDX
publishes its description to members only** — as do Berlin Group and Confirmation of Payee. A
ruleset derived from a members-only artifact cannot be published without redistributing the thing it
was derived from, which makes those three the most lintable standards nobody can write a public
ruleset for. That is a licensing problem wearing a technical costume, and it is not solved by
picking a different linter.

> **Correction, 2026-08-17.** This section previously recommended **FDX and CAMARA** ahead of FHIR.
> FDX is Tier A and closed, which the first version of this page did not check. The recommendation
> is now CAMARA alone.

That leaves **CAMARA** as the first target: Tier A, openly published across ninety-three
repositories, a live conformance question, and a Spectral ruleset for Open Gateway
[promised publicly in December 2024](https://reports.apievangelist.com/reports/the-camara-standard/)
that still does not exist. FHIR remains the more valuable target and the harder one, and doing it
second rather than first is the difference between a demonstration and an overclaim.

## Open

- Is "industry" a dimension of the layer model, or a well-known custom ruleset? This page argues it
  has to be a dimension, on the strength of requirements 1 and 2 — but that is an argument, not a
  finding.
- Who is the maintainer of an industry ruleset when the standards body will not be?
- Does a Tier B ruleset that cannot assert conformance still deserve the standard's name in its
  title? "FHIR ruleset" and "some FHIR checks" are different products.
- What happens to a published ruleset when the standard versions and nobody updates it? Silence is
  the current answer, and silence is how the existing three got to 2026.

<div class="card bg-light border-0 mt-4">
  <div class="card-body text-center py-4">
    <p class="mb-3">Disagree with the tiers, or know of an industry ruleset this missed?</p>
    <a class="btn btn-primary" href="{{ site.repo_rules }}/issues/21">Argue on the issue →</a>
    <a class="btn btn-outline-secondary ms-2" href="{{ site.discussion }}">Or in the discussion →</a>
  </div>
</div>
