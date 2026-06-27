---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: message-require-examples
title: Message Require Examples
severity: info
given: $.channels.*.[publish,subscribe].message
message: Message must have examples
description: Message must have examples.
experience:
  - documentation
  - usability
spec:
  - channels
  - messages
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/message-require-examples/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'message-require-examples' (Message Require Examples).
  Requirement: Message must have examples. To fix: Ensure `examples` is present
  and non-empty at each matching location. This rule is evaluated at the
  JSONPath `$.channels.*.[publish,subscribe].message` — inspect every location
  it matches and correct only what violates the rule. Make the smallest change
  that satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  message-require-examples:
    title: Message Require Examples
    reference: https://spotlight-rules.com/spec/rules/openapi/message-require-examples/
    description: Message must have examples.
    message: Message must have examples
    severity: info
    given: $.channels.*.[publish,subscribe].message
    then:
      field: examples
      function: truthy
    formats:
      - aas2
    tags:
      - format:openapi
      - spec:channels
      - spec:messages
      - experience:documentation
      - experience:usability
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'message-require-examples' (Message Require Examples).
      Requirement: Message must have examples. To fix: Ensure `examples` is
      present and non-empty at each matching location. This rule is evaluated at
      the JSONPath `$.channels.*.[publish,subscribe].message` — inspect every
      location it matches and correct only what violates the rule. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      OpenAPI. Return only the complete corrected document, with no commentary."
---
