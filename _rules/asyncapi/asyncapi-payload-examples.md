---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-payload-examples
title: Asyncapi Payload Examples
severity: info
given: $.components.messageTraits[?(@.schemaFormat === void
  0)].payload.examples^ | $.components.messages[?(@.schemaFormat === void
  0)].payload.examples^ | $.channels[*][publish,subscribe][?(@property ===
  'message' && @.schemaFormat === void 0)].payload.examples^
message: "{{error}}"
description: Examples must be valid against their defined schema.
experience:
  - data-modeling
  - documentation
  - reliability
spec:
  - channels
  - messages
  - components
  - schemas
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/asyncapi/asyncapi-payload-examples/
prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
  governance rule 'asyncapi-payload-examples' (Asyncapi Payload Examples).
  Requirement: Examples must be valid against their defined schema. This rule is
  evaluated at the JSONPath `$.components.messageTraits[?(@.schemaFormat ===
  void 0)].payload.examples^ | $.components.messages[?(@.schemaFormat === void
  0)].payload.examples^ | $.channels[*][publish,subscribe][?(@property ===
  'message' && @.schemaFormat === void 0)].payload.examples^` — inspect every
  location it matches and correct only what violates the rule. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid AsyncAPI.
  Return only the complete corrected document, with no commentary."
builtin: true
---
