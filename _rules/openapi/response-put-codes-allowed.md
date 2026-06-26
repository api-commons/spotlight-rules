---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-put-codes-allowed
title: Response Put Codes Allowed
severity: info
given: $.paths[*].put.responses
message: PUT operations should not return 200 or 201 status codes.
description: PUT operations should not return 200 or 201 status codes.
experience:
  - error-handling
  - consistency
spec:
  - paths
  - operations
  - responses
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-put-codes-allowed/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-put-codes-allowed' (Response Put Codes Allowed).
  Requirement: PUT operations should not return 200 or 201 status codes. To fix:
  Ensure `@key` does NOT match the regular expression `^(200|201)$`; rename or
  rewrite any value that does. This rule is evaluated at the JSONPath
  `$.paths[*].put.responses` — inspect every location it matches and correct
  only what violates the rule. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid OpenAPI. Return only the complete corrected
  document, with no commentary."
builtin: false
---
