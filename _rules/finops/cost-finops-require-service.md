---
layout: rule
artifact: finops
artifact_label: FinOps
slug: cost-finops-require-service
title: Cost FinOps Require Service
severity: info
given: $.costs[*]
message: service should be present
description: The `service` property of each cost should be present.
experience:
  - governance
  - data-modeling
spec:
  - costs
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/finops/cost-finops-require-service/
prompt: "You are editing a FinOps document to satisfy the Spotlight API
  governance rule 'cost-finops-require-service' (Cost FinOps Require Service).
  Requirement: The `service` property of each cost should be present. To fix:
  Ensure `service` is present and non-empty at each matching location. This rule
  is evaluated at the JSONPath `$.costs[*]` — inspect every location it matches
  and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid FinOps. Return only the
  complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  cost-finops-require-service:
    title: Cost FinOps Require Service
    reference: https://spotlight-rules.com/spec/rules/finops/cost-finops-require-service/
    description: The `service` property of each cost should be present.
    message: service should be present
    severity: info
    given: $.costs[*]
    then:
      field: service
      function: truthy
    tags:
      - format:finops
      - spec:costs
      - experience:governance
      - experience:data-modeling
    prompt: "You are editing a FinOps document to satisfy the Spotlight API
      governance rule 'cost-finops-require-service' (Cost FinOps Require Service).
      Requirement: The `service` property of each cost should be present. To fix:
      Ensure `service` is present and non-empty at each matching location. This
      rule is evaluated at the JSONPath `$.costs[*]` — inspect every location it
      matches and correct only what violates the rule. Make the smallest change
      that satisfies the rule, leave all unrelated content, key order, comments,
      and formatting unchanged, and keep the document valid FinOps. Return only
      the complete corrected document, with no commentary."
---
