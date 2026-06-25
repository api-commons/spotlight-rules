---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-message-examples
title: Asyncapi Message Examples
severity: error
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
source: []
builtin: true
---
