---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-delete-codes-allowed
title: Response Delete Codes Allowed
severity: info
given: $.paths[*].delete.responses
message: DELETE operations should not return 200 or 201 status codes.
description: DELETE operations should not return 200 or 201 status codes.
experience:
  - error-handling
  - consistency
spec:
  - paths
  - operations
  - responses
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-delete-codes-allowed/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-delete-codes-allowed' (Response Delete Codes
  Allowed). Requirement: DELETE operations should not return 200 or 201 status
  codes. To fix: Ensure `@key` does NOT match the regular expression
  `^(200|201)$`; rename or rewrite any value that does. This rule is evaluated
  at the JSONPath `$.paths[*].delete.responses` — inspect every location it
  matches and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
---
