---
layout: default
nav: research
title: The plan, and what is open
description: >-
  The decisions taken and the reasoning behind each, the questions deliberately left open, and
  the risks worth naming.
permalink: /research/plan/
---

# The plan, and what is open

Announcing intent rather than a finished plan is deliberate. Below is what has been decided, why,
what is still genuinely undecided, and what could go wrong.

---

## The structural problem everything hangs off

Spectral is **two artifacts fused into one**: a *ruleset specification* (how you express a rule)
and an *evaluation tool* (the thing that runs it). The consequence is simple and severe — because
the tool is unmaintained, **the specification is unmaintained too.** There is no way to fix one
without a home for the other.

And the obvious home rejects half of it. The **OpenAPI Initiative charter has an explicit clause
barring tooling** — specifications only. That clause has bitten before: it is part of why two
other major API specifications ended up outside the OAI, both of whose teams insisted that parsers
and generators had to live alongside the spec.

So the OAI could host the ruleset specification and could not host the CLI. Three ways out:

| Option | For | Against |
|---|---|---|
| **Spec to the OAI, tool elsewhere** | Fastest legitimacy; sits beside related specs | Splits the two things that must evolve together — the exact failure being fixed. Also a poor fit for the large non-OpenAPI user base |
| **Its own foundation working group** | Spec and tool together, neutral governance | Substantial work; needs a real core group first; widely seen as slow and low-support |
| **Somewhere lightweight now, decide later** | Ships this quarter; keeps spec and tool together; stays flexible | Reads as one organization's project until a coalition is visible |

**Decision: the third, with the second as the stated destination and the first explicitly
rejected.**

---

## Decided

**Home — API Commons now, a foundation later.** Fork the specification *and* the tool under
[API Commons](https://apicommons.org). Escalation paths, all real: a nonprofit stood up
underneath API Commons; a foundation working group; or a European home if that is where the
centre of gravity turns out to be. Announcing the *optionality* is itself the reassurance —
nobody has to bet on the final answer to start using it.

**The specification and the tool ship together.** The spec is normative; the CLI is the reference
implementation. This is the Swagger-as-canonical-implementation pattern, minus the part where the
canonical implementation fell behind and people stopped watching it.

**Multi-specification from day one.** Not OpenAPI-plus-extras. The evidence that users lint far
more than OpenAPI is overwhelming, and it is also the strongest argument against filing the format
under an OpenAPI-specific body. [The full list is on the scope page](/scope/).

**JavaScript stays.** Browser support is a hard requirement — real users lint in editors,
playgrounds, and web tooling where a compiled binary cannot run. On performance: the honest read
is that the bottleneck is code quality, not the language. The engine has grown organically for
years and is nowhere near what it could do on its own platform. A cleanup will not match a
compiled binary and does not need to.

**Compatibility is bug-for-bug at the fork point.** Start from the exact ruleset format and exact
CLI behavior of v6.16.2. Divergence becomes a later, deliberate, versioned decision.

This one has teeth, and the experience of everyone who has attempted parity says so: real
compatibility means *all* of it, not the happy paths. A trivial document and a basic ruleset will
pass anywhere. The gnarly production rulesets are where implementations diverge, and at least one
implementation claiming full compatibility does not actually have it — a claim that cannot even be
adjudicated today, because there is nothing to adjudicate it against.

Hence: **a public conformance test suite is a first-class deliverable**, not a nice-to-have. It is
the only honest way to settle "is X compatible," it is what the format has never had, and it is
what makes multiple implementations safe rather than a fragmentation risk.

**Swagger 2.0 comes back.** Upstream started blocking it. Long-lived estates — banking especially
— still run it. Keeping the bar low is how people actually adopt a thing.

**Simplicity over a general policy engine.** Some argue this should be redone on a general-purpose
policy engine. There is something to that, and precedent exists for multi-policy architectures.
But the simplicity of plain YAML and JSON rules is a feature, not a limitation. Two axes, often
conflated: *multi-format* (what you lint) — yes, aggressively; *multi-policy-language* (how you
express a rule) — the spec stays one language, and a host tool can route elsewhere.

---

## Open

**The name.** The upstream name is being kept for now so lineage stays obvious, and a rename is
expected eventually — trademark considerations alone make that likely. A name is load-bearing: an
earlier generation of this exact situation produced a naming confusion the community is still
untangling a decade later. This is a community question and it is open.

**The home.** See above. Genuinely undecided, and the first thing worth arguing about.

**Governance.** How decisions get made, who makes them, what the contribution model is, and what
a charter should say.

**Sequencing.** Which formats first, and what waits.

---

## Risks worth naming

1. **The window closes.** Urgency created by the supply-chain incident is what makes a fork
   welcome rather than resented. Teams are already reinventing their own tooling or migrating.
   Every week without something public to point at is defections that do not come back.
2. **Fragmentation between engines** grows quietly and is only visible once it is expensive. The
   conformance suite is the lever, and it works whether or not other implementers participate.
3. **The largest organizations are already invested** in their own approaches and will not adopt a
   specification that fails to accommodate what they have built. Multi-format support is the
   concession that makes room for them.
4. **Trademark.** Needs a real read before any coordinated release, not after.
5. **"This is just one person."** The honest mitigations, in order: the published record behind
   it, a named coalition, and a real governance structure. All three need to be visible early
   rather than promised.

---

## What would make all of this unnecessary

The current owner donating Spectral to the OpenAPI Initiative. That invitation was made publicly
in [January 2025](https://apievangelist.com/2025/01/31/please-put-spectral-into-the-openapi-initiative-smartbear/)
and never answered. It still stands, and it remains the best outcome available to everyone.

---

<p class="mt-4">
  <a class="btn btn-outline-primary" href="/research/maintenance/">← The maintenance record</a>
  <a class="btn btn-outline-primary ms-2" href="/research/dependents/">← Who depends on this</a>
  <a class="btn btn-primary ms-2" href="{{ site.discussion }}">Argue with this →</a>
</p>
