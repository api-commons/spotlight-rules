---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-206-require-content-range
title: Response 206 Require Content Range
severity: info
given: $.paths.*
message: "{{error}}"
description: Check if the get response code 206 has content-type and content-range.
experience:
  - consistency
  - data-modeling
spec:
  - paths
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-206-require-content-range/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-206-require-content-range' (Response 206 Require
  Content Range). Requirement: Check if the get response code 206 has
  content-type and content-range. This rule is evaluated at the JSONPath
  `$.paths.*.` — inspect every location it matches and correct only what
  violates the rule. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid OpenAPI. Return only the complete corrected document, with no
  commentary."
builtin: false
ruleyaml: >
  response-206-require-content-range:
    title: Response 206 Require Content Range
    reference: https://spotlight-rules.com/spec/rules/openapi/response-206-require-content-range/
    description: Check if the get response code 206 has content-type and content-range.
    message: "{{error}}"
    severity: info
    given: $.paths.*
    then:
      function: trimble:check-content-type-for-206-get-response-code
    tags:
      - format:openapi
      - spec:paths
      - experience:consistency
      - experience:data-modeling
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'response-206-require-content-range' (Response 206 Require
      Content Range). Requirement: Check if the get response code 206 has
      content-type and content-range. This rule is evaluated at the JSONPath
      `$.paths.*.` — inspect every location it matches and correct only what
      violates the rule. Make the smallest change that satisfies the rule, leave
      all unrelated content, key order, comments, and formatting unchanged, and
      keep the document valid OpenAPI. Return only the complete corrected
      document, with no commentary."
---
