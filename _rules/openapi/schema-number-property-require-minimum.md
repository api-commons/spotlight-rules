---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-number-property-require-minimum
title: Schema Number Property Require Minimum
severity: error
given: $.components.schemas.*.properties[?(@.type=="number")]
message: Schema Number Properties MUST Have Minimum
description: 'Schema properties that are of the type number should have a
  minimum property defined. It requires the `minimum` field to be defined
  (evaluated at `$.components.schemas.*.properties[?(@.type=="number")]`).
  Severity: error.'
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
