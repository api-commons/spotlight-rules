---
layout: rule
artifact: plans
artifact_label: Plans
slug: plan-require-name
title: Plan Require Name
severity: info
given: $.plans[*]
message: name should be present
description: The `name` property of each plan should be present.
experience:
  - data-modeling
  - governance
spec:
  - plans
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/plans/plan-require-name/
prompt: "You are editing a Plans document to satisfy the Spotlight API
  governance rule 'plan-require-name' (Plan Require Name). Requirement: The
  `name` property of each plan should be present. To fix: Ensure `name` is
  present and non-empty at each matching location. This rule is evaluated at the
  JSONPath `$.plans[*]` — inspect every location it matches and correct only
  what violates the rule. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid Plans. Return only the complete corrected
  document, with no commentary."
builtin: false
ruleyaml: |
  plan-require-name:
    title: Plan Require Name
    reference: https://spotlight-rules.com/spec/rules/plans/plan-require-name/
    description: The `name` property of each plan should be present.
    message: name should be present
    severity: info
    given: $.plans[*]
    then:
      field: name
      function: truthy
    tags:
      - format:plans
      - spec:plans
      - experience:data-modeling
      - experience:governance
    prompt: "You are editing a Plans document to satisfy the Spotlight API
      governance rule 'plan-require-name' (Plan Require Name). Requirement: The
      `name` property of each plan should be present. To fix: Ensure `name` is
      present and non-empty at each matching location. This rule is evaluated at
      the JSONPath `$.plans[*]` — inspect every location it matches and correct
      only what violates the rule. Make the smallest change that satisfies the
      rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid Plans. Return only the complete
      corrected document, with no commentary."
---
