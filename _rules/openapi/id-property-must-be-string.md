---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: id-property-must-be-string
title: ID Property Must Be String
severity: warn
given: $..[?(@property === "id")].type
message: ""
description: "id SHOULD use a data type of 'string'. It requires the targeted
  value to match the pattern `^string$` (evaluated at `$..[?(@property ===
  \"id\")].type`). Severity: warn."
experience:
  - data-modeling
  - consistency
spec:
  - document
source:
  - sps-commerce
builtin: false
---
