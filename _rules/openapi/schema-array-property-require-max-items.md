---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-array-property-require-max-items
title: Schema Array Property Require Max Items
severity: error
given: $.components.schemas.*.properties[?(@.type=="array")]
message: Schema Array Properties MUST Have Max Items
description: 'Schema properties that are of the type array should have a max
  items property defined. It requires the `maxItems` field to be present and
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
