---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-name-max-length
title: Schema Name Max Length
severity: error
given: $.components.schemas
message: Schema Names MUST Be Less Than 25 Characters
description: "Schema should have a length limit applied keeping the names of
  schema consistent across APIs. It constrains the length of the `@key` field
  and at most 25 (evaluated at `$.components.schemas`). Severity: error."
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
