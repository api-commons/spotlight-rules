---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-property-require-description
title: Schema Property Require Description
severity: error
given: $.components.schemas.*.properties[?(@.type == 'string')]
message: Schema Properties MUST Have Description
description: "Schema properties should have descriptions that provide a
  narrative of the property contains, and how it can be used. It requires the
  `description` field to be present and non-empty (evaluated at
  `$.components.schemas.*.properties[?(@.type == 'string')]`). Severity: error."
experience:
  - documentation
  - data-modeling
spec:
  - schemas
  - components
source:
  - api-evangelist
builtin: false
---
