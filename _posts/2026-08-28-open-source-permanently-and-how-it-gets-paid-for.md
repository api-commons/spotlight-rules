---
title: Open source permanently — and how it gets paid for
description: >-
  No commercial tier, ever. Which makes the funding question unavoidable rather than optional, so
  here is the stance, the mechanism, and the list of people this actually concerns.
---

Two commitments, stated together because one is meaningless without the other.

**The specification and the reference implementation stay open source, permanently, with no
commercial tier.** Not open core. Not open source with an enterprise edition. Not a licence that
flips the moment somebody builds a business on it. No feature held back to create a paid version.

**And that makes funding a real question rather than a deferred one.** A project that plans to
monetize later can wave the question away. This one cannot.

## Why the easy answer is closed off deliberately

**A governance format with a commercial tier cannot be trusted to make governance decisions.**

Every time the project has to choose between what the format needs and what the paid version needs,
users will assume the paid version wins — and they will be right to assume it, because the incentive
exists whether or not anyone acts on it. The entire value proposition of a governance specification
is trustworthiness. There is no version of this that survives putting a paywall in the middle of
the format.

The return is real, it is just indirect: reputation, the work that grows around a healthy
specification, and the services people ask for once they trust the thing. You can build a living
around that. You cannot build it by gating the format.

## The mechanism that decides whether funding is even possible

The realistic model here is not a foundation membership. It is a number of organizations that run
this format in production committing a few thousand a year each, **earmarked at maintenance**.

Those organizations exist. Governments run mandatory design rules written in this format. Vendors
embed the engine across multiple products. Enterprises have it wired into every pipeline they own.
Almost none of them will buy a foundation membership to fund a linting format. Nearly all of them
could sign off a few thousand a year for a dependency they already rely on — if there were a legible
way to do it.

Whether that ask exists as a category **depends entirely on structure**:

- Some foundation projects are **technical and fiscal at once**. Money flows through the entity's
  membership model, earmarked sponsorship of one specification is not really a thing, and the ask
  becomes a membership story.
- Others separate them: **technical project in one place, fiscal hosting elsewhere** — earmarked
  sponsorship, public accounting, and the ability to actually pay a maintainer.

At least one neighbouring API specification already runs exactly this split. This is why
[where the specification lives]({{ site.repo_rules }}/issues/8) is a funding question and not an
administrative one, and why it has to be judged on two axes rather than one.

## Who this actually concerns

Before arguing about how maintainers get paid, it is worth knowing who they are. So they are now
counted: [**who maintains this**](/who-maintains-this/) lists the contributors to OpenAPI, Arazzo,
Overlays, AsyncAPI, JSON Schema and the main linting tooling, from public GitHub data. Logins and
commit counts, nothing else — no employers, no affiliations, nothing inferred, with the generating
script in the repository so anyone can re-run it.

Commits are a poor proxy for specification work and the page says so. The **shape** is the point: in
almost every project, a very small group carries most of the load and the tail falls off a cliff.
Put that beside what depends on those projects — national standards, procurement documents, vendor
products, effectively every API programme in the industry — and the gap is the whole problem.

## And how it is not being funded

**No telemetry.** No install-time analytics, no run-time analytics, no undisclosed network calls.
The analytics added upstream are stripped from this build, and
[keeping them out is a testable property]({{ site.repo_cli }}/issues/14) rather than a promise.

Usage telemetry collected by a party with something to sell is a sales list, whatever it was
introduced as — and it makes the tool something requiring a security review in exactly the
environments where adoption matters most. [Knowing who depends on this without surveilling
anyone]({{ site.repo_rules }}/issues/15) is being worked as its own problem, and the answer is
deliberately human: a public dependents register, a private channel that counts the same, and
observable evidence from public sources.

## The ask

If your organization depends on this format, say so. Not money, not an endorsement, nothing legally
binding. [The list of dependents](/involved/) is what makes every other sentence on
[the funding page](/funding/) possible — and a private note counts exactly the same as a public one.
