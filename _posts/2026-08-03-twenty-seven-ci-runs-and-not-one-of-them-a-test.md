---
title: Twenty-seven CI runs, and not one of them a test
description: >-
  A day spent on the unglamorous half of forking something — security policy, package metadata,
  branch protection — which turned up the fact that no test had ever run here, that the one
  workflow which did run belonged to somebody else, and that three things already written down
  were wrong.
---

The plan for the day was the boring list. Turn on the security settings. Fix the package metadata
so `npm bugs` stops pointing at a company that will not answer. Write a `SECURITY.md`. Protect the
branch. Nothing on that list is interesting, and all of it had to exist before anything else here
could be taken seriously.

The list got done. It also turned up something worse than anything on it, and it forced three
corrections to claims this project had already published.

## The one workflow that ran belonged to somebody else

Checking what CI would need to pass before requiring status checks produced this:

```
$ gh api repos/api-commons/spotlight-tools/actions/runs \
    --paginate --jq '.workflow_runs[].name' | sort | uniq -c
  27 Jira Issue Label Added
```

Twenty-seven runs in this repository's entire history, and every one of them is the same inherited
workflow. **No test, no lint and no build has ever run on this fork.**

The reason is dull. Every workflow copied from upstream was filtered to branches that do not exist
here — `commit.yml` on pull requests targeting `develop`, the post-merge job on pushes to
`develop`, the link checker on `master` or `develop`. The default branch here is `main`. The
workflows were present, configured, and silently inert. A repository can look fully wired and be
running nothing.

The row that did fire is the serious one:

```yaml
on:
  issues:
    types: [labeled]
jobs:
  call-workflow:
    uses: stoplightio/.github/.github/workflows/jira-issue-label-added.yaml@master
    secrets: inherit
```

Every time an issue got labeled, this repository executed a workflow owned by another
organization, pinned to a moving `@master` ref, with `secrets: inherit`. Whoever controls that
file could have changed what ran here, with this repository's secrets in scope, without a commit
landing here.

There is no evidence anything of the sort happened, and none is being implied. What matters is the
shape of it: **a project that exists because a supply-chain report went unanswered was shipping a
supply-chain hole in its own Actions configuration, and it fired twenty-seven times before anybody
looked.** The release workflow is designed to hold an `NPM_TOKEN`.

It is deleted, and the rest are retargeted to `main`. The next pull request that touches code will
be the first time this codebase has ever been tested here.

## The rest of the inherited routing went nowhere

Once you start pulling that thread, the pattern repeats: configuration that looks like it works,
pointed at people who never agreed to receive it.

`CODEOWNERS` assigned every file to `@stoplightio/oss-spectral` — a team GitHub cannot resolve
from this organization, so review requests dropped silently. It also named three AsyncAPI
maintainers on the AsyncAPI rulesets. Real people, who never agreed to review pull requests on
this fork, and who would have been paged by it. Their work is still in this codebase and is
credited in `NOTICE` and the git history. A file that pings them at three in the morning is the
wrong way to say thank you.

The Code of Conduct routed harassment reports to a repository this project does not control.
`FUNDING.yml` pointed sponsorship at upstream's listing. And the only security contact anywhere in
the repository was one line in `CONTRIBUTING.md` reading `security@stoplight.io` — so anyone who
found a vulnerability in *this* build and followed the instructions would have reported it to a
company that does not maintain this code.

That last one is the reason this project exists, reproduced inside it, and it stood for four days.

## What replaced it

`SECURITY.md` now routes to GitHub private vulnerability reporting or `info@apicommons.org`, and
commits to **five business days** to acknowledge. That number is deliberately unambitious. It is
set by what one person can actually meet, and a project founded on the argument that an unanswered
report is a real failure does not get to miss its own published SLA. It also tells reporters they
are free to publish if this project goes quiet, and that escalating with a public "I sent a report
and heard nothing" issue is legitimate and will not be held against them.

`GOVERNANCE.md` says the thing that is easy to dress up: **there is one maintainer.** Not a core
team, not a working group. The rules escalate by stage — at two maintainers, no behaviour-affecting
change merges on one person's say-so, enforced by branch protection rather than by discipline, and
binding on the original author identically to everyone else. At Stage 0 there is no independent
body to appeal to, and pretending otherwise would be worse than admitting it. What exists instead
is Apache-2.0, a complete git history, and the specification in a separate repository under a
separate model: fork it and you lose nothing but the name. That is a real check, and today it is
the honest one.

Alongside those, `MAINTAINERS.yaml` puts the roster in data so changing it is a reviewable pull
request, and `NOTICE` states the attribution properly — including, explicitly, that neither
Stoplight nor SmartBear maintains, endorses, or is responsible for this build, and that issues
should not be reported to them.

All twelve package manifests now point `homepage`, `bugs`, `repository` and `author` at this
project. The **package names deliberately did not change** — they are still `@stoplight/spectral-*`,
because that decision is open and nothing in the metadata depended on it. Splitting the blocked
half from the unblocked half is the whole reason the unblocked half shipped today.

Branch protection went on `main`: no force pushes, no deletions, linear history, conversation
resolution required. Required status checks did **not**, because requiring a check that has never
reported once would leave every pull request permanently unmergeable. That is a thing to turn on
after CI proves it can run, not before.

## Three things already written down turned out to be wrong

The roadmap here is generated from labeled issues, which means being wrong in an issue is being
wrong in public. Three corrections landed today, as comments rather than edits, so the record shows
the change.

**An issue claimed this repository inherited 42 branches** and framed the risk as branch cleanup
destroying the mapping to upstream's open pull requests. This repository has one branch. The fork
was made by pushing a single snapshot to `main`, not by copying refs. There was never anything
here to clean up.

The mapping does exist — as remote-tracking refs in a clone on one laptop. Forty-one of them.
Upstream now has twenty-nine heads, which means **fourteen of those branches no longer exist
anywhere else**, because upstream deleted them after merging or abandoning the work. Four are
Dependabot noise. Ten are not, and five of those are abandoned feature work.

So the risk was inverted. It was never "we delete branches and lose the mapping." It is that ten
branches of other people's abandoned work survive in an untracked directory on a single machine,
and a fresh clone ends them. Nothing is protecting them, because they were never here. That is now
the top of that issue instead of the bottom.

Two smaller corrections: an issue asserted that `commit.yml` "already runs tests and lint" — it
never has — and the build-verification issue was written as though a green build were merely
unobserved, when it was unobtainable.

Worth noting from the same check: upstream is not abandoned. `stoplightio/spectral` was pushed to
today, and two of the three branches this project had never fetched are upstream hardening their
own GitHub Actions configuration — the same problem, found independently, at roughly the same
time.

## A cleanup is not a find-and-replace

The obvious next instinct is to sweep the codebase of every mention of the previous owner. Counted
by line, there are about 3,800 of them across 578 files. Classifying them was the most useful hour
of the day, because **most of them must not be touched.**

About a thousand are this monorepo's own package names, which move only when the naming decision
is made, and then all at once. Several hundred are `$id` values in bundled JSON Schemas —
identifiers, not addresses, never fetched, and rewriting them would break `$ref` resolution while
looking like a harmless string change. Over five hundred are changelog entries linking to real
upstream issues by number, which are correct: that work happened, in that repository, at those
numbers, and rewriting them would be falsifying a changelog, which is the precise opposite of the
argument this project makes.

And then the category that is not baggage at all:

> This build depends on ten separately-published `@stoplight/*` packages — the parser, the path
> handling, the type definitions, the `$ref` resolver. **Forking the linter did not fork the
> supply chain.**

A report that goes unanswered for `spectral` is no more likely to be answered for
`@stoplight/json`. That is a fair criticism of this project, it does not have an answer yet, and it
now has its own thread instead of being buried in a sweep. Vendor, fork, replace, or knowingly
accept — whichever it turns out to be, the reasoning gets written down in public.

The genuine baggage is a much smaller list than 3,800 suggests: the rule documentation links that
every finding emits and that all return 404 on infrastructure this project cannot fix, a docs
directory that describes somebody else's process, a contributing guide that mentions the previous
owner thirteen times, and a Docker release job that would push images into a namespace this
project does not own.

## Still not done, and said plainly

The build has still never been verified. Nothing has been published to npm. The package scope is
still undecided, and that one blocks the first release entirely. The contributing guide has an
honest note stapled to the top of it rather than a rewrite. Those ten branches are still on one
laptop.

None of today's work makes this tool better. It makes it **answerable** — a place where a security
report reaches a person, a package page that names someone who will read the issue, a governance
document that does not claim more than exists, and a CI configuration that can, for the first time,
tell anyone whether the thing compiles.

That was the debt worth paying first. The tool comes next.
