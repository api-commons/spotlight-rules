---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-3-tags-uniqueness
title: Asyncapi 3 Tags Uniqueness
severity: error
given: $.info.tags | $.servers.*.tags | $.components.servers.*.tags |
  $.operations.*.tags | $.components.operations.*.tags |
  $.operations.*.traits.*.tags | $.components.operations.traits.*.tags |
  $.components.operationTraits.*.tags | $.channels.*.messages.*.tags |
  $.components.channels.*.messages.tags | $.components.messages.*.tags |
  $.channels.*..messages.*.traits.*.tags |
  $.components.channels.*.messages.*.traits.*.tags |
  $.components.messages.*.traits.*.tags | $.components.messageTraits.*.tags
message: "{{error}}"
description: Each tag must have a unique name.
experience:
  - consistency
  - discoverability
spec:
  - info
  - servers
  - channels
  - messages
  - components
source: []
builtin: true
---
