---
layout: default
nav: funding
title: Funding
description: >-
  How a specification that governments and platform vendors depend on gets maintained — fiscal
  hosting, sponsorship that stays earmarked, and an open-source stance with no commercial tier.
permalink: /funding/
---

# Funding

**This is the part most forks skip, and it is the part that decides whether any of the rest
survives.**

A specification with one maintainer is not a specification, it is a file somebody happens to be
editing. Fixing that is not downstream of the drafting work — it is the precondition for the
drafting work mattering in five years. Money is not the whole of that answer, but it is the part
nobody wants to talk about in public, so it gets talked about here.

## The stance, stated up front

**Everything stays open source, permanently, with no commercial tier.**

Not "open core." Not "open source with an enterprise edition." Not a licence that flips the moment
someone builds a business on it. The specification and the reference implementation stay open,
and no feature gets held back to create a paid version.

That is a constraint accepted deliberately, and it is worth being honest about why: **a governance
format with a commercial tier cannot be trusted to make governance decisions.** Every time the
project has to choose between what the format needs and what the paid version needs, users will
assume — correctly — that the paid version wins. The whole value proposition here is
trustworthiness. There is no version of this that survives monetizing the format itself.

The return is real, it is just indirect. It comes from reputation, from the work that grows
around a healthy specification, and from the services people ask for once they trust the thing.
If you do this well you can build a genuine living around it — you simply cannot do it by putting
a paywall in the middle.

## Sponsorship, and why the structure decides whether it is even possible

The realistic funding model for this format is not a foundation membership. It is a number of
organizations that run it in production committing a few thousand a year each, earmarked
specifically at keeping it maintained.

Those organizations exist. Governments run mandatory design rules written in this format. Platform
vendors embed the engine across multiple products. Enterprises have it wired into every pipeline
they own. Almost none of them will buy a foundation membership to fund a linting format. Nearly all
of them could sign off a few thousand a year for a dependency they already rely on, if there were a
legible way to do it.

**Whether that ask exists as a category at all depends on where the specification lives**, which is
why the two questions are the same question:

- Some foundation projects are **technical and fiscal at once**. Money flows through the entity's
  membership model, and earmarked sponsorship of one specification is not really a thing. The ask
  becomes a membership story, and the specification does not stand on its own two feet.
- Others separate the two: the **technical project** in one place, **fiscal hosting** somewhere
  else. Sponsorship is then direct and legible — *this money maintains this specification* — and it
  can be accounted for publicly.

At least one neighbouring API specification already runs exactly this split. The mechanics of the
fiscal-host side are unexciting in the best way: a transparent percentage-based administrative fee
taken from sponsorship, easy recurring payments for sponsors, public accounting, and — where a
project is being separated out of a former corporate owner — legal support for the separation
itself. That last part is not hypothetical; it is the difference between a clean handover and two
years of ambiguity.

[Where the specification lives is an open issue]({{ site.repo_rules }}/issues/8), and it should be
argued on both axes: which technical home, and which fiscal arrangement, and whether they are
allowed to be different.

## Naming who depends on it

Every conversation about a permanent home ends at the same question: *who actually uses this?*

That question has never had a public answer, because this format's users are structurally
invisible — governments with mandatory rules, enterprises running it behind an internal facade,
small teams who wired it into CI years ago and never thought about it again.

**A list of organizations saying "we depend on this" is the single most useful artifact this effort
can produce.** It is what turns the sponsorship ask from an assertion into arithmetic, and it is
what makes a foundation take the specification seriously when it arrives.

One national government programme has already agreed to be named publicly. Everyone else gets asked
first, and [a private note counts exactly the same](/involved/) — plenty of people cannot post that
under an employer's name without a conversation, and nothing is attributed without explicit
permission.

## What is not being done to find out

**No telemetry.** No install-time analytics, no run-time analytics, no undisclosed network calls.
The analytics added upstream have been stripped from this build, and
[keeping them out is a tracked, testable property]({{ site.repo_cli }}/issues/14) rather than a
promise.

The reasoning is not squeamishness. Usage telemetry collected by a party with something to sell is
a sales list, whatever it was introduced as. And it makes the tool something that needs a security
review in exactly the environments where adoption matters most — public sector, regulated
industries, air-gapped estates. [Working out who depends on this without surveilling
anyone]({{ site.repo_rules }}/issues/15) is being handled as its own piece of work, and the answer
is human and partnership-based: a public dependents register, a private channel that counts the
same, observable evidence from public sources, and conformance claims as a side-effect census.

## The bigger conversation this belongs to

There is a question underneath all of this that the API specification world has never really
answered together: **what is commercial open source, and how do you fund the thing everyone depends
on without selling it to whoever shows up with capital?**

Several rounds of acquisition in this ecosystem have made the failure mode familiar. A tool gets
built inside a company, becomes load-bearing for other people, and then the company's priorities
change — through acquisition, a strategy shift, or simple attrition — and everyone downstream
discovers they were depending on somebody else's roadmap.

That is worth a real conversation, in public, with the people who maintain the specifications and
tooling this industry runs on. Not a manifesto — a working through of how contributors to the core
API specs and their tooling actually make a living, and what structures let them keep doing it.

It starts with knowing who they are. [**Who maintains this**](/who-maintains-this/) counts the
contributors to OpenAPI, Arazzo, Overlays, AsyncAPI, JSON Schema and the main linting tooling from
public GitHub data — no employers, no affiliations, nothing inferred. The distribution is the
argument: a very small group carries most of the work on every one of them, and the tail falls off a
cliff. Put that next to what depends on those projects and the gap is the whole problem.

That conversation is being started [on the blog](/blog/), and anyone who maintains something in this
space is invited into it.

---

<div class="card bg-light border-0 mt-4">
  <div class="card-body text-center py-4">
    <h3 class="h5">If your organization depends on this format</h3>
    <p class="text-muted mb-3 col-lg-9 mx-auto">
      Say so. That is the ask — not money, not a commitment, nothing legally binding. The list is
      what makes everything on this page possible.
    </p>
    <a class="btn btn-primary" href="{{ site.discussion }}">Add your voice →</a>
    <!--email_off--><a class="btn btn-outline-secondary ms-2" href="mailto:{{ site.email }}?subject=Spectral%20ruleset%20dependency">Or email privately</a><!--email_on-->
  </div>
</div>
