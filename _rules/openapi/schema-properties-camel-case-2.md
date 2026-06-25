---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-properties-camel-case-2
title: Schema Properties Camel Case 2
severity: error
given: $..properties.
message: All schema property names MUST be camel case.
description: "Ensuring that schema property names are camel case. It requires
  the `@key` field to match the pattern `^[a-z][a-zA-Z0-9]*$` (evaluated at
  `$..properties.`). Severity: error."
experience:
  - naming
  - consistency
spec:
  - schemas
source:
  - trimble
builtin: false
---
