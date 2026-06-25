---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-payload
title: Asyncapi Payload
severity: error
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
source: []
builtin: true
---
