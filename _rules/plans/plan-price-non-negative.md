---
layout: rule
artifact: plans
artifact_label: Plans
slug: plan-price-non-negative
title: Plan Price Non Negative
severity: info
given: $.plans[*].price
message: Plan price should be a non-negative number.
description: A plan price should be a non-negative number.
experience:
  - data-modeling
spec:
  - plans
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/plans/plan-price-non-negative/
prompt: "You are editing a Plans document to satisfy the Spotlight API
  governance rule 'plan-price-non-negative' (Plan Price Non Negative).
  Requirement: A plan price should be a non-negative number. To fix: Adjust the
  targeted value so it conforms to the schema this rule requires. This rule is
  evaluated at the JSONPath `$.plans[*].price` — inspect every location it
  matches and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid Plans. Return only the
  complete corrected document, with no commentary."
builtin: false
---
