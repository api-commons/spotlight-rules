---
layout: rule
artifact: plans
artifact_label: Plans
slug: plan-features-non-empty
title: Plan Features Non Empty
severity: info
given: $.plans[*].features
message: Plan features should not be empty.
description: If a plan lists features, the list should not be empty.
experience:
  - documentation
spec:
  - plans
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/plans/plan-features-non-empty/
prompt: "You are editing a Plans document to satisfy the Spotlight API
  governance rule 'plan-features-non-empty' (Plan Features Non Empty).
  Requirement: If a plan lists features, the list should not be empty. To fix:
  Adjust the targeted value so it conforms to the schema this rule requires.
  This rule is evaluated at the JSONPath `$.plans[*].features` — inspect every
  location it matches and correct only what violates the rule. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid Plans. Return
  only the complete corrected document, with no commentary."
builtin: false
---
