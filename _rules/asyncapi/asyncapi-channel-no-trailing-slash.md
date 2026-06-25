---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-channel-no-trailing-slash
title: Asyncapi Channel No Trailing Slash
severity: warn
given: $.channels
message: ""
description: Channel path must not end with slash.
experience:
  - consistency
  - naming
spec:
  - channels
source: []
builtin: true
---
