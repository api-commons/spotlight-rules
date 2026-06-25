---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: oas3-valid-media-example
title: Valid Media Example
severity: error
given: $..content..[?(@ && @.schema && (@.example !== void 0 || @.examples))] |
  $..headers..[?(@ && @.schema && (@.example !== void 0 || @.examples))] |
  $..parameters..[?(@ && @.schema && (@.example !== void 0 || @.examples))]
message: "{{error}}"
description: Examples must be valid against their defined schema.
experience:
  - data-modeling
  - documentation
  - reliability
spec:
  - parameters
  - headers
  - media-types
  - schemas
  - examples
source: []
builtin: true
---
