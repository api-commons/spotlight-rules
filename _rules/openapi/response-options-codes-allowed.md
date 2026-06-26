---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-options-codes-allowed
title: Response Options Codes Allowed
severity: info
given: $.paths[*].options.responses
message: OPTIONS operations should not return 201, 202, 409, 412 status codes.
description: OPTIONS operations should not return 201, 202, 409, 412 status codes.
experience:
  - error-handling
  - consistency
spec:
  - paths
  - operations
  - responses
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-options-codes-allowed/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-options-codes-allowed' (Response Options Codes
  Allowed). Requirement: OPTIONS operations should not return 201, 202, 409, 412
  status codes. To fix: Ensure `@key` does NOT match the regular expression
  `^(201|202|409|412)$`; rename or rewrite any value that does. This rule is
  evaluated at the JSONPath `$.paths[*].options.responses` — inspect every
  location it matches and correct only what violates the rule. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid OpenAPI.
  Return only the complete corrected document, with no commentary."
builtin: false
---
