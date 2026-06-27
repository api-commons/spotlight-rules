---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-delete-define-500
title: Response Delete Define 500
severity: info
given: $.paths.*.delete.responses
message: DELETE Responses MUST Have 500 Status Codes
description: DELETE responses should have a 500 internal server erorr HTTP
  status code, communicating the API had a problem to consumers.
experience:
  - error-handling
  - reliability
spec:
  - paths
  - operations
  - responses
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-delete-define-500/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-delete-define-500' (Response Delete Define 500).
  Requirement: DELETE responses should have a 500 internal server erorr HTTP
  status code, communicating the API had a problem to consumers. To fix: Ensure
  `500` is present and non-empty at each matching location. This rule is
  evaluated at the JSONPath `$.paths.*.delete.responses` — inspect every
  location it matches and correct only what violates the rule. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid OpenAPI.
  Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  response-delete-define-500:
    title: Response Delete Define 500
    reference: https://spotlight-rules.com/spec/rules/openapi/response-delete-define-500/
    description: DELETE responses should have a 500 internal server erorr HTTP
      status code, communicating the API had a problem to consumers.
    message: DELETE Responses MUST Have 500 Status Codes
    severity: info
    given: $.paths.*.delete.responses
    then:
      field: "500"
      function: truthy
    tags:
      - format:openapi
      - spec:paths
      - spec:operations
      - spec:responses
      - experience:error-handling
      - experience:reliability
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'response-delete-define-500' (Response Delete Define 500).
      Requirement: DELETE responses should have a 500 internal server erorr HTTP
      status code, communicating the API had a problem to consumers. To fix:
      Ensure `500` is present and non-empty at each matching location. This rule
      is evaluated at the JSONPath `$.paths.*.delete.responses` — inspect every
      location it matches and correct only what violates the rule. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      OpenAPI. Return only the complete corrected document, with no commentary."
---
