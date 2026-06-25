---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: ref-property-must-be-string
title: Ref Property Must Be String
severity: error
given: $..[?(@property === "ref")].type
message: ""
description: "ref MUST use a data type of 'string'. It requires the targeted
  value to match the pattern `^string$` (evaluated at `$..[?(@property ===
  \"ref\")].type`). Severity: error."
experience:
  - data-modeling
  - consistency
spec:
  - document
source:
  - sps-commerce
builtin: false
---
