---
layout: rule
artifact: plans
artifact_label: Plans
slug: plan-require-price
title: Plan Require Price
severity: info
given: $.plans[*]
message: price should be present
description: The `price` property of each plan should be present.
experience:
  - governance
  - usability
spec:
  - plans
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/plans/plan-require-price/
prompt: "You are editing a Plans document to satisfy the Spotlight API
  governance rule 'plan-require-price' (Plan Require Price). Requirement: The
  `price` property of each plan should be present. To fix: Ensure `price` is
  present and non-empty at each matching location. This rule is evaluated at the
  JSONPath `$.plans[*]` — inspect every location it matches and correct only
  what violates the rule. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid Plans. Return only the complete corrected
  document, with no commentary."
builtin: false
---
