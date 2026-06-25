---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: parameter-string-require-min-length
title: Parameter String Require Min Length
severity: warn
given: $.apis.*.properties.* | $.common.*
message: Parameter Schema Type String MinLength
description: "Parameters that are of the string schema type must have their
  minimum value set, defining the shape of parameter data passed in with a
  request. It requires the `minLength` field to be present and non-empty
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
