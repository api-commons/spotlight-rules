---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-channel-parameters
title: Asyncapi Channel Parameters
severity: error
given: $.channels.* | $.components.channels.*
message: "{{error}}"
description: Channel parameters must be defined and there must be no redundant parameters.
experience:
  - reliability
  - consistency
spec:
  - channels
  - components
source: []
builtin: true
---
