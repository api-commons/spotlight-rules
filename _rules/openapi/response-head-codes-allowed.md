---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-head-codes-allowed
title: Response Head Codes Allowed
severity: info
given: $.paths[*].head.responses
message: HEAD operations should not return 201, 202, 204, 409, 412 status codes.
description: HEAD operations should not return 201, 202, 204, 409, 412 status codes.
experience:
  - error-handling
  - consistency
spec:
  - paths
  - operations
  - responses
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-head-codes-allowed/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-head-codes-allowed' (Response Head Codes Allowed).
  Requirement: HEAD operations should not return 201, 202, 204, 409, 412 status
  codes. To fix: Ensure `@key` does NOT match the regular expression
  `^(201|202|204|409|412)$`; rename or rewrite any value that does. This rule is
  evaluated at the JSONPath `$.paths[*].head.responses` — inspect every location
  it matches and correct only what violates the rule. Make the smallest change
  that satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  response-head-codes-allowed:
    title: Response Head Codes Allowed
    reference: https://spotlight-rules.com/spec/rules/openapi/response-head-codes-allowed/
    description: HEAD operations should not return 201, 202, 204, 409, 412 status codes.
    message: HEAD operations should not return 201, 202, 204, 409, 412 status codes.
    severity: info
    given: $.paths[*].head.responses
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
      governance rule 'response-head-codes-allowed' (Response Head Codes Allowed).
      Requirement: HEAD operations should not return 201, 202, 204, 409, 412
      status codes. To fix: Ensure `@key` does NOT match the regular expression
      `^(201|202|204|409|412)$`; rename or rewrite any value that does. This rule
      is evaluated at the JSONPath `$.paths[*].head.responses` — inspect every
      location it matches and correct only what violates the rule. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      OpenAPI. Return only the complete corrected document, with no commentary."
---
