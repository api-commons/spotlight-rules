---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: operation-success-response
title: Operation Success Response
severity: warn
given: "#OperationObject"
message: ""
description: Operation must have at least one "2xx" or "3xx" response.
experience:
  - error-handling
  - reliability
  - documentation
spec:
  - document
source: []
builtin: true
---
