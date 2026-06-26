---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: operation-require-summary
title: Operation Require Summary
severity: info
given: $.paths.*[get,post,patch,put,delete]
message: Operation MUST Have a Summary
description: Having short and intuitive summary for each API operation helps API
  consumers understand what is possible with each API request.
experience:
  - documentation
spec:
  - paths
  - operations
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/operation-require-summary/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'operation-require-summary' (Operation Require Summary).
  Requirement: Having short and intuitive summary for each API operation helps
  API consumers understand what is possible with each API request. To fix:
  Ensure `summary` is present and non-empty at each matching location. This rule
  is evaluated at the JSONPath `$.paths.*[get,post,patch,put,delete]` — inspect
  every location it matches and correct only what violates the rule. Make the
  smallest change that satisfies the rule, leave all unrelated content, key
  order, comments, and formatting unchanged, and keep the document valid
  OpenAPI. Return only the complete corrected document, with no commentary."
builtin: false
---
