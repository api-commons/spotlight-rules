---
layout: default
nav: scope
title: Scope
description: >-
  Where this goes — multi-specification support well beyond OpenAPI, multi-engine support, and
  the constraints that are not negotiable.
permalink: /scope/
---

# Scope

> **Codename: Spotlight.** The working name this site is hosted under, while both repositories
> keep the upstream name so the lineage stays obvious. The eventual name is
> [an open question](/involved/#what-is-still-open).

Two commitments come first, because everything else depends on them.

**The spec and the tool stay aligned.** They were fused, and that fusion is what failed. But
separating them does not mean letting them drift. The specification is normative; the CLI is the
reference implementation and follows it. Wherever this eventually lives has to be able to hold
both — which is the awkward part of the OpenAPI Initiative option, since its charter currently
bars tooling.

**[vacuum]({{ site.vacuum }}) is supported.** It is a valued implementation and this is not a competition. A written
specification plus a public conformance suite is exactly what lets multiple engines coexist
honestly, rather than diverging quietly on undocumented behavior and arguing about it later.

---

## Multi-specification

The format is a general-purpose JSON/YAML rules language that happened to be born inside an
OpenAPI tool. Users have been extending it well past its origins for years. Making that official
is the single biggest unlock.

| | |
|---|---|
| **[OpenAPI](https://www.openapis.org/)** | 3.x — the origin, and still the centre of gravity |
| **[Swagger 2.0](https://swagger.io/specification/v2/)** | **Restored.** Upstream started blocking it. Banks and long-lived estates still run it, and keeping the bar low is how adoption actually happens |
| **[AsyncAPI](https://www.asyncapi.com/)** | Event-driven descriptions |
| **[Arazzo](https://spec.openapis.org/arazzo/latest.html)** | Workflows |
| **[Overlays](https://spec.openapis.org/overlay/latest.html)** | Modifications to descriptions |
| **[JSON Schema](https://json-schema.org/)** | The substrate underneath most of the above |
| **[GeoJSON](https://geojson.org/)** | And [its successors](https://github.com/opengeospatial/ogc-feat-geo-json) — geospatial teams are among the most demanding non-OpenAPI users |
| **[OData](https://www.odata.org/)** | Including XML-based metadata documents |
| **[GraphQL](https://graphql.org/)** | Schemas |
| **[A2A](https://a2a-protocol.org/) agent cards** | Agent-to-agent descriptors |
| **[MCP](https://modelcontextprotocol.io/)** | Model Context Protocol servers and their descriptors |
| **[JSON-LD](https://json-ld.org/)** | Linked data |
| **[APIs.json](https://apisjson.org/)** | API discovery and indexing |
| **[Markdown](https://commonmark.org/)** | Agent skills and guidance — part YAML frontmatter, part prose. The hardest of these, and the most requested |

Beyond this list sit the genuinely hard cases — validating RDF-shaped documents, for instance,
where the document model itself is different. Those are not v1. But **keeping the rules format
modular enough that a non-JSON document model can be plugged in later** is a design constraint
from day one, not an afterthought.

## Multi-engine

A specification with one implementation is just a tool with extra paperwork. The point of writing
it down is that other people can implement it.

- **[Spotlight]({{ site.repo_cli }})** — the JavaScript reference implementation, forked from
  Spectral and kept aligned with this specification.
- **[vacuum]({{ site.vacuum }})** — the Go implementation. Supported, and better served by a
  written spec than by nobody having one.
- **[Open Policy Agent](https://www.openpolicyagent.org/)** — some organizations already express
  governance policy in OPA and would rather not run two policy languages.
- **[Cedar](https://www.cedarpolicy.com/)** — likewise.
- **[Rego](https://www.openpolicyagent.org/docs/policy-language)** and other policy languages —
  the same logic applies to anything that can consume a documented rules format.

There is a distinction worth keeping straight here, because they get conflated constantly:

- **Multi-format** is *what you lint*. Yes, aggressively — see above.
- **Multi-policy-language** is *how you express the rule*. The specification stays one language.
  A host tool is free to route to [OPA](https://www.openpolicyagent.org/),
  [Cedar](https://www.cedarpolicy.com/), or anything else; that is an integration question,
  not a format question.

## What is not negotiable

**JavaScript stays, and browser support is the reason.** This comes up as a performance argument
and it is really an architecture argument. Real users run linting in the browser — in editors, in
playgrounds, in web-based governance tooling, in environments where installing a binary is not an
option. A compiled binary cannot serve them. Any engine that wants to be *the* engine has to run
where the users are.

On performance specifically: the honest read is that the bottleneck is code quality, not the
language. The current engine has grown organically for years and is not close to what it could do
on the JavaScript platform. A cleanup will not match compiled-binary speed and does not need to —
it needs to be comfortably sufficient for ordinary documents. And the case for enormous
documents needing enormous speed is at least partly a case for **smaller documents and better
design**, which is what a linter is for in the first place.

**Compatibility is the contract.** This build starts from the exact ruleset format and CLI
behavior of v6.16.2. Existing rulesets keep working. Divergence will be deliberate, versioned, and
documented — never silent. A public conformance suite is a first-class deliverable, not a nice-to-have.

---

## Beyond the code

**Education and training.** Very few people know how to write a good rule, and fewer know how to
build, version, certify, share, or federate a ruleset. The tooling is only half the problem; the
practice around it is barely taught at all.

**Vendor alignment.** Multiple vendors have independently built products on this format,
abstracted it behind their own facades, or reimplemented it. A specification is what turns that
from parallel private effort into a shared ecosystem.

**A European opportunity.** Some of the most advanced adoption is in European public-sector API
programs, where design rules are mandated and machine-readable — the Dutch government's
[REST API Design Rules]({{ site.nl_adr }}) are the clearest published example — and where the same
conversations are happening across several countries at once. There is a real chance to make the format —
and the style guides written in it — something that travels across borders.

---

<div class="card bg-light border-0 mt-4">
  <div class="card-body text-center py-4">
    <p class="mb-3">All of this is open for argument. That is the point of announcing intent rather than a finished plan.</p>
    <a class="btn btn-primary" href="{{ site.discussion }}">Join the discussion →</a>
  </div>
</div>
