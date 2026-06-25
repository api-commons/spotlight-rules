---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-3-headers-schema-type-object
title: Asyncapi 3 Headers Schema Type Object
severity: error
given: $.components.messageTraits.*.headers | $.components.messages.*.headers |
  $.channels.*.messages.*.headers | $.channels.*.messages.*.traits[*].headers
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
