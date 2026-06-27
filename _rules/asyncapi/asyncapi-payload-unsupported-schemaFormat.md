---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-payload-unsupported-schemaFormat
title: Asyncapi Payload Unsupported SchemaFormat
severity: info
given: $.components.messageTraits.* | $.components.messages.* |
  $.channels[*][publish,subscribe].message
message: Message schema validation is only supported with default unspecified
  "schemaFormat".
description: Message schema validation is only supported with default
  unspecified "schemaFormat".
experience:
  - data-modeling
  - reliability
spec:
  - channels
  - messages
  - components
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/asyncapi/asyncapi-payload-unsupported-schemaFormat/
prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
  governance rule 'asyncapi-payload-unsupported-schemaFormat' (Asyncapi Payload
  Unsupported SchemaFormat). Requirement: Message schema validation is only
  supported with default unspecified \"schemaFormat\". To fix: Remove
  `schemaFormat` from each matching location. This rule is evaluated at the
  JSONPath `$.components.messageTraits.* | $.components.messages.* |
  $.channels[*][publish,subscribe].message` — inspect every location it matches
  and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid AsyncAPI. Return only the
  complete corrected document, with no commentary."
builtin: true
ruleyaml: >
  asyncapi-payload-unsupported-schemaFormat:
    title: Asyncapi Payload Unsupported SchemaFormat
    reference: https://spotlight-rules.com/spec/rules/asyncapi/asyncapi-payload-unsupported-schemaFormat/
    description: Message schema validation is only supported with default
      unspecified "schemaFormat".
    message: Message schema validation is only supported with default unspecified
      "schemaFormat".
    severity: info
    given:
      - $.components.messageTraits.*
      - $.components.messages.*
      - $.channels[*][publish,subscribe].message
    then:
      field: schemaFormat
      function: undefined
    tags:
      - format:asyncapi
      - spec:channels
      - spec:messages
      - spec:components
      - experience:data-modeling
      - experience:reliability
    prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
      governance rule 'asyncapi-payload-unsupported-schemaFormat' (Asyncapi
      Payload Unsupported SchemaFormat). Requirement: Message schema validation is
      only supported with default unspecified \"schemaFormat\". To fix: Remove
      `schemaFormat` from each matching location. This rule is evaluated at the
      JSONPath `$.components.messageTraits.* | $.components.messages.* |
      $.channels[*][publish,subscribe].message` — inspect every location it
      matches and correct only what violates the rule. Make the smallest change
      that satisfies the rule, leave all unrelated content, key order, comments,
      and formatting unchanged, and keep the document valid AsyncAPI. Return only
      the complete corrected document, with no commentary."
---
