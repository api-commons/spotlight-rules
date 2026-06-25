---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: oas3-callbacks-in-callbacks
title: Callbacks In Callbacks
severity: warn
given: "#OperationObject.callbacks[*][*][*].callbacks"
message: Callbacks should not be defined within a callback
description: ""
experience:
  - reliability
  - consistency
spec:
  - document
source: []
builtin: true
---
