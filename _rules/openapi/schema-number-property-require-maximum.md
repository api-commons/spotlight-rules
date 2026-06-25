---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-number-property-require-maximum
title: Schema Number Property Require Maximum
severity: error
given: $.components.schemas.*.properties[?(@.type=="number")]
message: Schema Number Properties MUST Have Maximum
description: 'Schema properties that are of the type number should have a
  maximum property defined. It requires the `maximum` field to be defined
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
