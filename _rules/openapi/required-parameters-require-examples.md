---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: required-parameters-require-examples
title: Required Parameters Require Examples
severity: warn
given: $..parameters[?(@ && @.required == true)]
message: Required param must have examples
description: "Required param must have examples. It requires the `examples`
  field to be present and non-empty (evaluated at `$..parameters[?(@ &&
  @.required == true)]`). Severity: warn."
experience:
  - documentation
  - usability
spec:
  - parameters
source:
  - microcks
builtin: false
---
