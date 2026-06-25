---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-3-channel-no-trailing-slash
title: Asyncapi 3 Channel No Trailing Slash
severity: warn
given: $.channels.*
message: ""
description: Channel address must not end with slash.
experience:
  - consistency
  - naming
spec:
  - channels
source: []
builtin: true
---
