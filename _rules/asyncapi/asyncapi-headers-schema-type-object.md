---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-headers-schema-type-object
title: Asyncapi Headers Schema Type Object
severity: error
given: $.components.messageTraits.*.headers | $.components.messages.*.headers |
  $.channels.*.[publish,subscribe].message.headers |
  $.channels.*.[publish,subscribe].message.traits[*].headers
message: Headers schema type must be "object" ({{error}}).
description: Headers schema type must be "object".
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
