---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: parameter-require-schema
title: Parameter Require Schema
severity: warn
given: $.components.parameters.*
message: Parameters MUST Have Schema
description: "Parameters must always possess a schema to help define the format
  and shape of the parameter, setting expections with consumers about what
  should be passed in. It requires the `schema` field to be present and
  non-empty (evaluated at `$.components.parameters.*`). Severity: warn."
experience:
  - data-modeling
  - documentation
spec:
  - parameters
  - components
source:
  - api-evangelist
builtin: false
---
