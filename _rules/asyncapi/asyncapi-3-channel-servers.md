---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-3-channel-servers
title: Asyncapi 3 Channel Servers
severity: error
given: $.channels.*
message: ""
description: Channel servers must be defined in the "servers" object.
experience:
  - reliability
  - consistency
spec:
  - channels
source: []
builtin: true
---
