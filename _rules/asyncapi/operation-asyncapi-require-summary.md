---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: operation-asyncapi-require-summary
title: Operation Asyncapi Require Summary
severity: info
given: $.operations[*]
message: Operation should have a summary.
description: Operations should have a short summary.
experience:
  - documentation
spec:
  - operations
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/asyncapi/operation-asyncapi-require-summary/
prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
  governance rule 'operation-asyncapi-require-summary' (Operation Asyncapi
  Require Summary). Requirement: Operations should have a short summary. To fix:
  Ensure `summary` is present and non-empty at each matching location. This rule
  is evaluated at the JSONPath `$.operations[*]` — inspect every location it
  matches and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid AsyncAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
---
