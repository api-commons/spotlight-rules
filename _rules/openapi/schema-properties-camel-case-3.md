---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-properties-camel-case-3
title: Schema Properties Camel Case 3
severity: error
given: $.components.schemas[*].properties
message: Schema Properties MUST Use camelCase
description: "Schema property names should use camelCase. Analysis of 773 specs
  shows camelCase is the dominant convention at 65% (12958 properties), followed
  by snake_case at 33% (6661 properties). It requires the targeted value to
  match the pattern `^[a-z][a-zA-Z0-9]*$` (evaluated at
  `$.components.schemas[*].properties`). Severity: error."
experience:
  - naming
  - consistency
spec:
  - schemas
  - components
source:
  - api-evangelist
builtin: false
---
