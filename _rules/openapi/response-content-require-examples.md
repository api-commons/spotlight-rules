---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-content-require-examples
title: Response Content Require Examples
severity: warn
given: $.paths..responses..content.*
message: Response with content must have examples
description: "Response with content must have examples. It requires the
  `examples` field to be present and non-empty (evaluated at
  `$.paths..responses..content.*`). Severity: warn."
experience:
  - documentation
  - usability
spec:
  - paths
  - responses
  - media-types
source:
  - microcks
builtin: false
---
