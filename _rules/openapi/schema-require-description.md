---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-require-description
title: Schema Require Description
severity: error
given: $.components.schemas.*
message: Schema MUST Have a Description.
description: "Schema should have descriptions that provide a narrative of what a
  schema object is for, and how it can be used, leaving examples to demonstrate
  what can actually be expected. It requires the `description` field to be
  present and non-empty (evaluated at `$.components.schemas.*`). Severity:
  error."
experience:
  - documentation
  - data-modeling
spec:
  - schemas
  - components
source:
  - api-evangelist
builtin: false
---
