---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-message-examples
title: Asyncapi Message Examples
severity: info
given: $.channels.*.[publish,subscribe].message |
  $.channels.*.[publish,subscribe].message.oneOf.* |
  $.components.channels.*.[publish,subscribe].message |
  $.components.channels.*.[publish,subscribe].message.oneOf.* |
  $.components.messages.* | $.channels.*.[publish,subscribe].message.traits.* |
  $.channels.*.[publish,subscribe].message.oneOf.*.traits.* |
  $.components.channels.*.[publish,subscribe].message.traits.* |
  $.components.channels.*.[publish,subscribe].message.oneOf.*.traits.* |
  $.components.messages.*.traits.* | $.components.messageTraits.*
message: "{{error}}"
description: Examples of message object should follow by "payload" and "headers" schemas.
experience:
  - data-modeling
  - documentation
  - reliability
spec:
  - channels
  - messages
  - components
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/asyncapi/asyncapi-message-examples/
prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
  governance rule 'asyncapi-message-examples' (Asyncapi Message Examples).
  Requirement: Examples of message object should follow by \"payload\" and
  \"headers\" schemas. This rule is evaluated at the JSONPath
  `$.channels.*.[publish,subscribe].message |
  $.channels.*.[publish,subscribe].message.oneOf.* |
  $.components.channels.*.[publish,subscribe].message |
  $.components.channels.*.[publish,subscribe].message.oneOf.* |
  $.components.messages.* | $.channels.*.[publish,subscribe].message.traits.* |
  $.channels.*.[publish,subscribe].message.oneOf.*.traits.* |
  $.components.channels.*.[publish,subscribe].message.traits.* |
  $.components.channels.*.[publish,subscribe].message.oneOf.*.traits.* |
  $.components.messages.*.traits.* | $.components.messageTraits.*` — inspect
  every location it matches and correct only what violates the rule. Make the
  smallest change that satisfies the rule, leave all unrelated content, key
  order, comments, and formatting unchanged, and keep the document valid
  AsyncAPI. Return only the complete corrected document, with no commentary."
builtin: true
ruleyaml: >
  asyncapi-message-examples:
    title: Asyncapi Message Examples
    reference: https://spotlight-rules.com/spec/rules/asyncapi/asyncapi-message-examples/
    description: Examples of message object should follow by "payload" and "headers" schemas.
    message: "{{error}}"
    severity: info
    given:
      - $.channels.*.[publish,subscribe].message
      - $.channels.*.[publish,subscribe].message.oneOf.*
      - $.components.channels.*.[publish,subscribe].message
      - $.components.channels.*.[publish,subscribe].message.oneOf.*
      - $.components.messages.*
      - $.channels.*.[publish,subscribe].message.traits.*
      - $.channels.*.[publish,subscribe].message.oneOf.*.traits.*
      - $.components.channels.*.[publish,subscribe].message.traits.*
      - $.components.channels.*.[publish,subscribe].message.oneOf.*.traits.*
      - $.components.messages.*.traits.*
      - $.components.messageTraits.*
    then:
      function: asyncApi2MessageExamplesValidation
    tags:
      - format:asyncapi
      - spec:channels
      - spec:messages
      - spec:components
      - experience:data-modeling
      - experience:documentation
      - experience:reliability
    prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
      governance rule 'asyncapi-message-examples' (Asyncapi Message Examples).
      Requirement: Examples of message object should follow by \"payload\" and
      \"headers\" schemas. This rule is evaluated at the JSONPath
      `$.channels.*.[publish,subscribe].message |
      $.channels.*.[publish,subscribe].message.oneOf.* |
      $.components.channels.*.[publish,subscribe].message |
      $.components.channels.*.[publish,subscribe].message.oneOf.* |
      $.components.messages.* | $.channels.*.[publish,subscribe].message.traits.*
      | $.channels.*.[publish,subscribe].message.oneOf.*.traits.* |
      $.components.channels.*.[publish,subscribe].message.traits.* |
      $.components.channels.*.[publish,subscribe].message.oneOf.*.traits.* |
      $.components.messages.*.traits.* | $.components.messageTraits.*` — inspect
      every location it matches and correct only what violates the rule. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      AsyncAPI. Return only the complete corrected document, with no commentary."
---
