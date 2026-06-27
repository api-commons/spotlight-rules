---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-delete-define-204
title: Response Delete Define 204
severity: info
given: $.paths.*.delete.responses
message: DELETE 204 Status Code
description: DELETE responses should have a 204 success HTTP status codes,
  communicating a success created response to consumers.
experience:
  - reliability
  - consistency
spec:
  - paths
  - operations
  - responses
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-delete-define-204/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-delete-define-204' (Response Delete Define 204).
  Requirement: DELETE responses should have a 204 success HTTP status codes,
  communicating a success created response to consumers. To fix: Ensure `204` is
  present and non-empty at each matching location. This rule is evaluated at the
  JSONPath `$.paths.*.delete.responses` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid OpenAPI. Return only the complete
  corrected document, with no commentary."
builtin: false
ruleyaml: >
  response-delete-define-204:
    title: Response Delete Define 204
    reference: https://spotlight-rules.com/spec/rules/openapi/response-delete-define-204/
    description: DELETE responses should have a 204 success HTTP status codes,
      communicating a success created response to consumers.
    message: DELETE 204 Status Code
    severity: info
    given: $.paths.*.delete.responses
    then:
      field: "204"
      function: truthy
    tags:
      - format:openapi
      - spec:paths
      - spec:operations
      - spec:responses
      - experience:reliability
      - experience:consistency
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'response-delete-define-204' (Response Delete Define 204).
      Requirement: DELETE responses should have a 204 success HTTP status codes,
      communicating a success created response to consumers. To fix: Ensure `204`
      is present and non-empty at each matching location. This rule is evaluated
      at the JSONPath `$.paths.*.delete.responses` — inspect every location it
      matches and correct only what violates the rule. Make the smallest change
      that satisfies the rule, leave all unrelated content, key order, comments,
      and formatting unchanged, and keep the document valid OpenAPI. Return only
      the complete corrected document, with no commentary."
---
