---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-property-names-length-limit
title: Schema Property Names Length Limit
severity: error
given: $.components.schemas.*.properties
message: Schema Properties Name Length
description: "Schema property names have a length restriction applied, keeping
  names consistent, and avoiding being too long. It constrains the length of the
  `@key` field and at most 25 (evaluated at
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
