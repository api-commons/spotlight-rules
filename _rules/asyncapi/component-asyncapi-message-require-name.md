---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: component-asyncapi-message-require-name
title: Component Asyncapi Message Require Name
severity: info
given: $.components.messages[*]
message: Message should declare a name.
description: Messages should declare a name.
experience:
  - documentation
  - consistency
spec:
  - components
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/asyncapi/component-asyncapi-message-require-name/
prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
  governance rule 'component-asyncapi-message-require-name' (Component Asyncapi
  Message Require Name). Requirement: Messages should declare a name. To fix:
  Ensure `name` is present and non-empty at each matching location. This rule is
  evaluated at the JSONPath `$.components.messages[*]` — inspect every location
  it matches and correct only what violates the rule. Make the smallest change
  that satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid AsyncAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  component-asyncapi-message-require-name:
    title: Component Asyncapi Message Require Name
    reference: https://spotlight-rules.com/spec/rules/asyncapi/component-asyncapi-message-require-name/
    description: Messages should declare a name.
    message: Message should declare a name.
    given: $.components.messages[*]
    severity: info
    then:
      field: name
      function: truthy
    tags:
      - format:asyncapi
      - spec:components
      - experience:documentation
      - experience:consistency
    prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
      governance rule 'component-asyncapi-message-require-name' (Component
      Asyncapi Message Require Name). Requirement: Messages should declare a name.
      To fix: Ensure `name` is present and non-empty at each matching location.
      This rule is evaluated at the JSONPath `$.components.messages[*]` — inspect
      every location it matches and correct only what violates the rule. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      AsyncAPI. Return only the complete corrected document, with no commentary."
---
