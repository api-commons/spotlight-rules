---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: component-asyncapi-message-require-payload
title: Component Asyncapi Message Require Payload
severity: info
given: $.components.messages[*]
message: Message should define a payload.
description: Messages should define a payload schema.
experience:
  - data-modeling
spec:
  - components
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/asyncapi/component-asyncapi-message-require-payload/
prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
  governance rule 'component-asyncapi-message-require-payload' (Component
  Asyncapi Message Require Payload). Requirement: Messages should define a
  payload schema. To fix: Ensure `payload` is present and non-empty at each
  matching location. This rule is evaluated at the JSONPath
  `$.components.messages[*]` — inspect every location it matches and correct
  only what violates the rule. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid AsyncAPI. Return only the complete corrected
  document, with no commentary."
builtin: false
ruleyaml: >
  component-asyncapi-message-require-payload:
    title: Component Asyncapi Message Require Payload
    reference: https://spotlight-rules.com/spec/rules/asyncapi/component-asyncapi-message-require-payload/
    description: Messages should define a payload schema.
    message: Message should define a payload.
    given: $.components.messages[*]
    severity: info
    then:
      field: payload
      function: truthy
    tags:
      - format:asyncapi
      - spec:components
      - experience:data-modeling
    prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
      governance rule 'component-asyncapi-message-require-payload' (Component
      Asyncapi Message Require Payload). Requirement: Messages should define a
      payload schema. To fix: Ensure `payload` is present and non-empty at each
      matching location. This rule is evaluated at the JSONPath
      `$.components.messages[*]` — inspect every location it matches and correct
      only what violates the rule. Make the smallest change that satisfies the
      rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid AsyncAPI. Return only the complete
      corrected document, with no commentary."
---
