---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-require-type
title: Schema Require Type
severity: error
given: $.components.schemas.*
message: Schema MUST Have Type Property
description: "Schema should have a type defined, being explicit about type of
  data a schema describes and can be used to validate, helping standardize the
  type of data being made available. It requires the `type` field to be present
  and non-empty (evaluated at `$.components.schemas.*`). Severity: error."
experience:
  - data-modeling
  - consistency
spec:
  - schemas
  - components
source:
  - api-evangelist
builtin: false
---
