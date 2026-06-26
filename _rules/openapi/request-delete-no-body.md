---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: request-delete-no-body
title: Request Delete No Body
severity: info
given: $.paths[*].delete.requestBody
message: DELETE requests MUST NOT have a request body.
description: DELETE requests MUST NOT have a request body.
experience:
  - consistency
  - usability
spec:
  - paths
  - operations
  - request-body
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/request-delete-no-body/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'request-delete-no-body' (Request Delete No Body).
  Requirement: DELETE requests MUST NOT have a request body. To fix: Ensure the
  targeted value is absent or empty (falsy) at each matching location. This rule
  is evaluated at the JSONPath `$.paths[*].delete.requestBody` — inspect every
  location it matches and correct only what violates the rule. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid OpenAPI.
  Return only the complete corrected document, with no commentary."
builtin: false
---
