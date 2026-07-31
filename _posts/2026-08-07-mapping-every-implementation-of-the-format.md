---
title: Mapping every implementation of the format
description: >-
  The tool is one implementation among many — a claim worth nothing without a published list. So
  here is the list, with the evidence for every entry and a rule that maintainer corrections get
  merged on sight.
---

There is a new page on this site: [the implementation landscape](/implementations/). Every engine
that executes the Spectral ruleset format, every product that embeds it behind its own interface,
and the adjacent tooling that solves the same problem differently — with a link to the evidence for
each claim.

It exists because **"the tool is one implementation among many" is the load-bearing claim of this
entire effort**, and a claim with no list behind it is a slogan.

## What the map shows

**Engines** are the easy part: the upstream linter, the maintained build here, and
[vacuum]({{ site.vacuum }}). Three implementations, one undocumented format, no way to settle a
disagreement between them.

**Embedded in products** is the category that matters. IBM's OpenAPI Validator supports Spectral
rules and will pick up a standard Spectral ruleset file from the working directory or any
containing directory, in preference to its own ruleset. Azure API Center lints definitions on add
or update with Spectral as the analyzer and `spectral:oas` as the default profile, and Microsoft's
documentation states Spectral is currently the only supported analyzer type.

Read those two entries next to each other and the argument for a specification makes itself. A
hyperscaler's governance product and an enterprise vendor's validator both define part of their
behaviour in terms of a file format that has never been written down.

**Adjacent** covers tooling with its own rules model — prior art to learn from rather than
competition to argue with, and in several cases the reason a design decision in this format looks
the way it does.

## What the map cannot show

In-house implementations. Enterprises that wrote their own engine rather than depend on an
unmaintained one, and the far larger number running the incumbent behind an internal validation
platform nobody outside the company has heard of.

None of that appears in a package registry or a code search. And that invisibility is exactly why
every conversation about a permanent home stalls on *who actually uses this?* — a question that has
never had a public answer. If you run one of these, [saying so](/involved/), publicly or privately,
does more for the format than any amount of code.

## How the list is kept

- **Evidence, not opinion.** Every relationship claim links to something checkable. No performance
  claims repeated without a reproducible benchmark.
- **No ranking, no scoring.** The project maintaining one of these implementations does not get to
  grade the others.
- **Corrections take priority.** Maintainers, open a pull request against
  [`_data/implementations.yml`](https://github.com/api-commons/spotlight-rules/blob/main/_data/implementations.yml)
  and it gets merged on sight. Being publicly wrong about someone else's project is worse than
  being incomplete.
- **One entry is marked "relationship not established"** rather than guessed at, and it stays that
  way until somebody who knows corrects it.
- **Machine-readable first.** The data file is the source of truth; the page renders from it.

## Why a map becomes a register

Right now this is a map. Once the [conformance suite]({{ site.repo_rules }}/issues/9) exists it
becomes something better: a register of what actually conforms, run and reported the same way for
every engine, with the output published — including where the reference implementation here fails.

That is the point at which "compatible with the ruleset format" stops being a marketing claim and
becomes a testable one, and the point at which implementers doing quiet parity work finally get
credit for it.

Tracked in the open at [spotlight-tools#13]({{ site.repo_cli }}/issues/13). Additions and
corrections both welcome — especially implementations that are not visible from a package registry.
