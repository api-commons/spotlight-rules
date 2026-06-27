---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: message-examples-form-complete-mocks
title: Message Examples Form Complete Mocks
severity: info
given: $.channels.*
message: "{{error}}"
description: Message example must match params examples to form full mocks.
experience:
  - documentation
  - usability
spec:
  - channels
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/message-examples-form-complete-mocks/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'message-examples-form-complete-mocks' (Message Examples Form
  Complete Mocks). Requirement: Message example must match params examples to
  form full mocks. This rule is evaluated at the JSONPath `$.channels.*` —
  inspect every location it matches and correct only what violates the rule.
  Make the smallest change that satisfies the rule, leave all unrelated content,
  key order, comments, and formatting unchanged, and keep the document valid
  OpenAPI. Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  message-examples-form-complete-mocks:
    title: Message Examples Form Complete Mocks
    reference: https://spotlight-rules.com/spec/rules/openapi/message-examples-form-complete-mocks/
    description: Message example must match params examples to form full mocks.
    message: "{{error}}"
    severity: info
    given: $.channels.*
    then:
      function: microcks:aas-verify-mocks
    formats:
      - aas2
    tags:
      - format:openapi
      - spec:channels
      - experience:documentation
      - experience:usability
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'message-examples-form-complete-mocks' (Message Examples
      Form Complete Mocks). Requirement: Message example must match params
      examples to form full mocks. This rule is evaluated at the JSONPath
      `$.channels.*` — inspect every location it matches and correct only what
      violates the rule. Make the smallest change that satisfies the rule, leave
      all unrelated content, key order, comments, and formatting unchanged, and
      keep the document valid OpenAPI. Return only the complete corrected
      document, with no commentary."
---
