---
layout: rule
artifact: rate-limits
artifact_label: Rate Limits
slug: limit-require-name
title: Limit Require Name
severity: info
given: $.limits[*]
message: name should be present
description: The `name` property of each limit should be present.
experience:
  - data-modeling
  - reliability
spec:
  - limits
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/rate-limits/limit-require-name/
prompt: "You are editing a Rate Limits document to satisfy the Spotlight API
  governance rule 'limit-require-name' (Limit Require Name). Requirement: The
  `name` property of each limit should be present. To fix: Ensure `name` is
  present and non-empty at each matching location. This rule is evaluated at the
  JSONPath `$.limits[*]` — inspect every location it matches and correct only
  what violates the rule. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid Rate Limits. Return only the complete corrected
  document, with no commentary."
builtin: false
ruleyaml: >
  limit-require-name:
    title: Limit Require Name
    reference: https://spotlight-rules.com/spec/rules/rate-limits/limit-require-name/
    description: The `name` property of each limit should be present.
    message: name should be present
    severity: info
    given: $.limits[*]
    then:
      field: name
      function: truthy
    tags:
      - format:rate-limits
      - spec:limits
      - experience:data-modeling
      - experience:reliability
    prompt: "You are editing a Rate Limits document to satisfy the Spotlight API
      governance rule 'limit-require-name' (Limit Require Name). Requirement: The
      `name` property of each limit should be present. To fix: Ensure `name` is
      present and non-empty at each matching location. This rule is evaluated at
      the JSONPath `$.limits[*]` — inspect every location it matches and correct
      only what violates the rule. Make the smallest change that satisfies the
      rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid Rate Limits. Return only the complete
      corrected document, with no commentary."
---
