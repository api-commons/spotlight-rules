---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-array-property-require-min-items
title: Schema Array Property Require Min Items
severity: error
given: $.components.schemas.*.properties[?(@.type=="array")]
message: Schema Array Properties MUST Have Min Items
description: 'Schema properties that are of the type array should have a min
  items property defined. It requires the `minItems` field to be present and
  non-empty (evaluated at
  `$.components.schemas.*.properties[?(@.type=="array")]`). Severity: error.'
experience:
  - data-modeling
  - reliability
spec:
  - schemas
  - components
source:
  - api-evangelist
builtin: false
---
