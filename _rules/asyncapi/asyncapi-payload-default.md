---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-payload-default
title: Asyncapi Payload Default
severity: info
given: $.components.messageTraits[?(@.schemaFormat === void 0)].payload.default^
  | $.components.messages[?(@.schemaFormat === void 0)].payload.default^ |
  $.channels[*][publish,subscribe][?(@property === 'message' && @.schemaFormat
  === void 0)].payload.default^
message: "{{error}}"
description: Default must be valid against its defined schema.
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
reference: https://spotlight-rules.com/spec/rules/asyncapi/asyncapi-payload-default/
prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
  governance rule 'asyncapi-payload-default' (Asyncapi Payload Default).
  Requirement: Default must be valid against its defined schema. This rule is
  evaluated at the JSONPath `$.components.messageTraits[?(@.schemaFormat ===
  void 0)].payload.default^ | $.components.messages[?(@.schemaFormat === void
  0)].payload.default^ | $.channels[*][publish,subscribe][?(@property ===
  'message' && @.schemaFormat === void 0)].payload.default^` — inspect every
  location it matches and correct only what violates the rule. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid AsyncAPI.
  Return only the complete corrected document, with no commentary."
builtin: true
ruleyaml: >
  asyncapi-payload-default:
    title: Asyncapi Payload Default
    reference: https://spotlight-rules.com/spec/rules/asyncapi/asyncapi-payload-default/
    description: Default must be valid against its defined schema.
    message: "{{error}}"
    severity: info
    given:
      - $.components.messageTraits[?(@.schemaFormat === void 0)].payload.default^
      - $.components.messages[?(@.schemaFormat === void 0)].payload.default^
      - $.channels[*][publish,subscribe][?(@property === 'message' &&
        @.schemaFormat === void 0)].payload.default^
    then:
      function: asyncApiSchemaValidation
      functionOptions:
        type: default
    tags:
      - format:asyncapi
      - spec:channels
      - spec:messages
      - spec:components
      - spec:schemas
      - experience:data-modeling
      - experience:reliability
    prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
      governance rule 'asyncapi-payload-default' (Asyncapi Payload Default).
      Requirement: Default must be valid against its defined schema. This rule is
      evaluated at the JSONPath `$.components.messageTraits[?(@.schemaFormat ===
      void 0)].payload.default^ | $.components.messages[?(@.schemaFormat === void
      0)].payload.default^ | $.channels[*][publish,subscribe][?(@property ===
      'message' && @.schemaFormat === void 0)].payload.default^` — inspect every
      location it matches and correct only what violates the rule. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      AsyncAPI. Return only the complete corrected document, with no commentary."
---
