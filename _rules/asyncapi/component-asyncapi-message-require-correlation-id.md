---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: component-asyncapi-message-require-correlation-id
title: Component Asyncapi Message Require Correlation ID
severity: info
given: $.components.messages[*]
message: Message should define a correlationId.
description: Messages should define a correlationId so events can be traced across services.
experience:
  - reliability
  - observability
spec:
  - components
topic:
  - tracing
owasp: []
reference: https://spotlight-rules.com/spec/rules/asyncapi/component-asyncapi-message-require-correlation-id/
prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
  governance rule 'component-asyncapi-message-require-correlation-id' (Component
  Asyncapi Message Require Correlation ID). Requirement: Messages should define
  a correlationId so events can be traced across services. To fix: Ensure
  `correlationId` is present and non-empty at each matching location. This rule
  is evaluated at the JSONPath `$.components.messages[*]` — inspect every
  location it matches and correct only what violates the rule. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid AsyncAPI.
  Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  component-asyncapi-message-require-correlation-id:
    title: Component Asyncapi Message Require Correlation ID
    reference: https://spotlight-rules.com/spec/rules/asyncapi/component-asyncapi-message-require-correlation-id/
    description: Messages should define a correlationId so events can be traced
      across services.
    message: Message should define a correlationId.
    given: $.components.messages[*]
    severity: info
    then:
      field: correlationId
      function: truthy
    tags:
      - format:asyncapi
      - spec:components
      - topic:tracing
      - experience:reliability
      - experience:observability
    prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
      governance rule 'component-asyncapi-message-require-correlation-id'
      (Component Asyncapi Message Require Correlation ID). Requirement: Messages
      should define a correlationId so events can be traced across services. To
      fix: Ensure `correlationId` is present and non-empty at each matching
      location. This rule is evaluated at the JSONPath `$.components.messages[*]`
      — inspect every location it matches and correct only what violates the rule.
      Make the smallest change that satisfies the rule, leave all unrelated
      content, key order, comments, and formatting unchanged, and keep the
      document valid AsyncAPI. Return only the complete corrected document, with
      no commentary."
---
