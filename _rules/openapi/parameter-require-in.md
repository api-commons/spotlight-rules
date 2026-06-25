---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: parameter-require-in
title: Parameter Require In
severity: warn
given: $.components.parameters.*
message: Parameters In Property MUST Be Set
description: "Providing an in property for parameters gets explicit about
  whether a parameter is in the path, query, or a header, making it clear to
  consumers where they can configure their request. It requires the `in` field
  to be present and non-empty (evaluated at `$.components.parameters.*`).
  Severity: warn."
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
