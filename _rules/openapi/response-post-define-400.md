---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-post-define-400
title: Response Post Define 400
severity: info
given: $.paths[*].post.responses
message: POST MUST Have 400 Response
description: POST operations should define a 400 Bad Request response for input
  validation errors. Analysis shows 400 is the 4th most common response code
  across 2516 operations.
experience:
  - error-handling
  - reliability
spec:
  - paths
  - operations
  - responses
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-post-define-400/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-post-define-400' (Response Post Define 400).
  Requirement: POST operations should define a 400 Bad Request response for
  input validation errors. Analysis shows 400 is the 4th most common response
  code across 2516 operations. To fix: Ensure `400` is present and non-empty at
  each matching location. This rule is evaluated at the JSONPath
  `$.paths[*].post.responses` — inspect every location it matches and correct
  only what violates the rule. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid OpenAPI. Return only the complete corrected
  document, with no commentary."
builtin: false
ruleyaml: >
  response-post-define-400:
    title: Response Post Define 400
    reference: https://spotlight-rules.com/spec/rules/openapi/response-post-define-400/
    description: POST operations should define a 400 Bad Request response for input
      validation errors. Analysis shows 400 is the 4th most common response code
      across 2516 operations.
    message: POST MUST Have 400 Response
    severity: info
    given: $.paths[*].post.responses
    then:
      field: "400"
      function: truthy
    tags:
      - format:openapi
      - spec:paths
      - spec:operations
      - spec:responses
      - experience:error-handling
      - experience:reliability
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'response-post-define-400' (Response Post Define 400).
      Requirement: POST operations should define a 400 Bad Request response for
      input validation errors. Analysis shows 400 is the 4th most common response
      code across 2516 operations. To fix: Ensure `400` is present and non-empty
      at each matching location. This rule is evaluated at the JSONPath
      `$.paths[*].post.responses` — inspect every location it matches and correct
      only what violates the rule. Make the smallest change that satisfies the
      rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid OpenAPI. Return only the complete
      corrected document, with no commentary."
---
