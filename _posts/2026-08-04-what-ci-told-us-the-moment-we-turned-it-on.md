---
title: What CI told us the moment we turned it on
description: >-
  Turning on continuous integration for the first time surfaced four more defects in an afternoon,
  two of them in fixes written that same afternoon — and one recurring shape underneath all of
  them: a cache or filter keyed on the wrong thing does not fail loudly, it hands you yesterday's
  answer.
---

[The previous post](/2026/08/03/twenty-seven-ci-runs-and-not-one-of-them-a-test/) ended with a
list of things not yet done, the first being that the build had never been verified. That sentence
did not survive the evening.

It is verified now. **1,966 unit tests and all 66 harness scenarios pass on Node 18, Node 20,
headless Chrome, and Windows** — the last of which had never run once since the fork was made.

Getting there took an afternoon, and the afternoon is the more useful story. Turning on CI did not
confirm that things were fine. It produced a queue of things that were not, including two fixes
written hours earlier that turned out to be wrong.

## The thing that could not install

The first pull request after CI started working failed before running a single test:

```
➤ YN0028: -"@scarf/scarf@npm:^1.4.0":
   The lockfile would have been modified by this install, which is explicitly forbidden.
```

The fork's very first commit had stripped the Scarf telemetry out of every `package.json` and out
of the source. **The lockfile was never regenerated.** It still declared the package and five
workspace references to it, so `yarn install --immutable` — what any honest CI runs — could not
succeed on the default branch. Every pull request that did not itself touch the lockfile failed at
the install step.

This had been true since the fork and was invisible for a precise reason: the only pull requests
that had ever run here were Dependabot's, and Dependabot regenerates the lockfile as part of its own
change. The one category of contributor that could not be blocked by the defect was the only
category anyone had observed.

There is a second point in it worth more than the CI outage. **A lockfile that still resolves a
package is a lockfile that still fetches it.** "Telemetry removed" was true of the source and not
yet true of the dependency graph. Any test asserting that telemetry stays out has to assert against
the lockfile too, or it will pass while the package is still being downloaded.

## Two fixes that were wrong

Earlier that day a hardcoded path had been corrected — a leftover pointing at the repository's
pre-rename name:

```diff
- git config --global --add safe.directory /__w/spectral/spectral
+ git config --global --add safe.directory "${{ github.workspace }}"
```

That is wrong. Every job here runs inside a container, where the repository is mounted at `/__w/…`,
while `github.workspace` resolves to the **host** path. One incorrect path was replaced with a
different incorrect path.

It went unnoticed because the same change deleted the only `git` invocation those jobs made, so
nothing was left to trip over it. **The jobs went green despite that line, not because of it.** It
surfaced only when a later job actually shelled out to `git` and failed instantly.

The second wrong fix was subtler. Decoupling the test harness from binary packaging worked locally —
65 of 66 scenarios passing, the 66th failing for an unrelated reason — and failed in CI, where it
also broke a previously passing job. The harness bakes the command it runs into each generated test
file at generation time, and regeneration is incremental: it tracks the scenario files and the
generated outputs. **Nothing tracked the generator itself.** So the command changed, no scenario
file moved, and CI restored a cached set of generated tests that faithfully kept running the old
one.

The local verification had been real, and it had been wrong. The bug only appears at steady state:
after a run against an empty output directory, the next run treats the generated files as newly
tracked and regenerates everything regardless. It takes three consecutive runs to reach the state
CI restores into — and the habit of deleting the cache between runs, which feels like rigour, is
exactly what hides it. An early control run appeared to disprove the bug for that reason.

## The shape underneath

Four defects, and three of them are the same mistake wearing different clothes.

The Actions cache keys were CircleCI syntax left in a GitHub Actions file:

```yaml
key: yarn-packages-{{ arch }}-{{ checksum "yarn.lock" }}
```

GitHub does not interpolate that. It is a literal string. The obvious cost is that the cache never
hit; the real cost is that the key was **constant**, so once anything saved under it, every later
run would restore that same cache no matter what the lockfile said.

The pull-request trigger ignored `.github/**`, so workflows were the one category of file that
nothing verified. Three CI configuration changes merged that day without a single check running,
and two of them were wrong — including the `safe.directory` fix above. A skipped check and a passing
check look identical in a summary.

And the harness cache served stale *executable* content across a change in what the tests execute.

> **A cache or filter keyed on the wrong thing does not fail loudly. It hands you yesterday's
> answer, with a green tick on it.**

That is the through-line, and it is worth more than the individual fixes. Loud failures get fixed.
Quiet wrong answers accumulate, and they accumulate specifically in the machinery meant to tell you
whether anything is wrong — which is the one place nobody thinks to check.

## What is actually verified now

The specific claim, stated narrowly enough to be checkable:

| | |
|---|---|
| `yarn install` | passes, reproducibly, on a clean lockfile |
| `yarn build` | passes |
| Unit tests | 1,966 pass on Node 18.20.8 and Node 20.20.0 |
| Browser | passes in headless Chrome |
| Windows | **passes** — 1,966 unit tests plus all 66 harness scenarios |
| CI configuration | now checked by CI, on the same terms as everything else |

The Windows figure is the one worth pausing on. That job carried `if: github.ref ==
'refs/heads/develop'` — a branch this repository does not have — so it reported `0s`, skipped, on
every run. Underneath it, its harness step was gated on a matrix key that did not exist in that job,
so it would have been skipped even had the job run. **A cross-platform linter with Windows-specific
path handling had nothing verifying any of it**, and the run summary looked fine throughout.

## Still not done

Nothing has been published to npm, and the package scope is still undecided — that one blocks the
first release entirely. The contributing guide still has an honest note stapled to it rather than a
rewrite. Ten branches that upstream has deleted still exist only in a working copy on one laptop.
And ten `@stoplight/*` packages remain live runtime dependencies of this build, which means forking
the linter did not fork the supply chain — a fair criticism, and one without an answer yet.

What changed is narrower than "the fork works now." **The machinery that tells you whether it works
is itself trustworthy, and was not before.** Every claim in the table above is re-checkable by
anyone, which was not true yesterday about any of them.

That is a smaller result than a day of green ticks might suggest. It is also the only kind of result
the rest of this project can be built on.
