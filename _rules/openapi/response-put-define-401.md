---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-put-define-401
title: Response Put Define 401
severity: info
given: $.paths[*].put.responses
message: PUT MUST Have 401 Response
description: PUT operations should define a 401 Unauthorized response to
  document authentication requirements for update operations.
experience:
  - security
  - error-handling
spec:
  - paths
  - operations
  - responses
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-put-define-401/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-put-define-401' (Response Put Define 401).
  Requirement: PUT operations should define a 401 Unauthorized response to
  document authentication requirements for update operations. To fix: Ensure
  `401` is present and non-empty at each matching location. This rule is
  evaluated at the JSONPath `$.paths[*].put.responses` — inspect every location
  it matches and correct only what violates the rule. Make the smallest change
  that satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  response-put-define-401:
    title: Response Put Define 401
    reference: https://spotlight-rules.com/spec/rules/openapi/response-put-define-401/
    description: PUT operations should define a 401 Unauthorized response to
      document authentication requirements for update operations.
    message: PUT MUST Have 401 Response
    severity: info
    given: $.paths[*].put.responses
    then:
      field: "401"
      function: truthy
    tags:
      - format:openapi
      - spec:paths
      - spec:operations
      - spec:responses
      - experience:security
      - experience:error-handling
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'response-put-define-401' (Response Put Define 401).
      Requirement: PUT operations should define a 401 Unauthorized response to
      document authentication requirements for update operations. To fix: Ensure
      `401` is present and non-empty at each matching location. This rule is
      evaluated at the JSONPath `$.paths[*].put.responses` — inspect every
      location it matches and correct only what violates the rule. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      OpenAPI. Return only the complete corrected document, with no commentary."
---
