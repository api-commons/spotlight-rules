---
layout: default
nav: research
title: The maintenance record
description: >-
  Issues closed per year, the open backlog, release cadence, what the recent commits actually
  are, and the state of the surrounding tools — all from public data.
permalink: /research/maintenance/
---

# The maintenance record

> Every figure below links to the source on GitHub. Numbers were current on 2026-07-29 and will
> drift — follow the links for the live state.

Pulled from the GitHub API on **2026-07-29**: the complete issue and pull request history of the
[Spectral repository]({{ site.up_repo }}) (2,789 records), the public repository list for its organization (125
repositories), release history, and commit history. Reproducible, and worth re-running — these
numbers will drift.

---

## Issue triage

The cleanest single measure of whether anyone is home on an open-source project is how many
issues get **closed**.

| 2018 | 2019 | 2020 | 2021 | 2022 | 2023 | 2024 | 2025 | 2026 to date |
|---|---|---|---|---|---|---|---|---|
| 27 | 156 | 126 | **157** | 125 | 86 | 36 | **12** | **10** |

A peak in 2021, then a decline of roughly 93%.

Intake did not decline with it. Of the currently-open issues, **61 were filed in 2024, 40 in 2025,
and 26 already in 2026**. The backlog is not an old, settled pile — it is actively accumulating.

Open issues by year filed: 2019 (1), 2020 (8), 2021 (24), 2022 (43), 2023 (38), 2024 (61),
2025 (40), 2026 (26).

## The open backlog

**[241 open issues]({{ site.up_issues }}). [39 open pull requests]({{ site.up_pulls }}).**

The oldest open issue was [filed in **October 2019**]({{ site.up_repo }}/issues/620). The oldest open community
pull request has been [waiting **five years**]({{ site.up_repo }}/pull/1608).

Several of the stalled pull requests are finished, useful contributions: a
[runtime-expression validator]({{ site.up_repo }}/pull/1608),
[external-reference validation for OpenAPI 3.1]({{ site.up_repo }}/pull/2844),
[a formatter severity attribute]({{ site.up_repo }}/pull/2853),
[a fix to the ruleset meta-schemas]({{ site.up_repo }}/pull/2788), and an
[AsyncAPI 3.1.0 upgrade]({{ site.up_repo }}/pull/3019) submitted days before this was written. They are not
controversial. They are simply unreviewed.

Open-issue labels cluster as: `triaged` 145, `enhancement` 55, bug 46, `chore` 25, AsyncAPI 11,
OpenAPI 10, `json-refs` 8, Arazzo 4.

### The most-reacted open issues

| 👍 | Filed | Subject |
|---|---|---|
| 24 | 2026-02 | [A dependency vulnerability advisory]({{ site.up_repo }}/issues/2901) — **zero comments** |
| 18 | 2026-05 | [A missing null guard causing a crash]({{ site.up_repo }}/issues/2959) |
| 13 | 2024-09 | [A syntax error while running a lint]({{ site.up_repo }}/issues/2693) |
| 13 | 2022-06 | [Overrides not applying to externally referenced files]({{ site.up_repo }}/issues/2195) |
| 10 | 2020-04 | [Making the unrecognized-format behavior configurable]({{ site.up_repo }}/issues/1124) |
| 9 | 2024-09 | [A second dependency vulnerability]({{ site.up_repo }}/issues/2700) |
| 9 | 2021-12 | [The parser choking on unexpected null values]({{ site.up_repo }}/issues/1981) |
| 8 | 2024-06 | [Publishing arm64 Docker containers]({{ site.up_repo }}/issues/2636) |
| 8 | 2021-12 | [Incorrect paths reported inside nested references]({{ site.up_repo }}/issues/2007) |
| 7 | 2024-07 | [A ruleset release breaking reference behavior]({{ site.up_repo }}/issues/2655) |

**The single most-reacted open issue in the repository is a
[security advisory that nobody replied to]({{ site.up_repo }}/issues/2901).**

There is a ready-made roadmap in here. The reference-resolution cluster
([#2195]({{ site.up_repo }}/issues/2195), [#2007]({{ site.up_repo }}/issues/2007), [#2655]({{ site.up_repo }}/issues/2655),
[#2790]({{ site.up_repo }}/issues/2790)), the null-handling cluster
([#2959]({{ site.up_repo }}/issues/2959), [#1981]({{ site.up_repo }}/issues/1981), [#2649]({{ site.up_repo }}/issues/2649)), and
[arm64 images]({{ site.up_repo }}/issues/2636) are all high-demand, low-controversy, and would ship goodwill
immediately. A large share of the reference bugs trace back to a resolver library the upstream
organization has itself marked **[deprecated](https://github.com/stoplightio/json-ref-resolver)** —
with [the issue proposing its replacement]({{ site.up_repo }}/issues/1054) open since **April 2020**.

## Release cadence

v6.15.0 shipped in **April 2025**. v6.16.1 shipped in **June 2026**. That is a **fourteen-month
gap**. v6.16.2 followed in July 2026.

## What the recent activity actually consists of

This matters, because "abandoned" is too strong and overclaiming it invites an easy rebuttal.
There *is* recent activity. It consists of three things:

1. **Dependency and vulnerability bumps.**
2. **Repairing a broken release pipeline** — including nine consecutive commits in a single day
   all titled some variant of "fix docker image release," alongside issues reporting that
   [binaries were missing from a release]({{ site.up_repo }}/issues/2983) and that
   [a tag never reached the container registry]({{ site.up_repo }}/issues/2996).
3. **Adding [install-time telemetry]({{ site.up_repo }}/pull/2976)** — seven pull requests in one day
   instrumenting the CLI, core, rulesets, formats, and functions packages, plus the Docker image
   two weeks later. ([What it sends, and how to opt out.]({{ site.telemetry_post }}))

**No feature work. No issue triage.** The accurate description is not that nobody is there. It is
that the people who are there are patching supply-chain exposure, unbreaking the build, and
instrumenting the packages for download analytics — and nothing else.

## The supply-chain incident

In **July 2026** [an issue was filed]({{ site.up_repo }}/issues/2999) reporting that the linter pulls in a
compromised dependency through its rulesets package, with a recommendation to pin versions or
avoid the package until resolved upstream.

**[The issue]({{ site.up_repo }}/issues/2999) is still open.** It has one comment, filed ten days later, asking
whether a newly published release had actually fixed the problem. **No maintainer answered it.**

## The wider organization

The repository does not exist in isolation. Its organization has **125 public repositories**:

- **67 are archived.**
- **47 are forks of other people's projects.**
- Only **45 are original and unarchived**, and only **25 have been pushed to in the last twelve
  months** — a dozen of which are junk or test repositories with keyboard-mash names, created
  this year.

### The surrounding tools are stale

Every distribution channel a user actually touches:

| Component | Last updated |
|---|---|
| [The GitHub Action](https://github.com/stoplightio/spectral-action) | July 2025 |
| [The VS Code extension](https://github.com/stoplightio/vscode-spectral) | March 2025 |
| [The community index of rulesets in the wild](https://github.com/stoplightio/spectral-rulesets) | **February 2025** |
| [The OWASP security ruleset](https://github.com/stoplightio/spectral-owasp-ruleset) | January 2026 |
| [The documentation-quality ruleset](https://github.com/stoplightio/spectral-documentation) | January 2026 |
| [A bundled ruleset repository](https://github.com/stoplightio/spectral-bundled-ruleset) | September 2024 |

And the organization's API **design** tool — [the editor that paired with the
linter](https://github.com/stoplightio/studio), with 872 stars on it — **has not been pushed to
since February 2024.** Two and a half years.

That last one matters more than it looks. The strongest argument anyone makes about this space is
that linting is the easy half, and the unmet need is *design* tooling: style guides, shared model
libraries, a review surface for people who are not engineers. The only product that ever seriously
tried is sitting untouched.

## Contributors

The top human contributor by commit count has not been with the project for years. Three of the
top six contributor slots are bots. The two people committing in mid-2026 rank fourteenth and
fifteenth all-time.

---

## What follows

None of this is an accusation of bad faith. Acquisitions redirect priorities, teams get
reassigned, and maintainers move on. It is an ordinary story.

But the numbers describe a project in maintenance-of-last-resort, and **a format cannot live
inside a tool in that condition.** That is the case for separating them.

---

<p class="mt-4">
  <a class="btn btn-outline-primary" href="/research/dependents/">Who depends on this →</a>
  <a class="btn btn-outline-primary ms-2" href="/research/plan/">The plan, and what is open →</a>
</p>
