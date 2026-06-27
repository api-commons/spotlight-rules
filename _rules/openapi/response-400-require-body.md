---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-400-require-body
title: Response 400 Require Body
severity: info
given: $.paths.*.*.responses['400']
message: All 400 responses must include a response body.
description: All 400 responses must include a response body.
experience:
  - error-handling
  - documentation
spec:
  - paths
  - responses
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-400-require-body/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-400-require-body' (Response 400 Require Body).
  Requirement: All 400 responses must include a response body. To fix: Ensure
  `content` is present and non-empty at each matching location. This rule is
  evaluated at the JSONPath `$.paths.*.*.responses['400']` — inspect every
  location it matches and correct only what violates the rule. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid OpenAPI.
  Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  response-400-require-body:
    title: Response 400 Require Body
    reference: https://spotlight-rules.com/spec/rules/openapi/response-400-require-body/
    description: All 400 responses must include a response body.
    message: All 400 responses must include a response body.
    severity: info
    given:
      - $.paths.*.*.responses['400']
    then:
      field: content
      function: truthy
    formats:
      - oas3
    tags:
      - format:openapi
      - spec:paths
      - spec:responses
      - experience:error-handling
      - experience:documentation
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'response-400-require-body' (Response 400 Require Body).
      Requirement: All 400 responses must include a response body. To fix: Ensure
      `content` is present and non-empty at each matching location. This rule is
      evaluated at the JSONPath `$.paths.*.*.responses['400']` — inspect every
      location it matches and correct only what violates the rule. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      OpenAPI. Return only the complete corrected document, with no commentary."
---
