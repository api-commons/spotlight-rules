---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-property-names-camel-case
title: Schema Property Names Camel Case
severity: error
given: $.components.schemas.*.properties
message: Schema Property Names MUST Be camelCase.
description: "Schema property names are camel case, providing consistent casing
  across all the schema properties used by APIs. It requires the `@key` field
  not to match `^[A-Z][a-z0-9]*[A-Z0-9][a-z0-9]+[A-Za-z0-9]*$` (evaluated at
  `$.components.schemas.*.properties`). Severity: error."
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
