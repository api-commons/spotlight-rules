---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: request-content-require-examples
title: Request Content Require Examples
severity: info
given: $.paths..requestBody..content.*
message: Request with content must have examples
description: Request with content must have examples.
experience:
  - documentation
  - usability
spec:
  - paths
  - request-body
  - media-types
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/request-content-require-examples/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'request-content-require-examples' (Request Content Require
  Examples). Requirement: Request with content must have examples. To fix:
  Ensure `examples` is present and non-empty at each matching location. This
  rule is evaluated at the JSONPath `$.paths..requestBody..content.*` — inspect
  every location it matches and correct only what violates the rule. Make the
  smallest change that satisfies the rule, leave all unrelated content, key
  order, comments, and formatting unchanged, and keep the document valid
  OpenAPI. Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  request-content-require-examples:
    title: Request Content Require Examples
    reference: https://spotlight-rules.com/spec/rules/openapi/request-content-require-examples/
    description: Request with content must have examples.
    message: Request with content must have examples
    severity: info
    given: $.paths..requestBody..content.*
    then:
      field: examples
      function: truthy
    formats:
      - oas3
    tags:
      - format:openapi
      - spec:paths
      - spec:request-body
      - spec:media-types
      - experience:documentation
      - experience:usability
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'request-content-require-examples' (Request Content Require
      Examples). Requirement: Request with content must have examples. To fix:
      Ensure `examples` is present and non-empty at each matching location. This
      rule is evaluated at the JSONPath `$.paths..requestBody..content.*` —
      inspect every location it matches and correct only what violates the rule.
      Make the smallest change that satisfies the rule, leave all unrelated
      content, key order, comments, and formatting unchanged, and keep the
      document valid OpenAPI. Return only the complete corrected document, with no
      commentary."
---
