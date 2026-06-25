---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-3-channel-no-empty-parameter
title: Asyncapi 3 Channel No Empty Parameter
severity: warn
given: $.channels.*
message: ""
description: Channel address must not have empty parameter substitution pattern.
experience:
  - reliability
  - consistency
spec:
  - channels
source: []
builtin: true
---
