---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: parameter-require-required-flag
title: Parameter Require Required Flag
severity: error
given: $.components.parameters.*
message: Parameters Required Property MUST Be Set
description: "Providrequiredg an required property for parameters gets explicit
  about whether a parameter is required the path, query, or a header, making it
  clear to consumers where they can configure their request. It requires the
  `required` field to be present and non-empty (evaluated at
  `$.components.parameters.*`). Severity: error."
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
