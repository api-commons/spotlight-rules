---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: parameter-integer-require-maximum
title: Parameter Integer Require Maximum
severity: warn
given: $.apis.*.properties.* | $.common.*
message: Parameter Schema Type Integer Maximum
description: "Parameters that are of the integer schema type must have their
  maximum value set, defining the shape of parameter data passed in with a
  request. It requires the `maximum` field to be present and non-empty
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
