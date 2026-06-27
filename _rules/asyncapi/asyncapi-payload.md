---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-payload
title: Asyncapi Payload
severity: info
given: $.components.messageTraits[?(@.schemaFormat === void 0)].payload |
  $.components.messages[?(@.schemaFormat === void 0)].payload |
  $.channels[*][publish,subscribe][?(@property === 'message' && @.schemaFormat
  === void 0)].payload
message: "{{error}}"
description: Payloads must be valid against AsyncAPI Schema object.
experience:
  - data-modeling
  - reliability
spec:
  - channels
  - messages
  - components
  - schemas
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/asyncapi/asyncapi-payload/
prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
  governance rule 'asyncapi-payload' (Asyncapi Payload). Requirement: Payloads
  must be valid against AsyncAPI Schema object. This rule is evaluated at the
  JSONPath `$.components.messageTraits[?(@.schemaFormat === void 0)].payload |
  $.components.messages[?(@.schemaFormat === void 0)].payload |
  $.channels[*][publish,subscribe][?(@property === 'message' && @.schemaFormat
  === void 0)].payload` — inspect every location it matches and correct only
  what violates the rule. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid AsyncAPI. Return only the complete corrected
  document, with no commentary."
builtin: true
ruleyaml: >
  asyncapi-payload:
    title: Asyncapi Payload
    reference: https://spotlight-rules.com/spec/rules/asyncapi/asyncapi-payload/
    description: Payloads must be valid against AsyncAPI Schema object.
    message: "{{error}}"
    severity: info
    given:
      - $.components.messageTraits[?(@.schemaFormat === void 0)].payload
      - $.components.messages[?(@.schemaFormat === void 0)].payload
      - $.channels[*][publish,subscribe][?(@property === 'message' &&
        @.schemaFormat === void 0)].payload
    then:
      function: asyncApiPayloadValidation
    tags:
      - format:asyncapi
      - spec:channels
      - spec:messages
      - spec:components
      - spec:schemas
      - experience:data-modeling
      - experience:reliability
    prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
      governance rule 'asyncapi-payload' (Asyncapi Payload). Requirement: Payloads
      must be valid against AsyncAPI Schema object. This rule is evaluated at the
      JSONPath `$.components.messageTraits[?(@.schemaFormat === void 0)].payload |
      $.components.messages[?(@.schemaFormat === void 0)].payload |
      $.channels[*][publish,subscribe][?(@property === 'message' && @.schemaFormat
      === void 0)].payload` — inspect every location it matches and correct only
      what violates the rule. Make the smallest change that satisfies the rule,
      leave all unrelated content, key order, comments, and formatting unchanged,
      and keep the document valid AsyncAPI. Return only the complete corrected
      document, with no commentary."
---
