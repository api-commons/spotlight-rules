---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-array-property-require-items
title: Schema Array Property Require Items
severity: error
given: $.components.schemas.*.properties[?(@.type=="array")]
message: Schema Array Properties MUST Have Items
description: 'Schema properties that are of the type array must have an items
  property defined. It requires the `items` field to be present and non-empty
  (evaluated at `$.components.schemas.*.properties[?(@.type=="array")]`).
  Severity: error.'
experience:
  - data-modeling
  - consistency
spec:
  - schemas
  - components
source:
  - api-evangelist
builtin: false
---
