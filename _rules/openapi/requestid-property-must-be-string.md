---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: requestid-property-must-be-string
title: Requestid Property Must Be String
severity: error
given: $..[?(@property === "requestId")].type
message: ""
description: "requestId MUST use a data type of 'string'. It requires the
  targeted value to match the pattern `^string$` (evaluated at `$..[?(@property
  === \"requestId\")].type`). Severity: error."
experience:
  - data-modeling
  - consistency
spec:
  - document
source:
  - sps-commerce
builtin: false
---
