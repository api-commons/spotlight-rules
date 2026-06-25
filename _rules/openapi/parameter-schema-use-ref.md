---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: parameter-schema-use-ref
title: Parameter Schema Use Ref
severity: error
given: $.components.parameters.*.schema
message: Parameters MUST Use Schema Reference
description: "Parameters must always use a schema reference that utilizes
  reusable schema that are defined as part of a centralized schema components
  library. It requires the `$ref` field to be absent or empty (evaluated at
  `$.components.parameters.*.schema`). Severity: error."
experience:
  - consistency
  - data-modeling
spec:
  - parameters
  - schemas
  - components
source:
  - api-evangelist
builtin: false
---
