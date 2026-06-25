---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: name-property-must-be-string
title: Name Property Must Be String
severity: error
given: $..[?(@property === "name")].type
message: ""
description: "name MUST use a data type of 'string'. It requires the targeted
  value to match the pattern `^string$` (evaluated at `$..[?(@property ===
  \"name\")].type`). Severity: error."
experience:
  - data-modeling
  - consistency
spec:
  - document
source:
  - sps-commerce
builtin: false
---
