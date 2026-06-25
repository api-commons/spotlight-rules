---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: modifiedby-property-must-be-string
title: Modifiedby Property Must Be String
severity: error
given: $..[?(@property === "modifiedBy")].type
message: ""
description: "modifiedBy MUST use a data type of 'string'. It requires the
  targeted value to match the pattern `^string$` (evaluated at `$..[?(@property
  === \"modifiedBy\")].type`). Severity: error."
experience:
  - data-modeling
  - consistency
spec:
  - document
source:
  - sps-commerce
builtin: false
---
