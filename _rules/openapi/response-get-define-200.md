---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-get-define-200
title: Response Get Define 200
severity: info
given: $.paths.*.get.responses
message: GET Responses MUST Have 200 Status Codes
description: GET responses should have a 200 success HTTP status codes,
  communicating a successful response to consumers.
experience:
  - reliability
  - consistency
spec:
  - paths
  - operations
  - responses
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-get-define-200/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-get-define-200' (Response Get Define 200).
  Requirement: GET responses should have a 200 success HTTP status codes,
  communicating a successful response to consumers. To fix: Ensure `200` is
  present and non-empty at each matching location. This rule is evaluated at the
  JSONPath `$.paths.*.get.responses` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid OpenAPI. Return only the complete
  corrected document, with no commentary."
builtin: false
ruleyaml: >
  response-get-define-200:
    title: Response Get Define 200
    reference: https://spotlight-rules.com/spec/rules/openapi/response-get-define-200/
    description: GET responses should have a 200 success HTTP status codes,
      communicating a successful response to consumers.
    message: GET Responses MUST Have 200 Status Codes
    severity: info
    given: $.paths.*.get.responses
    then:
      field: "200"
      function: truthy
    tags:
      - format:openapi
      - spec:paths
      - spec:operations
      - spec:responses
      - experience:reliability
      - experience:consistency
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'response-get-define-200' (Response Get Define 200).
      Requirement: GET responses should have a 200 success HTTP status codes,
      communicating a successful response to consumers. To fix: Ensure `200` is
      present and non-empty at each matching location. This rule is evaluated at
      the JSONPath `$.paths.*.get.responses` — inspect every location it matches
      and correct only what violates the rule. Make the smallest change that
      satisfies the rule, leave all unrelated content, key order, comments, and
      formatting unchanged, and keep the document valid OpenAPI. Return only the
      complete corrected document, with no commentary."
---
