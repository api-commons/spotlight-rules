---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-payload-examples
title: Asyncapi Payload Examples
severity: error
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
source: []
builtin: true
---
