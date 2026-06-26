---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-delete-404-use-schema-ref
title: Response Delete 404 Use Schema Ref
severity: info
given: $.paths.*.delete.responses.404
message: DELETE 404 Responses MUST Use Schema Reference
description: DELETE 404 not found HTTP status codes have a schema references to
  standardize the response payload returned for the error response.
experience:
  - error-handling
  - consistency
spec:
  - paths
  - operations
  - responses
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-delete-404-use-schema-ref/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-delete-404-use-schema-ref' (Response Delete 404 Use
  Schema Ref). Requirement: DELETE 404 not found HTTP status codes have a schema
  references to standardize the response payload returned for the error
  response. To fix: Ensure `$ref` is absent or empty (falsy) at each matching
  location. This rule is evaluated at the JSONPath
  `$.paths.*.delete.responses.404` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid OpenAPI. Return only the complete
  corrected document, with no commentary."
builtin: false
---
