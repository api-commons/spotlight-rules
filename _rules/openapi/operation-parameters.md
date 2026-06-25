---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: operation-parameters
title: Operation Parameters
severity: warn
given: "#OperationObject.parameters"
message: "{{error}}"
description: Operation parameters are unique and non-repeating.
experience:
  - consistency
  - reliability
spec:
  - parameters
source: []
builtin: true
---
