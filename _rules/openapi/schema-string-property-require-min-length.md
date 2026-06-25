---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-string-property-require-min-length
title: Schema String Property Require Min Length
severity: error
given: $.components.schemas.*.properties[?(@.type == 'string')]
message: Schema String Properties MUST Have Minimum Length
description: "Schema properties that are of the string type have the min length
  applied defining the shape of the property. It requires the `minLength` field
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
