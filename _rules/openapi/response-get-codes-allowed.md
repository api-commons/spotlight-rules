---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-get-codes-allowed
title: Response Get Codes Allowed
severity: info
given: $.paths[*].get.responses
message: GET operations should not use status codes 201, 202, 204, 409, 412.
description: GET operations should not use status codes 201, 202, 204, 409, 412.
experience:
  - error-handling
  - consistency
spec:
  - paths
  - operations
  - responses
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-get-codes-allowed/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-get-codes-allowed' (Response Get Codes Allowed).
  Requirement: GET operations should not use status codes 201, 202, 204, 409,
  412. To fix: Ensure `@key` does NOT match the regular expression
  `^(201|202|204|409|412)$`; rename or rewrite any value that does. This rule is
  evaluated at the JSONPath `$.paths[*].get.responses` — inspect every location
  it matches and correct only what violates the rule. Make the smallest change
  that satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  response-get-codes-allowed:
    title: Response Get Codes Allowed
    reference: https://spotlight-rules.com/spec/rules/openapi/response-get-codes-allowed/
    description: GET operations should not use status codes 201, 202, 204, 409, 412.
    message: GET operations should not use status codes 201, 202, 204, 409, 412.
    severity: info
    given: $.paths[*].get.responses
    then:
      field: "@key"
      function: pattern
      functionOptions:
        notMatch: ^(201|202|204|409|412)$
    tags:
      - format:openapi
      - spec:paths
      - spec:operations
      - spec:responses
      - experience:error-handling
      - experience:consistency
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'response-get-codes-allowed' (Response Get Codes Allowed).
      Requirement: GET operations should not use status codes 201, 202, 204, 409,
      412. To fix: Ensure `@key` does NOT match the regular expression
      `^(201|202|204|409|412)$`; rename or rewrite any value that does. This rule
      is evaluated at the JSONPath `$.paths[*].get.responses` — inspect every
      location it matches and correct only what violates the rule. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      OpenAPI. Return only the complete corrected document, with no commentary."
---
