---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-patch-codes-allowed
title: Response Patch Codes Allowed
severity: info
given: $.paths[*].patch.responses
message: PATCH operations should not return 201 status code.
description: PATCH operations should not return 201 status code.
experience:
  - error-handling
  - consistency
spec:
  - paths
  - operations
  - responses
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-patch-codes-allowed/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-patch-codes-allowed' (Response Patch Codes Allowed).
  Requirement: PATCH operations should not return 201 status code. To fix:
  Ensure `@key` does NOT match the regular expression `^201$`; rename or rewrite
  any value that does. This rule is evaluated at the JSONPath
  `$.paths[*].patch.responses` — inspect every location it matches and correct
  only what violates the rule. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid OpenAPI. Return only the complete corrected
  document, with no commentary."
builtin: false
---
