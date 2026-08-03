---
title: Why the split comes first
description: >-
  The first move after forking was not fixing the tool. It was pulling the ruleset format out of
  the tool entirely — because whatever gets built first becomes the definition, and because
  "supports Spectral" currently means eight different things nobody has words for.
---

The obvious first move after forking a linter is to fix the linter. Triage the issues, cut a
release, remove the telemetry, prove somebody is home.

That is not what happened first. The first move was pulling the **ruleset format out of the tool
entirely** and standing it up as its own repository, its own schema, its own site, and eventually
its own specification — before a single feature landed in the build. That ordering was deliberate,
it is the decision most likely to be questioned, and it is worth defending directly.

## Whatever you build first becomes the definition

For years, the only answer to *what is a valid ruleset?* was **whatever that codebase accepted.**
Not a document. Not a schema anyone could cite. A parser. The format was a serialization of one
tool's internal model, and every behavior the tool happened to have — including the accidents —
was, by default, the specification.

That coupling is the actual defect. It is not the release gap, the unanswered issues, or the
analytics; those are symptoms of a project people stopped being able to depend on. The structural
problem is that a format used by hyperscalers, enterprise platforms, and national governments had
no existence independent of one implementation's source tree.

Which means: **if the tool gets fixed first, the coupling gets recreated.** Every improvement
shipped before the format is written down becomes another undocumented behavior that exactly one
engine has. Six months of good work and this fork becomes the new authoritative parser — the same
single point of failure, with a different maintainer and a better attitude. Swapping who holds the
bottleneck is not the same as removing it.

Separating first is what makes the fork **optional**. The specification is normative; the build
here is a conforming implementation and nothing more. That is the only honest position a fork can
hold, and it is only credible if the separation happens before the fork has anything to lose by it.

## The specification reaches people the tool cannot

Look at [who actually runs this format](/implementations/) and the reach argument makes itself.

A CLI reaches people who run a CLI. Most consumption of the ruleset format does not look like
that at all — it is a governance service in a cloud console, a rules tab in an API client, a
linting step in a developer portal, a validation gate a platform team wrapped years ago. Those
products are never going to install a fork. Some of them cannot, for reasons that are entirely
legitimate.

But every one of them can implement against a written format, and several of them are already
trying to. A specification is the artifact with the wider blast radius. Shipping it first is
shipping the thing more people can use.

## "Supports Spectral" currently means eight different things

Here is the part that convinced me the ordering mattered, and it comes straight out of building
the implementation map.

At one end, engines execute the format directly — upstream, the build here, and
[vacuum]({{ site.vacuum }}) in Go. Next to those sit products that run it more or less whole:
IBM's OpenAPI Validator will pick up a standard ruleset file from the working directory *in
preference to its own*, and Kong's Insomnia picks up a `.spectral.yaml` sitting beside the
description, `extends` and all.

Then the gradient starts.

- **Apigee API hub** accepts an uploaded ruleset as a "style guide" — with the documented
  constraint that it cannot reference remote URLs in `extends`.
- **IBM API Connect** validates against rulesets from the UI, the designer, or the toolkit CLI —
  but custom provider-organization rulesets are restricted to the built-in core functions.
- **SwaggerHub** imports rulesets as organization style guides and moves them in and out via
  `spectral:upload` / `spectral:download` — the format as a portable artifact crossing a product
  boundary.
- **Postman** teaches the rule format directly to users who have never installed the linter,
  including custom JavaScript functions.
- **Bump.sh** runs the Go engine while carrying existing rulesets over through a `spectral:`
  compatibility alias.
- **decK** applies the format to gateway configuration — a document type it was never written for.

None of that is bad faith. Every one of those constraints is a defensible product decision. A
hosted multi-tenant service has extremely good reasons not to fetch arbitrary remote URLs at lint
time, and better ones not to execute arbitrary customer JavaScript. These are not vendors cutting
corners. They are vendors making sensible subsets.

**The problem is that there is no vocabulary for the subset.** Today "supports Spectral" spans
everything from *runs the entire format including your custom functions* to *accepts a file with
rules in it and silently ignores half your `extends` chain*. A user cannot tell which one they are
buying until they migrate a real ruleset and watch what disappears. A vendor cannot state its
position precisely even when it wants to, because there is no document to state it against. And
nobody can adjudicate a disagreement, because there is nothing to adjudicate against — which is
exactly [the gap the conformance suite exists to close]({{ site.spec_site }}/conformance/).

The interesting consequence is that this cuts *for* the vendors, not against them. If the
specification defines conformance classes properly, a hosted service gets to declare something
like "conforms, without custom code execution" — a precise, checkable, publishable statement — in
place of a footnote in a docs page that users find after their ruleset fails. Whether that lands
as formal profiles, as MUST/SHOULD tiers, or as something else is genuinely open and I would
rather be argued with about it now than after it ships.

You cannot describe that landscape from inside one of the implementations. You need the format to
exist as its own thing before you can say what conforming to it means.

## The cost of getting the order wrong

Worth naming the downside honestly, because there is one: doing the split first means the build
here stays boring for longer. Nothing published, a slower start, and a fork whose most visible
early output is a document. That is a real cost and it is being paid on purpose.

The asymmetry is what settles it. If separating first turns out to be unnecessary, the worst
outcome is a specification that faithfully describes what a tool already did — mildly redundant,
useful anyway, and cheap. If fusing them turns out to be wrong, we already know precisely what
that looks like, because we are all standing in it.

There is also a clock. Every month of tool-first work adds behavior nobody wrote down, which makes
the eventual specification an archaeology exercise against a larger codebase instead of a
description of a stable one. The identity of the schema has the same property — an `$id` gets
harder to change with every downstream `$ref`, and that one is measured in weeks, not months.

## What would help

Two asks, both aimed squarely at the gradient above.

1. **If you ship a product that runs the format** — which parts do you actually execute, and what
   do you deliberately exclude? Remote `extends`, custom JavaScript functions, `aliases`,
   `overrides`, `parserOptions`. Naming your real subset is the single most useful input to how
   conformance classes get drawn, and the ones that come from a shipping product beat the ones I
   would invent.
2. **If you migrated a ruleset between two of these and things quietly stopped firing** — that is
   a conformance test case with a story attached, and it is worth more than any argument on this
   page.

Both go in [the discussion]({{ site.discussion }}), or against
[spotlight-spec]({{ site.repo_rules }}/issues) directly. Corrections to how any product is
characterized here get merged on sight.
