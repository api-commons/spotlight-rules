---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-payload-unsupported-schemaFormat
title: Asyncapi Payload Unsupported SchemaFormat
severity: info
given: $.components.messageTraits.* | $.components.messages.* |
  $.channels[*][publish,subscribe].message
message: ""
description: Message schema validation is only supported with default
  unspecified "schemaFormat".
experience:
  - data-modeling
  - reliability
spec:
  - channels
  - messages
  - components
source: []
builtin: true
---
