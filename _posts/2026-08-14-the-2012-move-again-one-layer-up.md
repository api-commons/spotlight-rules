---
title: The 2012 move, one layer up
description: >-
  Swagger was a config file for a code generator until a group of people decided it was a format.
  This is the same move, applied to the rules that govern the descriptions.
---

The strategy behind separating the ruleset format from the linter is not new. It is a move that
already worked once, on something considerably more important than a linting format, and it is
worth being explicit about the precedent — because the objections to it are the same objections,
almost word for word.

## What happened the first time

Swagger did not begin as a specification. It began as a **configuration file** — the thing that told
a code generator and a documentation UI what to render. A serialization of one tool's internal
model, useful because those tools were useful. That is how most important formats in this industry
begin.

Then a group of people started saying, repeatedly and in public, that it needed to be a format in
its own right. Not a config file for a generator: a document you could write without touching that
generator, that another vendor could implement against, that you could cite in a contract, and that
could outlive whoever happened to be maintaining the tool that read it first.

The objections then were the objections now. *Why separate it, the tool works. Nobody is asking for
a spec, they are asking for features. A specification is paperwork; the code is the truth.*

It took roughly 2012 to 2014 to settle. The elevation of the spec was the most consequential thing
that ever happened to that format, and everything after — the donation, the rename, the initiative,
the second and tenth implementations, an industry that now assumes an API has a machine-readable
description — followed from it.

**A format that exists independently of its tool can be adopted by people who do not use the tool.**
That is the whole mechanism.

## Where the ruleset format is today

Exactly where Swagger was in 2011.

It is described nowhere except in one program's source. Its meta-schemas are internal implementation
detail, coupled to that program's runtime. The only available definition of a valid ruleset is
*whatever the linter accepts this week.*

And like Swagger, it has long since escaped its container. National governments write mandatory API
design rules in it. Vendors run it inside their own governance products. A dozen governance tools —
registries, baselines, scorecards, coverage, waivers, federation — parse, merge, publish and reason
about it.

Every one of those had to answer the same question: **what exactly is a valid ruleset?** Every one
answered it by reading somebody else's source code. Workable for one tool. Not workable for an
ecosystem.

## What is different this time, and why it argues for moving faster

In 2012, elevating the spec was partly an act of faith about an ecosystem that had not arrived yet.

Here, the ecosystem arrived first. Multiple engines already exist. Products
[embed the format](/implementations/) behind their own interfaces. National standards are written in
it. An entire category of in-house implementations is invisible from the outside. **The
specification is not getting ahead of adoption — it is running years behind it.**

The uncomfortable difference: Swagger's elevation happened while the company behind it was still
investing, which made a donation something somebody could decide. That is not the situation here,
which is why this work is happening from outside rather than inside. The invitation to donate the
linter to the OpenAPI Initiative still stands and would make most of this unnecessary.

## The point

Nobody asked permission in 2012. A group of people decided the config file was a format, started
treating it like one in public, and kept treating it like one until the question stopped being
interesting.

That is what [the specification]({{ site.spec_site }}) is: normative wording, a conformance
definition, a versioning policy, and a citable identity — so that the tool becomes one
implementation among several, and the several get measured against a document instead of against
each other's bugs.
