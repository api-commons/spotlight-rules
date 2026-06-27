---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-delete-require-204
title: Response Delete Require 204
severity: info
given: $.paths[*].delete.responses
message: All DELETE methods MUST have a 204 response.
description: All DELETE methods MUST have a 204 response.
experience:
  - consistency
  - error-handling
spec:
  - paths
  - operations
  - responses
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-delete-require-204/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-delete-require-204' (Response Delete Require 204).
  Requirement: All DELETE methods MUST have a 204 response. To fix: Ensure `204`
  is present and non-empty at each matching location. This rule is evaluated at
  the JSONPath `$.paths[*].delete.responses` — inspect every location it matches
  and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  response-delete-require-204:
    title: Response Delete Require 204
    reference: https://spotlight-rules.com/spec/rules/openapi/response-delete-require-204/
    description: All DELETE methods MUST have a 204 response.
    message: All DELETE methods MUST have a 204 response.
    severity: info
    given:
      - $.paths[*].delete.responses
    then:
      field: "204"
      function: truthy
    formats:
      - oas3
    tags:
      - format:openapi
      - spec:paths
      - spec:operations
      - spec:responses
      - experience:consistency
      - experience:error-handling
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'response-delete-require-204' (Response Delete Require 204).
      Requirement: All DELETE methods MUST have a 204 response. To fix: Ensure
      `204` is present and non-empty at each matching location. This rule is
      evaluated at the JSONPath `$.paths[*].delete.responses` — inspect every
      location it matches and correct only what violates the rule. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      OpenAPI. Return only the complete corrected document, with no commentary."
---
