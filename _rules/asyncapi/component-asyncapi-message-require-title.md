---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: component-asyncapi-message-require-title
title: Component Asyncapi Message Require Title
severity: info
given: $.components.messages[*]
message: Message should declare a title.
description: Messages should declare a human-readable title.
experience:
  - documentation
spec:
  - components
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/asyncapi/component-asyncapi-message-require-title/
prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
  governance rule 'component-asyncapi-message-require-title' (Component Asyncapi
  Message Require Title). Requirement: Messages should declare a human-readable
  title. To fix: Ensure `title` is present and non-empty at each matching
  location. This rule is evaluated at the JSONPath `$.components.messages[*]` —
  inspect every location it matches and correct only what violates the rule.
  Make the smallest change that satisfies the rule, leave all unrelated content,
  key order, comments, and formatting unchanged, and keep the document valid
  AsyncAPI. Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  component-asyncapi-message-require-title:
    title: Component Asyncapi Message Require Title
    reference: https://spotlight-rules.com/spec/rules/asyncapi/component-asyncapi-message-require-title/
    description: Messages should declare a human-readable title.
    message: Message should declare a title.
    given: $.components.messages[*]
    severity: info
    then:
      field: title
      function: truthy
    tags:
      - format:asyncapi
      - spec:components
      - experience:documentation
    prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
      governance rule 'component-asyncapi-message-require-title' (Component
      Asyncapi Message Require Title). Requirement: Messages should declare a
      human-readable title. To fix: Ensure `title` is present and non-empty at
      each matching location. This rule is evaluated at the JSONPath
      `$.components.messages[*]` — inspect every location it matches and correct
      only what violates the rule. Make the smallest change that satisfies the
      rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid AsyncAPI. Return only the complete
      corrected document, with no commentary."
---
