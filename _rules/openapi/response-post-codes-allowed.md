---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-post-codes-allowed
title: Response Post Codes Allowed
severity: info
given: $.paths[*].post.responses
message: POST operations should not return 412 status codes.
description: POST operations should not return 412 status codes.
experience:
  - error-handling
  - consistency
spec:
  - paths
  - operations
  - responses
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-post-codes-allowed/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-post-codes-allowed' (Response Post Codes Allowed).
  Requirement: POST operations should not return 412 status codes. To fix:
  Ensure `@key` does NOT match the regular expression `412`; rename or rewrite
  any value that does. This rule is evaluated at the JSONPath
  `$.paths[*].post.responses` — inspect every location it matches and correct
  only what violates the rule. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid OpenAPI. Return only the complete corrected
  document, with no commentary."
builtin: false
ruleyaml: >
  response-post-codes-allowed:
    title: Response Post Codes Allowed
    reference: https://spotlight-rules.com/spec/rules/openapi/response-post-codes-allowed/
    description: POST operations should not return 412 status codes.
    message: POST operations should not return 412 status codes.
    severity: info
    given: $.paths[*].post.responses
    then:
      field: "@key"
      function: pattern
      functionOptions:
        notMatch: "412"
    tags:
      - format:openapi
      - spec:paths
      - spec:operations
      - spec:responses
      - experience:error-handling
      - experience:consistency
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'response-post-codes-allowed' (Response Post Codes Allowed).
      Requirement: POST operations should not return 412 status codes. To fix:
      Ensure `@key` does NOT match the regular expression `412`; rename or rewrite
      any value that does. This rule is evaluated at the JSONPath
      `$.paths[*].post.responses` — inspect every location it matches and correct
      only what violates the rule. Make the smallest change that satisfies the
      rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid OpenAPI. Return only the complete
      corrected document, with no commentary."
---
