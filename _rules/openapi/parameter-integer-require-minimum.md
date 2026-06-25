---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: parameter-integer-require-minimum
title: Parameter Integer Require Minimum
severity: warn
given: $.apis.*.properties.* | $.common.*
message: Parameter Schema Type Integer Minimum
description: "Parameters that are of the integer schema type must have their
  minimum value set, defining the shape of parameter data passed in with a
  request. It requires the `minimum` field to be present and non-empty
  (evaluated at `$.apis.*.properties.*`, `$.common.*`). Severity: warn."
experience:
  - data-modeling
  - reliability
spec:
  - schemas
source:
  - api-evangelist
builtin: false
---
