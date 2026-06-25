---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: createdby-property-must-be-string
title: Createdby Property Must Be String
severity: error
given: $..[?(@property === "createdBy")].type
message: ""
description: "createdBy MUST use a data type of 'string'. It requires the
  targeted value to match the pattern `^string$` (evaluated at `$..[?(@property
  === \"createdBy\")].type`). Severity: error."
experience:
  - data-modeling
  - consistency
spec:
  - document
source:
  - sps-commerce
builtin: false
---
