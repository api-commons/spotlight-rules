---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: parameters-require-examples
title: Parameters Require Examples
severity: error
given: $..parameters.*
message: "{{description}}; missing {{property}}"
description: 'Parameters must include examples. It requires exactly one of
  ["example","examples"] to be present (evaluated at `$..parameters.*`).
  Severity: error.'
experience:
  - documentation
  - usability
spec:
  - parameters
source:
  - digitalocean
builtin: false
---
