---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: operation-post-require-request-body
title: Operation Post Require Request Body
severity: info
given: $.paths.*.post
message: POST Requests MUST Have a Body
description: POST HTTP methods can have a request body, providing a structured
  payload for configuring each API request.
experience:
  - data-modeling
  - consistency
spec:
  - paths
  - operations
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/operation-post-require-request-body/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'operation-post-require-request-body' (Operation Post Require
  Request Body). Requirement: POST HTTP methods can have a request body,
  providing a structured payload for configuring each API request. To fix:
  Ensure `requestBody` is present and non-empty at each matching location. This
  rule is evaluated at the JSONPath `$.paths.*.post` — inspect every location it
  matches and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  operation-post-require-request-body:
    title: Operation Post Require Request Body
    reference: https://spotlight-rules.com/spec/rules/openapi/operation-post-require-request-body/
    description: POST HTTP methods can have a request body, providing a structured
      payload for configuring each API request.
    message: POST Requests MUST Have a Body
    severity: info
    given: $.paths.*.post
    then:
      field: requestBody
      function: truthy
    tags:
      - format:openapi
      - spec:paths
      - spec:operations
      - experience:data-modeling
      - experience:consistency
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'operation-post-require-request-body' (Operation Post
      Require Request Body). Requirement: POST HTTP methods can have a request
      body, providing a structured payload for configuring each API request. To
      fix: Ensure `requestBody` is present and non-empty at each matching
      location. This rule is evaluated at the JSONPath `$.paths.*.post` — inspect
      every location it matches and correct only what violates the rule. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      OpenAPI. Return only the complete corrected document, with no commentary."
---
