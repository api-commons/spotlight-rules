---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: operation-operationId-unique
title: Operation OperationId Unique
severity: error
given: $.paths
message: ""
description: Every operation must have unique "operationId".
experience:
  - consistency
  - naming
  - reliability
spec:
  - paths
source: []
builtin: true
---
