---
layout: rule
artifact: rate-limits
artifact_label: Rate Limits
slug: limit-require-window
title: Limit Require Window
severity: info
given: $.limits[*]
message: window should be present
description: The `window` property of each limit should be present.
experience:
  - reliability
  - governance
spec:
  - limits
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/rate-limits/limit-require-window/
prompt: "You are editing a Rate Limits document to satisfy the Spotlight API
  governance rule 'limit-require-window' (Limit Require Window). Requirement:
  The `window` property of each limit should be present. To fix: Ensure `window`
  is present and non-empty at each matching location. This rule is evaluated at
  the JSONPath `$.limits[*]` — inspect every location it matches and correct
  only what violates the rule. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid Rate Limits. Return only the complete corrected
  document, with no commentary."
builtin: false
ruleyaml: >
  limit-require-window:
    title: Limit Require Window
    reference: https://spotlight-rules.com/spec/rules/rate-limits/limit-require-window/
    description: The `window` property of each limit should be present.
    message: window should be present
    severity: info
    given: $.limits[*]
    then:
      field: window
      function: truthy
    tags:
      - format:rate-limits
      - spec:limits
      - experience:reliability
      - experience:governance
    prompt: "You are editing a Rate Limits document to satisfy the Spotlight API
      governance rule 'limit-require-window' (Limit Require Window). Requirement:
      The `window` property of each limit should be present. To fix: Ensure
      `window` is present and non-empty at each matching location. This rule is
      evaluated at the JSONPath `$.limits[*]` — inspect every location it matches
      and correct only what violates the rule. Make the smallest change that
      satisfies the rule, leave all unrelated content, key order, comments, and
      formatting unchanged, and keep the document valid Rate Limits. Return only
      the complete corrected document, with no commentary."
---
