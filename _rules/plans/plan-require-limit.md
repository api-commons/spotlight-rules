---
layout: rule
artifact: plans
artifact_label: Plans
slug: plan-require-limit
title: Plan Require Limit
severity: info
given: $.plans[*]
message: limits should be present
description: The `limits` property of each plan should be present.
experience:
  - governance
  - reliability
spec:
  - plans
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/plans/plan-require-limit/
prompt: "You are editing a Plans document to satisfy the Spotlight API
  governance rule 'plan-require-limit' (Plan Require Limit). Requirement: The
  `limits` property of each plan should be present. To fix: Ensure `limits` is
  present and non-empty at each matching location. This rule is evaluated at the
  JSONPath `$.plans[*]` — inspect every location it matches and correct only
  what violates the rule. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid Plans. Return only the complete corrected
  document, with no commentary."
builtin: false
ruleyaml: >
  plan-require-limit:
    title: Plan Require Limit
    reference: https://spotlight-rules.com/spec/rules/plans/plan-require-limit/
    description: The `limits` property of each plan should be present.
    message: limits should be present
    severity: info
    given: $.plans[*]
    then:
      field: limits
      function: truthy
    tags:
      - format:plans
      - spec:plans
      - experience:governance
      - experience:reliability
    prompt: "You are editing a Plans document to satisfy the Spotlight API
      governance rule 'plan-require-limit' (Plan Require Limit). Requirement: The
      `limits` property of each plan should be present. To fix: Ensure `limits` is
      present and non-empty at each matching location. This rule is evaluated at
      the JSONPath `$.plans[*]` — inspect every location it matches and correct
      only what violates the rule. Make the smallest change that satisfies the
      rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid Plans. Return only the complete
      corrected document, with no commentary."
---
