---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-tags-uniqueness
title: Asyncapi Tags Uniqueness
severity: error
given: $.tags | $.servers.*.tags | $.components.servers.*.tags |
  $.channels.*.[publish,subscribe].tags |
  $.components.channels.*.[publish,subscribe].tags |
  $.channels.*.[publish,subscribe].traits.*.tags |
  $.components.channels.*.[publish,subscribe].traits.*.tags |
  $.components.operationTraits.*.tags |
  $.channels.*.[publish,subscribe].message.tags |
  $.channels.*.[publish,subscribe].message.oneOf.*.tags |
  $.components.channels.*.[publish,subscribe].message.tags |
  $.components.channels.*.[publish,subscribe].message.oneOf.*.tags |
  $.components.messages.*.tags |
  $.channels.*.[publish,subscribe].message.traits.*.tags |
  $.channels.*.[publish,subscribe].message.oneOf.*.traits.*.tags |
  $.components.channels.*.[publish,subscribe].message.traits.*.tags |
  $.components.channels.*.[publish,subscribe].message.oneOf.*.traits.*.tags |
  $.components.messages.*.traits.*.tags | $.components.messageTraits.*.tags
message: "{{error}}"
description: Each tag must have a unique name.
experience:
  - consistency
  - discoverability
spec:
  - servers
  - channels
  - messages
  - components
source: []
builtin: true
---
