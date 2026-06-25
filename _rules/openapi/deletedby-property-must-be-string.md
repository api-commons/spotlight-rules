---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: deletedby-property-must-be-string
title: Deletedby Property Must Be String
severity: error
given: $..[?(@property === "deletedBy")].type
message: ""
description: "deletedBy MUST use a data type of 'string'. It requires the
  targeted value to match the pattern `^string$` (evaluated at `$..[?(@property
  === \"deletedBy\")].type`). Severity: error."
experience:
  - data-modeling
  - consistency
spec:
  - document
source:
  - sps-commerce
builtin: false
---
