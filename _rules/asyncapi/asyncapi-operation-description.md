---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-operation-description
title: Asyncapi Operation Description
severity: warn
given: $.channels[*][publish,subscribe]
message: ""
description: Operation "description" must be present and non-empty string.
experience:
  - documentation
spec:
  - channels
source: []
builtin: true
---
