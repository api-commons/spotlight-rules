---
layout: rule
artifact: rate-limits
artifact_label: Rate Limits
slug: limit-require-max
title: Limit Require Max
severity: info
given: $.limits[*]
message: max should be present
description: The `max` property of each limit should be present.
experience:
  - reliability
  - governance
spec:
  - limits
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/rate-limits/limit-require-max/
prompt: "You are editing a Rate Limits document to satisfy the Spotlight API
  governance rule 'limit-require-max' (Limit Require Max). Requirement: The
  `max` property of each limit should be present. To fix: Ensure `max` is
  present and non-empty at each matching location. This rule is evaluated at the
  JSONPath `$.limits[*]` — inspect every location it matches and correct only
  what violates the rule. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid Rate Limits. Return only the complete corrected
  document, with no commentary."
builtin: false
---
