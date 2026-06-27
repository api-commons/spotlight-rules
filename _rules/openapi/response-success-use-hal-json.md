---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-success-use-hal-json
title: Response Success Use HAL JSON
severity: info
given: $.paths..responses[?( @property >= 200 && @property < 300 && @property !=
  204)].content[*]~
message: "Success response documents MUST use the application/hal+json media
  type: {{error}}"
description: All 2xx success responses MUST use the `application/hal+json` media type.
experience:
  - consistency
  - data-modeling
spec:
  - paths
  - responses
  - media-types
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-success-use-hal-json/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-success-use-hal-json' (Response Success Use HAL
  JSON). Requirement: All 2xx success responses MUST use the
  `application/hal+json` media type. To fix: Set the targeted value to one of
  the allowed values: application/hal+json. This rule is evaluated at the
  JSONPath `$.paths..responses[?( @property >= 200 && @property < 300 &&
  @property != 204)].content[*]~` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid OpenAPI. Return only the complete
  corrected document, with no commentary."
builtin: false
ruleyaml: >
  response-success-use-hal-json:
    title: Response Success Use HAL JSON
    reference: https://spotlight-rules.com/spec/rules/openapi/response-success-use-hal-json/
    description: All 2xx success responses MUST use the `application/hal+json` media type.
    message: "Success response documents MUST use the application/hal+json media
      type: {{error}}"
    severity: info
    given: $.paths..responses[?( @property >= 200 && @property < 300 && @property !=
      204)].content[*]~
    then:
      function: enumeration
      functionOptions:
        values:
          - application/hal+json
    formats:
      - oas3
    tags:
      - format:openapi
      - spec:paths
      - spec:responses
      - spec:media-types
      - experience:consistency
      - experience:data-modeling
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'response-success-use-hal-json' (Response Success Use HAL
      JSON). Requirement: All 2xx success responses MUST use the
      `application/hal+json` media type. To fix: Set the targeted value to one of
      the allowed values: application/hal+json. This rule is evaluated at the
      JSONPath `$.paths..responses[?( @property >= 200 && @property < 300 &&
      @property != 204)].content[*]~` — inspect every location it matches and
      correct only what violates the rule. Make the smallest change that satisfies
      the rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid OpenAPI. Return only the complete
      corrected document, with no commentary."
---
