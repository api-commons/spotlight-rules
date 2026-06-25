---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: description-property-must-be-string
title: Description Property Must Be String
severity: error
given: $..[?(@property === "description")].type
message: ""
description: "description MUST use a data type of 'string'. It requires the
  targeted value to match the pattern `^string$` (evaluated at `$..[?(@property
  === \"description\")].type`). Severity: error."
experience:
  - data-modeling
  - consistency
spec:
  - document
source:
  - sps-commerce
builtin: false
---
