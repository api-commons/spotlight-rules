---
layout: rule
artifact: rate-limits
artifact_label: Rate Limits
slug: limit-scope-known
title: Limit Scope Known
severity: info
given: $.limits[*].scope
message: Limit scope should be a known value.
description: A limit scope should be one of ip, user, api-key, client, or global.
experience:
  - consistency
spec:
  - limits
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/rate-limits/limit-scope-known/
prompt: "You are editing a Rate Limits document to satisfy the Spotlight API
  governance rule 'limit-scope-known' (Limit Scope Known). Requirement: A limit
  scope should be one of ip, user, api-key, client, or global. To fix: Adjust
  the targeted value so it conforms to the schema this rule requires. This rule
  is evaluated at the JSONPath `$.limits[*].scope` — inspect every location it
  matches and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid Rate Limits. Return only the
  complete corrected document, with no commentary."
builtin: false
---
