---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-property-enum-upper-snake-case
title: Schema Property Enum Upper Snake Case
severity: error
given: $.components.schemas.*.properties.*.enum.*
message: Schema Property Enum MUST Be Upper Snake Case
description: "Schema property enumerators are consistent casing, keeping all
  entries upper snake case, and consistent across all APIs. It requires the
  targeted value to match the pattern `^[A-Z]+(?:_[A-Z]+)*$` (evaluated at
  `$.components.schemas.*.properties.*.enum.*`). Severity: error."
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
