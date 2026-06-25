---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: parameter-schema-require-type
title: Parameter Schema Require Type
severity: error
given: $.components.parameters.*.schema
message: Parameter Schema Type
description: "Parameters must always have their schema type defined, being
  precise about what type of data can be inputted and used to configure an API
  request. It requires the `type` field to be present and non-empty (evaluated
  at `$.components.parameters.*.schema`). Severity: error."
experience:
  - data-modeling
  - consistency
spec:
  - parameters
  - schemas
  - components
source:
  - api-evangelist
builtin: false
---
