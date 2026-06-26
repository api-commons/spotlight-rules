---
layout: rule
artifact: plans
artifact_label: Plans
slug: plan-require-interval
title: Plan Require Interval
severity: info
given: $.plans[*]
message: Plan should declare a billing interval.
description: Each plan should declare a billing interval (e.g. month, year).
experience:
  - consistency
  - usability
spec:
  - plans
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/plans/plan-require-interval/
prompt: "You are editing a Plans document to satisfy the Spotlight API
  governance rule 'plan-require-interval' (Plan Require Interval). Requirement:
  Each plan should declare a billing interval (e.g. month, year). To fix: Ensure
  `interval` is present and non-empty at each matching location. This rule is
  evaluated at the JSONPath `$.plans[*]` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid Plans. Return only the complete
  corrected document, with no commentary."
builtin: false
---
