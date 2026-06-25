---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-3-payload-unsupported-schemaFormat
title: Asyncapi 3 Payload Unsupported SchemaFormat
severity: info
given: $.components.messages.*.payload | $.channels.*.messages.*.payload
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
