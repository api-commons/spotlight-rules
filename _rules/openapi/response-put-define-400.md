---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-put-define-400
title: Response Put Define 400
severity: info
given: $.paths.*.put.responses
message: PUT Responses MUST Have 400 Status Codes
description: PUT responses should have a 400 not found HTTP status code,
  communicating nothing was found to consumers.
experience:
  - error-handling
  - reliability
spec:
  - paths
  - operations
  - responses
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-put-define-400/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-put-define-400' (Response Put Define 400).
  Requirement: PUT responses should have a 400 not found HTTP status code,
  communicating nothing was found to consumers. To fix: Ensure `400` is present
  and non-empty at each matching location. This rule is evaluated at the
  JSONPath `$.paths.*.put.responses` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid OpenAPI. Return only the complete
  corrected document, with no commentary."
builtin: false
---
