---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: request-content-require-examples
title: Request Content Require Examples
severity: warn
given: $.paths..requestBody..content.*
message: Request with content must have examples
description: "Request with content must have examples. It requires the
  `examples` field to be present and non-empty (evaluated at
  `$.paths..requestBody..content.*`). Severity: warn."
experience:
  - documentation
  - usability
spec:
  - paths
  - request-body
  - media-types
source:
  - microcks
builtin: false
---
