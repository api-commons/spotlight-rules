---
layout: rule
artifact: plans
artifact_label: Plans
slug: plan-require-features
title: Plan Require Features
severity: info
given: $.plans[*]
message: features should be present
description: The `features` property of each plan should be present.
experience:
  - usability
  - documentation
spec:
  - plans
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/plans/plan-require-features/
prompt: "You are editing a Plans document to satisfy the Spotlight API
  governance rule 'plan-require-features' (Plan Require Features). Requirement:
  The `features` property of each plan should be present. To fix: Ensure
  `features` is present and non-empty at each matching location. This rule is
  evaluated at the JSONPath `$.plans[*]` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid Plans. Return only the complete
  corrected document, with no commentary."
builtin: false
---
