---
layout: rule
artifact: rate-limits
artifact_label: Rate Limits
slug: limit-window-format
title: Limit Window Format
severity: info
given: $.limits[*].window
message: Limit window should be a duration (e.g. 60s, 1h).
description: A limit window should be a duration like 60s, 1m, 1h, or 1d.
experience:
  - consistency
  - reliability
spec:
  - limits
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/rate-limits/limit-window-format/
prompt: "You are editing a Rate Limits document to satisfy the Spotlight API
  governance rule 'limit-window-format' (Limit Window Format). Requirement: A
  limit window should be a duration like 60s, 1m, 1h, or 1d. To fix: Ensure the
  targeted value matches the regular expression `^\\d+(ms|s|m|h|d)$`; rewrite
  any value that does not. This rule is evaluated at the JSONPath
  `$.limits[*].window` — inspect every location it matches and correct only what
  violates the rule. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid Rate Limits. Return only the complete corrected document, with
  no commentary."
builtin: false
---
