---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-error-require-description
title: Response Error Require Description
severity: info
given: $.paths.*.*.responses.
message: "{{error}}"
description: Check if the response description is appropriate for all requests.
experience:
  - documentation
  - error-handling
spec:
  - paths
  - responses
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-error-require-description/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-error-require-description' (Response Error Require
  Description). Requirement: Check if the response description is appropriate
  for all requests. This rule is evaluated at the JSONPath
  `$.paths.*.*.responses.` — inspect every location it matches and correct only
  what violates the rule. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid OpenAPI. Return only the complete corrected
  document, with no commentary."
builtin: false
---
