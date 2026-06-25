---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-description-max-length
title: Schema Description Max Length
severity: error
given: $.components.schemas.*
message: Schema Description MUST be Less Than 250 Characters
description: "Schema should have a length limit applied, restricting how long
  schema descriptions can be, helping keep them concise and consistent. It
  constrains the length of the `description` field and at most 250 (evaluated at
  `$.components.schemas.*`). Severity: error."
experience:
  - documentation
  - consistency
spec:
  - schemas
  - components
source:
  - api-evangelist
builtin: false
---
