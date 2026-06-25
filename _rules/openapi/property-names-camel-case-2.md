---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: property-names-camel-case-2
title: Property Names Camel Case 2
severity: error
given: $..properties.*~
message: ""
description: "Property names and acronyms MUST be in camelCase. It requires the
  targeted value to match the pattern
  `^[a-z][a-z0-9]*(([A-Z]{2}|[A-Z])[a-z0-9]+)*$` (evaluated at
  `$..properties.*~`). Severity: error."
experience:
  - naming
  - consistency
spec:
  - schemas
source:
  - sps-commerce
builtin: false
---
