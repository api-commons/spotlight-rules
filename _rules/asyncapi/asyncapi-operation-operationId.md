---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-operation-operationId
title: Asyncapi Operation OperationId
severity: error
given: $.channels[*][publish,subscribe]
message: ""
description: Operation must have "operationId".
experience:
  - consistency
  - usability
spec:
  - channels
source: []
builtin: true
---
