---
layout: rule
artifact: rate-limits
artifact_label: Rate Limits
slug: limit-require-scope
title: Limit Require Scope
severity: info
given: $.limits[*]
message: scope should be present
description: The `scope` property of each limit should be present.
experience:
  - reliability
  - governance
spec:
  - limits
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/rate-limits/limit-require-scope/
prompt: "You are editing a Rate Limits document to satisfy the Spotlight API
  governance rule 'limit-require-scope' (Limit Require Scope). Requirement: The
  `scope` property of each limit should be present. To fix: Ensure `scope` is
  present and non-empty at each matching location. This rule is evaluated at the
  JSONPath `$.limits[*]` — inspect every location it matches and correct only
  what violates the rule. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid Rate Limits. Return only the complete corrected
  document, with no commentary."
builtin: false
ruleyaml: >
  limit-require-scope:
    title: Limit Require Scope
    reference: https://spotlight-rules.com/spec/rules/rate-limits/limit-require-scope/
    description: The `scope` property of each limit should be present.
    message: scope should be present
    severity: info
    given: $.limits[*]
    then:
      field: scope
      function: truthy
    tags:
      - format:rate-limits
      - spec:limits
      - experience:reliability
      - experience:governance
    prompt: "You are editing a Rate Limits document to satisfy the Spotlight API
      governance rule 'limit-require-scope' (Limit Require Scope). Requirement:
      The `scope` property of each limit should be present. To fix: Ensure `scope`
      is present and non-empty at each matching location. This rule is evaluated
      at the JSONPath `$.limits[*]` — inspect every location it matches and
      correct only what violates the rule. Make the smallest change that satisfies
      the rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid Rate Limits. Return only the complete
      corrected document, with no commentary."
---
