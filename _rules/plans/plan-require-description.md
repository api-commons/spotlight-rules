---
layout: rule
artifact: plans
artifact_label: Plans
slug: plan-require-description
title: Plan Require Description
severity: info
given: $.plans[*]
message: description should be present
description: The `description` property of each plan should be present.
experience:
  - documentation
  - usability
spec:
  - plans
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/plans/plan-require-description/
prompt: "You are editing a Plans document to satisfy the Spotlight API
  governance rule 'plan-require-description' (Plan Require Description).
  Requirement: The `description` property of each plan should be present. To
  fix: Ensure `description` is present and non-empty at each matching location.
  This rule is evaluated at the JSONPath `$.plans[*]` — inspect every location
  it matches and correct only what violates the rule. Make the smallest change
  that satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid Plans. Return only the
  complete corrected document, with no commentary."
builtin: false
---
