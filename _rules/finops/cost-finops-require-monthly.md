---
layout: rule
artifact: finops
artifact_label: FinOps
slug: cost-finops-require-monthly
title: Cost FinOps Require Monthly
severity: info
given: $.costs[*]
message: monthly should be present
description: The `monthly` property of each cost should be present.
experience:
  - governance
  - data-modeling
spec:
  - costs
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/finops/cost-finops-require-monthly/
prompt: "You are editing a FinOps document to satisfy the Spotlight API
  governance rule 'cost-finops-require-monthly' (Cost FinOps Require Monthly).
  Requirement: The `monthly` property of each cost should be present. To fix:
  Ensure `monthly` is present and non-empty at each matching location. This rule
  is evaluated at the JSONPath `$.costs[*]` — inspect every location it matches
  and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid FinOps. Return only the
  complete corrected document, with no commentary."
builtin: false
---
