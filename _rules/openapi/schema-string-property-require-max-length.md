---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-string-property-require-max-length
title: Schema String Property Require Max Length
severity: error
given: $.components.schemas.*.properties[?(@.type == 'string')]
message: Schema String Properties MUST Have Maximum Length
description: "Schema properties that are of the string type have the max length
  applied defining the shape of the property. It requires the `maxLength` field
  to be present and non-empty (evaluated at
  `$.components.schemas.*.properties[?(@.type == 'string')]`). Severity: error."
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
