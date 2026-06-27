---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-error-use-problem-type-2
title: Response Error Use Problem Type 2
severity: info
given: $.paths...responses[?(@property.match(/^(4|5)/))].content.*~
message: Every error response SHOULD support RFC 7807.
description: Every error response SHOULD support RFC 7807.
experience:
  - error-handling
  - consistency
spec:
  - paths
  - responses
  - media-types
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-error-use-problem-type-2/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-error-use-problem-type-2' (Response Error Use
  Problem Type 2). Requirement: Every error response SHOULD support RFC 7807. To
  fix: Set the targeted value to one of the allowed values:
  application/problem+xml, application/problem+json. This rule is evaluated at
  the JSONPath `$.paths...responses[?(@property.match(/^(4|5)/))].content.*~` —
  inspect every location it matches and correct only what violates the rule.
  Make the smallest change that satisfies the rule, leave all unrelated content,
  key order, comments, and formatting unchanged, and keep the document valid
  OpenAPI. Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  response-error-use-problem-type-2:
    title: Response Error Use Problem Type 2
    reference: https://spotlight-rules.com/spec/rules/openapi/response-error-use-problem-type-2/
    description: Every error response SHOULD support RFC 7807.
    message: Every error response SHOULD support RFC 7807.
    severity: info
    given: $.paths...responses[?(@property.match(/^(4|5)/))].content.*~
    then:
      function: enumeration
      functionOptions:
        values:
          - application/problem+xml
          - application/problem+json
    tags:
      - format:openapi
      - spec:paths
      - spec:responses
      - spec:media-types
      - experience:error-handling
      - experience:consistency
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'response-error-use-problem-type-2' (Response Error Use
      Problem Type 2). Requirement: Every error response SHOULD support RFC 7807.
      To fix: Set the targeted value to one of the allowed values:
      application/problem+xml, application/problem+json. This rule is evaluated at
      the JSONPath `$.paths...responses[?(@property.match(/^(4|5)/))].content.*~`
      — inspect every location it matches and correct only what violates the rule.
      Make the smallest change that satisfies the rule, leave all unrelated
      content, key order, comments, and formatting unchanged, and keep the
      document valid OpenAPI. Return only the complete corrected document, with no
      commentary."
---
