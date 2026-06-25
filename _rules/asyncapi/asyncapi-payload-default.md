---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-payload-default
title: Asyncapi Payload Default
severity: error
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
source: []
builtin: true
---
