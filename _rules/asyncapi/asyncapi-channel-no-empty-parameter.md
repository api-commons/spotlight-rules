---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-channel-no-empty-parameter
title: Asyncapi Channel No Empty Parameter
severity: warn
given: $.channels
message: ""
description: Channel path must not have empty parameter substitution pattern.
experience:
  - reliability
  - consistency
spec:
  - channels
source: []
builtin: true
---
