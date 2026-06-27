---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-content-require-examples
title: Response Content Require Examples
severity: info
given: $.paths..responses..content.*
message: Response with content must have examples
description: Response with content must have examples.
experience:
  - documentation
  - usability
spec:
  - paths
  - responses
  - media-types
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-content-require-examples/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-content-require-examples' (Response Content Require
  Examples). Requirement: Response with content must have examples. To fix:
  Ensure `examples` is present and non-empty at each matching location. This
  rule is evaluated at the JSONPath `$.paths..responses..content.*` — inspect
  every location it matches and correct only what violates the rule. Make the
  smallest change that satisfies the rule, leave all unrelated content, key
  order, comments, and formatting unchanged, and keep the document valid
  OpenAPI. Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  response-content-require-examples:
    title: Response Content Require Examples
    reference: https://spotlight-rules.com/spec/rules/openapi/response-content-require-examples/
    description: Response with content must have examples.
    message: Response with content must have examples
    severity: info
    given: $.paths..responses..content.*
    then:
      field: examples
      function: truthy
    formats:
      - oas3
    tags:
      - format:openapi
      - spec:paths
      - spec:responses
      - spec:media-types
      - experience:documentation
      - experience:usability
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'response-content-require-examples' (Response Content
      Require Examples). Requirement: Response with content must have examples. To
      fix: Ensure `examples` is present and non-empty at each matching location.
      This rule is evaluated at the JSONPath `$.paths..responses..content.*` —
      inspect every location it matches and correct only what violates the rule.
      Make the smallest change that satisfies the rule, leave all unrelated
      content, key order, comments, and formatting unchanged, and keep the
      document valid OpenAPI. Return only the complete corrected document, with no
      commentary."
---
