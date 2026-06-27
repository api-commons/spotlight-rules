---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: operation-put-require-request-body
title: Operation Put Require Request Body
severity: info
given: $.paths[*].put
message: PUT requests MUST have a request body.
description: PUT requests MUST have a request body.
experience:
  - consistency
  - usability
spec:
  - paths
  - operations
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/operation-put-require-request-body/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'operation-put-require-request-body' (Operation Put Require
  Request Body). Requirement: PUT requests MUST have a request body. To fix:
  Ensure `requestBody` is present and non-empty at each matching location. This
  rule is evaluated at the JSONPath `$.paths[*].put` — inspect every location it
  matches and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  operation-put-require-request-body:
    title: Operation Put Require Request Body
    reference: https://spotlight-rules.com/spec/rules/openapi/operation-put-require-request-body/
    description: PUT requests MUST have a request body.
    message: PUT requests MUST have a request body.
    severity: info
    given: $.paths[*].put
    then:
      field: requestBody
      function: truthy
      message: "{{description}}: {{error}}"
    formats:
      - oas3
    tags:
      - format:openapi
      - spec:paths
      - spec:operations
      - experience:consistency
      - experience:usability
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'operation-put-require-request-body' (Operation Put Require
      Request Body). Requirement: PUT requests MUST have a request body. To fix:
      Ensure `requestBody` is present and non-empty at each matching location.
      This rule is evaluated at the JSONPath `$.paths[*].put` — inspect every
      location it matches and correct only what violates the rule. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      OpenAPI. Return only the complete corrected document, with no commentary."
---
