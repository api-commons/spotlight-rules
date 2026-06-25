---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: optional-parameters-include-examples
title: Optional Parameters Include Examples
severity: info
given: $..parameters[?(@ && @.required != true)]
message: Optional param should have examples
description: "Optional param should have examples. It requires the `examples`
  field to be present and non-empty (evaluated at `$..parameters[?(@ &&
  @.required != true)]`). Severity: info."
experience:
  - documentation
  - usability
spec:
  - parameters
source:
  - microcks
builtin: false
---
