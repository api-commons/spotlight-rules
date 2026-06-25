---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-require-name
title: Schema Require Name
severity: error
given: $.components.schemas
message: Schema Names MUST Exist
description: "Schema names, keeping the naming of them consistent across APIs,
  standardizing how consumers can use in their applications. It requires the
  `@key` field to be present and non-empty (evaluated at
  `$.components.schemas`). Severity: error."
experience:
  - naming
  - data-modeling
spec:
  - schemas
  - components
source:
  - api-evangelist
builtin: false
---
