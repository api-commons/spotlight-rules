---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: parameter-string-require-pattern
title: Parameter String Require Pattern
severity: warn
given: $.apis.*.properties.* | $.common.*
message: Parameter Schema Type String Pattern
description: "Parameters that are of the string schema type must have a pattern
  set, using a regex to define the shape of parameter data passed in with a
  request. It requires the `pattern` field to be present and non-empty
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
