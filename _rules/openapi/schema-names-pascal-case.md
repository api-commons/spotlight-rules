---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-names-pascal-case
title: Schema Names Pascal Case
severity: warn
given: $.components.schemas.*~
message: "{{property}} is not PascalCase: {{error}}"
description: "Schema names SHOULD be written in PascalCase. It requires the
  targeted value to match the pattern `^[A-Z][a-zA-Z0-9]*$` (evaluated at
  `$.components.schemas.*~`). Severity: warn."
experience:
  - naming
  - consistency
spec:
  - schemas
  - components
source:
  - sps-commerce
builtin: false
---
